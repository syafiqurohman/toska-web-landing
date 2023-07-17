import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import { FooterNavigation, FooterSocialLinks, FooterSectionTitle } from '@/components/footer'
import { LogoWhite } from '@/components/logo'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} md={4}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <LogoWhite />
              <Typography sx={{ color: 'white', letterSpacing: 0.5, my: 1 }}>
                Aplikasi Kasir terlengkap untuk kegiatan bisnismu lebih enteng.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <FooterSectionTitle title="KANTOR PUSAT" />
            <Typography variant="h5" sx={{ color: 'white', letterSpacing: 0.5 }}>
              Armadacom.id Headquarter
            </Typography>
            {/* bagian1 selesai */}
            <Typography sx={{ mb: 2 }}>Jln. Girimargo 10A, Kerkop, Wonosobo</Typography>
            <FooterSectionTitle title="CALL CENTER" />
            <Typography variant="h4" sx={{ color: 'white', letterSpacing: 0.5 }}>
              286 322949 (24 Jam)
            </Typography>
            {/* bagian2 selesai */}
            <FooterSocialLinks />
          </Grid>
          <Grid item xs={12} md={4}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
