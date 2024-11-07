"use client"

import { Card } from "@/shared/ui/Card"
import { TextField } from "@mui/material"
import s from "./login-page.module.scss"
import Button from "@mui/material/Button"
import { useRouter } from "next/navigation"
import { routes } from "@/shared/routes"

export const LoginPage = () => {
    const router = useRouter()
    return (
        <Card className={s.card}>
            <h3>Войти</h3>
            <div className={s.inputs}>
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
            </div>
            <div className={s.actions}>
                <Button>Войти</Button>
                <Button onClick={() => router.push(routes.registration)}>
                    Зарегистрироваться
                </Button>
            </div>
        </Card>
    )
}
