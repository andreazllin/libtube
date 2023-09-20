import axios from "axios"
import { ApiEndpoint } from "$types/api/helpers"
import { V1SearchSuggestions } from "$types/api/endpoints/v1Search"

interface V1SearchSuggestionsParams {
  query: string
}

const v1SearchSuggestions: ApiEndpoint<V1SearchSuggestions, V1SearchSuggestionsParams> = async(options, { query }) => {
  return axios.get("/api/v1/search/suggestions", {
    params: {
      q: query
    },
    ...options
  })
}

export { v1SearchSuggestions }
