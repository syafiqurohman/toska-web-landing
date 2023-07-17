import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Akses Flexible',
    description: 'Kelola bisnis toko dari berbagai perangkat, di mana pun dan kapan pun Anda inginkan. ',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Visual Menarik',
    description: 'Antarmuka sederhana dan intuitif, mudah mengakses dan menjelajahi semua fitur',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Kelengkapan Fitur',
    description: 'Fitur komprehensif pengelolaan inventaris, Stok, dan manajemen pelanggan.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Anti Ribet',
    description: 'Dirancang untuk menghilangkan kerumitan yang sering terjadi dalam manajemen toko',
    icon: <ContactSupportIcon />,
  },
]
