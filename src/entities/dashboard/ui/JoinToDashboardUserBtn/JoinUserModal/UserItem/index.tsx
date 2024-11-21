import Typography from "@mui/material/Typography"
import { Card } from "@mui/material"
import { useJoinUserToDashboardMutation } from "@/shared/api/users"
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
    const { mutate: joinUserMutate, isPending } =
        useJoinUserToDashboardMutation()

    return (
        <Card
            elevation={1}
            key={userId}
            className={
                "flex gap-[--gap] p-[--gap] justify-between items-center"
            }
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
