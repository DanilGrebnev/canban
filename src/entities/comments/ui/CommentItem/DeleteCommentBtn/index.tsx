import { useDeleteCommentsMutations } from "@/shared/api/comments"
import { DeleteBtnWithAccept } from "@/shared/ui/DeleteBtnWithAccept"

interface DeleteCommentBtnProps {
    commentId: string
    todoId: string
}

export const DeleteCommentBtn = (props: DeleteCommentBtnProps) => {
    const { commentId, todoId } = props

    const { mutate } = useDeleteCommentsMutations()

    const handleDelete = () => {
        mutate({ todoId, commentsId: commentId })
    }

    return (
        <DeleteBtnWithAccept
            tooltip2='Удалить комментарий'
            onDelete={handleDelete}
        />
    )
}
