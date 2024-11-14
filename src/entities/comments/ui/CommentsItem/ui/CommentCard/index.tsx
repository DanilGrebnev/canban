import { Avatar, Box, Chip, Stack, Typography } from "@mui/material"
import { FC } from "react"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { CommentDetails } from "./ui/CommentDetails"
import { CommentOwnerAction } from "./ui/CommentOwnerAction"
import { CommentReplyAction } from "./ui/CommentReplyAction"
import { useCommentContext } from "@/entities/comments/ui/CommentsItem/comment.context"

interface CommentsThreadProps {
    author: {
        name: string
        isOwner: boolean
    }

    text: string
    date: {
        datePublished: string
        timePublished: string
    }
    color?: string
    isReply: boolean
}

export const CommentCard: FC<CommentsThreadProps> = ({
    author,
    text,
    date,
    color,
    isReply,
}) => {
    const { handleReplyUser, handleWrite } = useCommentContext()
    return (
        <>
            <Box
                display='flex'
                sx={{ mt: 1 }}
            >
                <Avatar
                    sx={{ width: 30, height: 30, backgroundColor: color ?? "" }}
                >
                    {author.name[0]}
                </Avatar>
                <Box
                    ml={2}
                    flexGrow={1}
                >
                    <Stack direction={"row"}>
                        <CommentDetails
                            author={author.name}
                            date={date.datePublished}
                            isReply={isReply}
                        />
                        <CommentOwnerAction
                            owner={author.isOwner}
                            handleDelete={() => console.log("delete")}
                            handleEdit={() => console.log("edit")}
                        />
                    </Stack>
                    <Typography
                        mt={2}
                        variant='subtitle1'
                        color='text.primary'
                    >
                        {text}
                    </Typography>
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                    >
                        <CommentReplyAction
                            owner={author.isOwner}
                            replyFn={() => {
                                handleWrite()
                                handleReplyUser()
                            }}
                        />
                        <Typography
                            variant={"caption"}
                            color={"textDisabled"}
                            ml={"auto"}
                            mr={2}
                        >
                            {date.timePublished}
                        </Typography>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}
