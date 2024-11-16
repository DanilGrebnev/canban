"use client"

import { Column, TColumn } from "@/entities/columns"
import { useGetToDoQuery, useCreateTodoMutation } from "@/shared/api/todo"
import { ToDoCard } from "../../ToDoCard"
import { Modal } from "@/shared/ui/Modal"
import { FormEvent, useState } from "react"
import {
    TextField,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    Alert,
} from "@mui/material"
import { TodoPriority } from "@/shared/types/todos"
import { useGetProfileQuery } from "@/shared/api/users"

interface ColumnWithToDoProps extends TColumn {
    columnId: string
    dashboardId: string
}

export const ColumnWithToDo = (props: ColumnWithToDoProps) => {
    const { columnId, title, dashboardId } = props
    const { data: todos } = useGetToDoQuery({ columnId })

    const { mutate: createTodo, isError } = useCreateTodoMutation()
    const [openModal, setOpenModal] = useState(false)

    const { data: profile } = useGetProfileQuery()

    const currentDashboard = profile?.dashboardsList.find(
        (dashboard) => dashboard.dashboardId === dashboardId,
    )
    const isOwner = currentDashboard?.role === "owner"

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)

        createTodo({
            columnId,
            description: (form.get("description") as string).trim(),
            todo: (form.get("todo") as string).trim(),
            priority: form.get("priority") as TodoPriority,
        })
    }

    return (
        <Column
            addToDoAction={() => setOpenModal(true)}
            title={title}
            columnId={columnId}
            deleteColumnButton={isOwner}
        >
            {todos?.map((todo) => {
                return (
                    <ToDoCard
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
                        width: "300px",
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
                    <div>
                        <h4>Приоритет</h4>
                        <RadioGroup
                            aria-labelledby='demo-radio-buttons-group-label'
                            defaultValue='low'
                            name='priority'
                        >
                            <FormControlLabel
                                value='low'
                                control={<Radio />}
                                label='низкий'
                            />
                            <FormControlLabel
                                value='middle'
                                control={<Radio />}
                                label='средний'
                            />
                            <FormControlLabel
                                value='high'
                                control={<Radio />}
                                label='высокий'
                            />
                        </RadioGroup>
                    </div>
                    <Button
                        type='submit'
                        onClick={() => {
                            !isError && setOpenModal(false)
                        }}
                    >
                        Создать
                    </Button>
                </form>
                {isError && (
                    <Alert severity='error'>Ошибка создания задачи</Alert>
                )}
            </Modal>
        </Column>
    )
}
