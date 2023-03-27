import { store } from "../app/store";
import { describe, expect  } from "vitest";
import { setLanguage } from "../features/languageSlice";

describe("change language settings", () => {
    it("should check initial language", () => {
        const state = store.getState().language
        expect(state.language).toEqual('pl')
    })

    it('should toggle language to english', () => {
        const result = store.dispatch(setLanguage('en'))
        const mode = result.payload
        expect(mode).toBe('en')
    })
})