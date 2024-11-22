import { api } from "../api-instance"
import { TodoPriority, TTodoItem } from "@/shared/types/todos"
import {
    IChangeTodoDTO,
    ICreateTodoDTO,
    ITodoDTO,
} from "@/shared/api/todo/todoTypes"

const todoApi = api.extend(({ prefixUrl }) => ({
    prefixUrl: prefixUrl + "/todos",
}))

export interface TMoveTodoToAnotherColumn {
    todoId: string
    columnId: string
}

export const TodoApi = {
    getTodos: (columnId: string) => todoApi.get(columnId).json<TTodoItem[]>(),

    getTodoDetail: (todoId: string) =>
        todoApi.get(`detail/${todoId}`).json<TTodoItem>(),

    moveTodoToAnotherColumn: (args: TMoveTodoToAnotherColumn) => {
        return todoApi
            .post("move-todo", { json: args, credentials: "include" })
            .json()
    },

    changeTodo: (todoId: string, data: IChangeTodoDTO) => {
        return todoApi
            .put(todoId, {
                json: data,
                credentials: "include",
            })
            .json<ITodoDTO>()
    },

    createTodo: (data: ICreateTodoDTO) => {
        return todoApi
            .post("", { json: data, credentials: "include" })
            .json<TTodoItem>()
    },
    removeTodo: (todoId: string) => {
        return todoApi
            .delete("", { json: { todoId }, credentials: "include" })
            .json<TTodoItem>()
    },
}
