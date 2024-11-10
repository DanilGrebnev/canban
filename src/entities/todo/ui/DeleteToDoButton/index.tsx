"use client"

import { IconButton } from "@/shared/ui/IconButton"
import { useState } from "react"
import MenuItem from "@mui/material/MenuItem"
import { Menu } from "@/shared/ui/Menu"
import Button from "@mui/material/Button"
import { useRemoveTodoMutation } from "@/shared/api/todo/hooks/useRemoveTodoMutation"

interface DeleteToDoButton {
    todoId: string
}

export const DeleteToDoButton = ({ todoId }: DeleteToDoButton) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const { mutate } = useRemoveTodoMutation()

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
                iconVariant='delete'
                color='error'
                tooltip='Delete'
            />
            <Menu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
            >
                <Button
                    color='error'
                    variant='text'
                    onClick={() => {
                        mutate(todoId)
                        handleClose()
                    }}
                >
                    Удалить
                </Button>
                <Button
                    variant='text'
                    onClick={handleClose}
                >
                    Отмена
                </Button>
            </Menu>
        </>
    )
}
