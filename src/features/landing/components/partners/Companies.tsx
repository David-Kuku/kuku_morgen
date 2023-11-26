import React from 'react'
import { Google, Greenlight, Pitch, Stripe, WellsFargo } from './assets'
import colors from '../../../../utils/colors'

const Companies = () => {
    const companies = [Google, Stripe, WellsFargo, Pitch, Greenlight]
    return (
        <div className='flex px-[6%] items-center gap-4 bg-[#EEE0FF] py-4'>
            <div className='w-[30%] font-Inter text-3xl font-bold' style={{color: colors.black}}>Partners</div>
                <div className='w-[60%] flex justify-around'>
                {
                    companies.map((company) => (
                        <img key ={company} src={company} alt='img' className='gap-3 h-[30px] lg:h-[50px]'/>
                    ))
                }
            </div>
        </div>
    )
}

export default Companies