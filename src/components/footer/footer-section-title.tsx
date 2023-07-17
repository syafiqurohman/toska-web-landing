import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

interface Props {
  title: string
}

const FooterSectionTitle: FC<Props> = ({ title }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mb: 2,
      }}
    >
      <Typography component="p" variant="h6" sx={{ color: 'secondary.main', fontWeight: '700' }}>
        {title}
      </Typography>
    </Box>
  )
}

export default FooterSectionTitle
