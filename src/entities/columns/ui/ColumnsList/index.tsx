"use client"

import { useDashboardStore } from "@/shared/store/dashboardStore"
import { JSX, useRef } from "react"
import { useGetColumnsListQuery } from "@/shared/api/columns"
import { cn } from "@/shared/lib/clsx"
import s from "./columns-list.module.scss"

interface ColumnsListProps {
    ColumnItem: (props: {
        dashboardId: string
        columnId: string
        title: string
    }) => JSX.Element
}

export const ColumnsList = (props: ColumnsListProps) => {
    const { ColumnItem } = props
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
                    <ColumnItem
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
