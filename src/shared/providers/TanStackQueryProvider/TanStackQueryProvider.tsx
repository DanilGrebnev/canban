"use client"

import { QueryClientProvider } from "@tanstack/react-query"
import { TChildren } from "@/shared/types/Children"
import { getQueryClient } from "@/shared/providers/TanStackQueryProvider/getQueryClient"

export const TanStackQueryProvider = ({ children }: TChildren) => {
    const queryClient = getQueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
