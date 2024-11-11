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
import RecentActorsOutlinedIcon from "@mui/icons-material/RecentActorsOutlined"
import { ParticipantsModal } from "@/widgets/DashboardHeader/ui/ParticipantsModal"
import { useDashboardRole } from "@/entities/user"

export const DashboardHeader = () => {
    const [openCreateColumnModal, setCreateOpenModal] = useState(false)
    const [isOpenUserModal, openUserModal] = useState(false)
    const [openParticipantsModal, setOpenParticipantsModal] = useState(false)

    const pathname = usePathname()

    const { isDashboardOwner } = useDashboardRole()

    const onDashboardPage = useMemo(
        () => pathname.search(/\/dashboard\/\w+/) !== -1,
        [pathname],
    )

    const showDashboardControl = onDashboardPage && isDashboardOwner

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    {showDashboardControl && (
                        <>
                            <Tooltip title='Создать колонку'>
                                <IconButton
                                    onClick={() => setCreateOpenModal(true)}
                                >
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
                    {onDashboardPage && (
                        <Tooltip title='Посмотреть участников'>
                            <IconButton
                                onClick={() => {
                                    setOpenParticipantsModal(true)
                                }}
                            >
                                <RecentActorsOutlinedIcon
                                    sx={{ fill: "white" }}
                                />
                            </IconButton>
                        </Tooltip>
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
                open={openCreateColumnModal}
                onClose={() => setCreateOpenModal(false)}
            />
            <ParticipantsModal
                open={openParticipantsModal}
                onClose={() => setOpenParticipantsModal(false)}
            />
        </Box>
    )
}
