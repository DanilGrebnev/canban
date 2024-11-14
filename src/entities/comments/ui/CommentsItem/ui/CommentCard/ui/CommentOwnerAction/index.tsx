import React, { FC } from "react"
import { CustomIconButton } from "@/shared/ui/CustomIconButton"
import { Box, Stack } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

interface CommentOwnerActionProps {
    handleDelete: () => void
    handleEdit: () => void
    owner: boolean
}

export const CommentOwnerAction: FC<CommentOwnerActionProps> = ({
    handleDelete,
    handleEdit,
    owner,
}) => {
    return (
        <>
            {owner && (
                <Box
                    ml={"auto"}
                    mr={1}
                >
                    <CustomIconButton
                        onClick={handleEdit}
                        centerRipple={false}
                        size={"small"}
                    >
                        <EditIcon fontSize='small' />
                    </CustomIconButton>
                    <CustomIconButton
                        onClick={handleDelete}
                        centerRipple={false}
                        size={"small"}
                    >
                        <DeleteIcon fontSize='small' />
                    </CustomIconButton>
                </Box>
            )}
        </>
    )
}
