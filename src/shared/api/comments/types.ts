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
    text: string
    authorName: string
    replyTo: null
    createdDate: Date
    authorId: string
}

export type IGetCommentsDTO = ICommentsDTO[]

export interface IChangeCommentsDTO {
    text: string
}
