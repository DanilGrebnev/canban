"use client"
import { cn } from "@/shared/lib/clsx"
import s from "./dashboard-listItem.module.scss"
import Button from "@mui/material/Button"
import { Card } from "@/shared/ui/Card"
import { useRouter } from "next/navigation"
import { routes } from "@/shared/routes"

export const DashboardListItem = () => {
    const router = useRouter()

    return (
        <Card
            variant='outlined'
            className={cn(s.table, s["table-item"])}
        >
            <div>Проект 1</div>
            <div>Участников: 20</div>
            <Button
                color='success'
                onClick={() => router.push(routes.dashboard("123"))}
                className={s["join-btn"]}
                variant='contained'
            >
                Присоедениться
            </Button>
        </Card>
    )
}
