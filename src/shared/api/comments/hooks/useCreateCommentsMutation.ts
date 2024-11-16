import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CommentsApi } from "@/shared/api/comments/commentsApi"
import { commentsApiKeys } from "@/shared/api/comments/commentsApiKeys"
import { todosApiKey } from "@/shared/api/todo/todosApiKey"

export const useCreateCommentsMutation = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: CommentsApi.createComment,
        onSuccess: (createdComment) => {
            client.invalidateQueries({
                queryKey: [commentsApiKeys.allComments],
            })
            client.invalidateQueries({
                queryKey: [todosApiKey.todoDetail, createdComment.todoId],
            })
        },
    })
}
