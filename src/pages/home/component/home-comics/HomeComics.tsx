import { HomeData } from '@/service/types/getHome'
import { useQueryClient } from '@tanstack/react-query'
import { CategoryBlockAnime } from '@/pages/home/component/home-comics/CategoryBlockAnime'

export const HomeComics = () => {
  const queryClient = useQueryClient()
  const categoryAnimes = queryClient.getQueryData<HomeData>(['home'])!.categoryAnimes
  return (
    <div className="px-8 py-5">
      {categoryAnimes.map((category) => (
        <CategoryBlockAnime key={category.name} category={category} />
      ))}
    </div>
  )
}
