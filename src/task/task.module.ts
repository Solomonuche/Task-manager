import { Module } from '@nestjs/common';
import { TaskController } from './controllers/task.controller';
import { TaskService } from './services/task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
