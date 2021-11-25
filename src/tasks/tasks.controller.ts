import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(): string {
    return 'Retrieven tasks...';
  }

  @Post()
  createTask(): string {
    return 'Creating task...';
  }
}
