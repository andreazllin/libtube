import { Thumbnail, Video } from "./common"

export type V1Stats = {
  version: string
  software: {
    name: "invidious"
    version: string
    branch: string
  }
  openRegistrations: boolean
  usage: {
    users: {
      total: number
      activeHalfyear: number
      activeMonth: number
    }
  }
  metadata: {
    updatedAt: number
    lastChannelRefreshedAt: number
  }
}

export type V1Trending = Video[]

