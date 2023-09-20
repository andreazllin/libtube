import { AuthorThumbnail } from "./thumbnail"

export interface Comment {
  author: string
  authorThumbnails: Array<AuthorThumbnail>
  authorId: string
  authorUrl: string

  isEdited: boolean
  isPinned: boolean

  content: string
  contentHtml: string
  published: number
  publishedText: string
  likeCount: number
  commentId: string
  authorIsChannelOwner: boolean

  creatorHeart?: {
    creatorThumbnail: string
    creatorName: string
  }
  replies?: {
    replyCount: number
    continuation: string
  }
}
