import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { PanduanLayout } from '@/components/layout'

const RekapPenjualan: NextPageWithLayout = () => {
  return <>Amiiiinn</>
}

RekapPenjualan.getLayout = (page) => <PanduanLayout>{page}</PanduanLayout>

export default RekapPenjualan
