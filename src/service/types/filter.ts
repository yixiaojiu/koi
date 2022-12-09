export interface FilterDto {
  region: string
  genre: string
  letter: string
  year: string
  season: string
  status: string
  label: string
  resource: string
  order: string
}

export interface FilterResponse {
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
