import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UsersApi } from "@/shared/api/users"
import { dashboardsApiKeys } from "@/shared/api/dashboards/dashboardsApiKeys"
import { usersApiKeys } from "@/shared/api/users/usersApiKeys"

interface UseLoginMutationOptions {
    onSuccess?: (...data: any) => void
}

export const useLoginMutation = (options?: UseLoginMutationOptions) => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: UsersApi.login,
        onSuccess: (data) => {
            options?.onSuccess?.(data)
            client.invalidateQueries({
                queryKey: [dashboardsApiKeys.dashboardsList],
            })
            client.invalidateQueries({
                queryKey: [usersApiKeys.profile],
            })
        },
    })
}
