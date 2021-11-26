import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Request, Response } from 'express';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(): { hello: string } {
    return { hello: 'world' };
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    console.log(task.title);
    return 'Creating task...';
  }

  @Put(':id')
  updateTask(@Body() taskToUpdate: CreateTaskDto, @Param('id') id): string {
    console.log(taskToUpdate);
    console.log(id);
    return 'Updating task...';
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    return `deleting task number ${id}`;
  }
}
