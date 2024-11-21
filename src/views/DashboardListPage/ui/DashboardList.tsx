"use client"

import { CreateDashboardModal, DashboardListItem } from "@/entities/dashboard"
import { useGetDashboardsListQuery } from "@/shared/api/dashboards"
import Typography from "@mui/material/Typography"
import s from "./dashboard-list.module.scss"
import Tooltip from "@mui/material/Tooltip"
import { useState } from "react"

export const DashboardList = () => {
    const { data } = useGetDashboardsListQuery()
    const [open, setOpen] = useState(false)

    if (!data?.length) {
        return (
            <>
                <div className={s.wrapper}>
                    <Tooltip
                        followCursor={true}
                        title='Создать доску'
                    >
                        <div
                            onClick={() => setOpen(true)}
                            className={s["create-dashboard"]}
                        >
                            <Typography>Создать доску</Typography>
                        </div>
                    </Tooltip>
                </div>
                <CreateDashboardModal
                    open={open}
                    onClose={() => setOpen(false)}
                />
            </>
        )
    }

    return (
        <div className={s.list}>
            <Typography>Мои доски</Typography>
            {data?.map((dashboard) => (
                <DashboardListItem
                    createdDate={dashboard.createdDate}
                    dashboardId={dashboard._id}
                    dashboardName={dashboard.dashboardName}
                    participants={dashboard.participants}
                    key={dashboard._id}
                />
            ))}
        </div>
    )
}
