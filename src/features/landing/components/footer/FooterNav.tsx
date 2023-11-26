import React from 'react'
import { logo } from '../../../../assets'
import colors from '../../../../utils/colors'

const FooterNav = () => {
    const items = ['Overview', 'FAQs', 'Pricing', 'Careers', 'Help', 'Privacy']
  return (
    <div className='p-[30px] lg:p-[50px] flex justify-between items-center text-white' style={{backgroundColor: colors.Brand_800}}>
        <img src={logo} alt = 'logo'/>
        <div className='flex gap-3'>
            {items.map((item) => (
                <div key = {item} className='font-Inter font-[600] text-xs lg:text-[16px]' style={{color: colors.Brand_200}}>{item}</div>
            ))}
        </div>
        <div style={{color: colors.Brand_300}} className='text-xs lg:text-[16px]'>© 2023 exchange.<br/> All rights reserved.</div>
    </div>
  )
}

export default FooterNav