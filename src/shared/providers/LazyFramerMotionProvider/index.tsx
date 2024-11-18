"use client"

import { LazyMotion, domAnimation } from "motion/react"
import { TChildren } from "@/shared/types/Children"

export const LazyFramerMotionProvider = ({ children }: TChildren) => {
    return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}
