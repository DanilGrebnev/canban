import { useMutation } from "@tanstack/react-query"
import { UsersApi } from "@/shared/api/users"

export const useJoinUserToDashboardMutation = () => {
    return useMutation({
        mutationFn: UsersApi.joinToDashboard,
    })
}
