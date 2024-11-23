import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import { ReactNode } from "react"
import { Card } from "@/shared/ui/Card"
import { cn } from "@/shared/lib/clsx"

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
            PaperProps={{ className }}
            aria-modal='true'
            maxWidth={maxWidth}
            fullScreen={fullScreen}
            fullWidth={fullWidth}
            open={open}
            onClose={onClose}
        >
            {title && <DialogTitle>{title}</DialogTitle>}
            <Card>{children}</Card>
        </Dialog>
    )
}
