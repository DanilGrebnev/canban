import { Modal } from "@/shared/ui/Modal"
import { Alert } from "@mui/material"

import { CreateTodoForm } from "@/entities/todo/ui/CreateTodoForm"
import { ITodoForm } from "@/shared/types/todos"

interface AddTodoModalProps {
    open: boolean
    onClose: () => void
    title: string
    errorMessage?: string
    onSubmit: (data: ITodoForm) => void
    initialData?: ITodoForm
}

export const CreateTodoModal = (props: AddTodoModalProps) => {
    const { open, onClose, initialData, errorMessage, onSubmit, title } = props

    return (
        <Modal
            open={open}
            maxWidth='xl'
            onClose={onClose}
            title={title}
        >
            <CreateTodoForm
                initialData={initialData}
                onSubmit={(data) => onSubmit(data)}
            />
            {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
        </Modal>
    )
}
