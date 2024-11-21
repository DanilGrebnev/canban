import { IconButton } from "@/shared/ui/IconButton"
import { useState } from "react"
import { ParticipantsModal } from "./ParticipantsModal"

export const ShowDashboardParticipantsBtn = () => {
    const [openParticipantsModal, setOpenParticipantsModal] = useState(false)

    return (
        <>
            <IconButton
                tooltip='Посмотреть участников'
                iconVariant='peopleList'
                iconFill='var(--icon-secondary-color)'
                onClick={() => {
                    setOpenParticipantsModal(true)
                }}
            />

            <ParticipantsModal
                open={openParticipantsModal}
                onClose={() => setOpenParticipantsModal(false)}
            />
        </>
    )
}
