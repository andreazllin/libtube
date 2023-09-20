import { Autocomplete, AutocompleteItem, Button, Group, Kbd } from "@mantine/core"
import { FunctionComponent, useCallback, useMemo, useRef } from "react"
import { IconSearch } from "@tabler/icons-react"
import { useHotkeys } from "@mantine/hooks"
import { useForm } from "@mantine/form"
import { sizes } from "$constants/sizes"
import { useQuery } from "react-query"
import { api } from "$api"
import useInstance from "$hooks/useInstance"
import { V1SearchSuggestions } from "$types/api/endpoints/v1Search"
import useSearchHistory from "$hooks/useSearchHistory"

type SearchBarForm = {
  searchQuery: string
}

const SearchBar: FunctionComponent = () => {
  const ref = useRef<HTMLInputElement>(null)
  const { instance } = useInstance()
  const { searchHistory, addSearchHistory } = useSearchHistory()

  const { onSubmit, getInputProps, values: formValues } = useForm<SearchBarForm>({
    initialValues: {
      searchQuery: ""
    }
  })

  const { data: suggestionsData } = useQuery<V1SearchSuggestions>(["search", formValues.searchQuery], async() => {
    const res = await api.search.v1SearchSuggestions({ baseURL: instance }, { query: formValues.searchQuery })
    return res.data
  }, {
    staleTime: 10000,
    enabled: !!formValues.searchQuery
  })

  const autocompleteData = useMemo((): Array<AutocompleteItem> => {
    const groupedHistory = searchHistory.map((searchEntry) => {
      return {
        group: "History",
        value: searchEntry
      }
    })

    if (!suggestionsData) {
      return groupedHistory
    }

    const groupedSuggestions = suggestionsData.suggestions.map((suggestion) => {
      return {
        group: "Suggestions",
        value: suggestion
      }
    })

    return [...groupedHistory, ...groupedSuggestions].map((item, index) => ({
      ...item,
      key: index
    }))
  }, [searchHistory, suggestionsData])

  useHotkeys([
    ["/", (): void => {
      ref.current?.focus()
    }]
  ])

  const handleSubmit = useCallback((values: SearchBarForm): void => {
    addSearchHistory(values.searchQuery)
  }, [addSearchHistory])

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <Group spacing={"xs"}>
        <Autocomplete
          style={{ flex: 1 }}
          ref={ref}
          placeholder="Search..."
          icon={<IconSearch size={sizes.icon}/>}
          aria-label="Search"
          rightSection={<Kbd>/</Kbd>}
          transitionProps={{ transition: "fade", duration: 100, timingFunction: "ease" }}
          {...getInputProps("searchQuery")}
          data={autocompleteData}
          limit={20}
        />
        <Button type="submit">
          Search!
        </Button>
      </Group>
    </form>
  )
}

export default SearchBar
