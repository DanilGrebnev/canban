import { Modal } from "@/shared/ui/Modal"
import { Card, TextField } from "@mui/material"
import s from "./s.module.scss"
import { useDashboardStore } from "@/shared/store/dashboardStore"
import { useEffect, useMemo, useState } from "react"
import { useSearchUserQuery } from "@/shared/api/users/hooks/useSearchUserQuery"
import { useDebounce } from "use-debounce"
import Button from "@mui/material/Button"
import { useGetProfileQuery } from "@/shared/api/users/hooks/useGetProfileQuery"
import { useJoinUserToDashboardMutation } from "@/shared/api/users/hooks/useJoinUserToDashboardMutation"

interface JoinUserModal {
    open: boolean
    onClose: () => void
}

export const JoinUserModal = ({ open, onClose }: JoinUserModal) => {
    const dashboardId = useDashboardStore((s) => s.dashboardId) || ""

    const { data: profile } = useGetProfileQuery()

    const [userName, setUserName] = useState("")
    const [debounceName] = useDebounce(userName, 500)

    const { data: fondedUsers } = useSearchUserQuery(debounceName)
    const { mutate: joinUser, isSuccess } = useJoinUserToDashboardMutation()

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
                    {filteredUsers?.map(({ _id, name }) => {
                        return (
                            <Card
                                elevation={1}
                                className={s.user}
                                key={_id}
                            >
                                {name}
                                <Button
                                    onClick={() => {
                                        joinUser({ userId: _id, dashboardId })
                                    }}
                                >
                                    Добавить
                                </Button>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </Modal>
    )
}
