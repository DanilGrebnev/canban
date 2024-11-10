import { useQuery } from "@tanstack/react-query"
import { dashboardApi } from "@/shared/api/dashboards/dashboardApi"
import { dashboardsApiKeys } from "@/shared/api/dashboards/dashboardsApiKeys"

export const useGetDashboardsListQuery = () => {
    return useQuery({
        queryFn: () => dashboardApi.getDashboardsList(),
        queryKey: [dashboardsApiKeys.dashboardsList],
    })
}
