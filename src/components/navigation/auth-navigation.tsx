import React from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'
import { signIn, signOut, useSession } from 'next-auth/react'
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import Tooltip from '@mui/material/Tooltip'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded'

const openNewPage = () => {
  const newWindow = window.open('/panduan', '_blank')
  newWindow?.focus()
}

const AuthNavigation: React.FC = () => {
  const { data: session } = useSession()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  if (session && session.user) {
    return (
      <Box sx={{ '& button:first-child': { mr: 2 } }}>
        <Tooltip title="Account settings">
          <StyledButton
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={<AccountBoxRoundedIcon />}
            disableHoverEffect={true}
          >
            {session.user.name}
          </StyledButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={openNewPage}>
            <ListItemIcon>
              <AutoStoriesIcon fontSize="small" />
            </ListItemIcon>{' '}
            Panduan
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => signOut()}>
            <ListItemIcon>
              <ExitToAppRoundedIcon fontSize="small" />
            </ListItemIcon>
            Keluar
          </MenuItem>
        </Menu>
      </Box>
    )
  }

  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <StyledButton disableHoverEffect={true} onClick={openNewPage}>
        Panduan
      </StyledButton>
    </Box>
  )
}

export default AuthNavigation
