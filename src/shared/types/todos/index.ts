export interface TTodoItem {
    _id: string
    todo: string
    description: string
    columnId: string
    creationDate: string
    priority: TodoPriority
    author: string
    history: TTodoHistory[] | []
}

export type TodoPriority = "low" | "middle" | "high"

interface TTodoHistory {
    authorName: string
    changeDate: string
    authorId: string
}
