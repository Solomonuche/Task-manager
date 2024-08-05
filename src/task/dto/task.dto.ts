import { IsNotEmpty, MinLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDTO {
    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty({ example: 'Task Title' })
    task: string;
}

export class TaskResponse {
    task: string;
    created_at: string;
    updated_at: string;
}