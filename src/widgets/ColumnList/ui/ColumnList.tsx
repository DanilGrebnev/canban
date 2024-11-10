"use client"

import { useGetColumnsListQuery } from "@/shared/api/columns"
import { ColumnWithToDo } from "@/widgets/ColumnWithToDo"
import { useDashboardStore } from "@/shared/store/dashboardStore"
import { useEffect, useRef } from "react"
import s from "./columns-list.module.scss"
import { cn } from "@/shared/lib/clsx"

interface ColumnListProps {
    dashboardId: string
}

export const ColumnList = (props: ColumnListProps) => {
    const { dashboardId } = props
    const setDashboardId = useDashboardStore((s) => s.setDashboardId)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!dashboardId) return
        setDashboardId(dashboardId)
    }, [dashboardId])

    const { data } = useGetColumnsListQuery({ dashboardId: props.dashboardId })

    return (
        <div
            ref={ref}
            className={cn(s.list)}
            style={{
                gridTemplateColumns: `repeat(${data?.length}, 1fr)`,
            }}
        >
            {data?.map((column) => (
                <ColumnWithToDo
                    key={column._id}
                    dashboardId={dashboardId}
                    columnId={column._id}
                    title={column.columnName}
                />
            ))}
        </div>
    )
}
