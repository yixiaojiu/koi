import { Box } from '@mui/material'

export default function Pixiv() {
  return (
    <>
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
        <Box className="w-30 h-10 bg-[#003892]" />
        <Box className="w-30 h-10 bg-[#001e3c]" />
      </div>
    </>
  )
}
