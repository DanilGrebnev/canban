"use client"

import s from "./dashboard-listItem.module.scss"
import { Card } from "@/shared/ui/Card"
import { useRouter } from "next/navigation"
import { routes } from "@/shared/routes"

interface DashboardListItemProps {
    dashboardName: string
    participants: string[]
    dashboardId: string
}

export const DashboardListItem = (props: DashboardListItemProps) => {
    const { dashboardName, participants, dashboardId } = props

    const router = useRouter()

    return (
        <Card
            variant='outlined'
            className={s["dashboards-item"]}
            onClick={() => router.push(routes.dashboard(dashboardId))}
        >
            <div>{dashboardName}</div>
            <div>Участников: {participants.length}</div>
        </Card>
    )
}
