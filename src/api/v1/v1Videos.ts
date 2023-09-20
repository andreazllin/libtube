import axios from "axios"
import { ApiEndpoint } from "$types/api/helpers"
import { V1Videos } from "$types/api/endpoints/v1Videos"

interface V1VideosParams {
  id: string
}

const v1Videos: ApiEndpoint<V1Videos, V1VideosParams> = async(options, { id }) => {
  return axios.get(`/api/v1/videos/${id}`, options)
}

export { v1Videos }
