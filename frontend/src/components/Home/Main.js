import React from 'react'
import NavBar from '../navbar/Navbar'
import Hero from '../hero/Hero'
import AboutUs from '../aboutus/AboutUs'
import AimsAndObjectives from '../aims&objectives/Aims'
import ClubActivities from '../activities/Activities'
import SponsorsPage from '../sponsor/Sponsor'
import Footer from '../footer/Footer'
import ClubMemberProfiles from '../members/Member'
const Main = () => {
  return (
    <div>
    <NavBar/>
      <Hero/>
      <AboutUs/>
      <AimsAndObjectives/>
      <ClubMemberProfiles/>
      <ClubActivities/>
      <SponsorsPage/>
      <Footer/>
    </div>
  )
}

export default Main
