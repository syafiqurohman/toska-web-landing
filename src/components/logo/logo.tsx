import React, { FC } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick}>
      <Image src="/images/toska-logo.png" alt="Certificate icon" width={75} height={27} quality={100} />
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
