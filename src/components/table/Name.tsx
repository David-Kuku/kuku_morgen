import React from 'react'
import colors from '../../utils/colors'

interface IProps {
    name: string
    email: string
    image: string
}
const Name = ({email, image, name}: IProps) => {
  return (
    <div className='flex gap-2'>
        <img src = {image} alt = ''/>
        <div className='font-Inter flex flex-col gap-1 text-[14px]'>
            <div className='font-[600] leading-[20px]' style={{color: colors.Gray_900}}>{name}</div>
            <div className='font-[400]' style={{color: colors.Gray_500}}>{email}</div>
        </div>
    </div>
  )
}

export default Name