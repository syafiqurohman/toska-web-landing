import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Link from 'next/link'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation: FC = () => {
  const handleLoginClick = () => {
    // Aksi yang ingin Anda lakukan saat tombol "Panduan" diklik
    console.log('Tombol "Panduan" diklik')
  }

  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <Link href="/login" passHref>
        <StyledButton disableHoverEffect={true} onClick={handleLoginClick}>
          Panduan
        </StyledButton>
      </Link>
    </Box>
  )
}

export default AuthNavigation
