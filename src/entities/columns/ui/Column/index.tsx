"use client"

import { Card } from "@/shared/ui/Card"
import { TChildren } from "@/shared/types/Children"
import s from "./column.module.scss"
import Tooltip from "@mui/material/Tooltip"
import { IconButton } from "@/shared/ui/IconButton"
import { useEffect, useRef, useState } from "react"
import { useDeleteColumnsMutation } from "@/shared/api/columns"
import { DeleteBtnWithAccept } from "@/shared/ui/DeleteBtnWithAccept"

export interface TColumn extends TChildren {
    title: string | number
    addToDoAction?: () => void
    deleteColumnButton?: boolean
    columnId: string
}

export const Column = (props: TColumn) => {
    const {
        title,
        columnId,
        children,
        addToDoAction,
        deleteColumnButton = false,
    } = props

    const { mutate } = useDeleteColumnsMutation()

    const [height, setHeight] = useState<number | null>(null)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!ref.current) return
        setHeight(ref.current?.clientHeight)
    }, [])

    return (
        <Card
            className={s.column}
            variant='outlined'
        >
            <header className={s["column-header"]}>
                <h3>{title}</h3>
                <div className={s["column-control"]}>
                    {!!addToDoAction && (
                        <Tooltip title='Добавить задачу'>
                            <IconButton
                                iconVariant='addBox'
                                onClick={addToDoAction}
                            />
                        </Tooltip>
                    )}
                    {deleteColumnButton && (
                        <DeleteBtnWithAccept
                            tooltip2='Удалить колонку'
                            onDelete={() => mutate(columnId)}
                        />
                    )}
                </div>
            </header>
            <div
                ref={ref}
                style={{ maxHeight: height + "px" }}
                className={s["dashboard-list-wrapper"]}
            >
                <div className={s["dashboard-list"]}>{children}</div>
            </div>
        </Card>
    )
}
