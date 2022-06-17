import { FC, useState } from "react";
import { toast } from "react-toastify";
import { alert, alertText } from "../../helpers/alertText";
import { useAppDispatch } from "../../hooks/redux";
import { addCatagory } from "../../store/reducers/StickersSlice";

interface AddStickerProps {
    
}
 
const AddSticker: FC<AddStickerProps> = () => {

    const [form, setForm] = useState(false)
    const [input, setInput] = useState("")

    const dispatch = useAppDispatch()

    const onClick = () => {
        if(input === ""){
            alert(alertText.emptyCategory, "error")
            return
        }
        dispatch(addCatagory({
            id: (new Date()).getTime(),
            title: input
        }))
        setInput("")
        setForm(false)
        alert(alertText.addCategory, "success")
    }

    const showForm = () => {
        setForm(!form)
    }
if(!form)
    return ( 
        <div className="add_sticker">
            <div className="circle" onClick={showForm}>
                <div className="vertic"></div>
                <div className="horiz"></div>
            </div>
        </div>
     );

     return(
        <div className="form">
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text" 
                placeholder="Введите название категории"
            />
            <button
                onClick={onClick}
            >
                Добавить категорию
            </button>
        </div>
     )
}
 
export default AddSticker;