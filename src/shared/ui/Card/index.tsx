import MUICard from "@mui/material/Card"
import { TChildren } from "@/shared/types/Children"
import s from "./card.module.scss"
import { cn } from "@/shared/lib/clsx"
type CardVariant = Parameters<typeof MUICard>[0]["variant"]

interface TCard extends TChildren {
    className?: string
    variant?: CardVariant
    onClick?: () => void
}

export const Card = ({ children, className, variant, onClick }: TCard) => {
    return (
        <MUICard
            onClick={onClick}
            variant={variant}
            className={cn(s.card, className)}
        >
            {children}
        </MUICard>
    )
}
