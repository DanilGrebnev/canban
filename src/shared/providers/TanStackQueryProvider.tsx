"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { TChildren } from "@/shared/types/Children"

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
})

export const TanStackQueryProvider = ({ children }: TChildren) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
