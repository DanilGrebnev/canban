import { Card } from "@/shared/ui/Card"
import { TChildren } from "@/shared/types/Children"
import s from "./column.module.scss"

interface TColumn extends TChildren {
    title: string | number
}

export const Column = (props: TColumn) => {
    const { title, children } = props
    return (
        <Card
            className={s.column}
            variant='outlined'
        >
            <h3>{title}</h3>
            <div className={s["dashboard-list-wrapper"]}>
                <div className={s["dashboard-list"]}>{children}</div>
            </div>
        </Card>
    )
}
