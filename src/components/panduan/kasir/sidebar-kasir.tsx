import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import { sidebar } from './sbkasir.data' // Ubah path sesuai dengan struktur proyek Anda
import type { Sidebar } from '@/interfaces/sidebar' // Sesuaikan path ini dengan struktur proyek Anda
import { useRouter } from 'next/router' // Import useRouter dari Next.js

const SidebarKasir: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter() // Dapatkan router dari Next.js

  const handleListItemClick = (index: number, href: string) => {
    setSelectedIndex(index)
    router.push(href) // Gunakan router.push untuk mengarahkan ke halaman yang sesuai
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 150, bgcolor: 'background.paper', m: -3 }}>
      <List
        dense
        component="nav"
        aria-label="secondary mailbox folder"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" sx={{ p: 0 }}>
            Kasir
          </ListSubheader>
        }
      >
        {sidebar.map((item, index) => (
          <ListItemButton
            key={index}
            selected={selectedIndex === index}
            onClick={() => handleListItemClick(index, item.href)}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )
}

export default SidebarKasir
