import { useCreateCommentsMutation } from "@/shared/api/comments"
import { useOnClickOutside } from "usehooks-ts"
import { useRef, useState } from "react"
import { useCommentsStore } from "@/shared/store/commentsStore"
import { ICreateCommentsDTO } from "@/shared/api/comments/types"

import { InputWithReply } from "@/entities/comments/ui/CommentsForm/InputWithReply"
import { useFocus } from "@/entities/comments/model/context/FocusContext"

interface CommentsFormProps {
    todoId: string
    authorName: string
    setCollapsed: (value: boolean) => void
    collapsed: boolean
}

export const CommentsForm = (props: CommentsFormProps) => {
    const { setCollapsed, authorName, todoId } = props
    const [open, setOpen] = useState(true)

    const { mutate } = useCreateCommentsMutation()

    const { focusRef } = useFocus()

    const ref = useRef<HTMLFormElement | null>(null)

    const replyInfo = useCommentsStore((s) => s.replyData)

    const onSubmit = (text: string) => {
        let reply = null
        if (replyInfo) {
            console.log("сработало", replyInfo)
            const { authorName, authorId } = replyInfo
            reply = { authorName, authorId }
        }

        const data: ICreateCommentsDTO = {
            text,
            authorName,
            todoId,
            replyInfo: reply,
        }
        console.log("data", data)
        mutate(data)
    }

    useOnClickOutside(ref, () => setCollapsed(false))

    const onClick = () => {
        setOpen(true)
    }

    const onBlur = () => {
        setOpen(false)
    }

    return (
        <InputWithReply
            focusRef={focusRef}
            open={open}
            onClick={onClick}
            onBlur={onBlur}
            replyInfo={replyInfo}
            onSubmit={({ text }) => onSubmit(text)}
        />
    )
}
