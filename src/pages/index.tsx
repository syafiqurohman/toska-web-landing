import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

// const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeHeroSlider = dynamic(() => import('../components/home/heroslider'))
const DynamicHomeWhyUs = dynamic(() => import('../components/home/whyus'))
const DynamicHomeHardware = dynamic(() => import('../components/home/hardware'))
const DynamicHomePricing = dynamic(() => import('../components/home/pricing'))
const DynamicHomeTestimonial = dynamic(() => import('../components/home/testimonial'))
const DynamicHomePartners = dynamic(() => import('../components/home/partners'))
const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      {/* <DynamicHomeHero /> */}
      <DynamicHomeHeroSlider />
      <DynamicHomePartners />
      <DynamicHomeWhyUs />
      <DynamicHomeTestimonial />
      <DynamicHomePricing />
      <DynamicHomeHardware />
      <DynamicHomeNewsLetter />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
