import { Axios } from 'axios'
import { settingsStore } from '@/store/setting.store'
import { handleMockData } from '@/service/mock/index'
import { autorun } from 'mobx'
import { delay } from '@/shared/utils'

export let axios = new Axios({
  baseURL: settingsStore.serveUrl,
})
autorun(() => {
  const axiosInstance = new Axios({
    baseURL: settingsStore.serveUrl,
  })

  axiosInstance.interceptors.request.use(
    async (config) => {
      if (settingsStore.isMock) {
        config.baseURL = ''
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  axiosInstance.interceptors.response.use(
    async (res) => {
      if (settingsStore.isMock) {
        // 模拟请求的响应时间
        await delay(42)
        res.data = await handleMockData(res.request.responseURL)
      }
      return res
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  axios = axiosInstance
})
