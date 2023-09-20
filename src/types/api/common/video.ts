import { VideoThumbnail } from "./thumbnail"

interface Video { }

export interface RecommendedVideo extends Video {
  videoId: string
  title: string
  videoThumbnails: Array<VideoThumbnail>
  author: string
  lengthSeconds: number
  viewCountText: string
}

// Checked
export interface TrendingVideo extends Video {
  type: "video"
  title: string
  videoId: string

  videoThumbnails: Array<VideoThumbnail>
  lengthSeconds: number

  viewCount: string
  viewCountText: string

  author: string
  authorId: string
  authorUrl: string
  authorVerified: boolean

  published: number
  publishedText: string

  description: string
  descriptionHtml: string

  liveNow: boolean

  isUpcoming: boolean

  premium: boolean

  // paid: boolean // did not see this in the response
}
