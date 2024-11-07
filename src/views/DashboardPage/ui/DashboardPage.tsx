import s from "./dashboard-page.module.scss"
import { Column, DashboardTaskItem } from "@/entities/dashboard"

export const DashboardPage = () => {
    return (
        <div className={s.page}>
            <Column title='В очереди'>
                <DashboardTaskItem />
                <DashboardTaskItem />
                <DashboardTaskItem />
                <DashboardTaskItem />
                <DashboardTaskItem />
                <DashboardTaskItem />
                <DashboardTaskItem />
                <DashboardTaskItem />
                <DashboardTaskItem />
                <DashboardTaskItem />
                <DashboardTaskItem />
                <DashboardTaskItem />
                <DashboardTaskItem />
                <DashboardTaskItem />
                <DashboardTaskItem />
                <DashboardTaskItem />
                <DashboardTaskItem />
                <DashboardTaskItem />
                <DashboardTaskItem />
                <DashboardTaskItem />
                <DashboardTaskItem />
            </Column>
            <Column title='Приняты в работу'></Column>
            <Column title='Завершённые'></Column>
        </div>
    )
}
