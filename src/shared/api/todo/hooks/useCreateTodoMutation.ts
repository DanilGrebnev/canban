import { useMutation, useQueryClient } from "@tanstack/react-query"
import { TodoApi } from "@/shared/api/todo/todoApi"
import { todosApiKey } from "@/shared/api/todo/todosApiKey"

export const useCreateTodoMutation = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: TodoApi.createTodo,
        onSuccess: (createdTodo) => {
            client.invalidateQueries({
                queryKey: [todosApiKey.todoList, createdTodo.columnId],
            })
        },
    })
}
