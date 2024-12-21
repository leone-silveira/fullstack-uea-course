import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodo } from "./todo.dto";

@Controller('todo')
export class todoController {
    constructor(private readonly todoService: TodoService) { }

    @Get()
    listAll() {
        return this.todoService.getTodo();
    }
    @Post()
    createTask(@Body() data: CreateTodo) {
        return this.todoService.createTodo(data)
    }
    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        return this.todoService.DeleteTodoById(id)
    }
    @Patch(':id')
    completeTask(@Param('id') id: string) {
        return this.todoService.CompleteTodoById(id)
    }
}