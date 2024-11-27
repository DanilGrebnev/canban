import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

export type IReplyData = {
    authorName: string
    authorId: string
    replyText: string
}

type CommentsDetail = {
    text: string
    todoId: string
    commentId: string
}

type CommentsStore = {
    replyData: IReplyData | null
    commentsDetail: CommentsDetail | null
    setReplyData: (replyData: IReplyData | null) => void
    setCommentsDetail: (commentsDetail: CommentsDetail | null) => void
}

export const useCommentsStore = create<CommentsStore>()(
    immer((set) => ({
        replyData: null,
        commentsDetail: null,
        setReplyData: (replyData) => {
            set((state: CommentsStore) => {
                state.replyData = replyData
            })
        },
        setCommentsDetail: (commentsDetail) => {
            set((state: CommentsStore) => {
                state.commentsDetail = commentsDetail
            })
        },
    })),
)

export const useSetCommentsDetailSelector = () =>
    useCommentsStore((s) => s.setCommentsDetail)
export const useSetReplyData = () => useCommentsStore((s) => s.setReplyData)
export const useGetCommentsDetailSelector = () =>
    useCommentsStore((s) => s.commentsDetail)
