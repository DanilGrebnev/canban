import s from "./dashboard-list.module.scss"

import { DashboardList } from "@/views/DashboardListPage/ui/DashboardList"

export const DashboardListPage = () => {
    return (
        <div className={s.list}>
            <DashboardList />
        </div>
    )
}
