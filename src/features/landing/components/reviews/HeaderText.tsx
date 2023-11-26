import React from 'react'
import colors from '../../../../utils/colors'

const HeaderText = () => {
    return (
        <div>
            <div className='font-Inter text-5xl font-bold mt-[100px] text-left'>Real Stories from<br />Real Customers</div>
            <div className='my-3 text-left text-[18px]' color={colors.lightdark}>Get inspired by thes stories.</div>
        </div>
    )
}

export default HeaderText