"use client"

import { IconButton } from "@/shared/ui/IconButton"
import { Menu } from "@/shared/ui/Menu"
import MenuItem from "@mui/material/MenuItem"
import { useMemo, useState } from "react"
import { useMoveTodoToAnotherColumnMutation } from "@/shared/api/todo"
import { useGetColumnsListQuery } from "@/shared/api/columns"
import s from "./move-todo-button.module.scss"

interface MoveToDoButtonProps {
    todoId: string
    dashboardId: string
    columnId: string
}

export const MoveToDoButton = (props: MoveToDoButtonProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const { todoId, dashboardId, columnId } = props
    const { data: columns } = useGetColumnsListQuery({ dashboardId })

    const { mutate } = useMoveTodoToAnotherColumnMutation()

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const columnsList = useMemo(
        () => columns?.filter((column) => column._id !== columnId),
        [columns],
    )

    const showButton = !!(columns?.length && columns?.length > 1)

    return showButton ? (
        <>
            <IconButton
                onClick={handleClick}
                iconVariant='arrow'
                tooltip='move to next column'
            />
            <Menu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
            >
                {columnsList?.map((column) => (
                    <MenuItem
                        key={column._id}
                        className={s["menu-item"]}
                        onClick={() => {
                            handleClose?.()
                            mutate({ columnId: column._id, todoId })
                        }}
                    >
                        Переместить в "{column.columnName}"
                    </MenuItem>
                ))}
            </Menu>
        </>
    ) : null
}
