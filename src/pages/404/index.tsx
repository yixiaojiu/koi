import notFoundedImage from '@/assets/imgs/404.png'

export default function NotFounded() {
  return <div className="w-full h-full center">
    <img className='w-[400px]' src={notFoundedImage} alt="not found" />
  </div>
}
