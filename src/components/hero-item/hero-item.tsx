import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Hero } from '@/interfaces/hero'

interface Props {
  item: Hero
}

const HeroItem: FC<Props> = ({ item }) => {
  return (
    <Box sx={{ ml: 4 }}>
      <Box
        sx={{
          lineHeight: 0,
          overflow: 'hidden',
          borderRadius: 5,
          boxShadow: 2,
          m: 2,
        }}
      >
        <Image layout="responsive" src={item.photo} width={450} height={450} alt={'Hero ' + item.id} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 50,
          boxShadow: 2,
          borderRadius: 2,
          ml: -3,
          px: 2,
          py: 2,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          width: 300,
          height: 100,
          backgroundColor: 'background.paper',
        }}
      >
        <Box
          sx={{
            boxShadow: 1,
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: 3,
            '& img': { width: '32px !important', height: 'auto' },
          }}
        >
          <Image src={item.icon} alt={'Certificate Icon ' + item.id} width={50} height={30} quality={97} />
        </Box>
        <Box>
          <Typography
            component="h6"
            sx={{
              color: 'secondary.main',
              fontSize: '1.1rem',
              fontWeight: 700,
              mb: 0.5,
            }}
          >
            {item.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', lineHeight: 1.3 }}>
            {item.subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
export default HeroItem
