import React from 'react'
import ServiceHero from '../../components/servicesComponents/ServiceHero'
import Adverts from '../../components/servicesComponents/Adverts'
import Consulting from '../../components/servicesComponents/Consulting'
import DigitalService from '../../components/servicesComponents/DIgitalService'
// import ContentCreation from '../../components/servicesComponents/ContentCreation'
import Educational from '../../components/servicesComponents/Educational'
import Event from '../../components/servicesComponents/Event'
import InternationalOutreach from '../../components/servicesComponents/InternationalOutreach'
import './index.css'
import Footer from '../../components/Footer/Footer'
const Services = () => {
  return (
    <div className='space-y-28 md:space-y-0  bg-black text-black  dark:bg-black dark:text-white'>
      <ServiceHero/>
      <Adverts/>
      <Consulting/>
      <DigitalService/>
      {/* <ContentCreation/> */}
      <Educational/>
      <Event/>
      <InternationalOutreach/> 
      <Footer/>
    </div>
  )
}

export default Services
