import { useQuery } from "@tanstack/react-query"
import { UsersApi } from "@/shared/api/users"
import { usersApiKeys } from "@/shared/api/users/usersApiKeys"

export const useSearchUserQuery = (userName: string) => {
    return useQuery({
        queryFn: () => UsersApi.searchUser(userName),
        queryKey: [usersApiKeys.searchUser, userName],
    })
}
