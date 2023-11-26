import React from 'react'
import { openQuotation } from './assets'
import colors from '../../../../utils/colors'

interface IProps {
    testimony: string
    username: string
    position: string
}
const ReviewCard = ({ position, testimony, username }: IProps) => {
    return (
        <div className='flex gap-2 drop-shadow-md p-5 rounded-md w-[30%]' style={{border: '1px solid', borderColor: colors.divider}}>
            <img src={openQuotation} alt="quote" className='h-[10px]'/>
            <div>
                <div className='mb-3 text-xs leading-5 sl:leading-7 sl:text-[18px] font-Inter text-left' style={{color: colors.black}}>{testimony}</div>
                <div className='mt-6 mb-1 text-xs sl:text-[18px]  font-bold font-Inter text-left' style={{color: colors.black}}>{username}</div>
                <div className='text-xs sl:text-[18px] font-Inter text-left' style={{color: colors.neutral500}}>{position}</div>
            </div>
        </div>
    )
}

export default ReviewCard