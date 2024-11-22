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

interface AddTodoModalProps {
    open: boolean
    onClose: () => void
    columnId: string
}

export const AddTodoModal = (props: AddTodoModalProps) => {
    const { open, onClose, columnId } = props
    const { mutate: createTodo, isError } = useCreateTodoMutation()

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
        <Modal
            open={open}
            onClose={onClose}
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
                        !isError && onClose()
                    }}
                >
                    Создать
                </Button>
            </form>
            {isError && <Alert severity='error'>Ошибка создания задачи</Alert>}
        </Modal>
    )
}
