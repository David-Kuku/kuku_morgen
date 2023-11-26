import React from 'react'
import { chevronDown, logo } from '../../assets'
import NavbarMenu from './NavbarMenu'
import NavBtns from './NavBtns'
import colors from '../../utils/colors'

const Navbar = () => {
    const { lightGrey } = colors
    return (
        <div className='px-[6%] lg:px-[10%] pb-[20px] pt-[25px] border-b flex justify-between' style={{ borderColor: lightGrey }}>
            <div className='flex items-center gap-5'>
                <img src={logo} alt='' />
                <NavbarMenu />
            </div>
            <NavBtns />
        </div>
    )
}

export default Navbar