"use client"

import { useGetColumnsListQuery } from "@/shared/api/columns"
import { ColumnWithToDo } from "@/widgets/ColumnWithToDo"
import { useDashboardStore } from "@/shared/store/dashboardStore"
import { useRef } from "react"
import s from "./columns-list.module.scss"
import { cn } from "@/shared/lib/clsx"

export const ColumnList = () => {
    const dashboardId = useDashboardStore((s) => s.dashboardId)

    const ref = useRef<HTMLDivElement | null>(null)

    const { data } = useGetColumnsListQuery({ dashboardId })

    return (
        <div
            ref={ref}
            className={cn(s.list)}
            style={{
                gridTemplateColumns: `repeat(${data?.length}, 1fr)`,
            }}
        >
            {!dashboardId ? (
                <h1>Загрузка...</h1>
            ) : (
                data?.map((column) => (
                    <ColumnWithToDo
                        key={column._id}
                        dashboardId={dashboardId}
                        columnId={column._id}
                        title={column.columnName}
                    />
                ))
            )}
        </div>
    )
}
