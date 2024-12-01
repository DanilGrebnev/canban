import { useMutation, useQueryClient } from "@tanstack/react-query"
import { TMoveTodoToAnotherColumn, TodoApi } from "@/shared/api/todo/todoApi"
import { todosApiKey } from "@/shared/api/todo/todosApiKey"

type IMutationFn = {
    fromColumnId: string
} & TMoveTodoToAnotherColumn

export const useMoveTodoToAnotherColumnMutation = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: ({ todoId, columnId }: IMutationFn) =>
            TodoApi.moveTodoToAnotherColumn({ columnId, todoId }),

        onSuccess: (_, { columnId, fromColumnId }) => {
            client.invalidateQueries({
                queryKey: [todosApiKey.todoList, columnId],
            })
            client.invalidateQueries({
                queryKey: [todosApiKey.todoList, fromColumnId],
            })
        },
    })
}
