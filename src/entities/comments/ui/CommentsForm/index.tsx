import { CustomIconButton } from "@/shared/ui/CustomIconButton"
import { CustomTextField, AddCommentBox } from "./MUICustomComponent"
import SendIcon from "@mui/icons-material/Send"
import { useCreateCommentsMutation } from "@/shared/api/comments"
import { useForm } from "react-hook-form"
import { useOnClickOutside } from "usehooks-ts"
import { useEffect, useRef, useState } from "react"
import { useCommentsStore } from "@/shared/store/commentsStore"
import { ICreateCommentsDTO } from "@/shared/api/comments/types"
import s from "./comments-form.module.scss"
import { ReplyInfo } from "@/entities/comments/ui/CommentsForm/ReplyInfo"
import { cn } from "@/shared/lib/clsx"

interface CommentsFormProps {
    replyData?: {
        author: string
        text: string
    }
    todoId: string
    authorName: string
    setCollapsed: (value: boolean) => void
    collapsed: boolean
}

export const CommentsForm = (props: CommentsFormProps) => {
    const { collapsed, setCollapsed, authorName, todoId } = props

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{
        text: string
    }>()

    const { mutate } = useCreateCommentsMutation()

    const ref = useRef<HTMLFormElement | null>(null)

    const setReplyData = useCommentsStore((s) => s.setReplyData)
    const replyInfo = useCommentsStore((s) => s.replyData)

    const onSubmit = handleSubmit(({ text }) => {
        let reply = null
        if (replyInfo) {
            const { replyText, ...replyData } = replyInfo
            reply = replyData
        }

        const data: ICreateCommentsDTO = {
            text,
            authorName,
            todoId,
            replyInfo: reply,
        }
        mutate(data)
    })

    useOnClickOutside(ref, () => setCollapsed(false))

    useEffect(() => {
        return () => setReplyData(null)
    }, [])

    useEffect(() => {
        if (replyInfo) {
            ref.current?.focus()
        }
    }, [setReplyData])

    return (
        <form
            ref={ref}
            className={cn(s.form, { [s.open]: collapsed })}
            onClick={() => setCollapsed(true)}
            onSubmit={onSubmit}
        >
            {replyInfo && (
                <ReplyInfo
                    onClick={() => setReplyData(null)}
                    authorName={replyInfo.authorName}
                    replyText={replyInfo.replyText}
                />
            )}
            <CustomTextField
                {...register("text")}
                multiline
                placeholder='Написать комментарий...'
            />

            <div className={s["send-button"]}>
                <CustomIconButton
                    centerRipple={false}
                    color='info'
                    type='submit'
                >
                    <SendIcon />
                </CustomIconButton>
            </div>
        </form>
    )
}
