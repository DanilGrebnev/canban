import { TChildren } from "@/shared/types/Children"
import s from "./layout.module.scss"
import { DashboardHeader } from "@/widgets/DashboardHeader"

const DashboardLayout = ({ children }: TChildren) => {
    return (
        <div className={s.layout}>
            <DashboardHeader />
            {children}
        </div>
    )
}

export default DashboardLayout
