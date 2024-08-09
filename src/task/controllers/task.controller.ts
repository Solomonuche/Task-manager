import { Controller, Get, Post, Body, ValidationPipe, UsePipes, Param, Put, Delete, Req } from '@nestjs/common';
import { CreateTaskDTO } from '../dto/task.dto';
import { TaskService } from '../services/task.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags('Tasks')
@ApiBearerAuth()
@Controller('tasks')
export class TaskController {
    constructor(private taskService: TaskService) {}
    @Post()
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Create task' })
    @ApiResponse({ status: 201, description: 'The task has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    createNewTodo(
        @Body() createTaskDTO: CreateTaskDTO,
        @Req() req: Request,
    ) {
        return this.taskService.create(createTaskDTO, req);
    }

    @Get()
    @ApiOperation({ summary: 'Get all tasks' })
    @ApiResponse({ status: 200, description: 'Return all tasks.' })
    allTask(@Req() req: Request) {
        return this.taskService.getAll(req);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get task by ID' })
    @ApiResponse({ status: 200, description: 'Return task by ID.' })
    getTaskById(@Param('id') id: string, @Req() req: Request) {
        return this.taskService.getOne(id, req);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Edit task by ID' })
    @ApiResponse({ status: 200, description: 'Return task by ID.' })
    updateTaskById(
        @Param('id') id: string, 
        @Body() obj: CreateTaskDTO,
        @Req() req: Request
    ) {
        return this.taskService.update(id, obj, req);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete task by ID' })
    @ApiResponse({ status: 200, description: 'Delete task by ID.' })
    deleteTaskById(@Param('id') id: string, @Req() req: Request) {
        return this.taskService.deleteTaskById(id, req);
    }
}
