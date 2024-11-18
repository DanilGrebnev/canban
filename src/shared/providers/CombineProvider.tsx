"use client"

import { TChildren } from "@/shared/types/Children"
import { TanStackQueryProvider } from "./TanStackQueryProvider/TanStackQueryProvider"
import { MUIProvider } from "@/shared/providers/MUIProvider"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { InitialAuthProvider } from "@/shared/providers/InitialAuthProvider/InitialAuthProvider"
import { LazyFramerMotionProvider } from "@/shared/providers/LazyFramerMotionProvider"

export const CombineProvider = ({ children }: TChildren) => {
    return (
        <TanStackQueryProvider>
            <MUIProvider>
                <LazyFramerMotionProvider>
                    <InitialAuthProvider>{children}</InitialAuthProvider>
                </LazyFramerMotionProvider>
            </MUIProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </TanStackQueryProvider>
    )
}
