import { type FC } from "react"
import { ParticipantsList } from "@/entities/user"
import { Modal } from "@/shared/ui/Modal"

interface Participants {
    open: boolean
    onClose: () => void
}

export const ParticipantsModal: FC<Participants> = ({ onClose, open }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <ParticipantsList />
        </Modal>
    )
}
