import React, { useState } from 'react'
import Dropdown from '../../../components/dropdown'
import colors from '../../../utils/colors'
import BarChart from './BarChart'
import { barchart_data } from '../utils/chartData'

const Summary = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='p-7 flex flex-col items-center gap-[50px] !pb-[70px] rounded-[12px] w-full bg-white' style={{border: '1px solid', borderColor: colors.divider}}>
            <div className='flex w-full justify-between'>
                <div className='text-[18px] font-Inter font-[600] leading-[19px]' style={{ color: colors.Gray_800 }}>Summary</div>
                <Dropdown
                    className='w-[200px]'
                    label='Duration'
                    open={open} setOpen={setOpen}
                    options={['This week']}
                />
            </div>

            <BarChart data={barchart_data}/>
        </div>
    )
}

export default Summary