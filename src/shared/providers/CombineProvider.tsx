import { TChildren } from "@/shared/types/Children"
import { MUIProvider } from "@/shared/providers/MUIProvider"
import { TanStackQueryProvider } from "@/shared/providers/TanStackQueryProvider"

export const CombineProvider = ({ children }: TChildren) => {
    return (
        <TanStackQueryProvider>
            <MUIProvider>{children}</MUIProvider>
        </TanStackQueryProvider>
    )
}
