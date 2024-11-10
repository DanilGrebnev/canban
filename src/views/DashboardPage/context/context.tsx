"use client"

import { createContext } from "react"

export interface DashboardPageContextProps {
    dashboardId: string
}

export const DashboardPageContext = createContext(
    {} as DashboardPageContextProps,
)
