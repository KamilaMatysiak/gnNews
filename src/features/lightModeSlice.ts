import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../app/store"

interface LightModeState {
    mode: string
}

const initialState: LightModeState = {
    mode: "light"
}

export const LightModeSlice = createSlice({
    name: 'lightMode',
    initialState,
    reducers: {
        setLightMode(state, action: PayloadAction<string>) {
            state.mode = action.payload;
        }
    }
})

export const { setLightMode } = LightModeSlice.actions

export const lightMode = (state: RootState) => state.lightMode.mode

export default LightModeSlice.reducer