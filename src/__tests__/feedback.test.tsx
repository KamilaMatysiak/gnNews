import { store } from "../app/store";
import { describe, expect  } from "vitest";
import { toggleModal } from "../features/feedbackSlice";

describe("toggle the feedback modal", () => {
    it("should check initial modal state", () => {
        const state = store.getState().feedbackModal
        expect(state.open).toEqual(false)
    })

    it('should toggle feedback modal', () => {
        const result = store.dispatch(toggleModal())
        const state = store.getState().feedbackModal
        expect(state.open).toBe(true)
    })
})