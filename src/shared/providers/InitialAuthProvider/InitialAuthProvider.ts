"use client"

import { TChildren } from "@/shared/types/Children"
import { useGetProfileQuery } from "@/shared/api/users"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { routes } from "@/shared/routes"

export const InitialAuthProvider = ({ children }: TChildren) => {
    const { isError } = useGetProfileQuery()
    const router = useRouter()

    useEffect(() => {
        if (!isError) return
        router.replace(routes.login)
    }, [isError])

    return children
}
