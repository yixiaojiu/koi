interface AsideBarItem {
  icon: string
  name: string
  path: string
}

export const asideBarItems: AsideBarItem[] = [
  {
    icon: 'i-ic-round-home',
    name: '首页',
    path: '/home',
  },
  {
    icon: 'i-ic-baseline-search',
    name: '搜索',
    path: '/search',
  },
  {
    icon: 'i-ic-round-person-2',
    name: '关于我',
    path: '/user',
  },
  {
    icon: 'i-ic-baseline-balcony',
    name: 'Pixiv',
    path: '/pixiv',
  },
  {
    icon: 'i-ic-round-settings',
    name: '设置',
    path: '/setting',
  },
]

