"use client"

import { DashboardPageContext, type DashboardPageContextProps } from "./context"
import { TChildren } from "@/shared/types/Children"

export const DashboardPageContextProvider = (
    props: DashboardPageContextProps & TChildren,
) => {
    return (
        <DashboardPageContext.Provider
            value={{ dashboardId: props.dashboardId }}
        >
            {props.children}
        </DashboardPageContext.Provider>
    )
}
