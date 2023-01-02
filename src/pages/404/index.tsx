import notFoundedImage from '@/assets/imgs/404.png'
import { Link } from 'react-router-dom'

export default function NotFounded() {
  return (
    <div className="w-full h-full center flex-col">
      <img className="w-[400px]" src={notFoundedImage} alt="not found" />
      <Link
        to="/home"
        className="block text-lg text-emerald-3 px-6 py-2 border border-emerald-3 rounded-full transition hover:text-emerald-4 hover:border-emerald-4"
      >
        take me home
      </Link>
    </div>
  )
}
