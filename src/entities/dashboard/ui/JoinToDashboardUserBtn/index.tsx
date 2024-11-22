"use client"

import { IconButton } from "@/shared/ui/IconButton"
import { useState } from "react"
import { JoinUserModal } from "./JoinUserModal"

export const JoinToDashboardUserBtn = () => {
    const [openJoinUserModal, setOpenJoinUserModal] = useState(false)

    return (
        <>
            <IconButton
                disableRipple={true}
                iconVariant='addPerson'
                iconFill='var(--icon-secondary-color)'
                onClick={() => setOpenJoinUserModal(true)}
            ></IconButton>
            <JoinUserModal
                open={openJoinUserModal}
                onClose={() => setOpenJoinUserModal(false)}
            />
        </>
    )
}
