import MenuItem from "@mui/material/MenuItem"
import s from "./participants-item.module.scss"
import CheckIcon from "@mui/icons-material/Check"
import { cn } from "@/shared/lib/clsx"

interface ParticipantsItemProps {
    performer: string
    onClick: () => void
    isSelected: boolean
}

export const ParticipantsItem = (props: ParticipantsItemProps) => {
    const { isSelected, onClick, performer } = props

    return (
        <MenuItem
            key={performer}
            className={s["menu-item"]}
            onClick={onClick}
        >
            {performer}
            <CheckIcon
                className={cn(s["check-icon"], {
                    [s.selected]: isSelected,
                })}
            />
        </MenuItem>
    )
}
