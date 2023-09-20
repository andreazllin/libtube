import useSearchHistoryStore from "$store/useSearchHistoryStore"
import { dedupe } from "$helpers/array"

interface UseSearchHistoryReturnType {
  searchHistory: string[]
  addSearchHistory: (search: string) => void
  clearSearchHistory: () => void
}

export default function useSearchHistory(): UseSearchHistoryReturnType {
  const searchHistory = useSearchHistoryStore.use.searchHistory()
  const setSearchHistory = useSearchHistoryStore.use.setSearchHistory()

  const addSearchHistory = (search: string): void => {
    // We only store the last 5 searches
    setSearchHistory(dedupe([search, ...searchHistory]).slice(0, 5))
  }

  const clearSearchHistory = (): void => {
    setSearchHistory([])
  }

  return {
    searchHistory,
    addSearchHistory,
    clearSearchHistory
  }
}
