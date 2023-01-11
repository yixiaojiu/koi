export interface GetAnimeResponse {
  code: number
  msg: string
  data: AnimeInfo
}

export interface AnimeInfo {
  cover: string
  title: string
  rank: string
  alias: string
  season: string
  releaseTime: string
  categories: string[]
  introduction: string
  playLists: AnimeVideoItem[][]
}

export interface AnimeVideoItem {
  title: string
  path: string
}
