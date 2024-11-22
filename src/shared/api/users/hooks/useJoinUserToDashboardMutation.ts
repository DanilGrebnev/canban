import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UsersApi } from "@/shared/api/users"
import { usersApiKeys } from "@/shared/api/users/usersApiKeys"

export const useJoinUserToDashboardMutation = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: UsersApi.joinToDashboard,
        onSuccess: async () => {
            await client.invalidateQueries({
                queryKey: [usersApiKeys.participants],
            })
            await client.invalidateQueries({
                queryKey: [usersApiKeys.searchUser],
            })
        },
    })
}
