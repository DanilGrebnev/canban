import { useQuery } from "@tanstack/react-query"
import { UsersApi } from "@/shared/api/users"
import { usersApiKeys } from "@/shared/api/users/usersApiKeys"

export const useGetProfileQuery = () => {
    return useQuery({
        queryFn: UsersApi.profile,
        queryKey: [usersApiKeys.profile],
    })
}
