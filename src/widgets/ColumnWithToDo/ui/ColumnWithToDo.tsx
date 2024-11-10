"use client"

import { Column, TColumn } from "@/entities/columns"
import { useGetToDoQuery, useCreateTodoMutation } from "@/shared/api/todo"
import { ToDoItem } from "@/entities/todo"
import { Modal } from "@/shared/ui/Modal"
import { FormEvent, useState } from "react"
import {
    TextField,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
} from "@mui/material"
import { TodoPriority } from "@/shared/types/todos"

interface ColumnWithToDoProps extends TColumn {
    columnId: string
    dashboardId: string
}

export const ColumnWithToDo = (props: ColumnWithToDoProps) => {
    const { columnId, title, dashboardId } = props
    const { data: todos } = useGetToDoQuery({ columnId })

    const { mutate: createTodo } = useCreateTodoMutation()
    const [openModal, setOpenModal] = useState(false)

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
