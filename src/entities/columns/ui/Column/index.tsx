"use client"

import { Card } from "@/shared/ui/Card"
import { TChildren } from "@/shared/types/Children"
import s from "./column.module.scss"
import { ReactNode, useEffect, useRef, useState } from "react"

export interface TColumn extends TChildren {
    title: string | number
    deleteColumnButton?: boolean
    columnId: string
    buttonsWidgets?: ReactNode
}

export const Column = (props: TColumn) => {
    const { title, children, buttonsWidgets } = props

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
                <div className={s["column-control"]}>{buttonsWidgets}</div>
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
