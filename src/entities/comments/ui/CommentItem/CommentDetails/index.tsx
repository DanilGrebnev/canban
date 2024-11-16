import { FC } from "react"
import { Chip, Stack, Typography, useTheme } from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

type IReplyInfo = {
    authorName: string
    date: string
}

interface PostDetailsProps {
    author: string
    date: string
    replyInfo: IReplyInfo | null
}

export const CommentDetails: FC<PostDetailsProps> = ({
    author,
    date,
    replyInfo,
}) => {
    const theme = useTheme()

    return (
        <Stack
            spacing={2}
            direction='row'
            alignItems='center'
        >
            <Typography
                fontWeight={500}
                variant='body1'
            >
                {author}
            </Typography>
            <Typography
                variant='body2'
                color='textSecondary'
            >
                {date}
            </Typography>
            {replyInfo && (
                <>
                    <Typography
                        color='textDisabled'
                        variant='caption'
                    >
                        В ответ:
                    </Typography>
                    <Chip
                        size='small'
                        icon={<AccountCircleIcon />}
                        title={replyInfo.date}
                        label={replyInfo.authorName}
                        sx={{
                            ml: 1,
                            fontSize: theme.typography.caption,
                            color: theme.palette.text.secondary,
                        }}
                    ></Chip>
                </>
            )}
        </Stack>
    )
}
