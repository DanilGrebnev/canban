import { createContext, FC, ReactNode, useContext, useState } from "react"

interface Props {
    children?: ReactNode
}

type TVoidFn = () => void

interface CommentContextType {
    isReply: boolean
    isActive: boolean
    handleReplyUser: TVoidFn
    handleWrite: TVoidFn
    handleWriteOutsideClick: TVoidFn
    handleCancelReplyUser: TVoidFn
}

const CommentContext = createContext<CommentContextType | null>(null)

export const CommentContextProvider: FC<Props> = ({ children }) => {
    const [isReply, setReply] = useState<boolean>(false)
    const [isActive, setActive] = useState(false)

    const handleReplyUser = () => {
        setReply(true)
    }
    const handleCancelReplyUser = () => {
        setReply(false)
    }
    const handleWrite = () => {
        setActive(true)
    }
    const handleWriteOutsideClick = () => {
        setActive(false)
    }

    return (
        <CommentContext.Provider
            value={{
                handleReplyUser,
                handleCancelReplyUser,
                handleWrite,
                handleWriteOutsideClick,
                isReply,
                isActive,
            }}
        >
            {children}
        </CommentContext.Provider>
    )
}

export const useCommentContext = () => {
    const context = useContext(CommentContext)
    if (!context) {
        throw new Error(
            "useCommentContext must be used within a CommentContextProvider",
        )
    }
    return context
}
