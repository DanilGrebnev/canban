"use client"

import { Modal } from "@/shared/ui/Modal"
import { useGetTodoDetailQuery } from "@/shared/api/todo"
import { useState } from "react"
import s from "./todo-detail.module.scss"
import { dateTransform } from "@/shared/lib/dateTransform"
import IconButton from "@mui/material/IconButton"
import { Collapse, Divider, Stack } from "@mui/material"
import { CommentsItem } from "@/entities/comments"
import Typography from "@mui/material/Typography"
import { ExpandMore } from "@mui/icons-material"

interface ToDoDetailModal {
    open: boolean
    onClose: () => void
    todoId?: string
}

export const ToDoDetailModal = (props: ToDoDetailModal) => {
    const { open, todoId, onClose } = props
    const [isCommentOpen, setCommentOpen] = useState<boolean>(false)

    const { data } = useGetTodoDetailQuery({
        enabled: open,
        todoId: todoId || "",
    })

    return (
        <Modal
            maxWidth='md'
            fullWidth={true}
            open={open}
            className={s.card}
            onClose={() => {
                onClose()
            }}
        >
            <div className={s.todo}>
                <h3 className={s.title}>{data?.todo}</h3>
                <h4 className={s.description}>
                    {data?.description || "Описание отсутствует"}
                </h4>

                <Stack
                    direction={"row"}
                    spacing={2}
                    alignItems={"center"}
                >
                    <Typography
                        variant={"caption"}
                        sx={{ fontStyle: "italic" }}
                        color={"textSecondary"}
                    >
                        Автор: {data?.author}
                    </Typography>
                    <Divider
                        flexItem={true}
                        variant={"middle"}
                        orientation={"vertical"}
                    />
                    <Typography
                        variant={"caption"}
                        color={"textSecondary"}
                        sx={{ fontStyle: "italic" }}
                    >
                        Дата создания:{" "}
                        {data?.creationDate &&
                            dateTransform(data?.creationDate)}
                    </Typography>
                    <Divider
                        flexItem={true}
                        variant={"middle"}
                        orientation={"vertical"}
                    />
                    <Typography
                        variant={"caption"}
                        color={"textSecondary"}
                        sx={{ fontStyle: "italic" }}
                    >
                        Комментариев: 5
                    </Typography>
                    <IconButton
                        size='small'
                        sx={{ ml: "auto" }}
                        onClick={() => setCommentOpen((prev) => !prev)}
                    >
                        <ExpandMore
                            sx={{
                                transform: `${isCommentOpen ? "rotate(180deg)" : ""}`,
                            }}
                            fontSize='small'
                        />
                    </IconButton>
                </Stack>
            </div>
            <Collapse in={isCommentOpen}>
                <CommentsItem />
            </Collapse>
        </Modal>
    )
}
