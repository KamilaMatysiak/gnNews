import { configureStore } from "@reduxjs/toolkit";
import newsViewSlice from "../features/newsViewSlice";

export const store = configureStore({
    reducer: {
        newsView: newsViewSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch