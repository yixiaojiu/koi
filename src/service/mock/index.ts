const pathnameMap: { [key: string]: Function } = {
  '/getIndex': () => import('@/service/mock/data/getIndex.json'),
}

export async function handleMockData(url: string) {
  const pathname = new URL(url).pathname
  const data = await pathnameMap[pathname]()
  return {
    code: 200,
    msg: 'success',
    data: data.default,
  }
}
