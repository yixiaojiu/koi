import type { CategoryAnime } from '@/service/types/getHome'
import { motion } from 'framer-motion'
import { Icon } from '@/components/icon/Icon'

interface Props {
  category: CategoryAnime
}

export const CategoryBlockAnime = (props: Props) => {
  return (
    <div className="my-8">
      <h2 className="relative mb-3">
        <p
          className="absolute opacity-20 left-0 bottom-0 font-extrabold text-[38px] tracking-widest"
          style={{
            background:
              '-webkit-linear-gradient(90deg,transparent,var(--primary-color))',
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
          }}
        >
          FUN ANIME
        </p>
        <span className="text-[30px]">{props.category.name}</span>
      </h2>
      <div className="flex flex-wrap gap-6">
        {props.category.list.map((anime, index) => (
          <div key={anime.id}>
            <motion.div
              className="relative aspect-[2/3] select-none overflow-hidden rounded-2xl"
              initial={{
                x: 200,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  type: 'tween',
                  duration: 0.8,
                  delay: index * 0.3,
                },
              }}
              viewport={{ once: true }}
            >
              <img src={anime.cover} className="object-cover h-full" />
              <div className="absolute-0 full z-3 center flex-col bg-black/[0.6] opacity-0 hover:opacity-100 transition duration-300">
                <div className="center relative w-10 h-10 rounded-full bg-white cursor-pointer group">
                  <div className="full absolute-0 bg-white/[0.3] transition rounded-full group-hover:scale-140"></div>
                  <Icon
                    iconName="i-ic-round-play-arrow"
                    size="large"
                    className="text-[#333]"
                  />
                </div>
                <p className="mt-6 text-white/[0.95] max-w-4/5 text-center font-semibold text-sm text-center">
                  {anime.title}
                </p>
                <span className="text-xs text-white/[0.6] mt-2">
                  {anime.season}
                </span>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
