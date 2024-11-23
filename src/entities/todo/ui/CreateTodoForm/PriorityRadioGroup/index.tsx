import { FormControlLabel, Radio, RadioGroup } from "@mui/material"

type IPriorityRadioGroup = Parameters<typeof RadioGroup>[0]

export const PriorityRadioGroup = (props: IPriorityRadioGroup) => {
    const { ...parameters } = props

    return (
        <RadioGroup
            {...parameters}
            defaultValue='low'
            name='priority'
        >
            <FormControlLabel
                value='low'
                control={<Radio />}
                label='низкий'
            />
            <FormControlLabel
                value='middle'
                control={<Radio />}
                label='средний'
            />
            <FormControlLabel
                value='high'
                control={<Radio />}
                label='высокий'
            />
        </RadioGroup>
    )
}
