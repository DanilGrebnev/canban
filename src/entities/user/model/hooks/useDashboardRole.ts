import { useGetProfileQuery } from "@/shared/api/users"
import { useDashboardStore } from "@/shared/store/dashboardStore"
import { useMemo } from "react"
import { IProfileDashboardListItem } from "@/shared/types/user"

/* Возвращает роль пользователя в доске, а так же
является ли он её владельцем */
export const useDashboardRole = () => {
    const { data: profile, isPending } = useGetProfileQuery()
    const dashboardId = useDashboardStore((s) => s.dashboardId)

    const currentDashboard = useMemo(
        () =>
            profile?.dashboardsList.find(
                (dashboard) => dashboard.dashboardId === dashboardId,
            ) as IProfileDashboardListItem,
        [dashboardId, profile],
    )

    const isDashboardOwner = currentDashboard?.role === "owner"
    const userRole = currentDashboard?.role
    return { isDashboardOwner, userRole, isPending, profileId: profile?._id }
}
