import { configureStore } from "@reduxjs/toolkit";
import lightModeSlice from "../features/lightModeSlice";
import newsViewSlice from "../features/newsViewSlice";
import SidebarSlice from "../features/sidebarSlice";

export const store = configureStore({
    reducer: {
        newsView: newsViewSlice,
        lightMode: lightModeSlice,
        sidebar: SidebarSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch