import { Modal } from "@/shared/ui/Modal"
import {
    Alert,
    Button,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material"
import { useCreateTodoMutation } from "@/shared/api/todo"
import { FormEvent } from "react"
import { TodoPriority } from "@/shared/types/todos"
import { CreateTodoForm } from "@/entities/todo/ui/CreateTodoForm"

interface AddTodoModalProps {
    open: boolean
    onClose: () => void
    columnId: string
}

export const CreateTodoModal = (props: AddTodoModalProps) => {
    const { open, onClose, columnId } = props
    const { mutate: createTodo, isError } = useCreateTodoMutation()

    return (
        <Modal
            open={open}
            onClose={onClose}
            title='Создайте задачу'
        >
            <CreateTodoForm onSubmit={(data) => console.log(data)} />
            {isError && <Alert severity='error'>Ошибка создания задачи</Alert>}
        </Modal>
    )
}
