import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import { DialogContent } from "@mui/material"
import { ReactNode } from "react"

interface TChangeDashboardTaskInfoModal {
    open: boolean
    onClose: () => void
    children: ReactNode
    title?: string
}

export const Modal = (props: TChangeDashboardTaskInfoModal) => {
    const { onClose, open, children, title } = props

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            {title && <DialogTitle>{title}</DialogTitle>}
            <DialogContent>{children}</DialogContent>
        </Dialog>
    )
}
