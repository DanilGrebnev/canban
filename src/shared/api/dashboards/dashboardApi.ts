import { api } from "@/shared/api/api-instance"
import {
    IDashboardsDTO,
    type TDashboardsListItem,
} from "@/shared/types/dashboards"

const dashboardsApi = api.extend(({ prefixUrl }) => ({
    prefixUrl: prefixUrl + "/dashboards",
}))

export const dashboardApi = {
    getDashboardsList: () =>
        dashboardsApi
            .get("", { credentials: "include" })
            .json<TDashboardsListItem[]>(),

    createDashboard: (dashboardName: string) =>
        dashboardsApi
            .post("", {
                json: { dashboardName },
                credentials: "include",
            })
            .json(),
    getDashboardDetail: (dashboardId: string) => {
        return dashboardsApi
            .get(dashboardId, { credentials: "include" })
            .json<IDashboardsDTO>()
    },

    deleteDashboard: (dashboardId: string) => {
        return dashboardsApi
            .delete(dashboardId, { credentials: "include" })
            .json<IDashboardsDTO>()
    },
}
