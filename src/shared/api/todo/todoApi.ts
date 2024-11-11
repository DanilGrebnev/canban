import { api } from "../api-instance"
import { TodoPriority, TTodoItem } from "@/shared/types/todos"

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

    createTodo: (data: {
        todo: string
        description: string
        columnId: string
        priority: TodoPriority
    }) => {
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
