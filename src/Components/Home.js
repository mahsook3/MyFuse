import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import Partners from './Partners'
import CompanySpotlight from './CompanySpotlight'
import JobFuse from './JobFuse'
import RecentJob from './RecentJob'
import TopCat from './TopCat'
import TestimonialSlider from './TestimonialSlider'
import HowWorks from './HowWorks'
import Stats from './Stats'
import NewsLetters from './NewsLetters'
import ResumeCreate from './ResumeCreate'


export default function Home() {
  return (
    <>
    <Hero />
    <Partners />
    <Banner />
    <HowWorks />
    <CompanySpotlight />
    <JobFuse />
    <RecentJob />
    <ResumeCreate />
    <TopCat />
    <TestimonialSlider />
    <Stats />
    <NewsLetters />
    </>
  )
}
