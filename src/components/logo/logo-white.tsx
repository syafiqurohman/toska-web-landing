import React, { FC } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const LogoWhite: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick}>
      <Link href="/">
        <Image src="/images/toska-logo-white.png" alt="logo-toska-white" width={110} height={40} quality={100} />
      </Link>
    </Box>
  )
}

LogoWhite.defaultProps = {
  variant: 'primary',
}

export default LogoWhite
