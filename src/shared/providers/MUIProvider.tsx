"use client"

import { StyledEngineProvider } from "@mui/material"
import { TChildren } from "@/shared/types/Children"

export const MUIProvider = ({ children }: TChildren) => {
    return (
        <StyledEngineProvider injectFirst={true}>
            {children}
        </StyledEngineProvider>
    )
}
