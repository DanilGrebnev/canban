"use client"

import { IconButton } from "@/shared/ui/IconButton"
import { useState } from "react"
import { AddTodoModal } from "../AddTodoModal"

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
            <AddTodoModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                columnId={columnId}
            />
        </>
    )
}
