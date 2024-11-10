import MUIMenu from "@mui/material/Menu"
import { CSSProperties, ReactNode } from "react"

interface TMenu {
    open: boolean
    anchorEl: HTMLElement | null
    handleClose: any
    children?: ReactNode
    elevation?: number
    style?: CSSProperties
}

/*
 * @example
 * import { IconButton } from "@/shared/ui/IconButton"
 * import { Menu } from "./components/Menu"
 * import MenuItem from "@mui/material/MenuItem"
 * import { useState } from "react"
 *
 * export const MoveDashboardTaskButton = () => {
 *   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
 *   const open = Boolean(anchorEl)
 *
 *   const handleClick = (event: any) => {
 *       setAnchorEl(event.currentTarget)
 *   }
 *
 *   const handleClose = () => {
 *       setAnchorEl(null)
 *   }
 *
 *   return (
 *       <>
 *           <IconButton
 *               onClick={handleClick}
 *               iconVariant='arrow'
 *               tooltip='move to next column'
 *           />
 *           <Menu
 *               open={open}
 *               anchorEl={anchorEl}
 *               handleClose={handleClose}
 *           >
 *               <MenuItem onClick={handleClose}>Приняты в работу</MenuItem>
 *               <MenuItem onClick={handleClose}>Завершённые</MenuItem>
 *           </Menu>
 *       </>
 *   )
 *   }
 * */
export const Menu = (props: TMenu) => {
    const { open, anchorEl, handleClose, children, elevation, style } = props

    return (
        <MUIMenu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            style={style}
            elevation={elevation}
            onClose={handleClose}
        >
            {children}
        </MUIMenu>
    )
}
