import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UsersApi } from "@/shared/api/users"
import { usersApiKeys } from "@/shared/api/users/usersApiKeys"

export const useDeleteUserFromDashboardMutation = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: UsersApi.deleteUserFromDashboard,
        // mutationFn: ({ userId, dashboardId }: any) =>
        //     new Promise((resolve) => setTimeout(resolve, 3000)),

        onSuccess: async () => {
            await client.invalidateQueries({
                queryKey: [usersApiKeys.participants],
            })
        },
    })
}
