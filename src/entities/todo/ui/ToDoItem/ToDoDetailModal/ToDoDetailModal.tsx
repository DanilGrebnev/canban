"use client"

import { Modal } from "@/shared/ui/Modal"
import { useGetTodoDetailQuery } from "@/shared/api/todo"
import { useEffect } from "react"
import s from "./todo-detail.module.scss"
import { dateTransform } from "@/shared/lib/dateTransform"

interface ToDoDetailModal {
    open: boolean
    onClose: () => void
    todoId?: string
}

export const ToDoDetailModal = (props: ToDoDetailModal) => {
    const { open, todoId, onClose } = props

    const { data } = useGetTodoDetailQuery({
        enabled: open,
        todoId: todoId || "",
    })

    return (
        <Modal
            maxWidth='md'
            fullWidth={true}
            open={open}
            className={s.card}
            onClose={() => {
                onClose()
            }}
        >
            <div className={s.todo}>
                <h3 className={s.title}>{data?.todo}</h3>
                <h4 className={s.description}>
                    {data?.description || "Описание отсутствует"}
                </h4>
                <p>Автор: {data?.author}</p>
                <div className={s.comment}></div>
                <p className={s.date}>
                    Дата создания:{" "}
                    {data?.creationDate && dateTransform(data?.creationDate)}
                </p>
            </div>
        </Modal>
    )
}
