import MUICard from "@mui/material/Card"
import s from "./card.module.scss"
import { cn } from "@/shared/lib/clsx"

type MUICardProps = Parameters<typeof MUICard>[0]

export const Card = ({ children, className, ...other }: MUICardProps) => {
    return (
        <MUICard
            {...other}
            className={cn(s.card, className)}
        >
            {children}
        </MUICard>
    )
}
