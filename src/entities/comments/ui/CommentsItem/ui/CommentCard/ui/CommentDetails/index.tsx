import React, { FC } from "react"
import { Chip, Stack, Typography, useTheme } from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

interface PostDetailsProps {
    author: string
    date: string
    isReply: boolean
}

export const CommentDetails: FC<PostDetailsProps> = ({
    author,
    date,
    isReply,
}) => {
    const theme = useTheme()
    return (
        <Stack
            spacing={2}
            direction='row'
            alignItems={"center"}
        >
            <Typography
                fontWeight={500}
                variant='body1'
            >
                {author}
            </Typography>
            <Typography
                variant={"body2"}
                color={"textSecondary"}
            >
                {date}
            </Typography>
            {isReply && (
                <>
                    <Typography
                        color={"textDisabled"}
                        variant={"caption"}
                    >
                        В ответ:
                    </Typography>
                    <Chip
                        size={"small"}
                        icon={<AccountCircleIcon />}
                        title={"12.11.24 : 16:34"}
                        label={"Данил"}
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
