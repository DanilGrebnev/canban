"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { TChildren } from "@/shared/types/Children"

const queryClient = new QueryClient()

export const TanStackQueryProvider = ({ children }: TChildren) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
