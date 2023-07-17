import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import ChangeHistoryRoundedIcon from '@mui/icons-material/ChangeHistoryRounded'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { data } from './whyus.data'

interface LinearProgressProps {
  order: number
}

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'color',
})<LinearProgressProps>(({ theme, order }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    ...(order === 1 && {
      backgroundColor: '#f303ff',
    }),
    ...(order === 2 && {
      backgroundColor: '#26e8bd',
    }),
    ...(order === 3 && {
      backgroundColor: '#0063ff',
    }),
  },
}))

const HomeWhyUs: FC = () => {
  return (
    <Box id="whyus" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative' }}>
              <Image
                src="/images/home-why-us1.png"
                layout="responsive"
                width={650}
                height={678}
                quality={97}
                alt="Why Us img"
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: -6,
                  right: { xs: 0 },
                  boxShadow: 2,
                  borderRadius: 5,
                  px: 2.2,
                  py: 1.4,
                  zIndex: 1,
                  backgroundColor: 'background.paper',
                  width: 300,
                }}
              >
                <Grid container alignItems="center">
                  <Grid item xs={6} textAlign="left">
                    <Box
                      sx={{
                        height: 85,
                        width: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                        Progress
                      </Typography>
                      <Typography variant="h6" sx={{ color: '#32dc88' }}>
                        87%
                      </Typography>
                      <CircularProgress
                        sx={{ position: 'absolute', color: 'divider' }}
                        thickness={2}
                        variant="determinate"
                        value={100}
                        size={80}
                      />
                      <CircularProgress
                        disableShrink
                        thickness={2}
                        variant="determinate"
                        value={84}
                        size={80}
                        sx={{ transform: 'rotate(96deg) !important', color: '#32dc88', position: 'absolute' }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6} textAlign="center">
                    <Box
                      sx={{
                        height: 85,
                        width: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography sx={{ fontSize: 12, fontWeight: 700, lineHeight: 1.5 }}>Target</Typography>
                      <Typography sx={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5 }}>1.000.000.000</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  bottom: -12,
                  left: { xs: 0, md: -24 },
                  boxShadow: 2,
                  borderRadius: 5,
                  px: 2.2,
                  py: 2,
                  zIndex: 1,
                  backgroundColor: 'background.paper',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Grid container alignItems="center">
                    <Grid item xs={12} textAlign="left">
                      <Typography sx={{ fontSize: 20, fontWeight: 700, lineHeight: 1.5 }}>Pendapatan</Typography>
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                        vs. Bulan Sebelumnya
                        <ChangeHistoryRoundedIcon
                          sx={{ color: '#32dc88', fontSize: 'small', ml: '0.5rem', mb: '-0.1rem' }}
                        />
                        <Typography variant="caption" sx={{ color: '#32dc88', ml: '0.03rem' }}>
                          74%
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 40, md: 50 },
                ml: { xs: 0, md: 4 },
                mt: 2,
                mb: 3,
                lineHeight: 1,
                fontWeight: 'bold',
              }}
            >
              Toska Itu{' '}
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
                Nyaman <br />
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 20, md: 28 },
                    transform: 'rotate(3deg)',
                    left: 2,
                    '& img': { width: { xs: 140, md: 175 }, height: 'auto' },
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/headline-curve.svg" alt="Headline curve" />
                </Box>
              </Typography>
              Memudahkan
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              Membawa pengalaman yang nyaman dan mudah ke tingkat berikutnya dengan inovasi yang menarik dan solusi yang
              efektif.
            </Typography>

            <Grid container spacing={2} sx={{ ml: { xs: 0, md: 2 } }}>
              {data.map(({ title, description, icon }, index) => (
                <Grid key={String(index)} item xs={12} md={6}>
                  <Box sx={{ px: 2, py: 1.5, boxShadow: 1, borderRadius: 4, display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        mr: 1,
                        backgroundColor: 'primary.main',
                        borderRadius: '50%',
                        height: 36,
                        width: 36,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.contrastText',
                        '& svg': {
                          fontSize: 20,
                        },
                      }}
                    >
                      {icon}
                    </Box>
                    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                      <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1, color: 'secondary.main' }}>
                        {title}
                      </Typography>
                      <Typography sx={{ lineHeight: 1.3, color: 'text.secondary' }} variant="subtitle1">
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeWhyUs
