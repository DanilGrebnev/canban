import { useQuery } from "@tanstack/react-query"
import { UsersApi } from "@/shared/api/users"
import { usersApiKeys } from "@/shared/api/users/usersApiKeys"

export const useGetDashboardParticipantsQuery = (
    dashboardId?: string | null,
) => {
    return useQuery({
        queryFn: () => UsersApi.getDashboardParticipants(dashboardId || ""),
        queryKey: [usersApiKeys.participants, dashboardId],
        enabled: !!dashboardId,
    })
}
