import s from "./dashboard-page.module.scss"
import { ColumnList } from "@/widgets/ColumnList"
import { DashboardPageContextProvider } from "../context/provider"

interface PageParams {
    params: Promise<{
        dashboardId: string
    }>
}

export const DashboardPage = async (props: PageParams) => {
    const dashboardId = (await props.params).dashboardId

    return (
        <div className={s.page}>
            <DashboardPageContextProvider dashboardId={dashboardId}>
                <ColumnList dashboardId={dashboardId} />
            </DashboardPageContextProvider>
        </div>
    )
}
