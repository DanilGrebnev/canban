"use client"

import { IconButton } from "@/shared/ui/IconButton"
import { FC } from "react"

interface Props {
    onClick?: () => void
}

export const EditCommentBtn: FC<Props> = (p) => {
    return (
        <IconButton
            iconVariant='pencil'
            className='rounded-[5px]'
            onClick={p.onClick}
        />
    )
}
