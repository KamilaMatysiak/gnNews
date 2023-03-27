import { store } from "../app/store";
import { describe, expect  } from "vitest";
import { setLightMode } from "../features/lightModeSlice";

describe("change the state of lightMode", () => {
    it("should check initial light mode", () => {
        const state = store.getState().lightMode
        expect(state.mode).toEqual('light')
    })

    it('should toggle lightmode to dark', () => {
        const result = store.dispatch(setLightMode('dark'))
        const mode = result.payload
        expect(mode).toBe('dark')
    })
})