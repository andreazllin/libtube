import { Caption } from "../common/caption"
import { AdaptiveFormat, FormatStream } from "../common/format"
import { AuthorThumbnail, VideoThumbnail } from "../common/thumbnail"
import { RecommendedVideo } from "../common/video"

export interface V1Videos {
  title: string
  videoId: string

  videoThumbnails: Array<VideoThumbnail>

  description: string
  descriptionHtml: string
  published: number
  publishedText: string

  keywords: Array<string>
  viewCount: number
  likeCount: number
  dislikeCount: number

  paid: boolean
  premium: boolean
  isFamilyFriendly: boolean
  allowedRegions: Array<string>
  genre: string
  genreUrl: string

  author: string
  authorId: string
  authorUrl: string
  authorThumbnails: Array<AuthorThumbnail>

  subCountText: string
  lengthSeconds: number
  allowRatings: boolean
  rating: number
  isListed: boolean
  liveNow: boolean
  isUpcoming: boolean
  premiereTimestamp: number

  hlsUrl?: string
  adaptiveFormats: Array<AdaptiveFormat>
  formatStreams: Array<FormatStream>

  captions: Array<Caption>

  recommendedVideos: Array<RecommendedVideo>
}
