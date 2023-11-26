import React from 'react'
import Button from '../../../../components/ui/button'
import './hero.css'
const HeroBtns = () => {
    return (
        <div className='flex gap-3 justify-center mt-[50px]' style={{ fontFamily: 'Inter' }}>
            <Button theme='primary' text='Get Started' size='md' className='rounded-md font-[600]' />
            <Button  text='Learn More' size='md' className='gradientBtn rounded-md font-[600]' />
        </div>
    )
}

export default HeroBtns