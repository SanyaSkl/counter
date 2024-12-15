import {combineReducers, createStore} from "@reduxjs/toolkit";
import {counterReducer} from "../model/counter-reducer";


const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppRootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)


// @ts-ignore
window.store = store