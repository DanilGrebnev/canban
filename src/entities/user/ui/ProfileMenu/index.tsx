"use client"

import MenuItem from "@mui/material/MenuItem"
import { routes } from "@/shared/routes"
import { Menu } from "@/shared/ui/Menu"
import { useRouter } from "next/navigation"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined"
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined"
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField,
} from "@mui/material"
import { Modal } from "@/shared/ui/Modal"
import { useMemo, useRef, useState } from "react"
import { IconButton } from "@/shared/ui/IconButton"
import { useCreateDashboardMutation } from "@/shared/api/dashboards/hooks/useCreateDashboardMutation"
import { CreateDashboardModal } from "@/entities/dashboard"

interface ProfileMenuProps {
    isAuth: boolean
    anchorEl: HTMLElement | null
    handleClose: () => void
    open: boolean
}

export const ProfileMenu = (props: ProfileMenuProps) => {
    const { anchorEl, handleClose, isAuth, open } = props

    const [openModal, setOpenModal] = useState(false)
    const router = useRouter()

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const menuItems = useMemo(
        () => [
            {
                Icon: PersonOutlineOutlinedIcon,
                text: "Профиль",
            },
            {
                Icon: GridViewOutlinedIcon,
                text: "Доски",
                onClick: () => router.push(routes.dashboardList),
            },
            {
                Icon: DashboardCustomizeOutlinedIcon,
                text: "Создать доску",
                onClick: handleOpenModal,
            },
        ],
        [],
    )

    if (!isAuth) {
        return (
            <Menu
                anchorEl={anchorEl}
                open={open}
                handleClose={handleClose}
            >
                <MenuItem onClick={() => router.push(routes.login)}>
                    Войти
                </MenuItem>
                <MenuItem onClick={() => router.push(routes.registration)}>
                    Зарегистрироваться
                </MenuItem>
            </Menu>
        )
    }

    return (
        <>
            <Menu
                anchorEl={anchorEl}
                open={open}
                handleClose={handleClose}
            >
                <List>
                    {menuItems.map(({ Icon, text, onClick }, i) => (
                        <ListItem
                            key={i}
                            disablePadding
                        >
                            <ListItemButton onClick={onClick}>
                                <ListItemIcon>
                                    <Icon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Menu>
            <CreateDashboardModal
                open={openModal}
                onClose={() => setOpenModal(false)}
            />
        </>
    )
}
