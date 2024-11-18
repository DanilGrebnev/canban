"use client"

import { TChildren } from "@/shared/types/Children"
import { useGetProfileQuery } from "@/shared/api/users"

export const InitialAuthProvider = ({ children }: TChildren) => {
    useGetProfileQuery()
    return children
}
