export interface IProfile {
    _id: string
    name: string
    password: string
    login: string
    dashboardsList: IProfileDashboardListItem[]
}

export interface IProfileDashboardListItem {
    _id: string
    dashboardId: string
    dashboardName: string
    role: "owner" | "employee"
}

export interface IRegistration {
    name: string
    password: string
    login: string
}
