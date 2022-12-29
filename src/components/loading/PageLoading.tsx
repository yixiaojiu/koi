import { LoadingBlockRun } from '@/components/loading/loading-block-run/LoadingBlockRun'

export const PageLoading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <LoadingBlockRun />
    </div>
  )
}
