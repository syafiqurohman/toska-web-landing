import React, { useState } from 'react'
import { styled } from '@mui/system'
import { Card, CardContent, Typography, Button, Collapse, Grid, Box, Container } from '@mui/material'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { pricingData } from './pricing.data'
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone'

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 370,
  padding: 10,
  margin: 4,
  marginTop: theme.spacing(2),
  borderRadius: 15,
}))

const ExpandButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderRadius: 10,
}))

const ButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': {
    margin: '8px',
  },
})

const StyledList = styled('ul')({
  listStyleType: 'none',
  padding: 0,
  marginTop: '10px',
})

const StyledListItem = styled('li')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
}))

const StyledCheckCircleIcon = styled(CheckCircleTwoToneIcon)(({ theme }) => ({
  marginRight: '8px',
  fontSize: '25px',
  color: theme.palette.primary.main,
}))

const CardPricing = () => {
  const [expanded, setExpanded] = useState(false)

  const handleExpand = () => {
    setExpanded(!expanded)
  }

  return (
    <Box id="harga" sx={{ pt: { xs: 5, md: 5 }, backgroundColor: '#f2f5f5' }}>
      <Container>
        <Typography
          component="h2"
          sx={{
            position: 'relative',
            fontSize: { xs: 36, md: 46 },
            mt: { xs: 0, md: 7 },
            mb: 4,
            lineHeight: 1,
            fontWeight: 'bold',
          }}
        >
          Sesuaikan Kebutuhan Toko,
          <br />
          Pilih{' '}
          <Typography
            component="mark"
            sx={{
              position: 'relative',
              color: 'primary.main',
              fontSize: 'inherit',
              fontWeight: 'inherit',
              backgroundColor: 'unset',
            }}
          >
            Harga{' Terbaik '}
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 20, md: 28 },
                left: 2,
                '& img': { width: { xs: 130, md: 175 }, height: 'auto' },
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/headline-curve.svg" alt="Headline curve" />
            </Box>
          </Typography>
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 2 }}>
          Set the way of learning according to your wishes with some of the benefits that you get us, so you on enjoy
          the lessons that we provide.
        </Typography>
        <Grid container spacing={0} justifyContent="center">
          {pricingData.map((data, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h1" sx={{ fontSize: 50, color: 'primary.main' }} gutterBottom>
                    {data.levelName}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'inherit' }} gutterBottom>
                    {data.subtitle}
                  </Typography>
                  <Typography variant="h1" align="center" sx={{ fontSize: 40 }}>
                    Rp {data.price}
                  </Typography>
                  <ButtonContainer>
                    <Grid container rowSpacing={0} sx={{ '& button': { mt: { xs: 0, sm: 1 }, width: '100%' } }}>
                      <Grid item xs={12} sm={6} sx={{ mb: { xs: 2, sm: 0 }, paddingRight: { xs: 0, sm: 1 } }}>
                        <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                          <StyledButton color="primary" size="large" variant="contained">
                            Pilih Paket
                          </StyledButton>
                        </ScrollLink>
                      </Grid>
                      <Grid item xs={12} sm={6} sx={{ mb: { xs: 2, sm: 0 }, paddingLeft: { xs: 0, sm: 1 } }}>
                        <ScrollLink to="video-section" spy={true} smooth={true} offset={0} duration={350}>
                          <StyledButton color="primary" size="large" variant="outlined">
                            Hubungi Kami
                          </StyledButton>
                        </ScrollLink>
                      </Grid>
                    </Grid>
                  </ButtonContainer>
                </CardContent>
                <Collapse in={expanded}>
                  <CardContent>
                    <StyledList>
                      {data.features.map((feature, idx) => (
                        <StyledListItem key={idx}>
                          <StyledCheckCircleIcon />
                          <Typography>{feature}</Typography>
                        </StyledListItem>
                      ))}
                    </StyledList>
                  </CardContent>
                </Collapse>
              </StyledCard>
            </Grid>
          ))}
          <Grid item xs={12} textAlign="center">
            <ExpandButton
              variant="outlined"
              color="primary"
              onClick={handleExpand}
              endIcon={<ExpandMoreIcon />}
              fullWidth
            >
              {expanded ? 'Tutup Fitur' : 'Detail Fitur'}
            </ExpandButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default CardPricing
