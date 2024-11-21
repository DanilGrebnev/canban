export interface TDashboardsListItem {
    dashboardName: string
    ownersId: string[]
    createdDate: Date
    participants: string[]
    _id: string
}

export interface IDashboardsDTO {
    _id: string
    createdDate: Date
    participants: string[]
    dashboardName: string
}
