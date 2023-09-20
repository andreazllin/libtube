import { Comment } from "../common/comment"

export interface V1Comments {
  commentCount?: number
  videoId: string
  comments: Array<Comment>
  continuation?: string
}
