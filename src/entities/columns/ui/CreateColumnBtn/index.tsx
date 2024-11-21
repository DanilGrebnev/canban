"use client"

import { IconButton } from "@/shared/ui/IconButton"
import { useState } from "react"
import { CreateColumnModal } from "./CreateColumnModal"

export const CreateColumnBtn = () => {
    const [openCreateColumnModal, setCreateOpenModal] = useState(false)

    return (
        <>
            <IconButton
                iconVariant='table'
                iconFill='var(--icon-secondary-color)'
                onClick={() => setCreateOpenModal(true)}
            />

            <CreateColumnModal
                open={openCreateColumnModal}
                onClose={() => setCreateOpenModal(false)}
            />
        </>
    )
}
