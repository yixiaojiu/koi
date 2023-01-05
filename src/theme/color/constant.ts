// 黑色主题
export const THEME_DARK = [
  '#1e1d2b',
  '#2f3042',
  '#222433',
  '#fff',
  '#ffffffa3',
  'rgba(104, 198, 189, 1)',
  '#f5073e',
]

// 粉色主题
export const THEME_PINK = [
  'rgba(239, 239, 244, 1)',
  '#fff',
  '#fff',
  'rgba(255, 180, 190, 1)',
  'rgba(190, 190, 190, 1)',
  'rgba(255, 140, 140, 1)',
  '#f5073e',
]

export interface ThemeColorVar {
  /** 形参或key */
  prop: string
  /** 十六进制颜色值 */
  value: string
  /** css变量名称 */
  var: string
  /** 描述 */
  descr: string
}

export const SYSTEM_COLOR: ThemeColorVar[] = [
  {
    prop: 'bg',
    value: '',
    var: '--bg-color',
    descr: '整体背景色',
  },
  {
    prop: 'asideBg',
    value: '',
    var: '--aside-bg-color',
    descr: '左侧边背景色',
  },
  {
    prop: 'boxBg',
    value: '',
    var: '--box-bg-color',
    descr: '盒子背景色',
  },
  {
    prop: 'font',
    value: '',
    var: '--font-color',
    descr: '主字体颜色',
  },
  {
    prop: 'font-unactive',
    value: '',
    var: '--font-unactive-color',
    descr: '主未激活字体颜色',
  },
  {
    prop: 'primary',
    value: '',
    var: '--primary-color',
    descr: '醒目颜色',
  },
  {
    prop: 'warning',
    value: '',
    var: '--warning-color',
    descr: '错误颜色',
  },
]
