import Button from "@mui/material/Button"
import { useDeleteUserFromDashboardMutation } from "@/shared/api/users/hooks/useDeleteUserFromDashboardMutation"

interface ParticipantsItem {
    userId: string
    dashboardId: string
    isOwner: boolean
}

export const ParticipantsItem = ({
    dashboardId,
    userId,
    isOwner,
}: ParticipantsItem) => {
    const { mutate, isPending } = useDeleteUserFromDashboardMutation()
    if (!isOwner) return

    return (
        <Button
            onClick={() => {
                if (isPending) return
                mutate({
                    dashboardId: dashboardId,
                    userId: userId,
                })
            }}
        >
            {isPending ? "загрузка" : "исключить"}
        </Button>
    )
}
