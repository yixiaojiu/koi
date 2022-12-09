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

  axiosInstance.interceptors.request.use(async (config) => {
    if (settingsStore.isMock) {
      config.baseURL = ''
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  })

  axiosInstance.interceptors.response.use(async (res) => {
    if (settingsStore.isMock) {
      res.data = await handleMockData(res.request.responseURL)
    }
    return res
  }, (error) => {
    return Promise.reject(error)
  })
  axios = axiosInstance
})
