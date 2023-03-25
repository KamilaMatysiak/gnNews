import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../app/store"

interface NewsViewState {
    mode: string
}

const initialState: NewsViewState = {
    mode: localStorage.getItem("newsView") || "tiles"
}

export const NewsViewSlice = createSlice({
    name: 'newsView',
    initialState,
    reducers: {
        setView(state, action: PayloadAction<string>) {
            state.mode = action.payload;
            localStorage.setItem("newsView", state.mode) 
        }
    }
})

export const { setView } = NewsViewSlice.actions

export const newsView = (state: RootState) => state.newsView.mode

export default NewsViewSlice.reducer