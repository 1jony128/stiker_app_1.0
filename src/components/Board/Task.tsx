import { FC } from "react";

interface TaskProps {
    id: number
    name: string;
    status: "done" | "backlog" | "inWork"
}
 
const Task: FC<TaskProps> = ({name}) => {


    return ( 
        <div className="list_item">
            <div className="checkbox"><input type={"checkbox"}/></div>
            <div className="text">{name}</div>
        </div>
     );
}
 
export default Task;