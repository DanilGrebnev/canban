import { useMutation, useQueryClient } from "@tanstack/react-query"
import { TodoApi } from "@/shared/api/todo/todoApi"
import { todosApiKey } from "@/shared/api/todo/todosApiKey"

export const useRemoveTodoMutation = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: (query: { todoId: string; columnId: string }) =>
            TodoApi.removeTodo(query.todoId),
        onSuccess: (removedTodo, query) => {
            client.invalidateQueries({
                queryKey: [todosApiKey.todoList, query.columnId],
            })
        },
    })
}
