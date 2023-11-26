import React from 'react'
import { journey } from './assets'
import Button from '../../../../components/ui/button'
import colors from '../../../../utils/colors'

const StartYourJourney = () => {
    return (
        <div className='relative'>
            <img src={journey} alt="img" className='w-[100%]'/>
            <div className='flex flex-col gap-3 text-left absolute top-[20%] lg:top-[27%] left-[4%]'>
                <div>
                    <div className='text-4xl font-[600] font-Inter text-left' style={{color: colors.Neutral_N900}}>Start Your Journey</div>
                    <div className='text-xs font-Inter lg:text-[16px] text-left my-3' style={{color: colors.Gray_500}}>Join over 4,000+ startups already growing with exchange</div>
                </div>
                <Button text='Get Started' size='sm' className='rounded-md max-w-[150px]' theme='primary' />
            </div>
        </div>
    )
}

export default StartYourJourney