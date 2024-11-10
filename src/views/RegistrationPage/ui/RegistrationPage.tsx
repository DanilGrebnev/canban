"use client"

import { Card } from "@/shared/ui/Card"
import TextField from "@mui/material/TextField"
import s from "./registration-page.module.scss"
import Button from "@mui/material/Button"
import { useRouter } from "next/navigation"
import { routes } from "@/shared/routes"
import { useRegistrationMutation } from "@/shared/api/users/hooks/useRegistrationMutation"
import { useForm } from "react-hook-form"
import { Alert } from "@mui/material"

interface Inputs {
    login: string
    password: string
    name: string
}

export const RegistrationPage = () => {
    const router = useRouter()

    const { register, handleSubmit } = useForm<Inputs>()

    const { mutate, isError } = useRegistrationMutation()

    const onSubmit = handleSubmit((data) => {
        mutate(data)
    })

    return (
        <Card>
            <form
                onSubmit={onSubmit}
                className={s.card}
            >
                <h3>Регистрация</h3>
                <TextField
                    className={s.input}
                    {...register("name")}
                    id='filled-basic'
                    label='Name'
                    variant='standard'
                    placeholder='name'
                />
                <TextField
                    className={s.input}
                    {...register("login")}
                    id='filled-basic'
                    label='login'
                    variant='standard'
                    placeholder='login'
                />
                <TextField
                    className={s.input}
                    {...register("password")}
                    id='filled-basic'
                    label='password'
                    placeholder='password'
                    variant='standard'
                />
                <div className={s.actions}>
                    <Button type='submit'>Зарегистрироваться</Button>
                    <Button onClick={() => router.push(routes.login)}>
                        Войти
                    </Button>
                    {isError && (
                        <Alert severity='error'>Ошибка при регистрации.</Alert>
                    )}
                </div>
            </form>
        </Card>
    )
}
