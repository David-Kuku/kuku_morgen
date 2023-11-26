import React from 'react'
import PricingCards from '../pricingPlans/PricingCards'

interface IProps {
    bgImage: string
    text: string
    date: string
    title: string
}
const BlogItems = ({ bgImage, text, date, title }: IProps) => {
    return (
        <div className='flex items-end text-white relative w-[500px] lg:w-[650px]'>
            <img src={bgImage} className='h-[500px]' />
            <div className='absolute top-[45%] w-[60%] text-left left-[30px] lg:left-[50px] font-Inter'>
                <div className='text-[#E5E5E5] text-xs'>{date}</div>
                <div className='font-[500] text-[18px]'>{title}</div>
                <div className='text-xs mt-2 text-[#E5E5E5]'>{text}</div>
            </div>
        </div>
    )
}

export default BlogItems