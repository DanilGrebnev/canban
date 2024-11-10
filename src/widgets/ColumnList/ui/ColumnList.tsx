"use client"

import { useGetColumnsListQuery } from "@/shared/api/columns"
import { ColumnWithToDo } from "@/widgets/ColumnWithToDo"
import { useDashboardStore } from "@/shared/store/dashboardStore"
import { useEffect } from "react"

interface ColumnListProps {
    dashboardId: string
}

export const ColumnList = (props: ColumnListProps) => {
    const { dashboardId } = props
    const setDashboardId = useDashboardStore((state) => state.setDashboardId)

    useEffect(() => {
        if (!dashboardId) return
        setDashboardId(dashboardId)
    }, [dashboardId])

    const { data } = useGetColumnsListQuery({ dashboardId: props.dashboardId })

    return (
        <>
            {data?.map((column) => (
                <ColumnWithToDo
                    key={column._id}
                    dashboardId={dashboardId}
                    columnId={column._id}
                    title={column.columnName}
                />
            ))}
        </>
    )
}
