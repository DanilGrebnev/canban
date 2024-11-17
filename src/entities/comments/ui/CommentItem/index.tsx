import { FC, memo, useEffect } from "react"
import { useCommentsStore } from "@/shared/store/commentsStore"
import s from "./comments-item.module.scss"
import { ICommentsDTO } from "@/shared/api/comments/types"
import { format } from "@formkit/tempo"
import Avatar from "@mui/material/Avatar"
import { ReplyBtn } from "./ReplyBtn"

interface CommentsProps extends ICommentsDTO {
    owner: boolean
}

export const CommentItem: FC<CommentsProps> = memo((props) => {
    const {
        todoId,
        owner,
        replyInfo,
        authorName,
        authorId,
        text,
        _id,
        createdDate,
    } = props

    const setReplyData = useCommentsStore((s) => s.setReplyData)

    return (
        <li className={s["comments-container"]}>
            <div className={s["user-info"]}>
                <Avatar className={s.avatar} />
                <p className={s.username}>{authorName}</p>
                <div className={s.date}>
                    {format(createdDate, { date: "long" })}
                </div>
                {replyInfo && (
                    <div className={s["reply-content"]}>
                        в ответ: <p>{replyInfo?.authorName}</p>
                    </div>
                )}
            </div>
            <div className={s.text}>{text}</div>
            <footer className={s.footer}>
                <ReplyBtn
                    onClick={() =>
                        setReplyData({ authorId, authorName, replyText: text })
                    }
                    owner={owner}
                />
                <div className={s.time}>
                    {format(createdDate, { time: "short" })}
                </div>
            </footer>
        </li>
    )
})

CommentItem.displayName = "CommentItem"
