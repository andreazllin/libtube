interface Format {
  url: string
  itag: string
  type: string
  container: string
  encoding: string
  qualityLabel?: string
  resolution?: string
}

export interface AdaptiveFormat extends Format {
  index: string
  bitrate: string
  init: string
  clen: string
  lmt: string
  projectionType: number
}

export interface FormatStream extends Format {
  quality: string
  qualityLabel: string
  resolution: string
  size: string
}
