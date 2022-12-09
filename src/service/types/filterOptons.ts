export interface FilterOptionsResponse {
  code: number
  msg: string
  data: FilterOption[]
}

export interface FilterOption {
  key: string
  name: string
  categories: string[]
}
