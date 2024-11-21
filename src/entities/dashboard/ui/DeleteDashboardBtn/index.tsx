"use client"

import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined"
import IconButton from "@mui/material/IconButton"
import { useEffect, useState } from "react"
import { Modal } from "@/shared/ui/Modal"
import { TextField } from "@mui/material"
import Typography from "@mui/material/Typography"
import {
    useDeleteDashboardMutation,
    useGetDashboardsDetailQuery,
} from "@/shared/api/dashboards"
import { useForm } from "react-hook-form"
import Button from "@mui/material/Button"

export const DeleteDashboardBtn = () => {
    const [open, setOpen] = useState(false)
    const {
        register,
        handleSubmit,
        trigger,
        setValue,
        formState: { errors },
    } = useForm<{ dashboardName: string }>({ mode: "all" })

    const { data: dashboardData } = useGetDashboardsDetailQuery()
    const { mutate, isPending, isSuccess } = useDeleteDashboardMutation()

    useEffect(() => {
        trigger("dashboardName")
        return () => setValue("dashboardName", "")
    }, [open])

    const onSubmit = handleSubmit(() => {
        mutate(dashboardData?._id as string)
    })

    return (
        <>
            <IconButton onClick={() => setOpen(true)}>
                <DeleteIcon sx={{ fill: "var(--icon-secondary-color)" }} />
            </IconButton>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Typography
                    variant='body2'
                    component='div'
                >
                    Для удаления доски введите
                    <div className={"flex justify-center text-[red] text-200"}>
                        "<b>{dashboardData?.dashboardName}</b>"
                    </div>
                </Typography>
                <div className={"flex flex-col"}>
                    <TextField
                        {...register("dashboardName", {
                            required: true,
                            pattern: new RegExp(
                                dashboardData?.dashboardName as string,
                            ),
                        })}
                        variant='standard'
                    />
                    <Button
                        disabled={
                            !!errors.dashboardName || isPending || isSuccess
                        }
                        onClick={onSubmit}
                        color='error'
                    >
                        Удалить
                    </Button>
                </div>
            </Modal>
        </>
    )
}
