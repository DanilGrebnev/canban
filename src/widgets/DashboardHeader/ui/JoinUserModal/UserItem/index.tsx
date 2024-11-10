import s from "@/widgets/DashboardHeader/ui/JoinUserModal/s.module.scss"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { Card } from "@mui/material"
import { useJoinUserToDashboardMutation } from "@/shared/api/users/hooks/useJoinUserToDashboardMutation"
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined"
import IconButton from "@mui/material/IconButton"
import CircularProgress from "@mui/material/CircularProgress"

interface UserItem {
    userId: string
    userName: string
    participants: boolean
    dashboardId: string
}

export const UserItem = (props: UserItem) => {
    const { userId, userName, dashboardId, participants } = props
    const {
        mutate: joinUserMutate,
        isPending,
        isSuccess,
    } = useJoinUserToDashboardMutation()

    return (
        <Card
            elevation={1}
            className={s.user}
            key={userId}
        >
            <Typography>{userName}</Typography>
            {participants ? (
                <Typography>Участник</Typography>
            ) : (
                <>
                    {isPending ? (
                        <CircularProgress size={25} />
                    ) : (
                        <IconButton
                            onClick={() => {
                                joinUserMutate({
                                    userId,
                                    dashboardId,
                                })
                            }}
                        >
                            <PersonAddAltOutlinedIcon />
                        </IconButton>
                    )}
                </>
            )}
        </Card>
    )
}
