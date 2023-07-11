import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from '@mui/material'
import { SessionProvider } from 'next-auth/react'

import theme from '@/config/theme'

interface Props {
  children: ReactNode
}

const MUIProvider: FC<Props> = ({ children }) => {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SessionProvider>
  )
}

export default MUIProvider
