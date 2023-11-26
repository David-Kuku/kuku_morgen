import React from 'react'
import colors from '../../../../utils/colors'
import Button from '../../../../components/ui/button'

const Subscribe = () => {
  return (
    <div className='flex justify-center gap-3 py-[50px]' style={{backgroundColor: colors.primary}}>
            <input className='outline-none w-[300px] p-2 rounded-md' placeholder='Enter your email'/>
            <Button theme='tertiary-primary' className='rounded-md' text='Subscribe' size='sm'/>
    </div>
  )
}

export default Subscribe