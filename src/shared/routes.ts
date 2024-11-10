export const routes = {
    login: "/login",
    registration: "/registration",
    dashboard: (dashboardId: string) => `/dashboard/${dashboardId}`,
    dashboardList: "/dashboard-list",
}
