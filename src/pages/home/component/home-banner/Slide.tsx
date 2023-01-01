import type { Anime } from '@/service/types/getHome'
import { useRef } from 'react'
import { IconButton } from '@/components/button/IconButton'
import '@/pages/home/component/home-banner/Slide.less'
import { useSlide } from '@/pages/home/component/home-banner/useSlide'
import { motion } from 'framer-motion'

const PlayButton = (props: { onClick: () => void }) => (
  <IconButton
    icon="i-ic-round-play-arrow"
    className="rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto transition duration-300 hover:scale-125 hover:shadow-lg"
    {...props}
    sx={{
      backgroundColor: 'background.paper',
    }}
  />
)

const Arrow = (props: { icon: string; onClick: () => void; className?: string }) => (
  <div
    onClick={props.onClick}
    className={`absolute top-0 h-full center px-2 cursor-pointer from-[#00000099] transition-transform duration-300 ${
      props.className || ''
    }`}
  >
    <div className={` text-zinc-50 w-10 h-10 ${props.icon}`} />
  </div>
)

export const Slide = (props: { animes: Anime[] }) => {
  const liElement = useRef<HTMLImageElement>(null)
  const { translateX, activeIndex, back, forward, canForward, canBack } = useSlide(liElement, props.animes.length)

  const handlePlayClick = (id: string) => {
    // TODO
    return id
  }
  return (
    <div className="w-full">
      <ul className="relative h-full overflow-x-hidden">
        <motion.div
          animate={{ x: translateX }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full flex gap-4 h-full"
        >
          {props.animes.map((anime, index) => (
            <li
              className={` relative h-full shrink-0 overflow-hidden rounded-lg hover:brightness-100 transition duration-300 ${
                activeIndex === index ? 'brightness-100' : 'brightness-50'
              }`}
              key={anime.id}
            >
              <img className="h-full" src={anime.cover} ref={index === 0 ? liElement : undefined} />
              <div
                className={` absolute-init transition duration-300 hover:opacity-100 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <PlayButton onClick={() => handlePlayClick(anime.id)} />
              </div>
              <div className="home-banner-slide-info absolute w-full left-0 bottom-0 px-4 pb-2">
                <h3 className="font-bold text-neutral-100 relative z-1">{anime.title}</h3>
                <p className="text-sm text-gray-300 relative z-1">{anime.season}</p>
              </div>
            </li>
          ))}
        </motion.div>
        <Arrow
          icon="i-ic-round-arrow-back-ios"
          className={` left-0 bg-gradient-to-r ${!canBack() ? '-translate-x-full' : ''} `}
          onClick={back}
        />
        <Arrow
          icon="i-ic-round-arrow-forward-ios"
          className={` right-0 bg-gradient-tol ${!canForward() ? 'translate-x-full' : ''}`}
          onClick={forward}
        />
      </ul>
    </div>
  )
}
