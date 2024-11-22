import { api } from "../api-instance"
import { ICommentsDTO, ICreateCommentsDTO, IGetCommentsDTO } from "./types"

const commentsApi = api.extend(({ prefixUrl }) => ({
    prefixUrl: prefixUrl + "/comments",
}))

export const CommentsApi = {
    createComment: (data: ICreateCommentsDTO) => {
        return commentsApi
            .post("", { json: data, credentials: "include" })
            .json<ICommentsDTO>()
    },
    getDetailComment: (commentId: string) => {
        return commentsApi.get("/detail/" + commentId).json()
    },
    getComments: (todoId: string) => {
        return commentsApi.get(todoId).json<IGetCommentsDTO>()
    },
    deleteComments: (commentsId: string) => {
        return commentsApi
            .delete(commentsId, { credentials: "include" })
            .json<ICommentsDTO>()
    },
}
