import { FormControlLabel, Radio, RadioGroup } from "@mui/material"

export const PriorityRadioGroup = () => {
    return (
        <RadioGroup
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
