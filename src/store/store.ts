import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Stikers from "./reducers/StickersSlice";


const rootReducer = combineReducers({
    Stikers,
})


export const setupStore = ():any => {    
    const store =  configureStore({
        reducer: rootReducer,
    })
    return store
}



export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]