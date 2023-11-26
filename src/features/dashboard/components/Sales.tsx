import React, { useState } from 'react'
import Dropdown from '../../../components/dropdown'
import colors from '../../../utils/colors'
import { checkCircle, graph, trendingDown, trendingUp } from '../assets'

const Sales = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='p-7 flex flex-col items-center gap-[50px] rounded-[12px] w-[450px] bg-white' style={{border: '1px solid', borderColor: colors.divider}}>
            <div className=' w-full flex justify-between items-center'>
                <div className='text-[18px] font-Inter font-[600] leading-[19px]' style={{color: colors.Gray_800}}>Sales Performance</div>
                <Dropdown
                    className='w-[200px]'
                    label='Duration'
                    open={open} setOpen={setOpen}
                    options={['This week', 'Next week', 'Next 30 days']}
                />
            </div>

            <img src={graph} alt = 'img'/>

            <div className='flex justify-between w-[70%]'>
                <div className='flex flex-col items-center gap-2'>
                    <img src={checkCircle} alt = 'img'/>
                    <div style={{color: colors.Gray_700}} className='font-bold font-Inter text-[23px] leading-[34px]'>76%</div>
                    <div style={{color: colors.Gray_600}} className='font-Inter font-[500] text-[14px] leading-[20px]'>Profit</div>
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <img src={trendingUp} alt = 'img'/>
                    <div style={{color: colors.Gray_700}} className='font-bold font-Inter text-[23px] leading-[34px]'>32%</div>
                    <div style={{color: colors.Gray_600}} className='font-Inter font-[500] text-[14px] leading-[20px]'>Expenses</div>
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <img src={trendingDown} alt = 'img'/>
                    <div style={{color: colors.Gray_700}} className='font-bold font-Inter text-[23px] leading-[34px]'>12%</div>
                    <div style={{color: colors.Gray_600}} className='font-Inter font-[500] text-[14px] leading-[20px]'>Losses</div>
                </div>
            </div>
        </div>
    )
}

export default Sales