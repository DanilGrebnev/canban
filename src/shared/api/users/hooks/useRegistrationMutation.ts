import { useMutation } from "@tanstack/react-query"
import { UsersApi } from "@/shared/api/users"
import { useRouter } from "next/navigation"
import { routes } from "@/shared/routes"

export const useRegistrationMutation = () => {
    const router = useRouter()

    return useMutation({
        mutationFn: UsersApi.registration,
        onSuccess: (data) => {
            router.push(routes.dashboardList)
            console.log(data)
        },
    })
}
