"use client"

import { IconButton } from "@/shared/ui/IconButton"
import { Menu } from "@/shared/ui/Menu"
import MenuItem from "@mui/material/MenuItem"
import { useState } from "react"

export const MoveDashboardTaskButton = () => {
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
                onClick={handleClick}
                iconVariant='arrow'
                tooltip='move to next dolumn'
            />
            <Menu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Приняты в работу</MenuItem>
                <MenuItem onClick={handleClose}>Завершённые</MenuItem>
            </Menu>
        </>
    )
}
