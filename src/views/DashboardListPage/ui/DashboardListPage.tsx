import s from "./dashboard-list.module.scss"

import { DashboardList } from "@/views/DashboardListPage/ui/DashboardList"
import Typography from "@mui/material/Typography"

export const DashboardListPage = () => {
    return (
        <div className={s.list}>
            <Typography>Мои доски</Typography>
            <DashboardList />
        </div>
    )
}
