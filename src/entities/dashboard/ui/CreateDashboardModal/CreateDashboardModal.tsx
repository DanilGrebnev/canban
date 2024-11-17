"use client"

import { TextField } from "@mui/material"
import { IconButton } from "@/shared/ui/IconButton"
import { Modal } from "@/shared/ui/Modal"
import { useCreateDashboardMutation } from "@/shared/api/dashboards/hooks/useCreateDashboardMutation"
import { useForm } from "react-hook-form"
import { useEffect } from "react"

interface CreateDashboardModalProps {
    open: boolean
    onClose: () => void
}

export const CreateDashboardModal = (props: CreateDashboardModalProps) => {
    const { open, onClose } = props
    const { mutate, error } = useCreateDashboardMutation()
    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors },
    } = useForm<{ dashboardName: string }>({ mode: "onBlur" })

    const onSubmit = handleSubmit((data) => {
        mutate(data.dashboardName)
        onClose()
    })

    useEffect(() => {
        return () => {
            if (open) return
            clearErrors("dashboardName")
        }
    }, [open])

    return (
        <Modal
            open={open}
            onClose={onClose}
            title='Создание доски'
        >
            <form onSubmit={onSubmit}>
                <TextField
                    {...register("dashboardName", {
                        required: "Поле не может быть пустым",
                    })}
                    error={!!errors.dashboardName}
                    helperText={errors.dashboardName?.message}
                    label='Название доски'
                    variant='standard'
                />
                <IconButton
                    type='submit'
                    color='success'
                    iconVariant='done'
                />
            </form>
        </Modal>
    )
}
