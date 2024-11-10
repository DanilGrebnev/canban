import { dashboardApi } from "../dashboardApi"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { dashboardsApiKeys } from "@/shared/api/dashboards/dashboardsApiKeys"

export const useCreateDashboardMutation = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: dashboardApi.createDashboard,
        onSuccess: () => {
            client.invalidateQueries({
                queryKey: [dashboardsApiKeys.dashboardsList],
            })
        },
    })
}
