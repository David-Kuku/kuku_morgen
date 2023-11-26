import React from 'react'
import './hero.css'
import colors from '../../../../utils/colors'
import AnimatedText from './AnimatedText'
const HeaderText = () => {

  const { black } = colors
  return (
    <div className='flex justify-center'>
      <div>
        <div className='text-[51px] font-[600] flex gap-2' style={{fontFamily: 'Plus Jakarta Sans'}}>Providing
          <AnimatedText />
          Customer Service
        </div>
        <p className='mt-2 text-[18px] font-Inter' style={{ color: black }}>Sort your customers need in one place and ensure efficient user management</p>
      </div>
    </div>
  )
}

export default HeaderText