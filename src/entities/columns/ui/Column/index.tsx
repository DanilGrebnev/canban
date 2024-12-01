"use client"

import { Card } from "@/shared/ui/Card"
import { TChildren } from "@/shared/types/Children"
import s from "./column.module.scss"
import {
    type ReactNode,
    type DragEvent,
    useEffect,
    useRef,
    useState,
} from "react"
import { useMoveTodoToAnotherColumnMutation } from "@/shared/api/todo"

export interface TColumn extends TChildren {
    title: string | number
    deleteColumnButton?: boolean
    columnId: string
    buttonsWidgets?: ReactNode
}

export const Column = (props: TColumn) => {
    const { title, children, buttonsWidgets, columnId } = props
    const { mutate } = useMoveTodoToAnotherColumnMutation()

    const [height, setHeight] = useState<number | null>(null)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!ref.current) return
        setHeight(ref.current?.clientHeight)
    }, [])

    const onDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        console.log("on drop")
        const dragTodoId = e.dataTransfer.getData("todoId")
        const dragColumnId = e.dataTransfer.getData("columnId")

        if (columnId === dragColumnId) {
            return console.log("Перетаскивание в исходную колонку")
        }

        mutate({
            fromColumnId: dragColumnId,
            columnId,
            todoId: dragTodoId,
        })
    }

    return (
        <Card
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => e.preventDefault()}
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
