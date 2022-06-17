import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory, IStickerItem } from "../../models/stikers";

export interface IStickersSlice {
    category: ICategory[]
    stickers: IStickerItem[]
}

const initialState : IStickersSlice = {
    category: [
        {
            title: "Вот ваш Бог",
            id: 1
        },
        {
            title: "Проповеди",
            id: 2
        },
        {
            title: "Литература",
            id: 3
        },
        {
            title: "Литература",
            id: 33
        },
        {
            title: "Литература",
            id: 34
        },
        {
            title: "Литература",
            id: 35
        },
    ],  
    stickers: [
        {
            id: 1,
            name: "Урок 1",
            status: "backlog",
            category: 1
        },
        {
            id: 2,
            name: "Урок 2",
            status: "done",
            category: 2
        },
        {
            id: 3,
            name: "Урок 3",
            status: "inWork",
            category: 3
        }
    ]
}


export const StickersSlice = createSlice({
    name: "studies",
    initialState,
    reducers: {
        addSticker(state, {payload}: PayloadAction<IStickerItem>){
            state.stickers.push(payload)
        },
        addCatagory(state, {payload}: PayloadAction<ICategory>){
            state.category.push(payload)
        },
        removeSticker(state, {payload}: PayloadAction<number>){
            state.stickers = state.stickers.filter(item => item.id !== payload)
        },
        removeCategory(state, {payload}: PayloadAction<number>){
            state.category = state.category.filter(item => item.id !== payload)
        },
        editSticker(state, {payload}: PayloadAction<IStickerItem>){
            state.stickers = state.stickers.map(item => {
                if(item.id === payload.id){
                    return payload
                } else {
                    return item
                }
            })
        },
        editCategory(state, {payload}: PayloadAction<ICategory>){
            state.category = state.category.map(item => {
                if(item.id === payload.id){
                    return payload
                } else {
                    return item
                }
            })
        },
    }
})

export const {
    addCatagory,
    addSticker,
    editCategory,
    editSticker,
    removeCategory,
    removeSticker
} = StickersSlice.actions

export default StickersSlice.reducer;