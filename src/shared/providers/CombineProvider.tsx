"use client"

import { TChildren } from "@/shared/types/Children"
import { TanStackQueryProvider } from "./TanStackQueryProvider/TanStackQueryProvider"
import { MUIProvider } from "@/shared/providers/MUIProvider"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { InitialAuthProvider } from "./InitialAuthProvider/InitialAuthProvider"
import dynamic from "next/dynamic"

const LazyInitialAuthProvider = dynamic(
    () =>
        import("./InitialAuthProvider/InitialAuthProvider").then(
            ({ InitialAuthProvider }) => InitialAuthProvider,
        ),
    { ssr: false },
)

export const CombineProvider = ({ children }: TChildren) => {
    return (
        <TanStackQueryProvider>
            <MUIProvider>
                <LazyInitialAuthProvider>
                    <InitialAuthProvider>{children}</InitialAuthProvider>
                </LazyInitialAuthProvider>
            </MUIProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </TanStackQueryProvider>
    )
}
