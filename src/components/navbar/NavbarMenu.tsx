import React from 'react'
import { chevronDown } from '../../assets'
import colors from '../../utils/colors'

const NavbarMenu = () => {
    const navItems = [['Home', 'no_dropdown'], ['Products', 'has_dropdown'], ['Resources', 'has_dropdown'], ['Pricing', 'no_dropdown']]
    const {grey} = colors
    return (
        <div className='flex gap-[20px] lg:gap-[40px]'  style={{fontFamily: 'Inter', color: grey}}>
            {
                navItems.map((item) => (
                    <div key = {item[0]} className='flex gap-2 items-center text-xs lg:text-[16px] justify-center font-[600]'>
                        {item[0]}
                        {item?.[1] === 'has_dropdown' ?
                            <img src={chevronDown} alt='' /> : null}
                    </div>

                ))
            }
        </div>
    )
}

export default NavbarMenu