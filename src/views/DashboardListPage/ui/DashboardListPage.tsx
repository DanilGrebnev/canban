"use client"

import s from "./dashboard-list.module.scss"
import { DashboardListItem } from "@/entities/dashboard"
import { useEffect } from "react"

export const DashboardListPage = () => {
    const post = async () => {
        await fetch("http://localhost:3001/dashboards", {
            method: "post",
            body: JSON.stringify({
                id: "124123",
                dashboardId: "123123",
                dashboardName: "CustomName",
            }),
        })
    }

    return (
        <div className={s.list}>
            {/*<button onClick={post}>send</button>*/}
            <DashboardListItem />
        </div>
    )
}
