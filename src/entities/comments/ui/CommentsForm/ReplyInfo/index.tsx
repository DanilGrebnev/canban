import s from "./reply-info.module.scss"
import { Chip } from "@mui/material"
import CancelIcon from "@mui/icons-material/Cancel"

interface ReplyInfoProps {
    onClick: () => void
    authorName: string
    replyText: string
}

export const ReplyInfo = (props: ReplyInfoProps) => {
    const { replyText, onClick, authorName } = props

    return (
        <div className={s["reply-info"]}>
            <Chip
                label={authorName}
                deleteIcon={<CancelIcon />}
                onDelete={onClick}
            />
            <p>{replyText}</p>
        </div>
    )
}
