"use client"

import { Modal } from "@/shared/ui/Modal"
import { useGetTodoDetailQuery } from "@/shared/api/todo"
import { useState } from "react"
import s from "./todo-detail.module.scss"
import { ToDoInfo } from "./ui/TodoInfo/ToDoInfo"
import { CommentsForm, CommentsList } from "@/entities/comments"
import { useGetProfileQuery } from "@/shared/api/users"
import {
    setIsOpenTodoDetailModal,
    useGetIsOpenTodoDetailModal,
    useGetTodoId,
} from "@/shared/store/todoStore"
import { FocusProvider } from "@/entities/comments/model/context/FocusContext"

export const ToDoDetailModal = () => {
    const [openComments, setCommentOpen] = useState(false)
    const [collapsedCommentForm, setCollapsedCommentForm] = useState(false)

    const open = useGetIsOpenTodoDetailModal()
    const todoId = useGetTodoId()
    const toggleIsOpenModalTodo = setIsOpenTodoDetailModal()

    const { data: todoData } = useGetTodoDetailQuery({
        enabled: open && !!todoId,
        todoId,
    })
    const { data: profile } = useGetProfileQuery()

    return (
        <Modal
            maxWidth='lg'
            fullWidth={true}
            open={open}
            className={s.card}
            onClose={() => {
                toggleIsOpenModalTodo(false)
            }}
        >
            <div className={s.todo}>
                <h3 className={s.title}>{todoData?.todo}</h3>
                <h4 className={s.description}>
                    {todoData?.description || "Описание отсутствует"}
                </h4>

                <ToDoInfo
                    openComment={openComments}
                    setOpenComment={() => setCommentOpen((p) => !p)}
                    todo={todoData}
                />
            </div>
            <FocusProvider>
                <CommentsList
                    open={openComments}
                    todoId={todoId}
                />
                <CommentsForm
                    todoId={todoId}
                    collapsed={collapsedCommentForm}
                    setCollapsed={(value: boolean) =>
                        setCollapsedCommentForm(value)
                    }
                    authorName={profile?.name || ""}
                />
            </FocusProvider>
        </Modal>
    )
}
