"use client"

import Toolbar from "@mui/material/Toolbar"
import { useMemo } from "react"
import { UserProfile } from "@/entities/user"
import { usePathname } from "next/navigation"
import { useDashboardRole } from "@/entities/user"
import { DashboardMenu } from "@/entities/dashboard"
import s from "./dashboard-header.module.scss"

export const DashboardHeader = () => {
    const pathname = usePathname()

    const { isDashboardOwner } = useDashboardRole()

    const onDashboardPage = useMemo(
        () => pathname.search(/\/dashboard\/\w+/) !== -1,
        [pathname],
    )

    const showDashboardControl = onDashboardPage && isDashboardOwner

    return (
        <header className={s.header}>
            <Toolbar>
                {onDashboardPage && (
                    <DashboardMenu
                        showDashboardControl={showDashboardControl}
                    />
                )}
                <div style={{ flexGrow: 1 }}></div>
                <UserProfile />
            </Toolbar>
        </header>
    )
}
