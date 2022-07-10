import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory, IStickerItem } from "../../models/stikers";

export interface IStickersSlice {
    category: ICategory[]
    stickers: IStickerItem[]
}

const initialState : IStickersSlice = {
  category: [
    {
      id: 1656129906721,
      title: '1 Курс по гомилетике',
      description: 'Это двух недельный курс ,моя задача разработать план, конспекты преподавателю, презентации, дом.задания, найти тексты, прочитать много книг по гомилетике'
    },
    {
      id: 1656129980592,
      title: 'Проповеди',
      description: 'Здесь будут темы моих проповедей, в последствии и их конспекты'
    },
    {
      id: 1656130042397,
      title: 'Вот ваш  Бог! - курс для молодежи',
      description: 'в нем я буду отмечать пройденные и подготовленные мной уроки'
    },
    {
      id: 1656130190140,
      title: 'Детские странички',
      description: 'В этой категории я буду отмечать темы для детских страничек и их содержание, а также примерные даты. когда мне их говорить'
    },
    {
      id: 1656130246072,
      title: 'Книги',
      description: 'Список книг, которые я хочу прочитать'
    },
    {
      id: 1656130360751,
      title: 'Программирование',
      description: 'Те технологии, которые я планирую изучить, а также ссылки на изучение технологии'
    },
    {
      id: 1656131895316,
      title: 'Дом',
      description: 'Различная работа по дому'
    },
    {
      id: 1656131965566,
      title: 'Машина',
      description: 'Все об её уходе :)'
    }
  ],
  stickers: [
    {
      id: 1656130802627,
      status: 'done',
      name: 'Н-1 Д-2 Бог: нельзя постичь можно познать',
      category: 1656130042397
    },
    {
      id: 1656130976832,
      status: 'inWork',
      name: 'Н-1 Д-5 Остерегайтесь подделок',
      category: 1656130042397
    },
    {
      id: 1656131062038,
      status: 'backlog',
      name: 'Н-2 Д-3 Что препятствует моему возвращению к Богу?  Избавляемся от бремени греха',
      category: 1656130042397
    },
    {
      id: 1656131253258,
      name: 'Н-3 Введение и В поисках неизменного Бога',
      category: 1656130042397,
      status: 'backlog'
    },
    {
      id: 1656131310829,
      name: 'Н-3 Д-4 Приключение только начинается!',
      category: 1656130042397,
      status: 'backlog'
    },
    {
      id: 1656131436532,
      name: 'Н-4 Д-2 Силуэты и ветхозаветные песни надежды',
      category: 1656130042397,
      status: 'backlog'
    },
    {
      id: 1656131566699,
      status: 'inWork',
      name: 'Сокровище благодати 54/455',
      category: 1656130246072
    },
    {
      id: 1656131598365,
      name: 'Express',
      category: 1656130360751,
      status: 'backlog'
    },
    {
      id: 1656131732811,
      status: 'done',
      name: 'Евр. 12:28 Критерии благодати',
      category: 1656129980592
    },
    {
      id: 1656131778427,
      status: 'inWork',
      name: 'Проповедь на воскресенье',
      category: 1656129980592
    },
    {
      id: 1656131942004,
      name: 'Сделать отличный ящик для инструментов',
      category: 1656131895316,
      status: 'backlog'
    },
    {
      id: 1656132219957,
      status: 'backlog',
      name: 'Ремонт ходовки (пыльники и еще что-то)',
      category: 1656131965566
    },
    {
      id: 1656167038019,
      status: 'inWork',
      name: 'История об ананасах',
      category: 1656130190140
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