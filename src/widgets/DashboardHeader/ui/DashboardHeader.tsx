"use client"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import { useMemo, useState } from "react"
import { UserProfile } from "@/entities/user"
import IconButton from "@mui/material/IconButton"
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined"
import Tooltip from "@mui/material/Tooltip"
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"
import { usePathname } from "next/navigation"
import { CreateColumnModal } from "@/widgets/DashboardHeader/ui/CreateColumnModal"
import { JoinUserModal } from "@/widgets/DashboardHeader/ui/JoinUserModal"
import { useGetProfileQuery } from "@/shared/api/users/hooks/useGetProfileQuery"
import { useDashboardStore } from "@/shared/store/dashboardStore"
import { IProfileDashboardListItem } from "@/shared/types/user"

export const DashboardHeader = () => {
    const [openModal, setOpenModal] = useState(false)
    const [isOpenUserModal, openUserModal] = useState(false)
    const pathname = usePathname()

    const dashboardId = useDashboardStore((s) => s.dashboardId)

    const { data: profile } = useGetProfileQuery()

    const currentDashboard = useMemo(
        () =>
            profile?.dashboardsList.find(
                (dashboard) => dashboard.dashboardId === dashboardId,
            ) as IProfileDashboardListItem,
        [dashboardId, profile],
    )

    const userRole = currentDashboard?.role

    const onDashboardPage = useMemo(
        () => pathname.search(/\/dashboard\/\w+/) !== -1,
        [pathname],
    )

    const showDashboardControl = onDashboardPage && userRole === "owner"

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    {showDashboardControl && (
                        <>
                            <Tooltip title='Создать колонку'>
                                <IconButton onClick={() => setOpenModal(true)}>
                                    <ViewWeekOutlinedIcon
                                        sx={{ fill: "white" }}
                                    />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title='Добавить участника'>
                                <IconButton onClick={() => openUserModal(true)}>
                                    <PersonAddAltIcon sx={{ fill: "white" }} />
                                </IconButton>
                            </Tooltip>
                        </>
                    )}
                    <div style={{ flexGrow: 1 }}></div>
                    <UserProfile />
                </Toolbar>
            </AppBar>
            <JoinUserModal
                open={isOpenUserModal}
                onClose={() => openUserModal(false)}
            />
            <CreateColumnModal
                open={openModal}
                onClose={() => setOpenModal(false)}
            />
        </Box>
    )
}
