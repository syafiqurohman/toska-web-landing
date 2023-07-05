import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme, styled } from '@mui/material/styles'
import { PartnerLogoCardItem } from '@/components/partner'
import { data } from './partnerslogo.data'

const HomePartnersLogo: FC = () => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: matchMobileView ? 2.5 : 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 5000,
    autoplaySpeed: 0.1,
  }

  return (
    <Box
      id="partnerslogo"
      sx={{
        pt: {
          xs: 3,
          md: 3,
        },
        pb: {
          xs: 3,
          md: 3,
        },
        backgroundColor: '#f2f5f5',
      }}
    >
      <Container maxWidth="lg">
        <Slider {...sliderConfig}>
          {data.map((item) => (
            <PartnerLogoCardItem key={String(item.id)} item={item} />
          ))}
        </Slider>
      </Container>
    </Box>
  )
}

export default HomePartnersLogo
