import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'

const SidebarOwner: FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setSelectedIndex(index)
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 150, bgcolor: 'background.paper', m: -3 }}>
      <List
        dense
        component="nav"
        aria-label="secondary mailbox folder"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" sx={{ p: 0 }}>
            Owner
          </ListSubheader>
        }
      >
        <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
          <ListItemText primary="Keuangan" />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
          <ListItemText primary="Produk" />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
          <ListItemText primary="Operasional" />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)}>
          <ListItemText primary="Asset" />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 5} onClick={(event) => handleListItemClick(event, 5)}>
          <ListItemText primary="Supplier" />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 6} onClick={(event) => handleListItemClick(event, 6)}>
          <ListItemText primary="Reseller" />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 7} onClick={(event) => handleListItemClick(event, 7)}>
          <ListItemText primary="Rekap" />
        </ListItemButton>
      </List>
    </Box>
  )
}

export default SidebarOwner
