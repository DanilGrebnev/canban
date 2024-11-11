"use client"

import List from "@mui/material/List"
import { useGetDashboardParticipantsQuery } from "@/shared/api/users"
import { useGetDashboardIdSelector } from "@/shared/store/dashboardStore"
import s from "./participants.module.scss"
import PeopleIcon from "@mui/icons-material/PermIdentityOutlined"
import { useDashboardRole } from "@/entities/user"
import { ParticipantsItem } from "@/entities/user/ui/ParticipantsList/ParticipantsItem"

export const ParticipantsList = () => {
    const dashboardId = useGetDashboardIdSelector()
    const { data } = useGetDashboardParticipantsQuery(dashboardId)
    const { isDashboardOwner, profileId } = useDashboardRole()

    return (
        <List className={s.wrapper}>
            {data?.map((participant) => {
                return (
                    <div
                        className={s.item}
                        key={participant._id}
                    >
                        <div className={s["user-info"]}>
                            <PeopleIcon />
                            <p>{participant.name}</p>
                        </div>
                        {profileId === participant._id ? (
                            <div>Вы</div>
                        ) : (
                            <ParticipantsItem
                                isOwner={isDashboardOwner}
                                userId={participant._id}
                                dashboardId={dashboardId || ""}
                            />
                        )}
                    </div>
                )
            })}
        </List>
    )
}
