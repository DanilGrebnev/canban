import { create } from "zustand"

interface DashboardState {
    dashboardId: null | string
}
interface DashboardActions {
    setDashboardId: (dashboardId?: string) => void
}

export const useDashboardStore = create<DashboardState & DashboardActions>(
    (set) => ({
        dashboardId: null,
        setDashboardId: (dashboardId?: string) => set({ dashboardId }),
    }),
)
