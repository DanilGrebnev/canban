"use client"

import { Card } from "@/shared/ui/Card"
import { TextField } from "@mui/material"
import s from "./registration-page.module.scss"
import Button from "@mui/material/Button"
import { useRouter } from "next/navigation"
import { routes } from "@/shared/routes"

export const RegistrationPage = () => {
    const router = useRouter()

    return (
        <Card className={s.card}>
            <h3>Регистрация</h3>
            <TextField
                className={s.input}
                id='filled-basic'
                label='Name'
                variant='standard'
                placeholder='name'
            />
            <TextField
                className={s.input}
                id='filled-basic'
                label='login'
                variant='standard'
                placeholder='login'
            />
            <TextField
                className={s.input}
                id='filled-basic'
                label='password'
                placeholder='password'
                variant='standard'
            />
            <div className={s.actions}>
                <Button>Зарегистрироваться</Button>
                <Button onClick={() => router.push(routes.login)}>Войти</Button>
            </div>
        </Card>
    )
}
