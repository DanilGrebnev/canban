import { useForm, Controller } from "react-hook-form"
import { Button, TextField } from "@mui/material"
import { ICreateTodoDTO } from "@/shared/api/todo"
import { TodoPriority } from "@/shared/types/todos"
import { PriorityRadioGroup } from "./PriorityRadioGroup"
import s from "./create-todo-form.module.scss"
import { useEffect } from "react"

type IData = Omit<ICreateTodoDTO, "columnId">

interface CreateTodoFormProps {
    onSubmit: (data: IData) => void
    initialData?: any
}

export const CreateTodoForm = (props: CreateTodoFormProps) => {
    const { onSubmit, initialData } = props

    const { control, handleSubmit, reset } = useForm<{
        todo: string
        description: string
        priority: TodoPriority
    }>({
        defaultValues: {
            description: "",
            todo: "",
            priority: "low",
        },
    })

    const onSubmitForm = handleSubmit((data) => {
        onSubmit(data)
    })

    useEffect(() => {
        if (!initialData) return
    }, [initialData])

    return (
        <form
            onSubmit={onSubmitForm}
            className={s.form}
        >
            <Controller
                name='todo'
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        variant='standard'
                        label='Задача'
                    />
                )}
            />
            <Controller
                name='description'
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        variant='standard'
                        label='Описание'
                    />
                )}
            />
            <div>
                <h4>Приоритет</h4>
                <Controller
                    name='priority'
                    control={control}
                    render={({ field }) => <PriorityRadioGroup {...field} />}
                />
            </div>
            <Button type='submit'>Создать</Button>
        </form>
    )
}
