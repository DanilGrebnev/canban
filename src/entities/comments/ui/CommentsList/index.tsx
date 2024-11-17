import { useGetCommentsQuery } from "@/shared/api/comments"
import { CommentItem } from "../CommentItem"
import { Collapse } from "@mui/material"
import { useGetProfileQuery } from "@/shared/api/users"

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
            <ul>
                {comments?.map((comment) => {
                    return (
                        <CommentItem
                            owner={profile?._id === comment.authorId}
                            key={comment._id}
                            {...comment}
                        />
                    )
                })}
            </ul>
        </Collapse>
    )
}
