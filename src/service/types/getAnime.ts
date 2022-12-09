export interface GetAnimeResponse {
  code: number
  msg: string
  data: Data
}

export interface Data {
  cover: string
  title: string
  rank: string
  alias: string
  season: string
  releaseTime: string
  categories: string[]
  introduction: string
  playLists: PlayList[][]
}

export interface PlayList {
  title?: string
  path: string
}
