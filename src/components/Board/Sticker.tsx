import { FC } from "react";
import { IStickerItem } from "../../models/stikers";
import AddStickerItem from "./AddTask";
import StickerItem from "./Task";



interface StickerProps {
    title: string;
    items: IStickerItem[]
    id: number
}
 
const Sticker: FC<StickerProps> = ({title, items, id}) => {
    return ( 
        <div className="wrap-stiker">
                    <div className="title_stiker">{title}</div>
                    <div className="list_stiker">
                        {items.map(item => {
                            return <StickerItem 
                                        key={item.id}
                                        id={item.id}
                                        status={item.status}
                                        name={item.name} 
                                    />
                        })}
                        <AddStickerItem id={id}/>
                    </div>
                </div>
     );
}
 
export default Sticker;