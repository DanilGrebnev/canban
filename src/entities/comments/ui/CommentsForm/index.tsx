import { Chip, Collapse, Stack } from "@mui/material"
import { CustomIconButton } from "@/shared/ui/CustomIconButton"
import { CustomTextField, AddCommentBox } from "./MUICustomComponent"
import SendIcon from "@mui/icons-material/Send"
import Typography from "@mui/material/Typography"
import CancelIcon from "@mui/icons-material/Cancel"
import { useCreateCommentsMutation } from "@/shared/api/comments"
import { useForm } from "react-hook-form"
import { useOnClickOutside } from "usehooks-ts"
import { useRef } from "react"

interface CommentsFormProps {
    replyData?: {
        author: string
        text: string
    }
    todoId: string
    authorName: string
    setCollapsed: (value: boolean) => void
    collapsed: boolean
}

export const CommentsForm = (props: CommentsFormProps) => {
    const { replyData, collapsed, setCollapsed, authorName, todoId } = props

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{
        text: string
    }>()

    const { mutate } = useCreateCommentsMutation()

    const ref = useRef<HTMLDivElement | null>(null)

    const onSubmit = handleSubmit((data) => {
        mutate({ ...data, authorName, todoId, replyInfo: null })
    })

    useOnClickOutside(ref, () => setCollapsed(false))

    return (
        <AddCommentBox
            ref={ref}
            onClick={() => setCollapsed(true)}
            isActive={collapsed}
        >
            <form onSubmit={onSubmit}>
                <Collapse
                    in={collapsed}
                    timeout={300}
                >
                    {replyData && (
                        <Stack
                            direction='row'
                            alignItems='center'
                            spacing={1}
                            p={1}
                        >
                            <Chip
                                label={replyData?.author}
                                deleteIcon={<CancelIcon />}
                                onDelete={() => {}}
                            />
                            <Typography
                                variant='caption'
                                color='textDisabled'
                                noWrap
                                maxWidth='150px'
                            >{`: ${replyData?.text}`}</Typography>
                        </Stack>
                    )}
                </Collapse>

                <CustomTextField
                    {...register("text")}
                    multiline
                    placeholder='Написать комментарий...'
                />

                <Collapse
                    sx={{
                        width: "max-content",
                        justifySelf: "flex-end",
                    }}
                    in={collapsed}
                >
                    <Stack
                        p={1}
                        direction='row'
                        width='max-content'
                        justifyContent='center'
                        position='relative'
                    >
                        <CustomIconButton
                            centerRipple={false}
                            color='info'
                            type='submit'
                            sx={{ ml: "auto" }}
                        >
                            <SendIcon />
                        </CustomIconButton>
                    </Stack>
                </Collapse>
            </form>
        </AddCommentBox>
    )
}
