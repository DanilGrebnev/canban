import { Card } from "@/shared/ui/Card"
import s from "./login-page.module.scss"
import { DynamicForm } from "./LoginForm/DynamicForm"

export const LoginPage = () => {
    return (
        <Card className={s.card}>
            <DynamicForm />
        </Card>
    )
}
