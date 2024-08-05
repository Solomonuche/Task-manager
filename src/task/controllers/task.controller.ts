import { Controller, Get, Post, Body, ValidationPipe, UsePipes, Param, Put, Delete } from '@nestjs/common';
import { CreateTaskDTO } from '../dto/task.dto';
import { TaskService } from '../services/task.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Tasks')
@Controller('tasks')
export class TaskController {
    constructor(private taskService: TaskService) {}
    @Post()
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Create task' })
    @ApiResponse({ status: 201, description: 'The task has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    createNewTodo(@Body() createTaskDTO: CreateTaskDTO) {
        return this.taskService.create(createTaskDTO);
    }

    @Get()
    @ApiOperation({ summary: 'Get all tasks' })
    @ApiResponse({ status: 200, description: 'Return all tasks.' })
    allTask() {
        return this.taskService.getAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get task by ID' })
    @ApiResponse({ status: 200, description: 'Return task by ID.' })
    getTaskById(@Param('id') id: number) {
        return this.taskService.getOne(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Edit task by ID' })
    @ApiResponse({ status: 200, description: 'Return task by ID.' })
    updateTaskById(@Param('id') id: number, @Body() obj: CreateTaskDTO) {
        return this.taskService.update(id, obj);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete task by ID' })
    @ApiResponse({ status: 200, description: 'Delete task by ID.' })
    deleteTaskById(@Param('id') id: number) {
        return this.taskService.deleteTaskById(id);
    }
}
