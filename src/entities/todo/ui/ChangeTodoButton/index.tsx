"use client"

import { IconButton } from "@/shared/ui/IconButton"
import { Modal } from "@/shared/ui/Modal"
import { useEffect, useState } from "react"
import s from "./s.module.scss"
import { TextField } from "@mui/material"
import Button from "@mui/material/Button"
import { IChangeTodoDTO, useGetTodoDetailQuery } from "@/shared/api/todo"
import { useForm, Controller } from "react-hook-form"
import { useChangeTodoMutation } from "@/shared/api/todo"
import { CreateTodoModal } from "@/entities/todo/ui/CreateTodoModal"
import { ITodoForm } from "@/shared/types/todos"

interface ChangeToDoButtonProps {
    todoId: string
}

export const ChangeToDoButton = (props: ChangeToDoButtonProps) => {
    const { todoId } = props
    const [open, setOpen] = useState(false)

    const { mutateAsync } = useChangeTodoMutation()

    const { data: todoDetail, isSuccess } = useGetTodoDetailQuery({
        todoId,
        enabled: open,
    })

    const onSubmit = (todoData: ITodoForm) => {
        mutateAsync({ todoData, todoId }).then(() => setOpen(false))
    }

    return (
        <>
            <IconButton
                color='info'
                iconVariant='pencil'
                onClick={() => setOpen(true)}
            />
            <CreateTodoModal
                initialData={todoDetail}
                open={open}
                onClose={() => setOpen(false)}
                title='Изменение задачи'
                onSubmit={onSubmit}
            />
        </>
    )
}
