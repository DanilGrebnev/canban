import { api } from "@/shared/api/api-instance"
import { IProfile } from "@/shared/types/user"

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
}
