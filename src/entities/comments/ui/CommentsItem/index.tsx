import { Collapse, Divider, Stack } from "@mui/material"
import Box from "@mui/material/Box"
import { useState } from "react"

import Typography from "@mui/material/Typography"
import { CommentCard } from "./ui/CommentCard"
import { CommentAttachmentForm } from "./ui/CommentAttachmentForm"
import { CommentContextProvider } from "@/entities/comments/ui/CommentsItem/comment.context"

export const CommentsItem = () => {
    const [isOpenCommentInput, setOpenCommentInput] = useState(true)

    return (
        <CommentContextProvider>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginTop: 4,
                }}
            >
                <Stack direction='row'>
                    <Divider
                        textAlign='left'
                        component={"div"}
                        flexItem
                        sx={{ flexGrow: 1 }}
                    >
                        <Typography
                            color={"textDisabled"}
                            variant={"body2"}
                        >
                            Комментарии
                        </Typography>
                    </Divider>
                </Stack>
                <CommentCard
                    text={
                        "Вот и настал тот великий день, когда моё приложение обзавелось блоком комментариев! Теперь каждый может поделиться своим мнением, и я уверен, что оно будет только положительным. Ну, или по крайней мере, я научусь принимать критику с достоинством... и юмором!"
                    }
                    author={{ name: "Иван", isOwner: true }}
                    date={{
                        datePublished: "12.11.24",
                        timePublished: "14:43",
                    }}
                    isReply={false}
                    color={"red"}
                />
                <CommentCard
                    author={{ name: "Данил", isOwner: false }}
                    text={"Все хуйня давай по-новой 😘 "}
                    date={{
                        datePublished: "12.11.24",
                        timePublished: "16:34",
                    }}
                    color={"purple"}
                    isReply={false}
                />
                <CommentCard
                    author={{ name: "Иван", isOwner: true }}
                    text={"Почти все готово!"}
                    date={{
                        datePublished: "12.11.24",
                        timePublished: "19:22",
                    }}
                    color={"pink"}
                    isReply={true}
                />
                <Collapse in={isOpenCommentInput}>
                    <CommentAttachmentForm
                        replyData={{
                            author: "Данил",
                            text: "Все хуйня давай по-новой",
                        }}
                    />
                </Collapse>
            </Box>
        </CommentContextProvider>
    )
}
