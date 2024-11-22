import { useMutation, useQueryClient } from "@tanstack/react-query"
import { TodoApi } from "@/shared/api/todo/todoApi"
import { IChangeTodoDTO } from "@/shared/api/todo"
import { todosApiKey } from "@/shared/api/todo/todosApiKey"

export const useChangeTodoMutation = () => {
    const client = useQueryClient()

    return useMutation({
        mutationFn: ({
            todoId,
            todoData,
        }: {
            todoId: string
            todoData: IChangeTodoDTO
        }) => TodoApi.changeTodo(todoId, todoData),
        onSuccess: (_, variables) => {
            client.invalidateQueries({
                queryKey: [todosApiKey.todoDetail, variables.todoId],
            })
            client.invalidateQueries({
                queryKey: [todosApiKey.todoList],
            })
        },
    })
}
