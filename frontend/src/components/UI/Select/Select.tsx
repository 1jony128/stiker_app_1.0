import { FC, useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IOption } from "../../../models/stikers";




export interface SelectProps {
    options: IOption[]
}
 
const SelectMy: FC<SelectProps> = ({options}) => {

    const [age, setAge] = useState('1 раз');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return ( 
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Обгон на</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}

            >
                {options.map(item => {
                    return <MenuItem value={item.value}>{item.label}</MenuItem>
                })}
            </Select>
        </FormControl>
     );
}
 
export default SelectMy;