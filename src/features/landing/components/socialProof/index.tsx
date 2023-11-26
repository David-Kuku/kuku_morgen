import React from 'react'
import { forbes, stars } from './assets'
import colors from '../../../../utils/colors'

const SocialProof = () => {
    const { primary } = colors
    return (
        <div className='p-[6%] w-full flex justify-center' style={{ background: primary }}>
            <div>
                <div className='text-5xl text-white font-Poppins font-[900]'>"YOUR BUSINESS WILL THANK YOU, <br /> IT HAS ALL YOU NEED"</div>
                <div className='flex justify-center mt-6'>
                    <div>
                        <img src={stars} alt='stars' />
                        <img src={forbes} alt='forbes' />
                        <div className='mt-2 text-[16px]' style={{fontFamily: 'Helvetica Neue'}}>Best CRM 2022</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialProof