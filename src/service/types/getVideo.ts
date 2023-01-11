export interface GetVideoResponse {
  code: number
  msg: string
  data: VideoInfo
}

export interface VideoInfo {
  videoUrl: string
}
