import { Avatar, Box, Stack, Typography } from "@mui/material"
import { FC, memo } from "react"
import { CommentDetails } from "./CommentDetails"
import { CommentOwnerAction } from "./CommentOwnerAction"
import { CommentReplyAction } from "./CommentReplyAction"
import { format } from "@formkit/tempo"
import { useCommentsStore } from "@/shared/store/commentsStore"

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
    isReply?: boolean
}

export const CommentItem: FC<CommentsThreadProps> = memo(
    ({ author, text, date, color, isReply }) => {
        return (
            <>
                <Box
                    display='flex'
                    sx={{ mt: 1 }}
                >
                    <Avatar
                        sx={{
                            width: 30,
                            height: 30,
                            backgroundColor: color ?? "",
                        }}
                    >
                        {author.name[0]}
                    </Avatar>
                    <Box
                        ml={2}
                        flexGrow={1}
                    >
                        <Stack direction='row'>
                            <CommentDetails
                                author={author.name}
                                date={date.datePublished}
                                replyInfo={{
                                    authorName: "Ivan",
                                    // date: format(
                                    //     '',
                                    //     "full",
                                    // ),
                                    date: "08/12/1998",
                                }}
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
                            direction='row'
                            alignItems='center'
                        >
                            {!author.isOwner && (
                                <CommentReplyAction replyFn={() => {}} />
                            )}
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
    },
)

CommentItem.displayName = "CommentItem"
