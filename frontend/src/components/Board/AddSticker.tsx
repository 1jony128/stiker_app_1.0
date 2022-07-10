import { FC, forwardRef, useState } from "react";
import { toast } from "react-toastify";
import { alert, alertText } from "../../helpers/alertText";
import { useAppDispatch } from "../../hooks/redux";
import { addCatagory } from "../../store/reducers/StickersSlice";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Dialogs from "../UI/Dialogs/Dialogs";
import useDialog from "../../hooks/useDialog";
import { TextareaAutosize, TextField } from "@mui/material";
import SelectMy from "../UI/Select/Select";
import { IOption } from "../../models/stikers"

interface AddStickerProps {
    
}
 
const AddSticker: FC<AddStickerProps> = () => {
    const [input, setInput] = useState("");
    const [description, setDescription] = useState("");

    const overtak: IOption[] = [
        {
            value: 10,
            label: "1"
        },
        {
            value: 20,
            label: "2"
        },
        {
            value: 30,
            label: "3"
        },
        {
            value: 40,
            label: "4"
        },
        {
            value: 50,
            label: "5"
        },
        {
            value: 60,
            label: "6"
        },
    ]

    const { handleCloseOpen, open} = useDialog();

    const dispatch = useAppDispatch()

    const onClick = () => {
        if(input === ""){
            alert(alertText.emptyCategory, "error")
            return
        }
        dispatch(addCatagory({
            id: (new Date()).getTime(),
            title: input,
            description 
        }))
        setInput("")
        setDescription("")
        handleCloseOpen()
        alert(alertText.addCategory, "success")
    }

    return ( 
        <div className="add_sticker">
            <div className="circle" onClick={handleCloseOpen}>
                <div className="vertic"></div>
                <div className="horiz"></div>
            </div>
            <Dialogs
                handleClose={handleCloseOpen}
                open={open}
                title={"Создание категории"}
                
            >
                <DialogContent>
                <div className="form">
                    <div className="input_wrapper">
                        <TextField 
                            id="outlined-basic" 
                            label="Категория" 
                            variant="outlined"
                            placeholder="Введите название категории"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <div className="input_wrapper textarea">
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Опишите категорию"
                        />
                    </div>
                    <div className="select">
                        <SelectMy
                            options={overtak}
                         />
                    </div>
                    <div>
                        Повторение
                    </div>
                </div>      
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseOpen}>Отмена</Button>
                <Button variant="contained"  onClick={onClick}>Создать</Button>
                </DialogActions>
            </Dialogs>
        </div>
    );
}
 
export default AddSticker;