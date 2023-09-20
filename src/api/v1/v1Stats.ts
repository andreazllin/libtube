import axios from "axios"
import { ApiEndpoint } from "$types/api/helpers"
import { V1Stats } from "$types/api/endpoints/v1Stats"

const v1Stats: ApiEndpoint<V1Stats> = async(options) => {
  return axios.get("/api/v1/stats", options)
}

export { v1Stats }
