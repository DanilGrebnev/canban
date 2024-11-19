import { dashboardApi } from "../dashboardApi"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { dashboardsApiKeys } from "@/shared/api/dashboards/dashboardsApiKeys"
import { usersApiKeys } from "@/shared/api/users/usersApiKeys"

export const useCreateDashboardMutation = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: dashboardApi.createDashboard,
        onSuccess: () => {
            client.invalidateQueries({
                queryKey: [dashboardsApiKeys.dashboardsList],
            })
            client.invalidateQueries({ queryKey: [usersApiKeys.profile] })
        },
    })
}
