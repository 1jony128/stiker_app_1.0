
export interface ICategory {
    title: string
    id: number
}

export interface IStickerItem {
    id: number
    name: string;
    status: "done" | "backlog" | "inWork",
    category: number
}