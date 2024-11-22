import { FC, memo } from "react"
import { useCommentsStore, useSetReplyData } from "@/shared/store/commentsStore"
import s from "./comments-item.module.scss"
import { ICommentsDTO } from "@/shared/api/comments"
import { ReplyBtn } from "./ReplyBtn"
import { ReplyInfo } from "./ReplyInfo"
import { CreatedTime } from "./CreatedTime"
import { CommentHeader } from "./CommentHeader"
import { IconButton } from "@/shared/ui/IconButton"
import Pencil from "@mui/icons-material/Create"
import { DeleteCommentBtn } from "./DeleteCommentBtn"
import Typography from "@mui/material/Typography"

interface CommentsProps extends ICommentsDTO {
    owner: boolean
}

export const CommentItem: FC<CommentsProps> = memo((props) => {
    const {
        _id,
        todoId,
        owner,
        replyInfo,
        authorName,
        authorId,
        text,
        createdDate,
    } = props

    const setReplyData = useSetReplyData()

    return (
        <li className={s.container}>
            <CommentHeader
                authorName={authorName}
                createdDate={createdDate}
                actionButtons={
                    owner && (
                        <>
                            <IconButton
                                iconVariant='pencil'
                                className='rounded-[5px]'
                            />
                            <DeleteCommentBtn
                                todoId={todoId}
                                commentId={_id}
                            />
                        </>
                    )
                }
                replyInfo={<ReplyInfo replyInfo={replyInfo} />}
            />
            <Typography component='pre'>{text}</Typography>

            <footer className={s.footer}>
                <ReplyBtn
                    owner={owner}
                    onClick={() =>
                        setReplyData({
                            authorId,
                            authorName,
                            replyText: text,
                        })
                    }
                />
                <CreatedTime
                    className={s.time}
                    date={createdDate}
                    format={{ time: "short" }}
                />
            </footer>
        </li>
    )
})

CommentItem.displayName = "CommentItem"
