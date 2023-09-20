import axios from "axios"
import { ApiEndpoint } from "$types/api/helpers"
import { V1Trending } from "$types/api/endpoints/v1Trending"

const v1Trending: ApiEndpoint<V1Trending> = async(options) => {
  return axios.get("/api/v1/trending", options)
}

export { v1Trending }
