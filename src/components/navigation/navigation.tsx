import React, { FC, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { Link as ScrollLink } from 'react-scroll'
import { navigations } from './navigation.data'
import { useRouter } from 'next/router'

const Navigation: FC = () => {
  const [isHome, setIsHome] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    setIsHome(router.pathname === '/')
  }, [router.pathname])

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => (
        <Box
          component={ScrollLink}
          key={destination}
          activeClass="current"
          to={destination}
          spy={true}
          smooth={true}
          duration={700}
          sx={{
            position: 'relative',
            color: isHome ? 'text.disabled' : 'text.primary',
            cursor: isHome ? 'pointer' : 'default',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1rem', md: 'inherit' },
            ...(destination === '/' && {
              color: 'primary.main',
            }),

            '& > div': { display: 'none' },

            '&.current>div': { display: 'block' },

            '&:hover': {
              color: 'primary.main',
              '&>div': {
                display: 'block',
              },
            },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              transform: 'rotate(3deg)',
              '& img': { width: 44, height: 'auto' },
            }}
          >
            {/* eslint-disable-next-line */}
            <img src="/images/headline-curve.svg" alt="Headline curve" />
          </Box>
          {isHome ? label : ''}
        </Box>
      ))}
    </Box>
  )
}

export default Navigation
