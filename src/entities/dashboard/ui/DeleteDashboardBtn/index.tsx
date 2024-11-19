"use client"

import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined"
import IconButton from "@mui/material/IconButton"
import { useDashboardStore } from "@/shared/store/dashboardStore"
import { useState } from "react"
import { Modal } from "@/shared/ui/Modal"
import { TextField } from "@mui/material"
import Typography from "@mui/material/Typography"

export const DeleteDashboardBtn = () => {
    const [open, setOpen] = useState(false)
    const dashboardId = useDashboardStore((s) => s.dashboardId)

    return (
        <>
            <IconButton onClick={() => setOpen(true)}>
                <DeleteIcon sx={{ fill: "white" }} />
            </IconButton>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Typography
                    variant='body2'
                    component='div'
                >
                    Для удаления доски введите её название
                </Typography>
                <TextField variant='standard' />
            </Modal>
        </>
    )
}
