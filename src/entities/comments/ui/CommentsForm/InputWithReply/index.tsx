import s from "./inputs-with-reply.module.scss"
import { useForm, Controller } from "react-hook-form"
import { SendBtn } from "./SendBtn"
import { forwardRef, useEffect } from "react"
import { cn } from "@/shared/lib/clsx"
import { CustomTextField } from "../MUICustomComponent"
import { ReplyInfo } from "./ReplyInfo"
import {
    IReplyData,
    useGetCommentsDetailSelector,
    useSetCommentsDetailSelector,
    useSetReplyData,
} from "@/shared/store/commentsStore"
import { inputRules } from "./inputRules"
import { useFocus } from "../../../model/context/FocusContext"
import { useChangeCommentsMutation } from "@/shared/api/comments/hooks/useChangeCommentsMutation"
import { CancelEditBtn } from "@/entities/comments/ui/CommentsForm/InputWithReply/CancelEditBtn"
import { Simulate } from "react-dom/test-utils"
import cancel = Simulate.cancel
import { Collapse } from "@mui/material"

interface InputWithReplyProps {
    onSubmit: (data: { text: string }) => void
    initialData?: { text: string } | null
    replyInfo?: IReplyData | null
    className?: string
    open?: boolean
    onClick?: () => void
    onFocus?: () => void
}

export const InputWithReply = forwardRef<HTMLDivElement, InputWithReplyProps>(
    (p, ref) => {
        const {
            getValues,
            resetField,
            trigger,
            setValue,
            handleSubmit,
            clearErrors,
            control,
            formState: { errors, isDirty },
        } = useForm<{ text: string }>({
            mode: "onChange",
            defaultValues: {
                text: "",
            },
        })

        const { mutate } = useChangeCommentsMutation()
        const { inputRef } = useFocus()

        const setReplyData = useSetReplyData()
        const setCommentsDetail = useSetCommentsDetailSelector()

        const commentsDetail = useGetCommentsDetailSelector() // прокидывание через пропсы вызывало срабатывание useEffect при каждом рендере. Из-за чего был рассинхрон
        const { commentId, todoId, text } = commentsDetail ?? {}
        const discardChange = () => {
            setCommentsDetail(null)
            resetField("text")
        }

        /* Set initial data */
        useEffect(() => {
            if (!commentsDetail?.text) return
            setValue("text", text!, {
                // добавил принудительную валидацию при обновлении value
                // принципиальной разницы в reset и setValue в нашем случае нет. Но семантически правильно будет использовать setValue. Т.к. поле одно
                shouldDirty: true,
                shouldValidate: true,
            })
        }, [commentsDetail])

        /* Reset inputs errors and field values after closed */
        useEffect(() => {
            if (!p.open) {
                clearErrors()
            }
        }, [p.open])

        /* Clear reply data after unmount */
        useEffect(() => {
            return () => {
                setReplyData(null)
            }
        }, [])

        return (
            <div
                ref={ref}
                onClick={p.onClick}
                onFocus={p.onFocus}
                className={cn(s.wrapper, p.className, { [s.open]: p.open })}
            >
                {commentsDetail && (
                    <CancelEditBtn
                        onClick={() => {
                            discardChange()
                        }}
                    />
                )}
                {p.replyInfo && (
                    <ReplyInfo
                        onClick={() => setReplyData(null)}
                        authorName={p.replyInfo.authorName}
                        replyText={p.replyInfo.replyText}
                    />
                )}
                <Controller
                    name='text'
                    rules={inputRules}
                    control={control}
                    render={({ field, formState: { errors } }) => (
                        <CustomTextField
                            {...field}
                            onFocus={() => trigger("text")} // необходим trigger, чтобы валидиировать сразу при клике, а не при изменении
                            inputRef={inputRef}
                            error={!!errors.text}
                            helperText={p.open && errors.text?.message}
                            multiline={true}
                            className={s.textarea}
                            placeholder='Введите комментарий'
                        />
                    )}
                />
                <SendBtn
                    disabled={!isDirty || !!errors.text}
                    className={cn(s["send-button"], {
                        [s.hidden]: !p.open,
                    })}
                    onClick={() => {
                        if (commentsDetail) {
                            mutate({
                                commentsId: commentId!,
                                commentText: { text: getValues("text") },
                                todoId: todoId!,
                            })
                        } else {
                            handleSubmit(p.onSubmit)()
                        }
                        discardChange()
                    }}
                />
            </div>
        )
    },
)
