import {FC, useState} from "react";
import { IStickerItem } from "../../models/stikers";
import AddStickerItem from "./AddTask";
import Task from "./Task";
import AlertDialogSlide from "../UI/Dialogs/Dialog";
import {useAppDispatch} from "../../hooks/redux";
import {editCategory, editSticker, removeCategory, removeSticker} from "../../store/reducers/StickersSlice";
import {alert, alertText} from "../../helpers/alertText";
import ReactTooltip from "react-tooltip";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";



interface StickerProps {
    title: string;
    items: IStickerItem[]
    id: number
}
 
const Sticker: FC<StickerProps> = ({title, items, id}) => {
    const [edit, setEdit] = useState(false);
    const [inputValue, setInputValue]= useState(title)

    const dispatch = useAppDispatch()

    const onRemove = () => {
        dispatch(removeCategory(id))
        alert(alertText.removeCategory, "info")
    }

    const onEdit = () => {
        if(inputValue === ""){
            alert(alertText.emptyTask, "error")
            return
        }
        dispatch(editCategory({
            id,
            title: inputValue
        }))
        setEdit(!edit)
    }

    return ( 
        <div className="wrap-stiker">
            {
                !edit ?
                    <div className="title_stiker">
                        <div
                            className={"title_text"}
                            onClick={() => setEdit(!edit)}
                        >
                            {title}
                        </div>
                        <div className="tools">
                            <AlertDialogSlide
                                onRemove={onRemove}
                                name={title}
                                title={"Удаление категории"}
                                typeTask={"категорию"}
                            />
                        </div>
                    </div>
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

                    <div className="list_stiker">
                        {items.map(item => {
                            return <Task 
                                        key={item.id}
                                        id={item.id}
                                        status={item.status}
                                        name={item.name}
                                        category={item.category}
                                    />
                        })}
                        <AddStickerItem id={id}/>
                    </div>
            <ReactTooltip type="info" place="bottom"/>
                </div>
     );
}
 
export default Sticker;