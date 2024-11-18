import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CommentsApi } from "../commentsApi"
import { commentsApiKeys } from "@/shared/api/comments/commentsApiKeys"

export const useDeleteCommentsMutations = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: (data: { todoId: string; commentsId: string }) =>
            CommentsApi.deleteComments(data.commentsId),
        onSuccess: (_, { todoId }) => {
            client.invalidateQueries({
                queryKey: [commentsApiKeys.allComments, todoId],
            })
        },
    })
}
