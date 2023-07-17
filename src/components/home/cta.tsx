import React, { FC } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'
import Image from 'next/image'
import Grid from '@mui/material/Grid'

const HomeNewsLetter: FC = () => {
  const ImageBox: FC = () => {
    return (
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Image
          layout="responsive"
          src="/images/device.png"
          width={520}
          height={310}
          quality={97}
          alt="Testimonial img"
        />
      </Box>
    )
  }

  const ContentBox: FC = () => {
    return (
      <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center" sx={{ mt: 3 }}>
        <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 }, textAlign: 'left' }}>
          Pakai Toska Hidup Jadi Berwarna.
        </Typography>
        <Typography sx={{ mb: 3, textAlign: 'left' }}>
          Nikmati beragam fitur dan layanan lengkap untuk kelola bisnismu
        </Typography>
        <SubscribeForm />
      </Box>
    )
  }

  const SubscribeForm: FC = () => {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={{ xs: '100%' }}
        mx="auto"
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        <InputBase
          sx={{
            backgroundColor: 'background.paper',
            borderRadius: 3,
            width: '100%',
            height: 48,
            px: 2,
            mr: { xs: 0, md: 3 },
            mb: { xs: 2, md: 0 },
          }}
          placeholder="Enter your Email Address"
        />
        <Box>
          <StyledButton disableHoverEffect size="large">
            Subscribe
          </StyledButton>
        </Box>
      </Box>
    )
  }
  return (
    <Box id="hubkami" sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 5 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 4 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <ContentBox />
            </Grid>
            <Grid item xs={12} md={6}>
              <ImageBox />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
