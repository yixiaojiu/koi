import { observer } from 'mobx-react-lite'
import { getHome } from '@/service/api/anime'
import { useQuery } from '@tanstack/react-query'
import { PageLoading } from '@/components/loading/PageLoading'
import { HomeBanner } from '@/pages/home/component/home-banner/HomeBanner'

const Content = observer(() => {
  const { isLoading } = useQuery({
    queryKey: ['home'],
    queryFn: async () => {
      const { data } = await getHome()
      return data.data
    },
    staleTime: Infinity,
  })
  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : (
        <div>
          <HomeBanner />
        </div>
      )}
    </>
  )
})

export default function Home() {
  return <Content />
}
