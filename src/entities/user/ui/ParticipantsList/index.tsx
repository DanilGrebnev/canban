"use client"

import { useGetDashboardParticipantsQuery } from "@/shared/api/users"
import { useDashboardStore } from "@/shared/store/dashboardStore"

export const ParticipantsList = () => {
    const dashboardId = useDashboardStore((s) => s.dashboardId)
    const { data } = useGetDashboardParticipantsQuery(dashboardId)

    return (
        <div>
            <h1>ParticipantsList</h1>
        </div>
    )
}
