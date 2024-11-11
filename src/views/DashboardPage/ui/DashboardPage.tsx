import s from "./dashboard-page.module.scss"
import { ColumnList } from "@/widgets/ColumnList"
import { SetDashboardIdInStoreProvider } from "../SetDashboardIdInStoreProvider"

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
                <ColumnList />
            </SetDashboardIdInStoreProvider>
        </div>
    )
}
