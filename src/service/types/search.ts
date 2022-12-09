export interface SearchResponse {
  code: number
  msg: string
  data: Data
}

export interface Data {
  totalPage: number
  result: Result[]
}

export interface Result {
  cover: string
  id: string
  title: string
  season: string
}
