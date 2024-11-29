import { IconButton as MUIIconButton } from "@mui/material"
import Tooltip from "@mui/material/Tooltip"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import { forwardRef } from "react"
import { icons } from "./icons"

type TMUIIconButton = Parameters<typeof MUIIconButton>[0]

type MUISVGType = Parameters<typeof DeleteOutlinedIcon>[0]

type TIconButton = {
    tooltip?: string
    iconVariant: keyof typeof icons
    iconFill?: string
} & TMUIIconButton &
    MUISVGType
/*
 * Usage example
 * @example
 * <IconButton
 *   iconVariant='delete'
 *   // Заливка иконки (любая строка с цветом. Не работет, если указано значение color)
 *   iconFill='black'
 *   color='error'
 *  />
 */
export const IconButton = forwardRef<HTMLButtonElement, TIconButton>(
    (props, ref) => {
        const {
            tooltip,
            color,
            fontSize = "medium",
            iconFill,
            centerRipple = false,
            iconVariant,
            size,
            ...otherProps
        } = props
        let Icon: any

        Icon = icons[iconVariant]

        return (
            <Tooltip title={tooltip}>
                <MUIIconButton
                    ref={ref}
                    centerRipple={centerRipple}
                    type='button'
                    size={size}
                    {...otherProps}
                >
                    <Icon
                        fontSize={fontSize}
                        color={color}
                        sx={{ fill: iconFill }}
                    />
                </MUIIconButton>
            </Tooltip>
        )
    },
)
