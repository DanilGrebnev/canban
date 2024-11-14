import { styled } from "@mui/material/styles"
import IconButton from "@mui/material/IconButton"

export const CustomIconButton = styled(IconButton)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
    position: "relative",
}))
