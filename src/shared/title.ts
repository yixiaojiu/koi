import { WEB_NAME } from '@/shared/constant'

const titleMap: Record<string, string> = {
  '/home': '首页',
  '/search': '搜索',
  '/user': '关于我',
  '/pixiv': 'pixiv',
  '/setting': '设置',
}

export const handleTitle = async (pathname: string) => {
  for (const key of Object.keys(titleMap)) {
    if (pathname.startsWith(key)) {
      document.title = `${WEB_NAME} - ${titleMap[key]}`
      break
    }
  }
}
