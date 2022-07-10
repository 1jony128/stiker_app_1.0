
export interface ICategory {
    title: string
    id: number
    description: string
}

export interface IStickerItem {
    id: number
    name: string;
    status: "done" | "backlog" | "inWork",
    category: number
}


export interface IOption{
    value: number;
    label: string
}