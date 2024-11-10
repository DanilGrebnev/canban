"use client"

import { IconButton } from "@/shared/ui/IconButton"
import { Modal } from "@/shared/ui/Modal"
import { useState } from "react"
import s from "./s.module.scss"
import { TextField } from "@mui/material"
import Button from "@mui/material/Button"

export const ChangeToDoButton = () => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <IconButton
                color='info'
                iconVariant='pencil'
                onClick={handleClickOpen}
            />
            <Modal
                title='Изменение задачи'
                open={open}
                onClose={handleClose}
            >
                <div className={s.inputs}>
                    <TextField
                        id='filled-basic'
                        label='Название задачи'
                        variant='standard'
                    />
                    <TextField
                        id='filled-basic'
                        label='Описание'
                        variant='standard'
                    />
                </div>
                <div className={s.actions}>
                    <Button onClick={handleClose}>Изменить</Button>
                    <Button
                        onClick={handleClose}
                        autoFocus
                    >
                        Отмена
                    </Button>
                </div>
            </Modal>
        </>
    )
}
