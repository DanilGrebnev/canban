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
import { cn } from "@/shared/lib/clsx"
import {
    useGetIdColumnUnderDraggedElement,
    useSetIdColumnUnderDraggedElement,
} from "@/shared/store/todoStore"

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
    const draggableColumnId = useGetIdColumnUnderDraggedElement()
    const setColumnIdUnderDraggedElement = useSetIdColumnUnderDraggedElement()

    useEffect(() => {
        if (!ref.current) return
        setHeight(ref.current?.clientHeight)
    }, [])

    const onDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
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
            className={cn(s.column, {
                [s.select]: draggableColumnId === columnId,
            })}
            onDrop={onDrop}
            onDrag={(e) => e.preventDefault()}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => {
                e.preventDefault()
                setColumnIdUnderDraggedElement(columnId)
            }}
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
