import Typography from "@mui/material/Typography"
import { Divider, Stack } from "@mui/material"
import { IconButton } from "@/shared/ui/IconButton"
import { TTodoItem } from "@/shared/types/todos"
import { format } from "@formkit/tempo"
import { AddTaskPerformerButton } from "../AddTaskPerformerButton"
import { useRef, useState } from "react"
import { ParticipantSelectionMenu } from "../ParticipantSelectionMenu"
import s from "./todo-info.module.scss"
import { cn } from "@/shared/lib/clsx"

interface ToDoFooterProps {
    todo?: TTodoItem
    openComment: boolean
    setOpenComment: () => void
}

export const ToDoInfo = (props: ToDoFooterProps) => {
    const { todo, openComment, setOpenComment } = props
    const [open, setOpen] = useState(false)
    const anchorRef = useRef<HTMLButtonElement>(null)

    return (
        <div className={s.wrapper}>
            <Typography
                variant='caption'
                sx={{ fontStyle: "italic" }}
                color='textSecondary'
            >
                Автор: {todo?.author}
            </Typography>
            <Divider
                flexItem={true}
                variant='middle'
                orientation='vertical'
            />
            <Typography
                variant='caption'
                color='textSecondary'
                sx={{ fontStyle: "italic" }}
            >
                {todo?.creationDate && format(todo?.creationDate, "full")}
            </Typography>
            <Divider
                flexItem={true}
                variant='middle'
                orientation='vertical'
            />
            <Typography
                variant='caption'
                color='textSecondary'
                sx={{ fontStyle: "italic" }}
            >
                {`Комментариев: ${todo?.commentsAmount}`}
            </Typography>
            <IconButton
                iconVariant='expandMore'
                className={cn({ [s.open]: openComment })}
                size='small'
                fontSize='small'
                onClick={() => setOpenComment()}
            />
            <div className={s["participants-block"]}>
                <Typography
                    variant='caption'
                    color='textSecondary'
                    sx={{ fontStyle: "italic" }}
                >
                    {`Участников: 2`}
                </Typography>
                <AddTaskPerformerButton
                    ref={anchorRef}
                    onClick={() => setOpen(true)}
                    open={open}
                    id='add-task-performer'
                />
                <ParticipantSelectionMenu
                    anchorEl={anchorRef.current}
                    open={open}
                    handleClose={() => setOpen(false)}
                    id='add-task-performer'
                />
            </div>
        </div>
    )
}
