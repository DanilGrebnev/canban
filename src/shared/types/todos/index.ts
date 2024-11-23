import { ICreateTodoDTO } from "@/shared/api/todo"

export interface TTodoItem {
    _id: string
    todo: string
    description: string
    commentsAmount: number
    columnId: string
    creationDate: string
    priority: TodoPriority
    author: string
    history: TTodoHistory[] | []
}

export type TodoPriority = "low" | "middle" | "high"

export type ITodoForm = Omit<ICreateTodoDTO, "columnId">

interface TTodoHistory {
    authorName: string
    changeDate: string
    authorId: string
}
