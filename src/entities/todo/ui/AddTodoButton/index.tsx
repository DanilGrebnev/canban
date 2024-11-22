"use client"

import { IconButton } from "@/shared/ui/IconButton"
import { useState } from "react"
import { CreateTodoModal } from "../CreateTodoModal"

interface AddTodoButtonProps {
    columnId: string
}

export const AddTodoButton = (props: AddTodoButtonProps) => {
    const { columnId } = props
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <IconButton
                tooltip='Добавить задачу'
                iconVariant='addBox'
                onClick={() => setOpenModal(true)}
            />
            <CreateTodoModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                columnId={columnId}
            />
        </>
    )
}
