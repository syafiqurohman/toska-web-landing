import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicPanduanHero = dynamic(() => import('../components/panduan/hero'))
const DynamicPanduanSidebar = dynamic(() => import('../components/panduan/sidebar'))

const Panduan: NextPageWithLayout = () => {
  return (
    <>
      <DynamicPanduanHero />
      <DynamicPanduanSidebar />
    </>
  )
}

Panduan.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Panduan
