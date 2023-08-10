import { ColorScheme } from "@mantine/core"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { createSelectors } from "./utils"
import { immer } from "zustand/middleware/immer"

interface State {
  colorScheme: ColorScheme
}

interface Actions {
  setColorScheme(theme: ColorScheme): void
}

export const useColorSchemeStore = create<State & Actions>()(
  persist(
    immer(
      (set) => ({
        colorScheme: "dark",
        setColorScheme: (colorScheme: ColorScheme): void => set({ colorScheme }),
      })
    ),
    {
      name: "color-scheme",
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export default createSelectors(useColorSchemeStore)
