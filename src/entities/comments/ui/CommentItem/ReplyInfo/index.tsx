import s from "./reply-info.module.scss"

interface ReplyInfoProps {
    replyInfo: {
        authorName: string
        authorId: string
        date: Date
    } | null
}

export const ReplyInfo = (props: ReplyInfoProps) => {
    return props.replyInfo ? (
        <div className={s["reply-content"]}>
            в ответ: <p>{props?.replyInfo?.authorName}</p>
        </div>
    ) : null
}
