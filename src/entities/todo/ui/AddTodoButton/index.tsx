"use client"

import { IconButton } from "@/shared/ui/IconButton"
import { useState } from "react"
import { CreateTodoModal } from "../CreateTodoModal"
import { useCreateTodoMutation } from "@/shared/api/todo"
import { ITodoForm } from "@/shared/types/todos"

interface AddTodoButtonProps {
    columnId: string
}

export const AddTodoButton = (props: AddTodoButtonProps) => {
    const { columnId } = props
    const [openModal, setOpenModal] = useState(false)
    const { mutateAsync } = useCreateTodoMutation()

    const createTodo = (data: ITodoForm) => {
        mutateAsync({ ...data, columnId }).then(() => setOpenModal(false))
    }

    return (
        <>
            <IconButton
                tooltip='Добавить задачу'
                iconVariant='addBox'
                onClick={() => setOpenModal(true)}
            />
            <CreateTodoModal
                onSubmit={createTodo}
                title='Создание задачи'
                open={openModal}
                onClose={() => setOpenModal(false)}
            />
        </>
    )
}
