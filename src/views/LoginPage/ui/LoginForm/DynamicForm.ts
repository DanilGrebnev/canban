"use client"
import dynamic from "next/dynamic"

export const DynamicForm = dynamic(
    () => import("./").then(({ LoginForm }) => LoginForm),
    { ssr: false },
)
