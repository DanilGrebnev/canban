import s from "./comment-header.module.scss"
import Avatar from "@mui/material/Avatar"
import { CreatedTime } from "@/entities/comments/ui/CommentItem/CreatedTime"
import { ReactNode } from "react"

interface HeaderProps {
    authorName: string
    createdDate: Date
    replyInfo?: ReactNode
    actionButtons?: ReactNode | ReactNode[]
}

export const CommentHeader = (props: HeaderProps) => {
    const { replyInfo, authorName, createdDate, actionButtons } = props

    return (
        <div className={s["user-info"]}>
            <Avatar className={s.avatar} />
            <p className={s.username}>{authorName}</p>
            <CreatedTime
                date={createdDate}
                format={{ date: "long" }}
            />
            {replyInfo}
            {actionButtons && <div className={s.buttons}>{actionButtons}</div>}
        </div>
    )
}
