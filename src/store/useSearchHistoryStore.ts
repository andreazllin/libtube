import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { createSelectors } from "./utils"
import { immer } from "zustand/middleware/immer"

interface State {
  searchHistory: string[]
}

interface Actions {
  setSearchHistory(searchHistory: string[]): void
}

export const useSearchHistoryStore = create<State & Actions>()(
  persist(
    immer(
      (set) => ({
        searchHistory: [],
        setSearchHistory: (searchHistory: string[]): void => set({ searchHistory })
      })
    ),
    {
      name: "search-history",
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export default createSelectors(useSearchHistoryStore)
