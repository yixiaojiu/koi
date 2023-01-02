import { Box, Typography } from '@mui/material'
import { Tabs } from '@/components/tabs/Tabs'
import { tabs } from '@/pages/home/component/home-article/constant'
import { TabInfo } from '@/pages/home/component/home-article/TabInfo'
import { useState } from 'react'

export const HomeArticle = () => {
  const [tabActiveIndex, setTabActiveIndex] = useState(() => new Date().getDay())

  return (
    <div className="px-8 py-5">
      <Box
        className="px-8 py-5 rounded-4"
        sx={{
          backgroundColor: 'secondary.main',
        }}
      >
        <Typography
          component="h3"
          sx={{
            marginBottom: 2,
            color: 'text.primary',
            fontSize: 20,
          }}
        >
          新番动态
        </Typography>
        <Tabs tabArr={tabs} activeIndex={tabActiveIndex} change={(activeIndex) => setTabActiveIndex(activeIndex)} />
        <TabInfo activeIndex={tabActiveIndex} />
      </Box>
    </div>
  )
}
