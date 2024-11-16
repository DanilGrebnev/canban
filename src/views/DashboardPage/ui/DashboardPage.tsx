import s from "./dashboard-page.module.scss"
import { ColumnsList } from "@/entities/columns"
import { SetDashboardIdInStoreProvider } from "../SetDashboardIdInStoreProvider"
import { ColumnWithToDo } from "@/widgets/ColumnWithToDo"

interface PageParams {
    params: Promise<{
        dashboardId: string
    }>
}

export const DashboardPage = async (props: PageParams) => {
    const dashboardId = (await props.params).dashboardId

    return (
        <div className={s.page}>
            <SetDashboardIdInStoreProvider dashboardId={dashboardId}>
                <ColumnsList ColumnItem={ColumnWithToDo} />
            </SetDashboardIdInStoreProvider>
        </div>
    )
}
