import { useMutation, useQueryClient } from "@tanstack/react-query"
import { TodoApi } from "@/shared/api/todo/todoApi"
import { todosApiKey } from "@/shared/api/todo/todosApiKey"

export const useRemoveTodoMutation = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: TodoApi.removeTodo,
        onSuccess: (removedTodo) => {
            client.invalidateQueries({
                queryKey: [todosApiKey.todoList, removedTodo.columnId],
            })
        },
    })
}
