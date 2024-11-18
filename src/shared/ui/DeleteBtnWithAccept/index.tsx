"use client"

import { useRef, useState } from "react"
import { useOnClickOutside } from "usehooks-ts"
import Tooltip from "@mui/material/Tooltip"
import IconButton from "@mui/material/IconButton"
import ErrorIcon from "@mui/icons-material/Error"
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined"

interface DeleteBtnWithAcceptProps {
    onDelete?: () => void
    tooltip1?: string
    tooltip2?: string
}

export const DeleteBtnWithAccept = (props: DeleteBtnWithAcceptProps) => {
    const [deleteMode, setDeleteMode] = useState(false)

    const ref = useRef<any>(null)

    useOnClickOutside(ref, () => setDeleteMode(false))

    return (
        <span ref={ref}>
            {deleteMode ? (
                <Tooltip title={props?.tooltip2}>
                    <IconButton
                        className='rounded-[5px]'
                        onClick={props.onDelete}
                    >
                        <ErrorIcon color='error' />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title={props?.tooltip1}>
                    <IconButton
                        centerRipple={false}
                        onClick={() => setDeleteMode(true)}
                        className='rounded-[5px]'
                    >
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            )}
        </span>
    )
}
