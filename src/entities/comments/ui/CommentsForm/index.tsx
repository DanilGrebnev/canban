import { useCreateCommentsMutation } from "@/shared/api/comments"
import { useOnClickOutside } from "usehooks-ts"
import { useRef, useState } from "react"
import {
    useCommentsStore,
} from "@/shared/store/commentsStore"
import { ICreateCommentsDTO } from "@/shared/api/comments/types"
import { InputWithReply } from "./InputWithReply"

interface CommentsFormProps {
    todoId: string
    authorName: string
    setCollapsed: (value: boolean) => void
    collapsed: boolean
}

export const CommentsForm = (props: CommentsFormProps) => {
    const { setCollapsed, authorName, todoId } = props
    const [open, setOpen] = useState(false)

    const { mutate } = useCreateCommentsMutation()
    const ref = useRef<HTMLDivElement | null>(null)
    const replyInfo = useCommentsStore((s) => s.replyData);

    // const commentsDetail = useGetCommentsDetailSelector()

    const onSubmit = (text: string) => {
        let reply = null
        if (replyInfo) {
            const { authorName, authorId } = replyInfo
            reply = { authorName, authorId }
        }

        const data: ICreateCommentsDTO = {
            text,
            authorName,
            todoId,
            replyInfo: reply,
        };

        mutate(data)
    }
    const onClick = () => {
        setOpen(true)
    }

    useOnClickOutside(ref, () => {
        setCollapsed(false)
        setOpen(false)
    })

    return (
        <InputWithReply
            ref={ref}
            // initialData={{ text: commentsDetail?.text || "" }}
            open={open}
            onClick={onClick}
            replyInfo={replyInfo}
            onSubmit={({ text }) => onSubmit(text)}
        />
    )
}
