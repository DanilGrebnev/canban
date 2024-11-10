"use client"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import { IconButton as UIIconButton } from "@/shared/ui/IconButton"
import { useState } from "react"
import { UserProfile } from "@/entities/user"
import { Modal } from "@/shared/ui/Modal"
import { TextField } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import { useCreateColumnMutation } from "@/shared/api/columns/hooks/useCreateColumnMutation"
import { useDashboardStore } from "@/shared/store/dashboardStore"
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined"
import Tooltip from "@mui/material/Tooltip"

export const DashboardHeader = () => {
    const [openModal, setOpenModal] = useState(false)

    const dashboardId = useDashboardStore((s) => s.dashboardId)

    const { mutate } = useCreateColumnMutation()

    const [columnName, setColumnName] = useState("")

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <Tooltip title='Создать колонку'>
                        <IconButton onClick={() => setOpenModal(true)}>
                            <ViewWeekOutlinedIcon sx={{ fill: "white" }} />
                        </IconButton>
                    </Tooltip>
                    <div style={{ flexGrow: 1 }}></div>
                    <UserProfile />
                </Toolbar>
            </AppBar>

            <Modal
                onClose={() => setOpenModal(false)}
                open={openModal}
                title='Создание колонки'
            >
                <TextField onChange={(e) => setColumnName(e.target.value)} />
                <UIIconButton
                    onClick={() => {
                        mutate({ dashboardId, columnName })
                    }}
                    iconVariant='done'
                />
            </Modal>
        </Box>
    )
}
