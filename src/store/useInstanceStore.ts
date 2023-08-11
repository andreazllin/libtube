import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { createSelectors } from "./utils"
import { immer } from "zustand/middleware/immer"

interface State {
  instance: string
}

interface Actions {
  setInstance(theme: string): void
}

export const useInstanceStore = create<State & Actions>()(
  persist(
    immer(
      (set) => ({
        instance: "https://invidious.lunar.icu",
        setInstance: (instance: string): void => set({ instance }),
      })
    ),
    {
      name: "invidious-instance",
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export default createSelectors(useInstanceStore)
