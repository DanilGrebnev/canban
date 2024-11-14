import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import {
    TextField,
    ToggleButtonGroup,
    toggleButtonGroupClasses,
} from "@mui/material"

export const AddCommentBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isActive", // Добавление кастомного класса к новому компоненту
})<{ isActive: boolean }>(({ theme, isActive }) => ({
    width: !isActive ? "300px" : "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: 12,
    boxShadow: theme.shadows[0],
    backgroundColor: "#F2F2F2",
    transition: theme.transitions.create(
        ["width", "background-color", "box-shadow"],
        {
            duration: theme.transitions.duration.standard,
        },
    ),
    "&:hover": {
        boxShadow: theme.shadows[1],
        backgroundColor: "#E9E9E9",
    },
}))
export const CustomTextField = styled(TextField)(() => ({
    "& .MuiInputBase-root": {
        minWidth: "300px",
        border: "none",
        backgroundColor: "inherit",
        color: "inherit",
        "&:hover": { border: "none" },
    },
    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
}))

// Не стал удалять потому что компонент прикольный получился
export const CustomToggleButtonGroup = styled(ToggleButtonGroup)(
    ({ theme }) => ({
        [`& .${toggleButtonGroupClasses.grouped}`]: {
            margin: theme.spacing(0.5),
            border: 0,
            borderRadius: theme.shape.borderRadius,
            [`&.${toggleButtonGroupClasses.disabled}`]: {
                border: 0,
            },
        },
        [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
            {
                marginLeft: -1,
                borderLeft: "1px solid transparent",
            },
    }),
)
