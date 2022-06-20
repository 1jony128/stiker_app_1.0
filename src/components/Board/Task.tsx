import {FC, useState} from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {useAppDispatch} from "../../hooks/redux";
import {editSticker, removeSticker} from "../../store/reducers/StickersSlice";
import AlertDialogSlide from "../UI/Dialogs/Dialog";
import {alert, alertText} from "../../helpers/alertText";
import {Checkbox} from "@mui/material";
import ReactTooltip from "react-tooltip";

interface TaskProps {
    id: number
    name: string;
    status: "done" | "backlog" | "inWork",
    category: number
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Task: FC<TaskProps> = ({ name, id, status , category}) => {
    const [edit, setEdit] = useState(false);
    const [inputValue, setInputValue]= useState(name)
    const dispatch = useAppDispatch()

    const onRemove = () => {
        dispatch(removeSticker(id))
        alert(alertText.removeTask, "info")
    }

    const onEdit = () => {
        if(inputValue === ""){
            alert(alertText.emptyTask, "error")
            return
        }
        dispatch(editSticker({
            id,
            status,
            name: inputValue,
            category
        }))
        setEdit(!edit)
    }

    return ( 
        <div className="list_item">
            {
                !edit ?
                    <>
                        <div className="row">
                            <Checkbox {...label} />
                            <div
                                className="text"
                                data-tip={name}
                                onClick={() => setEdit(!edit)}
                            >
                                {name}
                                <ReactTooltip type="info" place="bottom"/>
                            </div>

                        </div>
                        <div className="tools">
                            <AlertDialogSlide
                                onRemove={onRemove}
                                name={name}
                                title={"Удаление задачи"}
                                typeTask={"задачу"}
                            />
                        </div>
                    </>
                    :
                    <div className="row-edit">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                        />
                        <CheckCircleOutlineIcon
                            className={"icon"}
                            onClick={onEdit}
                        />
                    </div>
            }
            
        </div>
        
     );
}
 
export default Task;