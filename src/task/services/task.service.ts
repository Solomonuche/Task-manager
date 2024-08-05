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

    create(createTaskDTO: CreateTaskDTO) {
        const task = this.repo.create(createTaskDTO);
        return this.repo.save(task);
    }

    getAll() {
        return this.repo.find()
    }

    async getOne(id: number) {
        const task = this.repo.findOneBy({id});
        if (!task) {
            throw new NotFoundException(`Task with ID ${id} not found`)
        }
        return task;
    }

    async update(id: number, newTitle: CreateTaskDTO) {
        let obj = await this.repo.findOneBy({id});
        if (!obj) {
            throw new NotFoundException(`Task with ID ${id} not found`)
        }

        obj.task = newTitle.task;
        await this.repo.save(obj);
        return obj;
    }

    async deleteTaskById(id: number) {
        await this.repo.delete(id);
        return `Task with ID ${id} deleted successfully`;
    }
}
