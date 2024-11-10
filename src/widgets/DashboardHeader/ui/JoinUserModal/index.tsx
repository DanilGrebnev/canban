"use client"

import { Modal } from "@/shared/ui/Modal"
import { TextField } from "@mui/material"
import s from "./s.module.scss"
import { useDashboardStore } from "@/shared/store/dashboardStore"
import { useMemo, useState } from "react"
import { useDebounce } from "use-debounce"
import { useGetProfileQuery, useSearchUserQuery } from "@/shared/api/users"
import { UserItem } from "./UserItem"

interface JoinUserModal {
    open: boolean
    onClose: () => void
}

export const JoinUserModal = (props: JoinUserModal) => {
    const { open, onClose } = props
    const dashboardId = useDashboardStore((s) => s.dashboardId) || ""

    const { data: profile } = useGetProfileQuery()

    const [userName, setUserName] = useState("")
    const [debounceName] = useDebounce(userName, 500)

    const { data: fondedUsers } = useSearchUserQuery(debounceName)

    const filteredUsers = useMemo(
        () => fondedUsers?.filter((user) => user._id !== profile?._id),
        [fondedUsers],
    )

    return (
        <Modal
            title='Добавление участника'
            open={open}
            onClose={onClose}
        >
            <div className={s["modal-content"]}>
                <TextField
                    className={s.input}
                    label='Имя пользователя'
                    variant='standard'
                    onChange={(e) => setUserName(e.target.value)}
                />
                <div className={s["join-user-list"]}>
                    {filteredUsers?.map(({ _id, name, dashboardsList }) => {
                        const participants = !!dashboardsList.find((d) => {
                            return d.dashboardId === dashboardId
                        })

                        return (
                            <UserItem
                                key={_id}
                                dashboardId={dashboardId}
                                participants={participants}
                                userId={_id}
                                userName={name}
                            />
                        )
                    })}
                </div>
            </div>
        </Modal>
    )
}
