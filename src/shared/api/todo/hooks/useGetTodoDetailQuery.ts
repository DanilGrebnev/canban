import { useQuery } from "@tanstack/react-query"
import { TodoApi } from "@/shared/api/todo/todoApi"
import { todosApiKey } from "@/shared/api/todo/todosApiKey"

interface TOptions {
    enabled: boolean
    todoId: string
}

export const useGetTodoDetailQuery = (options: TOptions) => {
    const { enabled, todoId } = options

    return useQuery({
        queryFn: () => TodoApi.getTodoDetail(todoId),
        enabled: enabled && !!todoId,
        queryKey: [todosApiKey.todoDetail, todoId],
    })
}
