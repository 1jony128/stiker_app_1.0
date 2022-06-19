import { FC } from "react";
import { IStickerItem } from "../../models/stikers";
import AddStickerItem from "./AddTask";
import Task from "./Task";
import AlertDialogSlide from "../UI/Dialogs/Dialog";
import {useAppDispatch} from "../../hooks/redux";
import {removeCategory, removeSticker} from "../../store/reducers/StickersSlice";
import {alert, alertText} from "../../helpers/alertText";
import ReactTooltip from "react-tooltip";



interface StickerProps {
    title: string;
    items: IStickerItem[]
    id: number
}
 
const Sticker: FC<StickerProps> = ({title, items, id}) => {

    const dispatch = useAppDispatch()

    const onRemove = () => {
        dispatch(removeCategory(id))
        alert(alertText.removeCategory, "info")
    }

    return ( 
        <div className="wrap-stiker">
                    <div className="title_stiker">
                        <div>{title}</div>
                        <div className="tools">
                            <AlertDialogSlide
                                onRemove={onRemove}
                                name={title}
                                title={"Удаление категории"}
                                typeTask={"категорию"}
                            />
                        </div>
                    </div>
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