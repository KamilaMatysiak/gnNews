import { store } from "../app/store";
import { describe, expect  } from "vitest";
import { toggleSidebar } from "../features/sidebarSlice";

describe("change the state of sidebar", () => {
    it("should check initial state of sidebar", () => {
        const state = store.getState().sidebar
        expect(state.open).toEqual(false)
    })

    it('should toggle sidebar', () => {
        const result = store.dispatch(toggleSidebar())
        const state = store.getState().sidebar
        expect(state.open).toBe(true)
    })
})