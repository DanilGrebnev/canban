"use client"

import { Modal } from "@/shared/ui/Modal"
import { useGetTodoDetailQuery } from "@/shared/api/todo"
import { useState } from "react"
import s from "./todo-detail.module.scss"
import { ToDoInfo } from "./ToDoInfo"
import { CommentsForm, CommentsList } from "@/entities/comments"
import { useGetProfileQuery } from "@/shared/api/users"

interface ToDoDetailModal {
    open: boolean
    onClose: () => void
    todoId?: string
}

export const ToDoDetailModal = (props: ToDoDetailModal) => {
    const { open, todoId, onClose } = props
    const [openComments, setCommentOpen] = useState(false)
    const [collapsedCommentForm, setCollapsedCommentForm] = useState(false)

    const { data: todoData } = useGetTodoDetailQuery({
        enabled: open,
        todoId: todoId || "",
    })
    const { data: profile } = useGetProfileQuery()

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
            <CommentsList
                open={openComments}
                todoId={todoId || ""}
            />
            <CommentsForm
                todoId={todoId || ""}
                collapsed={collapsedCommentForm}
                setCollapsed={(value: boolean) =>
                    setCollapsedCommentForm(value)
                }
                authorName={profile?.name || ""}
                replyData={{
                    author: "Ivan",
                    text: "1asdasdaaasasdasdasdaqwaasdasdasd",
                }}
            />
        </Modal>
    )
}
