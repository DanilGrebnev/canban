export interface ITodoDTO {
    todo: string
    description: string
    columnId: string
    creationDate: Date
    priority: TodoPriority
    author: string
    commentsAmount: number
    history: TodoHistory[]
}

type TodoHistory = {
    authorName: string
    changeDate: Date
    authorId: string
}

export type TodoPriority = "low" | "middle" | "high"

export interface ICreateTodoDTO {
    todo: string
    description: string
    columnId: string
    priority?: TodoPriority
}

export type IChangeTodoDTO = Omit<ICreateTodoDTO, "columnId">
