export interface IProfile {
    _id: string
    name: string
    password: string
    login: string
    dashboardsList: IProfileDashboardListItem[]
}
export type IUserRole = "owner" | "employee"

export interface IProfileDashboardListItem {
    _id: string
    dashboardId: string
    dashboardName: string
    role: IUserRole
}

export interface IRegistration {
    name: string
    password: string
    login: string
}
