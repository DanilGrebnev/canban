"use client"

import { useEffect } from "react"
import { TChildren } from "@/shared/types/Children"
import { useDashboardStore } from "@/shared/store/dashboardStore"

/* Устанавливает dashboardId в хранилище */
export const SetDashboardIdInStoreProvider = ({
    dashboardId,
    children,
}: {
    dashboardId: string | null
} & TChildren) => {
    const setDashboardId = useDashboardStore((s) => s.setDashboardId)

    useEffect(() => {
        console.log({ dashboardId })
        if (!dashboardId) return
        setDashboardId(dashboardId)
    }, [dashboardId])

    return children
}
