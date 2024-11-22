import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { ICommentsDTO } from "@/shared/api/comments"

type IReplyData = {
    authorName: string
    authorId: string
    replyText: string
}

type CommentsStore = {
    replyData: IReplyData | null
    commentsDetail: ICommentsDTO | null
    setReplyData: (replyData: IReplyData | null) => void
    setCommentsDetail: (commentsDetail: ICommentsDTO | null) => void
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

export const useSetCommentsDetail = () =>
    useCommentsStore((s) => s.setCommentsDetail)

export const useSetReplyData = () => useCommentsStore((s) => s.setReplyData)

export const useGetCommentsDetail = () =>
    useCommentsStore((s) => s.commentsDetail)
