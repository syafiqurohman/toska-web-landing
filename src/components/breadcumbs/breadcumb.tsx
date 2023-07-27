import React, { FC } from 'react'
import { Breadcrumbs, Typography } from '@mui/material'
import Link from '@mui/material/Link'
import RoofingRoundedIcon from '@mui/icons-material/RoofingRounded'
import GrainIcon from '@mui/icons-material/Grain'
import { useRouter } from 'next/router'

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

const Breadcrumb: FC = () => {
  const router = useRouter()
  const { pathname } = router

  const getPageName = (path: string) => {
    const pathParts = path.split('/')
    const lastPart = pathParts[pathParts.length - 1]
    const formattedPageName = lastPart.replace(/-/g, ' ')
    return formattedPageName.charAt(0).toUpperCase() + formattedPageName.slice(1)
  }

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" sx={{ display: 'flex', alignItems: 'center' }} color="inherit" href="/">
          <RoofingRoundedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        </Link>
        <Typography sx={{ display: 'flex', alignItems: 'center' }} color="text.primary">
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {getPageName(pathname)}
        </Typography>
      </Breadcrumbs>
    </div>
  )
}

export default Breadcrumb
