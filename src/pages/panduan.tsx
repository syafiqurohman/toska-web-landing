import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { PanduanLayout } from '@/components/layout'

const Panduan: NextPageWithLayout = () => {
  return <> </>
}

Panduan.getLayout = (page) => <PanduanLayout>{page}</PanduanLayout>

export default Panduan
