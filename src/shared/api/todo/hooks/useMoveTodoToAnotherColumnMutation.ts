import { useMutation, useQueryClient } from "@tanstack/react-query"
import { TMoveTodoToAnotherColumn, TodoApi } from "@/shared/api/todo/todoApi"
import { todosApiKey } from "@/shared/api/todo/todosApiKey"

export const useMoveTodoToAnotherColumnMutation = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: (args: TMoveTodoToAnotherColumn) =>
            TodoApi.moveTodoToAnotherColumn(args),

        onSuccess: () => {
            client.invalidateQueries({ queryKey: [todosApiKey.todoList] })
        },
    })
}
