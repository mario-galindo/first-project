import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(): string {
    return 'Retrieven tasks...';
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    console.log(task.title);
    return 'Creating task...';
  }

  @Put()
  updateTask(): string {
    return 'Updating task...';
  }

  @Delete()
  deleteTask(): string {
    return 'deleting a task...';
  }
}
