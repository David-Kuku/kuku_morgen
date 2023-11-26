import React from 'react'
import colors from '../../../../utils/colors'

const HeaderText = () => {
    return (
        <div className='w-full flex flex-col text-[14px] text-left lg:text-[16px]'>
            <div className='font-Inter text-4xl font-bold text-white'>Our Blog Posts</div>
            <div className='font-Inter text-xs lg:text-[18px] leading-7 my-6 lg:w-[50%] text-white'>{`Find stories and compelling arguments around the world's issues.`}</div>
        </div>
    )
}

export default HeaderText