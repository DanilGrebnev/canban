import { FC } from "react"
import { Box } from "@mui/material"
import { CustomIconButton } from "@/shared/ui/CustomIconButton"
import ReplyIcon from "@mui/icons-material/Reply"
import Typography from "@mui/material/Typography"

interface CommentReplyActionProps {
    replyFn: () => void
}

export const CommentReplyAction: FC<CommentReplyActionProps> = ({
    replyFn,
}) => {
    return (
        <Box
            display='inline-flex'
            alignItems='center'
        >
            <CustomIconButton
                centerRipple={false}
                size='small'
                onClick={replyFn}
            >
                <ReplyIcon fontSize='small' />
            </CustomIconButton>
            <Typography
                color='textDisabled'
                variant='caption'
            >
                Ответить
            </Typography>
        </Box>
    )
}
