import React from 'react'
import { closeQuotation, openQuotation } from './assets'
import PricingCards from '../pricingPlans/PricingCards'
import HeaderText from './HeaderText'
import ReviewCard from './ReviewCard'

const Reviews = () => {
    return (
        <div className='relative mt-[100px] px-[6%]'>
            <div className='flex justify-start'>
                <img src={openQuotation} alt='img' className='opacity-100' />
            </div>
            <div className=' mt-[-140px] flex flex-start mx-[7%]'>
                <HeaderText />
            </div>
            <div className='flex justify-between mt-[100px] mx-[3%] sl:ml-[7%]'>
                <ReviewCard
                    position='CTO, Worldview'
                    testimony='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
                    username='Teg Hangley' />
                <ReviewCard
                    position='CTO, Worldview'
                    testimony='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
                    username='Teg Hangley' />
                <ReviewCard
                    position='CTO, Worldview'
                    testimony='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
                    username='Teg Hangley' />
            </div>
            <div className='flex justify-end mt-3'>
                <img src={closeQuotation} alt='img' className='opacity-100' />
            </div>

        </div>
    )
}

export default Reviews