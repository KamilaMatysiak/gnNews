import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../app/store"

interface FeedbackModalState {
    open: boolean
}

const initialState: FeedbackModalState = {
    open: false
}

export const FeedbackModalSlice = createSlice({
    name: 'feedbackModal',
    initialState,
    reducers: {
        toggleModal: state => {
            state.open = !state.open
        }
    }
})

export const { toggleModal } = FeedbackModalSlice.actions

export const feedbackModal = (state: RootState) => state.feedbackModal.open

export default FeedbackModalSlice.reducer