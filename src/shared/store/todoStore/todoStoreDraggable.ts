import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

type State = {
    columnIdUnderDraggedElement: string | null
}

type Actions = {
    setIdColumnUnderDraggedElement: (columnId: string | null) => void
}

export const useTodoDraggableStore = create<State & Actions>()(
    immer((set) => ({
        columnIdUnderDraggedElement: null,
        setIdColumnUnderDraggedElement: (columnId) => {
            set((state: State) => {
                state.columnIdUnderDraggedElement = columnId
            })
        },
    })),
)

export const useGetIdColumnUnderDraggedElement = () =>
    useTodoDraggableStore((s) => s.columnIdUnderDraggedElement)

export const useSetIdColumnUnderDraggedElement = () =>
    useTodoDraggableStore((s) => s.setIdColumnUnderDraggedElement)
