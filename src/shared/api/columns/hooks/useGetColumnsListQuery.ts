import { useQuery } from "@tanstack/react-query"
import { ColumnsApi } from "@/shared/api/columns/columnsApi"
import { columnsApiKeys } from "@/shared/api/columns/columnsApiKeys"

export const useGetColumnsListQuery = (dashboardId: string) => {
    return useQuery({
        enabled: !!dashboardId,
        queryFn: () => ColumnsApi.getColumnsList(dashboardId),
        queryKey: [columnsApiKeys.columnsList, dashboardId],
    })
}
