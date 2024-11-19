"use client"

import AccountCircle from "@mui/icons-material/AccountCircle"
import IconButton from "@mui/material/IconButton"
import { useState } from "react"
import { ProfileMenu } from "../ProfileMenu"
import Typography from "@mui/material/Typography"
import { useGetProfileQuery } from "@/shared/api/users/hooks/useGetProfileQuery"
import s from "./profile.module.scss"

export const UserProfile = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const { data: profile, isFetching } = useGetProfileQuery()

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <div className={s.profile}>
                <Typography className={s.name}>{profile?.name}</Typography>
                <IconButton
                    size='medium'
                    aria-label='account of current user'
                    aria-controls='menu-appbar'
                    aria-haspopup='true'
                    color='inherit'
                    onClick={handleClick}
                >
                    <AccountCircle
                        sx={{ fill: "var(--secondary-color)" }}
                        fontSize='large'
                    />
                </IconButton>
            </div>

            <ProfileMenu
                isAuth={!!profile && !isFetching}
                anchorEl={anchorEl}
                handleClose={handleClose}
                open={open}
            />
        </>
    )
}
