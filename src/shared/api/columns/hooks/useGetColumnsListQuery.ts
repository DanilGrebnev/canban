import { useQuery } from "@tanstack/react-query"
import { ColumnsApi } from "@/shared/api/columns/columnsApi"
import { columnsApiKeys } from "@/shared/api/columns/columnsApiKeys"

interface UseGetColumnsListQuery {
    dashboardId: string | null
}

export const useGetColumnsListQuery = (args: UseGetColumnsListQuery) => {
    return useQuery({
        enabled: !!args.dashboardId,
        queryFn: () => ColumnsApi.getColumnsList(args.dashboardId || ""),
        queryKey: [columnsApiKeys.columnsList, args.dashboardId],
    })
}
