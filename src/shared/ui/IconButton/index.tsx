import TrendingFlatIcon from "@mui/icons-material/TrendingFlat"
import { IconButton as MUIIconButton } from "@mui/material"
import Tooltip from "@mui/material/Tooltip"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined"
import { ReactElement, ReactNode } from "react"

type TMUIIconButton = Parameters<typeof MUIIconButton>[0]

type MUISVGType = Parameters<typeof DeleteOutlinedIcon>[0]

const icons = {
    pencil: DriveFileRenameOutlineOutlinedIcon,
    delete: DeleteOutlinedIcon,
    arrow: TrendingFlatIcon,
}

type TIconButton = {
    tooltip?: string
    iconVariant: keyof typeof icons
} & TMUIIconButton &
    MUISVGType
/*
 * Usage example
 * @example
 * <IconButton
 *   iconVariant='delete'
 *   color='error'
 *  />
 */
export const IconButton = (props: TIconButton) => {
    const {
        tooltip,
        color,
        fontSize = "medium",
        iconVariant,
        ...otherProps
    } = props
    let Icon: any

    Icon = icons[iconVariant]

    return (
        <ToolTip tooltip={tooltip}>
            <MUIIconButton
                type='button'
                {...otherProps}
            >
                <Icon
                    fontSize={fontSize}
                    color={color}
                />
            </MUIIconButton>
        </ToolTip>
    )
}

function ToolTip({
    children,
    tooltip,
}: {
    tooltip?: string
    children: ReactElement<unknown, any>
}) {
    return tooltip ? (
        <Tooltip title={tooltip}>{children}</Tooltip>
    ) : (
        <>{children}</>
    )
}
