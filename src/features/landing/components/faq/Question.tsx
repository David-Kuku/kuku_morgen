import React from 'react'
import { dropdownbtn } from './assets'
import colors from '../../../../utils/colors'

interface IProps {
    text: string
    title: string
}
const Question = ({ text, title }: IProps) => {
    return (
        <div className='flex justify-between w-full items-start'>
            <div className='w-[85%]'>
                <div className='4xl text-[18px] font-[600] font-Inter text-left' style={{color: colors.Neutral_N900}}>{title}</div>
                <div className='text-xs lg:text-[16px] text-left my-3' style={{color: colors.Neutral_N500}}>{text}</div>
            </div>
            <img src={dropdownbtn} alt='down' />
        </div>
    )
}

export default Question