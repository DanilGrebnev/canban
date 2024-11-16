import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

type IReplyData = {
    authorName: string
    authorId: string
}

type CommentsState = {
    replyData: IReplyData
}

type CommentsActions = {
    setReplyData: (replyData: IReplyData) => void
}

export const useCommentsStore = create<CommentsState & CommentsActions>()(
    immer((set) => ({
        replyData: { authorId: "", authorName: "" },

        setReplyData: (replyData) => {
            set((state) => {
                state.replyData = replyData
            })
        },
    })),
)
