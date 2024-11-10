import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ColumnsApi } from "@/shared/api/columns/columnsApi"
import { columnsApiKeys } from "@/shared/api/columns/columnsApiKeys"

export const useCreateColumnMutation = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: ColumnsApi.createColumn,
        onSuccess: () => {
            client.invalidateQueries({ queryKey: [columnsApiKeys.columnsList] })
        },
    })
}
