import React from 'react'
import StartYourJourney from './StartYourJourney'
import Subscribe from './Subscribe'
import FooterNav from './FooterNav'

const Footer = () => {
  return (
    <div className='mt-[400px]'>
        <StartYourJourney/>
        <Subscribe/>
        <FooterNav/>
    </div>
  )
}

export default Footer