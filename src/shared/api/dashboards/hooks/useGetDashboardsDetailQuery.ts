import { useQuery } from "@tanstack/react-query"
import { dashboardApi } from "@/shared/api/dashboards/dashboardApi"
import { dashboardsApiKeys } from "@/shared/api/dashboards/dashboardsApiKeys"
import { useDashboardStore } from "@/shared/store/dashboardStore"

export const useGetDashboardsDetailQuery = () => {
    const dashboardsId = useDashboardStore((s) => s.dashboardId) || ""
    return useQuery({
        enabled: !!dashboardsId,
        queryFn: () => dashboardApi.getDashboardDetail(dashboardsId),
        queryKey: [dashboardsApiKeys.dashboardsDetail, dashboardsId],
    })
}
