import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { PanduanLayout } from '@/components/layout'

const KasirDashboard: NextPageWithLayout = () => {
  return <>Astaghfirullah</>
}

KasirDashboard.getLayout = (page) => <PanduanLayout>{page}</PanduanLayout>

export default KasirDashboard
