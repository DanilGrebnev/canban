import { useForm, Controller } from "react-hook-form"
import { Button, TextField } from "@mui/material"
import { ICreateTodoDTO } from "@/shared/api/todo"
import { TodoPriority } from "@/shared/types/todos"
import { PriorityRadioGroup } from "@/entities/todo/ui/CreateTodoForm/PriorityRadioGroup"
import s from "./create-todo-form.module.scss"

interface CreateTodoFormProps {
    onSubmit: (data: Omit<ICreateTodoDTO, "columnId">) => void
}

export const CreateTodoForm = (props: CreateTodoFormProps) => {
    const { onSubmit } = props

    const { control, handleSubmit, reset } = useForm<{
        todo: string
        description: string
        priority: TodoPriority
    }>()

    const onSubmitForm = handleSubmit((data) => {
        onSubmit(data)
    })

    return (
        <form
            onSubmit={onSubmitForm}
            className={s.form}
        >
            <Controller
                name='todo'
                control={control}
                render={({ field: { onBlur, onChange, value, ref } }) => (
                    <TextField
                        onBlur={onBlur}
                        onChange={onChange}
                        ref={ref}
                        value={value}
                        variant='standard'
                        label='Задача'
                    />
                )}
            />
            <Controller
                name='description'
                control={control}
                render={({ field: { onBlur, onChange, value, ref } }) => (
                    <TextField
                        ref={ref}
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        variant='standard'
                        label='Описание'
                    />
                )}
            />
            <div>
                <h4>Приоритет</h4>
                <PriorityRadioGroup />
            </div>
            <Button type='submit'>Создать</Button>
        </form>
    )
}
