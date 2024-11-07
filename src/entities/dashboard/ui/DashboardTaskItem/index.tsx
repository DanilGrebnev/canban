import { Card } from "@/shared/ui/Card"
import s from "./dashboard-task-item.module.scss"
import { MoveDashboardTaskButton } from "../MoveDashboardTaskButton"
import { DeleteDashboardTaskButton } from "../DeleteDashboardTaskButton"
import { ChangeDashboardTaskButton } from "@/entities/dashboard/ui/ChangeDashboardTaskButton/ChangeDashboardTaskButton"

interface TDashboardItem {
    title: string
    creationDate: string
}

export const DashboardTaskItem = () => {
    return (
        <Card
            variant='outlined'
            className={s["card-item"]}
        >
            <div className={s["item-content"]}>
                <h3>Заголовок</h3>
                <h4>Дата создания</h4>
                <h4>Создатель: Данил Гребнев</h4>
            </div>
            <div className={s["control-panel"]}>
                <ChangeDashboardTaskButton />
                <DeleteDashboardTaskButton />
                <MoveDashboardTaskButton />
            </div>
        </Card>
    )
}
