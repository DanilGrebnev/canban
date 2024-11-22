"use client"

import { Column, TColumn, DeleteColumnBtn } from "@/entities/columns"
import { TodoCard, AddTodoButton } from "@/entities/todo"
import { useGetToDoQuery } from "@/shared/api/todo"
import { useGetProfileQuery } from "@/shared/api/users"

interface ColumnWithToDoProps extends TColumn {
    columnId: string
    dashboardId: string
}

export const ColumnWithToDo = (props: ColumnWithToDoProps) => {
    const { columnId, title, dashboardId } = props

    const { data: todos } = useGetToDoQuery({ columnId })
    const { data: profile } = useGetProfileQuery()

    const currentDashboard = profile?.dashboardsList.find(
        (dashboard) => dashboard.dashboardId === dashboardId,
    )
    const isOwner = currentDashboard?.role === "owner"

    return (
        <Column
            title={title}
            columnId={columnId}
            buttonsWidgets={
                <>
                    <AddTodoButton columnId={columnId} />
                    {isOwner && <DeleteColumnBtn columnId={columnId} />}
                </>
            }
        >
            {todos?.map((todo) => {
                return (
                    <TodoCard
                        dashboardId={dashboardId}
                        {...todo}
                        todoId={todo._id}
                        key={todo._id}
                    />
                )
            })}
        </Column>
    )
}
