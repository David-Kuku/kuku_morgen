import React from 'react'
import Button from '../ui/button'
import { Link } from 'react-router-dom'
const NavBtns = () => {
    return (
        <div className='flex gap-3' style={{ fontFamily: 'Inter' }}>
            <Link to='/login'>
                <Button theme='tertiary' text='Login' size='sm' className='font-[600]' />
            </Link>
            <Link to='/signup'>
                <Button theme='primary' text='Signup' size='sm' className='rounded-md font-[600]' />
            </Link>
        </div>
    )
}

export default NavBtns