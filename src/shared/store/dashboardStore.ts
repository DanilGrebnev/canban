import { create } from "zustand"
import { IProfile, IProfileDashboardListItem } from "@/shared/types/user"
import { immer } from "zustand/middleware/immer"

interface DashboardState {
    dashboardId: string | null
    dashboardName: string | null
    isOwner: boolean
    setDashboardName: (dahboardName: string | null) => any
    setDashboardId: (dashboardId: string | null) => any
    setIsOwner: (userProfile: IProfile) => any
}

export const useDashboardStore = create<DashboardState>()(
    immer((set) => ({
        dashboardId: null,
        isOwner: false,
        dashboardName: null,
        setDashboardId: (dashboardId) =>
            set((state: DashboardState) => {
                state.dashboardId = dashboardId
            }),
        setDashboardName: (dashboardName) =>
            set((state: DashboardState) => {
                state.dashboardName = dashboardName
            }),
        setIsOwner: (userProfile: IProfile) =>
            set((state: DashboardState) => {
                const currentDashboard = userProfile.dashboardsList.find(
                    ({ dashboardId }) => dashboardId === state.dashboardId,
                ) as IProfileDashboardListItem
                const userRole = currentDashboard.role
                state.isOwner = userRole === "owner"
            }),
    })),
)

export const useGetDashboardIdSelector = () =>
    useDashboardStore((s) => s.dashboardId)
