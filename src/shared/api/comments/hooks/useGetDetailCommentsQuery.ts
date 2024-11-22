import { useQuery } from "@tanstack/react-query"
import { CommentsApi } from "@/shared/api/comments/commentsApi"
import { commentsApiKeys } from "@/shared/api/comments/commentsApiKeys"

interface GetDetailCommentsQueryProps {
    enabled?: boolean
    commentsId: string
}

export const useGetDetailCommentsQuery = (
    args: GetDetailCommentsQueryProps,
) => {
    const { enabled, commentsId } = args
    return useQuery({
        queryFn: () => CommentsApi.getDetailComment(commentsId),
        queryKey: [commentsApiKeys.detailComments, commentsId],
        enabled,
    })
}
