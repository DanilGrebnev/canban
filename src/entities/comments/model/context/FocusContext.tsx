import {
    createContext,
    FC,
    ReactNode,
    RefObject,
    useContext,
    useRef,
} from "react"

interface FocusContextValue {
    focusRef: RefObject<HTMLInputElement>
    handleFocus: () => void
}

const FocusContext = createContext<FocusContextValue | null>(null)

export const FocusProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const focusRef = useRef<HTMLInputElement>(null)

    const handleFocus = () => {
        if (focusRef.current) {
            const clickEvent = new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
            })

            focusRef.current.dispatchEvent(clickEvent)
            focusRef.current.focus()
        }
    }
    return (
        <FocusContext.Provider value={{ focusRef, handleFocus }}>
            {children}
        </FocusContext.Provider>
    )
}

export const useFocus = () => {
    const context = useContext(FocusContext)
    if (!context) {
        throw new Error("Хук вне провайдера")
    }
    return context
}
