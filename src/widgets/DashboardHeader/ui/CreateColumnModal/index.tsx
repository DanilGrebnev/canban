import { Alert, TextField } from "@mui/material"
import { IconButton as UIIconButton } from "@/shared/ui/IconButton"
import { Modal } from "@/shared/ui/Modal"
import { useCreateColumnMutation } from "@/shared/api/columns/hooks/useCreateColumnMutation"
import { useForm } from "react-hook-form"
import { useDashboardStore } from "@/shared/store/dashboardStore"
import { useEffect } from "react"

interface ICreateColumnModal {
    open: boolean
    onClose: () => void
}

export const CreateColumnModal = ({ onClose, open }: ICreateColumnModal) => {
    const { register, handleSubmit } = useForm<{ columnName: string }>()
    const dashboardId = useDashboardStore((s) => s.dashboardId)
    const { mutate, isError, isSuccess } = useCreateColumnMutation()

    const onSubmit = handleSubmit(({ columnName }) => {
        mutate({ dashboardId, columnName })
    })

    useEffect(() => {
        if (isError) return
        onClose()
    }, [isError, isSuccess])

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
            {isError && <Alert severity='error'>Ошибка создание колонки</Alert>}
        </Modal>
    )
}
