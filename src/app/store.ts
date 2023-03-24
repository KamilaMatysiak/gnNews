import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "../features/countriesSlice";
import lightModeSlice from "../features/lightModeSlice";
import newsViewSlice from "../features/newsViewSlice";
import sidebarSlice from "../features/sidebarSlice";

export const store = configureStore({
    reducer: {
        newsView: newsViewSlice,
        lightMode: lightModeSlice,
        sidebar: sidebarSlice,
        countries: countriesSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch