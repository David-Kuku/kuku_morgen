import React from 'react'
import { customer, oneclick, reduce, topcrm } from './assets'
import colors from '../../../../utils/colors';

const WhyXchange = () => {

  interface IAchievement {
    [key: string]: string;
  }
  const achievements: IAchievement = {
    '#1 Top CRM': topcrm,
    'Reduces expense burden': reduce,
    '24/7 Customer Support': customer,
    'One Click Subscription': oneclick
  }
  return (
    <div>
      <div className='font-Inter text-4xl font-bold mt-[100px]' style={{ color: colors.black }}>Why eXchange</div>
      <div className='font-Inter text-[18px] my-6 w-[80%] lg:w-[40%] mx-auto'>Lorem ipsum dolor sit amet consectetur natoque ut amet dictum dolor dictum tellus purus non cursus </div>

      <div className='flex w-[70%] justify-between mx-auto'>
        {
          Object.keys(achievements).map((val) => (
            <div key={val} className='flex flex-col gap-1 w-[150px]'>
              <img src={achievements[val]} alt='img' className='h-[100px]' />
              <p style={{ color: colors.black, fontSize: '16px', fontFamily: 'Plus Jakarta Sans' }}>{val}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default WhyXchange