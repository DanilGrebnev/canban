import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

type State = {
    todoId: string
    openTodoDetailModal: boolean
}

type Actions = {
    setTodoId: (todoId: string) => void
    toggleOpenTodoDetailModal: (open: boolean) => void
}

export const useTodoStore = create<State & Actions>()(
    immer((set) => ({
        todoId: "",
        openTodoDetailModal: false,
        toggleOpenTodoDetailModal: (open) =>
            set((state: State) => {
                state.openTodoDetailModal = open
            }),
        setTodoId: (todoId) =>
            set((state: State) => {
                state.todoId = todoId
            }),
    })),
)

export const useGetTodoId = () => useTodoStore((s) => s.todoId)

export const useSetTodoId = () => useTodoStore((s) => s.setTodoId)

export const useGetIsOpenTodoDetailModal = () =>
    useTodoStore((s) => s.openTodoDetailModal)

export const setIsOpenTodoDetailModal = () =>
    useTodoStore((s) => s.toggleOpenTodoDetailModal)
