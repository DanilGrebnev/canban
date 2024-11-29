import {
    createContext,
    FC,
    ReactNode,
    RefObject,
    useContext,
    useRef,
} from "react"

interface FocusContextValue {
    inputRef: RefObject<HTMLInputElement>
    handleFocus: () => void
}

const FocusContext = createContext<FocusContextValue | null>(null)

export const FocusProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleFocus = () => {
        if (inputRef.current) {
            const clickEvent = new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
            })

            inputRef.current.dispatchEvent(clickEvent)
            inputRef.current.focus()
        }
    }
    return (
        <FocusContext.Provider value={{ inputRef, handleFocus }}>
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
