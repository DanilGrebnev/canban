import { DeleteBtnWithAccept } from "@/shared/ui/DeleteBtnWithAccept"
import { useDeleteColumnsMutation } from "@/shared/api/columns"

interface DeleteColumnBtnProps {
    columnId: string
}

export const DeleteColumnBtn = (props: DeleteColumnBtnProps) => {
    const { columnId } = props
    const { mutate } = useDeleteColumnsMutation()
    return (
        <DeleteBtnWithAccept
            tooltip2='Удалить группу'
            onDelete={() => mutate(columnId)}
        />
    )
}
