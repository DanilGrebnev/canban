"use client"

import { DashboardListItem } from "@/entities/dashboard"
import { useGetDashboardsListQuery } from "@/shared/api/dashboards"

export const DashboardList = () => {
    const { data } = useGetDashboardsListQuery()

    return (
        <>
            {data?.map((dashboard) => (
                <DashboardListItem
                    dashboardId={dashboard._id}
                    dashboardName={dashboard.dashboardName}
                    participants={dashboard.participants}
                    key={dashboard._id}
                />
            ))}
        </>
    )
}
