import { WEB_NAME } from '@/shared/constant'

const titleMap: Record<string, string> = {
  '/home': '首页',
  '/search': '搜索',
  '/user': '关于我',
  '/pixiv': 'pixiv',
  '/setting': '设置',
}

interface Params {
  pathname?: string
  title?: string
}

export const setTitle = (params: Params) => {
  const { pathname, title } = params
  if (pathname) {
    for (const key of Object.keys(titleMap)) {
      if (pathname.startsWith(key)) {
        changeDocuemnt(`${WEB_NAME} - ${titleMap[key]}`)
        break
      }
    }
  }
  if (title) {
    changeDocuemnt(title)
  }
}

function changeDocuemnt(str: string) {
  document.title = str
}
