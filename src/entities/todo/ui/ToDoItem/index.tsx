import { Card } from "@/shared/ui/Card"
import s from "./todo-item.module.scss"

import { DeleteToDoButton } from "../DeleteToDoButton"
import { MoveToDoButton } from "../MoveToDoButton"
import { ChangeToDoButton } from "../ChangeToDoButton"
import { type TTodoItem } from "@/shared/types/todos"
import { dateTransform } from "@/shared/lib/dateTransform"

interface TDashboardItem extends Omit<TTodoItem, "_id"> {
    todoId: string
    dashboardId: string
}

export const ToDoItem = (props: TDashboardItem) => {
    const { todoId, creationDate, author, todo, dashboardId, columnId } = props

    return (
        <Card
            variant='outlined'
            className={s["card-item"]}
        >
            <div className={s["item-content"]}>
                <h3 className={s.title}>{todo}</h3>
                <h4>Автор: {author}</h4>
                <h4 className={s["creation-date"]}>
                    Дата создания: <span>{dateTransform(creationDate)}</span>
                </h4>
            </div>
            <div className={s["control-panel"]}>
                <ChangeToDoButton />
                <DeleteToDoButton todoId={todoId} />

                <MoveToDoButton
                    columnId={columnId}
                    dashboardId={dashboardId}
                    todoId={todoId}
                />
            </div>
        </Card>
    )
}
