import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import { DialogContent } from "@mui/material"
import { ReactNode } from "react"

interface TChangeDashboardTaskInfoModal {
    open: boolean
    onClose: (e: any) => void
    children: ReactNode
    title?: string
    className?: string
    fullScreen?: boolean
    fullWidth?: boolean
    maxWidth?: Parameters<typeof Dialog>[0]["maxWidth"]
}

export const Modal = (props: TChangeDashboardTaskInfoModal) => {
    const {
        onClose,
        fullScreen = false,
        className,
        open,
        children,
        title,
        maxWidth,
        fullWidth,
    } = props

    return (
        <Dialog
            maxWidth={maxWidth}
            fullScreen={fullScreen}
            fullWidth={fullWidth}
            open={open}
            onClose={onClose}
        >
            {title && <DialogTitle>{title}</DialogTitle>}
            <DialogContent className={className}>{children}</DialogContent>
        </Dialog>
    )
}
