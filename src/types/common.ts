// https://docs.invidious.io/api/common_types/

export interface Image {
  url: string
  width: number // Integer
  height: number // Integer
}

export interface Thumbnail extends Image {
  quality: string
}
export interface Video {
  type: "video", // Constant

  title: string,
  videoId: string,

  author: string,
  authorId: string,
  authorUrl: string,
  authorVerified: Boolean,

  videoThumbnails: Thumbnail[],

  description: string,
  descriptionHtml: string,

  viewCount: number, // Integer
  viewCountText: string,
  lengthSeconds: number, // Integer

  published: number, // Unix timestamp
  publishedText: string,

  // Only available on premiered videos
  premiereTimestamp: number, // Unix timestamp

  liveNow: boolean,
  premium: boolean,
  isUpcoming: boolean
}
