"use client"

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
import { DeleteDashboardBtn } from "@/entities/dashboard"
import s from "./dashboard-header.module.scss"

export const DashboardHeader = () => {
    const [openCreateColumnModal, setCreateOpenModal] = useState(false)
    const [isOpenUserModal, openUserModal] = useState(false)
    const [openParticipantsModal, setOpenParticipantsModal] = useState(false)

    const pathname = usePathname()
    const { isDashboardOwner, userRole } = useDashboardRole()

    const onDashboardPage = useMemo(
        () => pathname.search(/\/dashboard\/\w+/) !== -1,
        [pathname],
    )

    const showDashboardControl = onDashboardPage && isDashboardOwner

    return (
        <>
            <header className={s.header}>
                <Toolbar>
                    {showDashboardControl && (
                        <>
                            <Tooltip title='Создать колонку'>
                                <IconButton
                                    onClick={() => setCreateOpenModal(true)}
                                >
                                    <ViewWeekOutlinedIcon className={s.icons} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title='Добавить участника'>
                                <IconButton onClick={() => openUserModal(true)}>
                                    <PersonAddAltIcon className={s.icons} />
                                </IconButton>
                            </Tooltip>
                            <DeleteDashboardBtn />
                        </>
                    )}
                    {onDashboardPage && (
                        <Tooltip title='Посмотреть участников'>
                            <IconButton
                                onClick={() => {
                                    setOpenParticipantsModal(true)
                                }}
                            >
                                <RecentActorsOutlinedIcon className={s.icons} />
                            </IconButton>
                        </Tooltip>
                    )}
                    <div style={{ flexGrow: 1 }}></div>
                    <UserProfile />
                </Toolbar>
            </header>
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
        </>
    )
}
