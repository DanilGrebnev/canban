export interface ICreateCommentsDTO {
    todoId: string
    authorName: string
    text: string
    replyInfo: {
        authorName: string
        authorId: string
    } | null
}

export interface ICommentsDTO {
    _id: string
    todoId: string
    authorName: string
    authorId: string
    text: string
    replyInfo: {
        authorName: string
        authorId: string
        date: Date
    }
    createdDate: Date
}

export type IGetCommentsDTO = ICommentsDTO[]

export interface IChangeCommentsDTO {
    text: string
}
