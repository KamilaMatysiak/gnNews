import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../app/store"

interface SidebarState {
    open: boolean
}

const initialState: SidebarState = {
    open: false
}

export const SidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar: state => {
            state.open = !state.open
        }
    }
})

export const { toggleSidebar } = SidebarSlice.actions

export const sidebarState = (state: RootState) => state.sidebar.open

export default SidebarSlice.reducer