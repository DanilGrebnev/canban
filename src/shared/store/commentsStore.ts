import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

type IReplyData = {
    authorName: string
    authorId: string
    replyText: string
}

type CommentsStore = {
    replyData: IReplyData | null
    setReplyData: (replyData: IReplyData | null) => void
}

export const useCommentsStore = create<CommentsStore>()(
    immer(
        (set) =>
            ({
                replyData: null,
                setReplyData: (replyData: IReplyData | null) => {
                    set((state) => {
                        state.replyData = replyData
                    })
                },
            }) as CommentsStore,
    ),
)
