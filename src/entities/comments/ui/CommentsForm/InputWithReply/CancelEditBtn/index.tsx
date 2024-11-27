import { CustomIconButton } from "@/shared/ui/CustomIconButton"
import CancelIcon from "@mui/icons-material/Cancel"

interface CancelEditBtnProps {
    onClick: () => void
    className?: string
}

export const CancelEditBtn = (p: CancelEditBtnProps) => {
    return (
        <CustomIconButton
            centerRipple={false}
            onBlur={(e) => e.stopPropagation()}
            {...p}
        >
            <CancelIcon />
        </CustomIconButton>
    )
}
