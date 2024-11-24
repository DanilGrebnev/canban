"use client"

import { CustomIconButton } from "@/shared/ui/CustomIconButton"
import SendIcon from "@mui/icons-material/Send"
import s from "./send-btn.module.scss"

interface SendBtnProps {
    onClick?: () => void
    disabled?: boolean
    className?: string
}

export const SendBtn = (props: SendBtnProps) => {
    return (
        <CustomIconButton
            className={s["send-button"]}
            centerRipple={false}
            color='info'
            type='submit'
            {...props}
        >
            <SendIcon />
        </CustomIconButton>
    )
}
