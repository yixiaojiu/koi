import { Box } from '@mui/material'

export default function Pixiv() {
  return (
    <div className="h-full">
      <div className="flex m-4">
        <Box className="w-30 h-10" sx={{ backgroundColor: 'primary.main' }}>
          primary.main
        </Box>
        <Box className="w-30 h-10" sx={{ backgroundColor: 'primary.dark' }}>
          primary.dark
        </Box>
        <Box className="w-30 h-10" sx={{ backgroundColor: 'primary.light' }}>
          primary.light
        </Box>
      </div>
      <div className="flex m-4">
        <Box className="w-50 h-10" sx={{ backgroundColor: 'background.paper' }}>
          background.paper
        </Box>
        <Box className="w-50 h-10" sx={{ backgroundColor: 'background.default' }}>
          background.default
        </Box>
      </div>
      <div className="flex m-4">
        <Box className="w-30 h-10" sx={{ backgroundColor: 'text.primary' }}>
          text.primary
        </Box>
        <Box className="w-30 h-10" sx={{ backgroundColor: 'text.secondary' }}>
          text.secondary
        </Box>
      </div>
      <div className="flex m-4">
        <Box className="w-30 h-10" sx={{ backgroundColor: 'secondary.main' }}>
          secondary.main
        </Box>
      </div>
      <div className="flex m-4 gap-3">
        <div className="text-blue p-3 bg-[var(--bg-color)]">--bg-color</div>
        <div className="text-blue p-3 bg-[var(--aside-bg-color)]">--aside-bg-color</div>
        <div className="text-blue p-3 bg-[var(--box-bg-color)]">--box-bg-color</div>
        <div className="text-blue p-3 bg-[var(--font-color)]">--font-color</div>
        <div className="text-blue p-3 bg-[var(--font-unactive-color)]">--font-unactive-color</div>
        <div className="text-blue p-3 bg-[var(--primary-color)]">--primary-color</div>
        <div className="text-blue p-3 bg-[var(--warning-color)]">--warning-color</div>
      </div>
      <div className="flex m-4">
        <Box className="w-30 h-10 bg-[#003892]" />
        <Box className="w-30 h-10 bg-[#001e3c]" />
      </div>
    </div>
  )
}
