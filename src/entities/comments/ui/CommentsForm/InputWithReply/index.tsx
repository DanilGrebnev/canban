import s from "./inputs-with-reply.module.scss"
import { useForm, Controller } from "react-hook-form"
import { SendBtn } from "./SendBtn"
import { forwardRef, useEffect } from "react"
import { cn } from "@/shared/lib/clsx"
import { CustomTextField } from "../MUICustomComponent"
import { ReplyInfo } from "../ReplyInfo"
import { IReplyData, useSetReplyData } from "@/shared/store/commentsStore"
import { inputRules } from "./inputRules"

interface InputWithReplyProps {
    onSubmit: (data: { text: string }) => void
    initialData?: { text: string }
    replyInfo?: IReplyData | null
    className?: string
    open?: boolean
    onClick?: () => void
    onFocus?: () => void
    onBlur?: () => void
}

export const InputWithReply = forwardRef<HTMLDivElement, InputWithReplyProps>(
    (p, ref) => {
        const {
            handleSubmit,
            reset,
            resetField,
            clearErrors,
            control,
            formState: { errors, isDirty },
        } = useForm<{ text: string }>({
            mode: "onChange",
            defaultValues: {
                text: "",
            },
        })

        const setReplyData = useSetReplyData()

        /* Set initial data */
        useEffect(() => {
            if (!p.initialData) return
            reset(p.initialData)
        }, [p.initialData])

        useEffect(() => {
            if (!p.open) {
                clearErrors()
                resetField("text")
            }
        }, [p.open])

        /* Clear reply date after unmount */
        useEffect(() => {
            return () => setReplyData(null)
        }, [])

        return (
            <div
                ref={ref}
                onClick={p.onClick}
                onFocus={p.onFocus}
                onBlur={p.onBlur}
                className={cn(s.wrapper, p.className, { [s.open]: p.open })}
            >
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
                    className={cn(s["send-button"], { hidden: !p.open })}
                    onClick={handleSubmit(p.onSubmit)}
                />
            </div>
        )
    },
)
