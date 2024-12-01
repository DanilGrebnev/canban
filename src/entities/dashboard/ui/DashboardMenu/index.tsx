import { ReactNode, useState } from "react"
import { IconButton } from "@/shared/ui/IconButton"
import { Menu } from "@/shared/ui/Menu"
import { CreateColumnBtn } from "@/entities/columns"
import {
    DeleteDashboardBtn,
    JoinToDashboardUserBtn,
    ShowDashboardParticipantsBtn,
} from "@/entities/dashboard"
import MUIMenuItem from "@mui/material/MenuItem"

interface DashboardMenuProps {
    showDashboardControl: boolean
}

export const DashboardMenu = (props: DashboardMenuProps) => {
    const { showDashboardControl } = props
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <IconButton
                iconVariant='menu'
                iconFill='var(--icon-main-color)'
                onClick={handleClick}
            />
            <Menu
                anchorEl={anchorEl}
                open={open}
                className={"flex flex-col"}
                handleClose={handleClose}
            >
                {showDashboardControl && (
                    <div className={"flex flex-col"}>
                        <MenuItem label='Создать группу'>
                            <CreateColumnBtn />
                        </MenuItem>
                        <MenuItem label='Добавить участника'>
                            <JoinToDashboardUserBtn />
                        </MenuItem>
                        <MenuItem label='Удалить рабочую область'>
                            <DeleteDashboardBtn />
                        </MenuItem>
                    </div>
                )}
                <MenuItem label='Посмотреть участников'>
                    <ShowDashboardParticipantsBtn />
                </MenuItem>
            </Menu>
        </>
    )
}

function MenuItem(props: {
    label: string
    children: ReactNode
    onClick?: () => void
}) {
    const { label, children, onClick } = props
    return (
        <MUIMenuItem
            onClick={onClick}
            component='label'
            className={"flex gap-[--gap]"}
        >
            {children}
            <p>{label}</p>
        </MUIMenuItem>
    )
}
