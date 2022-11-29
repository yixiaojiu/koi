import { Axios } from 'axios'
import { settingsStore } from '@/store/setting.store'
import { handleMockData } from '@/service/mock/index'
import { autorun } from 'mobx'

// eslint-disable-next-line import/no-mutable-exports
export let axios = new Axios({
  baseURL: settingsStore.serveUrl,
})
autorun(() => {
  const axiosInstance = new Axios({
    baseURL: settingsStore.serveUrl,
  })

  axiosInstance.interceptors.response.use((res) => {
    if (settingsStore.isMock) {
      res.data = handleMockData(res.request.responseURL)
    }
    return res
  }, (error) => {
    return Promise.reject(error)
  })
  axios = axiosInstance
})
