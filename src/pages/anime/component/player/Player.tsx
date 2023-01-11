import { PageLoading } from '@/components/loading/PageLoading'

interface Props {
  loading: boolean
}

export const Player = (props: Props) => {
  return <div className="aspect-video relative">{props.loading ? <PageLoading /> : <div>1</div>}</div>
}
