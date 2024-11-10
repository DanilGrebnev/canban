"use client"

import { TChildren } from "@/shared/types/Children"
import { TanStackQueryProvider } from "./TanStackQueryProvider"
import { MUIProvider } from "@/shared/providers/MUIProvider"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export const CombineProvider = ({ children }: TChildren) => {
    return (
        <TanStackQueryProvider>
            <MUIProvider>{children}</MUIProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </TanStackQueryProvider>
    )
}
