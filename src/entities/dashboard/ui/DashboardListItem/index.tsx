"use client"

import s from "./dashboard-listItem.module.scss"
import { Card } from "@/shared/ui/Card"
import { useRouter } from "next/navigation"
import { routes } from "@/shared/routes"
import { format } from "@formkit/tempo"

interface DashboardListItemProps {
    dashboardName: string
    participants: string[]
    dashboardId: string
    createdDate: Date
}

export const DashboardListItem = (props: DashboardListItemProps) => {
    const { dashboardName, createdDate, participants, dashboardId } = props

    const router = useRouter()

    return (
        <Card
            variant='outlined'
            className={s["dashboards-item"]}
            onClick={() => router.push(routes.dashboard(dashboardId))}
        >
            <div>{dashboardName}</div>
            <div>
                Создана: {format(createdDate, { date: "full", time: "short" })}
            </div>
            <div>Участников: {participants.length}</div>
        </Card>
    )
}
