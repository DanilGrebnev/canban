import { Card } from "@/shared/ui/Card"
import { TChildren } from "@/shared/types/Children"
import s from "./column.module.scss"
import Tooltip from "@mui/material/Tooltip"
import { IconButton } from "@/shared/ui/IconButton"

export interface TColumn extends TChildren {
    title: string | number
    addToDoAction?: () => void
}

export const Column = (props: TColumn) => {
    const { title, children, addToDoAction } = props

    return (
        <Card
            className={s.column}
            variant='outlined'
        >
            <header className={s["column-header"]}>
                <h3>{title}</h3>
                {!!addToDoAction && (
                    <Tooltip title='Добавить задачу'>
                        <IconButton
                            iconVariant='addBox'
                            onClick={addToDoAction}
                        />
                    </Tooltip>
                )}
            </header>
            <div className={s["dashboard-list-wrapper"]}>
                <div className={s["dashboard-list"]}>{children}</div>
            </div>
        </Card>
    )
}
