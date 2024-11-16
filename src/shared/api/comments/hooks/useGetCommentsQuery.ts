import { useQuery } from "@tanstack/react-query"
import { commentsApiKeys } from "@/shared/api/comments/commentsApiKeys"
import { CommentsApi } from "@/shared/api/comments/commentsApi"

export const useGetCommentsQuery = (todoId: string) => {
    return useQuery({
        queryFn: () => CommentsApi.getComments(todoId),
        queryKey: [commentsApiKeys.allComments, todoId],
    })
}
