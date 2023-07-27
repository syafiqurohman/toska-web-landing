import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'

const SidebarRoot: FC = () => {
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
            Root
          </ListSubheader>
        }
      >
        <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
          <ListItemText primary="Trash" />
        </ListItemButton>
        <ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
          <ListItemText primary="Spam" />
        </ListItemButton>
      </List>
    </Box>
  )
}

export default SidebarRoot
