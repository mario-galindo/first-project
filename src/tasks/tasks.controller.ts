import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(): string {
    return 'Retrieven tasks...';
  }

  @Post()
  createTask(@Body() task): string {
    console.log(task);
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
