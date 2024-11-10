import { TextField } from "@mui/material"
import { IconButton as UIIconButton } from "@/shared/ui/IconButton"
import { Modal } from "@/shared/ui/Modal"
import { useCreateColumnMutation } from "@/shared/api/columns/hooks/useCreateColumnMutation"
import { useForm } from "react-hook-form"
import { useDashboardStore } from "@/shared/store/dashboardStore"

interface ICreateColumnModal {
    open: boolean
    onClose: () => void
}

export const CreateColumnModal = ({ onClose, open }: ICreateColumnModal) => {
    const { register, handleSubmit } = useForm<{ columnName: string }>()
    const dashboardId = useDashboardStore((s) => s.dashboardId)
    const { mutate } = useCreateColumnMutation()

    const onSubmit = handleSubmit(({ columnName }) => {
        mutate({ dashboardId, columnName })
    })

    return (
        <Modal
            open={open}
            onClose={onClose}
            title='Создание колонки'
        >
            <form onSubmit={onSubmit}>
                <TextField {...register("columnName")} />
                <UIIconButton
                    type='submit'
                    iconVariant='done'
                />
            </form>
        </Modal>
    )
}
