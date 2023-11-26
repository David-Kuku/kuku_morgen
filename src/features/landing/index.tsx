import React from 'react'
import HeaderText from './components/hero/HeaderText'
import HeroBtns from './components/hero/HeroBtns'
import SocialProof from './components/socialProof'
import Partners from './components/partners'
import PricingPlans from './components/pricingPlans'
import Reviews from './components/reviews'
import Faq from './components/faq'
import colors from '../../utils/colors'
import Blog from './components/blog'
import Footer from './components/footer'
import Hero from './components/hero'

const Landing = () => {
    return (
        <div className='my-[100px]'>
            <Hero/>
            <SocialProof />
            <Partners/>
            <PricingPlans/>
            <hr className='mt-[100px]' style={{color: colors.divider}}/>
            <Reviews/>
            <hr className='my-[100px]' style={{color: colors.divider}}/>
            <Faq/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default Landing