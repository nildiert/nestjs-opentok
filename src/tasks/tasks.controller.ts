import { Controller, Get, Post, Put, Delete, Body, HttpCode, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto'
import { Request, Response } from 'express'
import { Task } from "./interfaces/Task";
import { TasksService } from './tasks.service'

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {}

    @Get(':taskId')
    getTask(@Param('taskId') taskId) {
        return this.taskService.getTask(parseInt(taskId));
    }

    @Get()
    getTasks(): Task[] {
        return this.taskService.getTasks();
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): string{
        console.log(task.title, task.description, task.done)
        // console.log(task)
        return 'Creating a Task';
    }

    @Put(':id')
    updateTas(@Body() task:CreateTaskDto, @Param('id') id): string{
        console.log(task)
        console.log(id)
        return 'Updating a task'
    }


    @Delete(':id')
    deleteTask(@Param('id') id): string{
        console.log(id)
        return `Deleting a task number ${id}`
    }

}
