import { configureStore } from "@reduxjs/toolkit";
import lightModeSlice from "../features/lightModeSlice";
import newsViewSlice from "../features/newsViewSlice";

export const store = configureStore({
    reducer: {
        newsView: newsViewSlice,
        lightMode: lightModeSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch