import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/repository/prisma.service";
import { CreateTodo, UpdateTodo } from "./todo.dto";


@Injectable()
export class TodoService {
    constructor(
        private readonly prismaService: PrismaService
    ) { }

    async createTodo(data: CreateTodo) {
        return await this.prismaService.todo.create({
            data
        })
    }
    async getTodo() {
        return await this.prismaService.todo.findMany({
            where: {
                isDeleted: false
            },
            orderBy: {
                createdAt: 'asc'
            }
        })
    }

    async DeleteTodoById(id: string) {
        return await this.prismaService.todo.update({
            where: {
                id
            },
            data: {
                isDeleted: true
            }
        })
    }

    async CompleteTodoById(id: string) {
        const todo: UpdateTodo = await this.prismaService.todo.findUnique({
            where: {
                id
            }
        })
        if (!todo) {
            throw new HttpException('To Do not Found', HttpStatus.NOT_FOUND)
        }
        return await this.prismaService.todo.update({
            where: {
                id
            },
            data: {
                isCompleted: !todo.isCompleted
            }
        })
    }
}