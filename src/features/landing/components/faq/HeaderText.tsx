import React from 'react'
import colors from '../../../../utils/colors'

const HeaderText = () => {
  return (
    <div className='w-full flex flex-col items-center text-[14px] lg:text-[16px]'>
      <div className='font-Inter text-4xl font-bold' style={{ color: colors.primary }}>Frequently Asked Questions</div>
      <div className='font-Inter text-[18px] my-6 lg:w-[50%]' style={{ color: colors.lightdark }}>Got questions? Find clarity and answers to commonly asked questions</div>
    </div>
  )
}

export default HeaderText