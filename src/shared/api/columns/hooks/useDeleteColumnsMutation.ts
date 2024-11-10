import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ColumnsApi } from "@/shared/api/columns/columnsApi"
import { columnsApiKeys } from "@/shared/api/columns/columnsApiKeys"

export const useDeleteColumnsMutation = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: ColumnsApi.deleteColumn,
        onSuccess: (data) => {
            client.invalidateQueries({ queryKey: [columnsApiKeys.columnsList] })
        },
    })
}
