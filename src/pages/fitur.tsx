import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicFiturHero = dynamic(() => import('../components/fitur/hero'))
const DynamicFiturSidebar = dynamic(() => import('../components/fitur/sidebar'))

const Fitur: NextPageWithLayout = () => {
  return (
    <>
      <DynamicFiturHero />
      <DynamicFiturSidebar />
    </>
  )
}

Fitur.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Fitur
