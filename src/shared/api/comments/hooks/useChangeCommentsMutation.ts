import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CommentsApi } from "@/shared/api/comments/commentsApi"
import { commentsApiKeys } from "@/shared/api/comments/commentsApiKeys"

export const useChangeCommentsMutation = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: (data: {
            todoId: string
            commentsId: string
            commentText: { text: string }
        }) => CommentsApi.changeComments(data.commentsId, data.commentText),
        onSuccess: (_, { todoId }) => {
            client.invalidateQueries({
                queryKey: [commentsApiKeys.allComments, todoId],
            })
        },
    })
}
