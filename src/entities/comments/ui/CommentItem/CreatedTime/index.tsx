import s from "./created-time.module.scss"
import { format } from "@formkit/tempo"
import { cn } from "@/shared/lib/clsx"

interface CreatedTimeProps {
    date: Date
    format: Parameters<typeof format>[1]
    className?: string
}

export const CreatedTime = (props: CreatedTimeProps) => {
    const { date, className } = props

    return <p className={cn(s.date, className)}>{format(date, props.format)}</p>
}
