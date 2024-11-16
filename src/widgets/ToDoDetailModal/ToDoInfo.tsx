import Typography from "@mui/material/Typography"
import { Divider, Stack } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import { ExpandMore } from "@mui/icons-material"
import { TTodoItem } from "@/shared/types/todos"
import { format } from "@formkit/tempo"

interface ToDoFooterProps {
    todo?: TTodoItem
    openComment: boolean
    setOpenComment: () => void
}

export const ToDoInfo = (props: ToDoFooterProps) => {
    const { todo, openComment, setOpenComment } = props

    return (
        <Stack
            direction='row'
            spacing={2}
            alignItems='center'
        >
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
                size='small'
                sx={{ ml: "auto" }}
                onClick={() => setOpenComment()}
            >
                <ExpandMore
                    sx={{
                        transform: openComment ? "rotate(180deg)" : "",
                    }}
                    fontSize='small'
                />
            </IconButton>
        </Stack>
    )
}
