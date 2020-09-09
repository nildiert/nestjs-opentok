import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task'

@Injectable()
export class TasksService {

    tasks: Task[] = [
        {
            id: 1,
            title: 'Testing',
            description: 'testing description',
            done: true
        },
        {
            id: 2,
            title: 'Testing',
            description: 'testing description',
            done: true
        },
        {
            id: 3,
            title: 'Testing',
            description: 'testing description',
            done: true
        }
    ]

    getTasks(): Task[] {
        return this.tasks;
    }

    getTask(id: number): Task {
        return this.tasks.find(task => task.id === id);
    }
}
