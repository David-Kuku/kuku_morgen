import React from 'react'
import HeaderText from './HeaderText'
import PricingCards from './PricingCards'

const PricingPlans = () => {
    return (
        <div className='flex flex-col gap-4'>
            <HeaderText />
            <PricingCards />
        </div>
    )
}

export default PricingPlans