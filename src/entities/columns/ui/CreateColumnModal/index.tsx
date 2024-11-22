import { Alert, TextField } from "@mui/material"
import { IconButton as UIIconButton } from "@/shared/ui/IconButton"
import { Modal } from "@/shared/ui/Modal"
import { useCreateColumnMutation } from "@/shared/api/columns"
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
            title='Создание группы'
        >
            <TextField
                variant='standard'
                label='Введите название группы'
                {...register("columnName", {
                    required: true,
                })}
            />
            <UIIconButton
                onClick={onSubmit}
                type='submit'
                iconVariant='done'
            />
            {isError && <Alert severity='error'>Ошибка создания группы</Alert>}
        </Modal>
    )
}
