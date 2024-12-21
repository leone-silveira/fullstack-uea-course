import { Module } from "@nestjs/common";
import { todoController } from "./todo.controller";
import { TodoService } from "./todo.service";

@Module({
    imports: [],
    controllers: [todoController],
    providers: [TodoService],
    exports: [],
  
  })
  export class TodoModule {}
  