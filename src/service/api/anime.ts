import { axios } from '@/service'
import type { GetIndexResponse } from '@/service/types/getIndex'
import type { SearchResponse } from '@/service/types/search'
import type { FilterOptionsResponse } from '@/service/types/filterOptons'
import type { FilterDto, FilterResponse } from '@/service/types/filter'
import type { GetAnimeResponse } from '@/service/types/getAnime'
import type { GetVideoResponse } from '@/service/types/getVideo'

export function getIndex() {
  return axios.get<GetIndexResponse>('/getIndex')
}

export function search(keyword: string) {
  return axios.get<SearchResponse>('/search', {
    params: {
      keyword,
    },
  })
}

export function filter(query: FilterDto) {
  return axios.get<FilterResponse>('/filter', {
    params: {
      ...query,
    },
  })
}

export function getFilterOptions() {
  return axios.get<FilterOptionsResponse>('/filter/options')
}

export function getAnime(id: string) {
  return axios.get<GetAnimeResponse>('/getAnime', {
    params: {
      id,
    },
  })
}

export function getVideo(path: string) {
  return axios.get<GetVideoResponse>('/getVideo', {
    params: {
      path,
    },
  })
}
