import React, { FC, ReactNode, useState } from 'react'
import Box from '@mui/material/Box'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { PanduanHero } from '../panduan'
import { BasicTab } from '@/components/tabs' // Import sebagai default

interface Props {
  children: ReactNode
}

const PanduanLayout: FC<Props> = ({ children }) => {
  const [value, setValue] = useState(0)
  return (
    <Box component="main">
      <Header />
      <PanduanHero />
      <BasicTab value={value} setValue={setValue}>
        {/* Konten anak dari BasicTab */}
        {children}
      </BasicTab>
      <Footer />
    </Box>
  )
}

export default PanduanLayout
