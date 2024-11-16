import { useGetCommentsQuery } from "@/shared/api/comments"
import { format } from "@formkit/tempo"
import { CommentItem } from "../CommentItem"
import { Collapse } from "@mui/material"
import { CommentsForm } from "@/entities/comments"
import { useGetProfileQuery } from "@/shared/api/users"
import { useEffect } from "react"

interface CommentsListProps {
    todoId: string
    open: boolean
}

export const CommentsList = (props: CommentsListProps) => {
    const { todoId, open } = props
    const { data: comments } = useGetCommentsQuery(todoId)
    const { data: profile } = useGetProfileQuery()

    return (
        <Collapse in={open}>
            {comments?.map(
                ({
                    _id,
                    authorName,
                    createdDate,
                    replyTo,
                    text,
                    todoId,
                    authorId,
                }) => {
                    return (
                        <CommentItem
                            key={_id}
                            text={text}
                            date={{
                                datePublished: format(createdDate, "short"),
                                timePublished: format(createdDate, {
                                    time: "short",
                                }),
                            }}
                            author={{
                                name: authorName,
                                isOwner: profile?._id === authorId,
                            }}
                        />
                    )
                },
            )}
        </Collapse>
    )
}
