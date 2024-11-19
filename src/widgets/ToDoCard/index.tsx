"use client"

import { Card } from "@/shared/ui/Card"
import s from "./todo-item.module.scss"

import {
    DeleteToDoButton,
    ChangeToDoButton,
    MoveToDoButton,
} from "@/entities/todo"
import { ToDoDetailModal } from "@/widgets/ToDoDetailModal/ToDoDetailModal"
import { type TTodoItem } from "@/shared/types/todos"
import Tooltip from "@mui/material/Tooltip"
import { cn } from "@/shared/lib/clsx"
import { useState } from "react"
import { format } from "@formkit/tempo"

interface TDashboardItem extends Omit<TTodoItem, "_id"> {
    todoId: string
    dashboardId: string
}

export const ToDoCard = (props: TDashboardItem) => {
    const {
        todoId,
        creationDate,
        author,
        todo,
        dashboardId,
        priority,
        columnId,
    } = props
    const [openTodoDetail, setOpenTodoDetail] = useState(false)

    const priorityValue = {
        low: "Низкий",
        middle: "Средний",
        high: "Высокий",
    }

    return (
        <>
            <Card
                variant='outlined'
                className={s["todo-item"]}
                onClick={() => setOpenTodoDetail(true)}
            >
                <Tooltip title={`Приоритет: ${priorityValue[priority]}`}>
                    <div
                        className={cn(s["priority-circle"], s[priority])}
                    ></div>
                </Tooltip>

                <div className={s["item-content"]}>
                    <h3 className={s.title}>{todo}</h3>
                    <h4>Автор: {author}</h4>
                    <h4 className={s["creation-date"]}>
                        Дата создания:{" "}
                        <span>{format(creationDate, "short")}</span>
                    </h4>
                </div>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={s["control-panel"]}
                >
                    <ChangeToDoButton />
                    <DeleteToDoButton
                        columnId={columnId}
                        todoId={todoId}
                    />
                    <MoveToDoButton
                        columnId={columnId}
                        dashboardId={dashboardId}
                        todoId={todoId}
                    />
                </div>
            </Card>
            <ToDoDetailModal
                todoId={todoId}
                open={openTodoDetail}
                onClose={() => setOpenTodoDetail(false)}
            />
        </>
    )
}
