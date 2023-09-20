interface Thumbnail {
  url: string
  width: number
  height: number
}

export interface VideoThumbnail extends Thumbnail {
  quality: string
}

export interface AuthorThumbnail extends Thumbnail { }
