import { api } from "@/shared/api/api-instance"
import { IProfile, IRegistration } from "@/shared/types/user"

const usersApi = api.extend(({ prefixUrl }) => ({
    prefixUrl: prefixUrl + "/users",
}))

interface LoginResponse {
    auth: string
}

export const UsersApi = {
    login: (data: { login: string; password: string }) =>
        usersApi
            .post("login", { json: data, credentials: "include" })
            .json<LoginResponse>(),

    profile: () =>
        usersApi.get("profile", { credentials: "include" }).json<IProfile>(),

    registration: (data: IRegistration) =>
        usersApi
            .post("registration", { json: data, credentials: "include" })
            .json(),

    searchUser: (userName: string) => {
        return usersApi
            .get("search", { searchParams: { name: userName } })
            .json<IProfile[]>()
    },

    joinToDashboard: (data: { dashboardId: string; userId: string }) => {
        return usersApi
            .post("join", { json: data, credentials: "include" })
            .json()
    },

    getDashboardParticipants: (dashboardId: string) => {
        return usersApi
            .get(`participants/${dashboardId}`, {
                credentials: "include",
            })
            .json<IProfile[]>()
    },
}
