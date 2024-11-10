export interface TTodoItem {
    _id: string
    todo: string
    description: string
    columnId: string
    creationDate: string
    author: string
    history: TTodoHistory[] | []
}

interface TTodoHistory {
    authorName: string
    changeDate: string
    authorId: string
}
