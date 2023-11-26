import React from 'react'
import colors from '../../../../utils/colors'

const HeaderText = () => {
    return (
        <div>
            <div className='font-Inter text-4xl font-bold mt-[100px]' style={{ color: colors.primary }}>Pricing Plans</div>
            <div className='font-Inter text-[18px] my-6 lg:w-[40%] mx-auto' style={{color: colors.lightdark}}>Got questions? Find clarity and answers to commonly asked questions</div>

        </div>
    )
}

export default HeaderText