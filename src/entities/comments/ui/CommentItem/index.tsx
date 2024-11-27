import { FC, memo } from "react"
import {
    useSetCommentsDetailSelector,
    useSetReplyData,
} from "@/shared/store/commentsStore"
import s from "./comments-item.module.scss"
import { ICommentsDTO } from "@/shared/api/comments"
import { EditCommentBtn } from "./EditCommentBtn"
import { ReplyBtn } from "./ReplyBtn"
import { ReplyInfo } from "./ReplyInfo"
import { CreatedTime } from "./CreatedTime"
import { CommentHeader } from "./CommentHeader"
import { IconButton } from "@/shared/ui/IconButton"
import { DeleteCommentBtn } from "./DeleteCommentBtn"
import Typography from "@mui/material/Typography"
import { useFocus } from "@/entities/comments/model/context/FocusContext"
import { EditNote } from "@mui/icons-material"

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
    const { handleFocus } = useFocus()
    const setReplyData = useSetReplyData()
    const setCommentsDetail = useSetCommentsDetailSelector()

    return (
        <li className={s.container}>
            <CommentHeader
                authorName={authorName}
                createdDate={createdDate}
                actionButtons={
                    owner && (
                        <>
                            <EditCommentBtn
                                onClick={() => {
                                    setCommentsDetail({
                                        text,
                                        todoId,
                                        commentId: _id,
                                    })
                                    handleFocus()
                                }}
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
                    onClick={() => {
                        setReplyData({
                            authorId,
                            authorName,
                            replyText: text,
                        })
                        handleFocus()
                    }}
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
