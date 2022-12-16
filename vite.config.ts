import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'
import Unocss from 'unocss/vite'
import type { Preset } from 'unocss'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'

function resolve(dir: string): string {
  return join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src/'),
    },
  },
  plugins: [
    react(),
    Unocss({
      presets: [
        presetUno(),
        presetIcons(),
        presetAttributify(),
        presetWebFonts({
          provider: 'google',
          fonts: {
            anek: 'ZCOOL KuaiLe:400',
          },
        }) as unknown as Preset<{}>,
      ],
      shortcuts: {
        center: 'flex items-center justify-center',
      },
    }),
  ],
})
