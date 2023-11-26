import React from 'react'
import Input from '../../../components/ui/input'
import Button from '../../../components/ui/button'

const Filter = () => {
    return (
        <div className='flex flex-col gap-3 bg-white absolute top-[60px] w-[400px] p-6 right-0 z-50'>
            <div className='text-left'>By Date</div>
            <div className='flex gap-[80px]'>
                <div className='flex gap-2 w-[110px]'>
                    <label className="checkbox-container">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                    <div>This Week</div>
                </div>
                <div className='flex gap-2 w-[110px]'>
                    <Input onChange={() => { }} type='checkbox' className='' />
                    <div>Last Week</div>
                </div>
            </div>
            <div className='flex gap-[80px]'>
                <div className='flex gap-2 w-[110px]'>
                    <Input onChange={() => { }} type='checkbox' className='' />
                    <div>This Month</div>
                </div>
                <div className='flex gap-2 w-[110px]'>
                    <Input onChange={() => { }} type='checkbox' className='' />
                    <div>Last Month</div>
                </div>
            </div>
            <div className='flex gap-[80px]'>
                <div className='flex gap-2 w-[110px]'>
                    <Input onChange={() => { }} type='checkbox' className='' />
                    <div>This Year</div>
                </div>
                <div className='flex gap-2 w-[110px]'>
                    <Input onChange={() => { }} type='checkbox' className='' />
                    <div>Last Year</div>
                </div>
            </div>

            <hr />

            <div className='text-left'>By Status</div>
            <div className='flex gap-[50px]'>
                <div className='flex gap-2 w-[110px]'>
                    <Input onChange={() => { }} type='checkbox' className='' />
                    <div>All</div>
                </div>
                <div className='flex gap-2 w-[110px]'>
                    <Input onChange={() => { }} type='checkbox' className='' />
                    <div>Standard</div>
                </div>
                <div className='flex gap-2 w-[110px]'>
                    <Input onChange={() => { }} type='checkbox' className='' />
                    <div>Premium</div>
                </div>
            </div>

            <hr />

            <Button text='filter' className='w-full' theme='primary' />
        </div>
    )
}

export default Filter