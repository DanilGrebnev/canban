import TrendingFlatIcon from "@mui/icons-material/TrendingFlat"
import { IconButton as MUIIconButton } from "@mui/material"
import Tooltip from "@mui/material/Tooltip"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined"
import AccountCircle from "@mui/icons-material/AccountCircle"
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined"
import MenuIcon from "@mui/icons-material/Menu"
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined"
import CheckIcon from "@mui/icons-material/Check"
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt"
import PeopleList from "@mui/icons-material/RecentActorsOutlined"

type TMUIIconButton = Parameters<typeof MUIIconButton>[0]

type MUISVGType = Parameters<typeof DeleteOutlinedIcon>[0]

const icons = {
    pencil: DriveFileRenameOutlineOutlinedIcon,
    delete: DeleteOutlinedIcon,
    arrow: TrendingFlatIcon,
    people: AccountCircle,
    addBox: AddBoxOutlinedIcon,
    done: CheckIcon,
    menu: MenuIcon,
    table: ViewWeekOutlinedIcon,
    addPerson: PersonAddAltIcon,
    peopleList: PeopleList,
}

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
export const IconButton = (props: TIconButton) => {
    const {
        tooltip,
        color,
        fontSize = "medium",
        iconFill,
        centerRipple = false,
        iconVariant,
        ...otherProps
    } = props
    let Icon: any

    Icon = icons[iconVariant]

    return (
        <Tooltip title={tooltip}>
            <MUIIconButton
                centerRipple={centerRipple}
                type='button'
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
}
