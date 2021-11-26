import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Task Sample 1',
      description: 'only for sample purpose',
      done: true,
    },
    {
      id: 2,
      title: 'Task Sample 2',
      description: 'only for sample purpose',
      done: true,
    },
    {
      id: 3,
      title: 'Task Sample 3',
      description: 'only for sample purpose',
      done: true,
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task {
    return this.tasks.find((task) => task.id === id);
  }
}
