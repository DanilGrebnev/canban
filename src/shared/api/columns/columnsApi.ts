import { api } from "@/shared/api/api-instance"
import { TColumnsItem } from "@/shared/types/columns"

const columnsApi = api.extend(({ prefixUrl }) => ({
    prefixUrl: prefixUrl + "/columns",
}))

export const ColumnsApi = {
    getColumnsList: (dashboardId: string) => {
        return columnsApi.get(dashboardId).json<TColumnsItem[]>()
    },

    createColumn: (data: {
        dashboardId: string | null
        columnName: string
    }) => {
        if (!data.dashboardId) return Promise.reject("dashboardId отсутствует")
        return columnsApi
            .post("", { json: data, credentials: "include" })
            .json()
    },

    deleteColumn: (columnId: string) => {
        return columnsApi.delete("", {
            json: { columnId },
            credentials: "include",
        })
    },
}
