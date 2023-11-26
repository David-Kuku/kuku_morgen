import React from 'react'
import HeaderText from './HeaderText'
import HeroBtns from './HeroBtns'
import { arc, laptop } from './assets'

const Hero = () => {
    return (
        <div>
            <HeaderText />
            <HeroBtns />
            <div>
                <img src={laptop}/>
            </div>
        </div>
    )
}

export default Hero