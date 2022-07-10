import { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import { IStickerItem } from "../../models/stikers";
import AddSticker from "./AddSticker";
import Sticker from "./Sticker";

interface BoardProps {
    
}
 
const Board: FC<BoardProps> = () => {

    const { category, stickers} = useAppSelector(state => state.Stikers)

    return ( 
        <div className="board">
            <div className="container-board">
                {
                    category.map(item => {
                        return <Sticker 
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                    id={item.id}
                                    items={[...stickers].filter(sticker => sticker.category === item.id)}
                                />
                    })
                }
                <AddSticker />
            </div>
        </div>
     );
}
 
export default Board;