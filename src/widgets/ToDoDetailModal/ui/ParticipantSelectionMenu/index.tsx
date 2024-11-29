import { ClickAwayListener, Grow, MenuList, Paper, Popper } from "@mui/material"
import { FC, SyntheticEvent, useState } from "react"
import Typography from "@mui/material/Typography"
import { ParticipantsItem } from "./ParticipantsItem"

interface Props {
    anchorEl: HTMLElement | null
    open: boolean
    handleClose: (event: Event | SyntheticEvent) => void
    id: string
}
// TODO добавить получение участников
const performerList = ["Danil", "Ivan", "Dmitriy"]

export const ParticipantSelectionMenu: FC<Props> = (p) => {
    const [selectedPerformers, setSelectedPerformers] = useState<string[]>([])

    const togglePerformer = (name: string) => {
        setSelectedPerformers((prev) =>
            prev.includes(name)
                ? prev.filter((performer) => performer !== name)
                : [...prev, name],
        )
    }

    return (
        <Popper
            open={p.open}
            anchorEl={p.anchorEl}
            placement='left'
            transition
            sx={{ zIndex: 1300 }}
        >
            {({ TransitionProps }) => (
                <Grow {...TransitionProps}>
                    <Paper elevation={10}>
                        <ClickAwayListener onClickAway={p.handleClose}>
                            <MenuList autoFocusItem={p.open}>
                                <Typography p={2}>
                                    Выберите исполнителей
                                </Typography>
                                {performerList.map((performer, index) => {
                                    const isSelected =
                                        selectedPerformers.includes(performer)
                                    return (
                                        <ParticipantsItem
                                            key={index}
                                            performer={performer}
                                            onClick={() =>
                                                togglePerformer(performer)
                                            }
                                            isSelected={isSelected}
                                        />
                                    )
                                })}
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    )
}
