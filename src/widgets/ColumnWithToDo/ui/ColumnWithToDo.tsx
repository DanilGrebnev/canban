"use client"

import { Column, TColumn } from "@/entities/columns"
import { useGetToDoQuery } from "@/shared/api/todo"
import { ToDoItem } from "@/entities/todo"
import { useCreateTodoMutation } from "@/shared/api/todo/hooks/useCreateTodoMutation"
import { Modal } from "@/shared/ui/Modal"
import { FormEvent, useState } from "react"
import { TextField } from "@mui/material"
import Button from "@mui/material/Button"

interface ColumnWithToDoProps extends TColumn {
    columnId: string
    dashboardId: string
}

export const ColumnWithToDo = (props: ColumnWithToDoProps) => {
    const { columnId, title, dashboardId } = props
    const { data: todos } = useGetToDoQuery({ columnId })

    const { mutate } = useCreateTodoMutation()
    const [openModal, setOpenModal] = useState(false)

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("submit")
        const form = new FormData(e.currentTarget)
        mutate({
            columnId,
            description: form.get("description") as string,
            todo: form.get("todo") as string,
        })
    }

    return (
        <Column
            addToDoAction={() => setOpenModal(true)}
            title={title}
        >
            {todos?.map((todo) => {
                return (
                    <ToDoItem
                        dashboardId={dashboardId}
                        {...todo}
                        todoId={todo._id}
                        key={todo._id}
                    />
                )
            })}
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                title='Создайте задачу'
            >
                <form
                    onSubmit={onSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--gap)",
                    }}
                >
                    <TextField
                        variant='standard'
                        name='todo'
                        label='Задача'
                    />
                    <TextField
                        variant='standard'
                        name='description'
                        label='Описание'
                    />
                    <Button
                        type='submit'
                        onClick={() => {
                            setOpenModal(false)
                        }}
                    >
                        Создать
                    </Button>
                </form>
            </Modal>
        </Column>
    )
}
