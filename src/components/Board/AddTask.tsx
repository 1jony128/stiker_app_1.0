import { FC, useState } from "react";
import { alert, alertText } from "../../helpers/alertText";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addCatagory, addSticker } from "../../store/reducers/StickersSlice";
import AddIcon from '@mui/icons-material/Add';

interface AddTaskProps {
    id: number
}
 
const AddTask: FC<AddTaskProps> = ({id}) => {

    const [form, setForm] = useState(false)
    const [input, setInput] = useState("")

    const dispatch = useAppDispatch()

    const onClick = () => {
        if(input === ""){
            alert(alertText.emptyTask, "error")
            return
        }
        dispatch(addSticker({
            id: (new Date()).getTime(),
            name: input,
            category: id,
            status: "backlog"
        }))
        setInput("")
        setForm(false)
        alert(alertText.addTask, "success")
    }

    const showForm = () => {
        setForm(!form)
    }
if(!form)
    return ( 
        <div className="add_task">
            <AddIcon 
                onClick={showForm}
            />
        </div>
     );

     return(
        <div className="form_task">
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text" 
                placeholder="Введите название задачи"
            />
            <AddIcon 
                className="add"
                onClick={onClick}
            />
        </div>
     )
}
 
export default AddTask;