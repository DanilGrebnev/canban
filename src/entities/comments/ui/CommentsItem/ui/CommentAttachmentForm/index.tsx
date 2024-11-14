import { Chip, Collapse, Stack } from "@mui/material"
import Box from "@mui/material/Box"
import { CustomIconButton } from "@/shared/ui/CustomIconButton"
import { CustomTextField, AddCommentBox } from "./MuiCustomComponents"
import SendIcon from "@mui/icons-material/Send"
import AttachFileIcon from "@mui/icons-material/AttachFile"
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate"
import Typography from "@mui/material/Typography"
import CancelIcon from "@mui/icons-material/Cancel"
import { useCommentContext } from "@/entities/comments/ui/CommentsItem/comment.context"
import { useEffect, useState } from "react"

interface TProps {
    replyData?: {
        author: string
        text: string
    }
}

export const CommentAttachmentForm = ({ replyData }: TProps) => {
    const {
        isReply,
        isActive,
        handleWrite,
        handleWriteOutsideClick,
        handleCancelReplyUser,
    } = useCommentContext()
    const [showReplyContent, setShowReplyContent] = useState(isReply)

    useEffect(() => {
        if (isReply) {
            setShowReplyContent(true)
        } else {
            const timer = setTimeout(() => setShowReplyContent(false), 300)
            return () => clearTimeout(timer)
        }
    }, [isReply])
    return (
        <AddCommentBox isActive={isActive}>
            <Collapse
                in={isReply}
                timeout={300}
            >
                {showReplyContent && (
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1}
                        p={1}
                    >
                        <Chip
                            label={replyData?.author}
                            deleteIcon={<CancelIcon />}
                            onDelete={handleCancelReplyUser}
                        />
                        <Typography
                            variant={"caption"}
                            color={"textDisabled"}
                            noWrap
                            maxWidth={"150px"}
                        >{`: ${replyData?.text}`}</Typography>
                    </Stack>
                )}
            </Collapse>

            <CustomTextField
                onClick={handleWrite}
                onBlur={handleWriteOutsideClick}
                multiline
                placeholder={"Написать комментарий..."}
            />

            <Collapse in={isActive}>
                <Stack
                    p={1}
                    direction='row'
                    justifyContent={"center"}
                >
                    <Box
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                        }}
                    >
                        <CustomIconButton
                            centerRipple={false}
                            size={"medium"}
                        >
                            <AttachFileIcon fontSize='medium' />
                        </CustomIconButton>
                        <CustomIconButton
                            centerRipple={false}
                            size={"medium"}
                        >
                            <AddPhotoAlternateIcon fontSize='medium' />
                        </CustomIconButton>
                    </Box>
                    <CustomIconButton
                        centerRipple={false}
                        color={"info"}
                        sx={{ ml: "auto" }}
                    >
                        <SendIcon />
                    </CustomIconButton>
                </Stack>
            </Collapse>
        </AddCommentBox>
    )
}
