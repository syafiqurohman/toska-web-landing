import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Container, Grid } from '@mui/material'
import { SidebarAdmin } from '../panduan/admin'
import { SidebarKasir } from '../panduan/kasir'
import { SidebarRoot } from '../panduan/root'
import { SidebarOwner } from '../panduan/owner'

interface BasicTabsProps {
  value: number
  setValue: (newValue: number) => void
  children: React.ReactNode // Tambahkan prop children
}

interface TabPanelProps {
  children?: React.ReactNode
  value: number
  index: number
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const BasicTab: React.FC<BasicTabsProps> = ({ value, setValue, children }) => {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Container>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Kasir" />
            <Tab label="Admin" />
            <Tab label="Owner" />
            <Tab label="Root" />
          </Tabs>
        </Box>
        <Grid container spacing={0}>
          <Grid item xs={12} md={2}>
            {value === 0 && (
              <TabPanel value={value} index={0}>
                <SidebarKasir />
              </TabPanel>
            )}
            {value === 1 && (
              <TabPanel value={value} index={1}>
                <SidebarAdmin />
              </TabPanel>
            )}
            {value === 2 && (
              <TabPanel value={value} index={2}>
                <SidebarOwner />
              </TabPanel>
            )}
            {value === 3 && (
              <TabPanel value={value} index={3}>
                <SidebarRoot />
              </TabPanel>
            )}
          </Grid>
          <Grid item xs={12} md={10}>
            <Box component="main" sx={{ display: 'flex', justifyContent: 'Left', p: 2 }}>
              {/* Menampilkan konten dari folder "pages" */}
              {children}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default BasicTab
