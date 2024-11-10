"use client"

import s from "@/views/LoginPage/ui/login-page.module.scss"
import { TextField } from "@mui/material"
import Button from "@mui/material/Button"
import { routes } from "@/shared/routes"
import { useLoginMutation } from "@/shared/api/users"
import type { FormEvent } from "react"
import { useRouter } from "next/navigation"

export const LoginForm = () => {
    const { mutate } = useLoginMutation({
        onSuccess: () => {
            router.push(routes.dashboardList)
        },
    })
    const router = useRouter()

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const data = {
            login: form.get("login") as string,
            password: form.get("password") as string,
        }
        mutate(data)
    }
    return (
        <form onSubmit={submit}>
            <h3>Войти</h3>
            <div className={s.inputs}>
                <TextField
                    className={s.input}
                    id='filled-basic'
                    label='login'
                    name='login'
                    value='zloymichka@mail.ru'
                    variant='standard'
                    placeholder='login'
                />
                <TextField
                    className={s.input}
                    id='filled-basic'
                    label='password'
                    name='password'
                    value='htczte2101'
                    placeholder='password'
                    variant='standard'
                />

                <div className={s.actions}>
                    <Button type='submit'>Войти</Button>
                    <Button onClick={() => router.push(routes.registration)}>
                        Зарегистрироваться
                    </Button>
                </div>
            </div>
        </form>
    )
}
