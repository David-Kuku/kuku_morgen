import React from 'react'
import colors from '../../../utils/colors'

interface IProps {
    image: string
    title: string
    value: string
}
const InfoCard = ({image, title, value}: IProps) => {
  return (
    <div className='border p-2 sl:p-6 flex gap-2 sl:gap-3 rounded-[10px]' style={{borderColor: colors.divider}}>
        <img src = {image} alt = 'img' className='h-[60px] sl:h-[90px]'/>
        <div className='flex flex-col gap-2'>
            <div className='text-[#ACACAC] text-xs sl:text-sm font-Poppins'>{title}</div>
            <div className='text-[14px] sl:text-3xl font-bold font-Poppins'>{value}</div>
        </div>
    </div>
  )
}

export default InfoCard