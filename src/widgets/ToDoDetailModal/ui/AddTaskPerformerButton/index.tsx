import { IconButton } from "@/shared/ui/IconButton"
import React, { FC, forwardRef, MouseEvent } from "react"

interface Props {
    open: boolean
    onClick: () => void
    id: string
}

export const AddTaskPerformerButton = forwardRef<HTMLButtonElement, Props>(
    (p, ref) => {
        return (
            <IconButton
                ref={ref}
                onClick={p.onClick}
                size='small'
                iconVariant='addGroupPerson'
                tooltip='Добавить исполнителя(-ей)'
                aria-controls={p.open ? p.id : undefined}
                aria-haspopup='true'
                aria-expanded={p.open ? "true" : undefined}
            />
        )
    },
)

AddTaskPerformerButton.displayName = "AddTaskPerformerButton"
