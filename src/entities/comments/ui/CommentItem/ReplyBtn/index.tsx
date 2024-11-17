import s from "./reply-btn.module.scss"
import ReplyIcon from "@mui/icons-material/Reply"

interface ReplyBtnProps {
    owner: boolean
    onClick?: () => void
}

export const ReplyBtn = (props: ReplyBtnProps) => {
    const { owner, onClick } = props

    if (owner) {
        return <p className={s["reply-btn"]}>Вы</p>
    }
    return (
        <button
            onClick={onClick}
            className={s["reply-btn"]}
        >
            <ReplyIcon />
            Ответить
        </button>
    )
}
