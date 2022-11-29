import { axios } from '@/service'
import type { GetIndexResponse } from '@/service/types/getIndex'

export function getIndex() {
  return axios.get<GetIndexResponse>('/getIndex')
}
