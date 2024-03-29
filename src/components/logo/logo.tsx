import React, { FC } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick}>
      <Link href="/">
        <Image src="/images/toska-logo.png" alt="logo-toska" width={75} height={27} quality={100} />
      </Link>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
