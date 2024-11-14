import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UsersApi } from "@/shared/api/users"
import { useRouter } from "next/navigation"
import { routes } from "@/shared/routes"
import { usersApiKeys } from "@/shared/api/users/usersApiKeys"

export const useRegistrationMutation = () => {
    const router = useRouter()
    const client = useQueryClient()

    return useMutation({
        mutationFn: UsersApi.registration,
        onSuccess: () => {
            router.push(routes.dashboardList)
            client.invalidateQueries({ queryKey: [usersApiKeys.profile] })
        },
    })
}
