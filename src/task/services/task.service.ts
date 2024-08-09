import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../entities/task.entity';
import { CreateTaskDTO, TaskResponse } from '../dto/task.dto';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Todo)
        private repo: Repository<Todo>
    ) {}

    create(createTaskDTO: CreateTaskDTO, req: any) {
        const task = this.repo.create(createTaskDTO);
        task.user = req.user.sub;
        return this.repo.save(task);
    }

    getAll(req: any) {
        return this.repo.find({
            where: {
                user: { id: req.user.sub }
            }
        })
    }

    async getOne(id: string, req: any) {
        const task = await this.repo.findOneBy(
            {
                id,
                user: { id: req.user.sub },                
            }
        );
        if (!task) {
            throw new NotFoundException(`Task with ID ${id} not found`)
        }
        return task;
    }

    async update(id: string, newTitle: CreateTaskDTO, req: any) {
        let obj = await this.repo.findOneBy(
            {
                id,
                user: { id: req.user.sub },
            }
        );
        if (!obj) {
            throw new NotFoundException(`Task with ID ${id} not found`)
        }

        obj.task = newTitle.task;
        await this.repo.save(obj);
        return obj;
    }

    async deleteTaskById(id: string, req: any) {
        await this.repo.delete(
            {
                id,
                user: { id: req.user.sub },
            }
        );
        return `Task with ID ${id} deleted successfully`;
    }
}
