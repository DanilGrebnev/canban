import { useQuery } from "@tanstack/react-query"
import { TodoApi } from "@/shared/api/todo/todoApi"
import { todosApiKey } from "@/shared/api/todo/todosApiKey"

interface UseGetTodoQuery {
    columnId: string
}

export const useGetToDoQuery = (args: UseGetTodoQuery) => {
    return useQuery({
        queryFn: () => TodoApi.getTodos(args.columnId),
        queryKey: [todosApiKey.todoList, args.columnId],
    })
}
