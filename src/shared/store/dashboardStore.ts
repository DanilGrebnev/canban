import { create } from "zustand"
import { IProfile, IProfileDashboardListItem } from "@/shared/types/user"
import { immer } from "zustand/middleware/immer"

interface DashboardState {
    dashboardId: string | null
    isOwner: boolean
    setDashboardId: (dashboardId: string) => any
    setIsOwner: (userProfile: IProfile) => any
}

export const useDashboardStore = create<DashboardState>()(
    immer((set) => ({
        dashboardId: null,
        isOwner: false,
        setDashboardId: (dashboardId: string) =>
            set((state: DashboardState) => {
                state.dashboardId = dashboardId
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
