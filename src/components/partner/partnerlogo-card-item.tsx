import React, { FC } from 'react'
import Box from '@mui/material/Box'

import { Partnerlogo } from '@/interfaces/partnerlogo'

interface Props {
  item: Partnerlogo
}

const PartnerlogoCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 2,
      }}
    >
      <Box>
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            mb: 2,
          }}
        ></Box>
        <Box sx={{ mb: 2 }}>
          <Box sx={{ '& img': { height: 30 } }}>
            {/* eslint-disable-next-line */}
            <img src={item.logo} alt={item.name + ' logo'} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default PartnerlogoCardItem
