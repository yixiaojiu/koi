export interface GetHomeResponse {
  code: number
  msg: string
  data: HomeData
}

export interface HomeData {
  banners: Banner[]
  perweeks: Perweek[][]
  categoryAnimes: CategoryAnime[]
  hot: Anime[]
  recent: Anime[]
}

export interface Banner {
  id: string
  cover: string
  title: string
}

export interface Perweek {
  id: string
  title: string
  season: string
}

export interface CategoryAnime {
  name: string
  list: Anime[]
}

export interface Anime {
  cover: string
  id: string
  title: string
  season: string
}
