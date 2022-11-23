import { Box } from '@mui/material'

export default function Pixiv() {
  return (
    <>
    <div className='flex m-4'>
      <Box className='w-10 h-10' sx={{ backgroundColor: 'primary.main' }}/>
      <Box className='w-10 h-10' sx={{ backgroundColor: 'primary.dark' }}/>
      <Box className='w-10 h-10' sx={{ backgroundColor: 'primary.light' }}/>
    </div>
    <div className='flex m-4'>
      <Box className='w-10 h-10' sx={{ backgroundColor: 'background.paper' }}/>
      <Box className='w-10 h-10' sx={{ backgroundColor: 'background.default' }}/>
    </div>
    <div className='flex m-4'>
      <Box className='w-10 h-10' sx={{ backgroundColor: 'text.primary' }}/>
      <Box className='w-10 h-10' sx={{ backgroundColor: 'text.secondary' }}/>
    </div>
    <div className='flex m-4'>
      <Box className='w-10 h-10 bg-[#003892]' />
      <Box className='w-10 h-10 bg-[#001e3c]'/>
    </div>
    </>
  )
}
