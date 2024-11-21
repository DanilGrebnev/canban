import { useMutation, useQueryClient } from "@tanstack/react-query"
import { dashboardApi } from "@/shared/api/dashboards/dashboardApi"
import { dashboardsApiKeys } from "@/shared/api/dashboards/dashboardsApiKeys"
import { useRouter } from "next/navigation"
import { routes } from "@/shared/routes"

export const useDeleteDashboardMutation = () => {
    const client = useQueryClient()
    const router = useRouter()

    return useMutation({
        mutationFn: dashboardApi.deleteDashboard,
        onSuccess: () => {
            router.replace(routes.dashboardList)
            client.invalidateQueries({
                queryKey: [dashboardsApiKeys.dashboardsList],
            })
        },
    })
}
