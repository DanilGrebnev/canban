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

interface ChangeToDoButtonProps {
    todoId: string
}

export const ChangeToDoButton = (props: ChangeToDoButtonProps) => {
    const { todoId } = props
    const [open, setOpen] = useState(false)

    const { mutate } = useChangeTodoMutation()

    const { data: todoDetail, isSuccess } = useGetTodoDetailQuery({
        todoId,
        enabled: open,
    })

    const { register, handleSubmit, control, reset, formState } =
        useForm<IChangeTodoDTO>()

    useEffect(() => {
        if (!isSuccess) return
        reset({
            todo: todoDetail.todo,
            description: todoDetail.description,
        })
    }, [isSuccess, todoDetail])

    const onSubmit = handleSubmit((data) => {
        mutate({ todoData: data, todoId })
    })

    return (
        <>
            <IconButton
                color='info'
                iconVariant='pencil'
                onClick={() => setOpen(true)}
            />
            <Modal
                title='Изменение задачи'
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className={s.inputs}>
                    <Controller
                        name='todo'
                        control={control}
                        render={({ field: { value, onChange } }) => (
                            <TextField
                                value={value}
                                onChange={onChange}
                                variant='standard'
                            />
                        )}
                    />
                    <Controller
                        name='description'
                        control={control}
                        render={({ field: { value, onChange } }) => (
                            <TextField
                                value={value}
                                onChange={onChange}
                                variant='standard'
                            />
                        )}
                    />
                </div>
                <div className={s.actions}>
                    <Button
                        onClick={() => {
                            setOpen(false)
                            onSubmit()
                        }}
                    >
                        Изменить
                    </Button>
                    <Button
                        onClick={() => setOpen(false)}
                        autoFocus
                    >
                        Отмена
                    </Button>
                </div>
            </Modal>
        </>
    )
}
