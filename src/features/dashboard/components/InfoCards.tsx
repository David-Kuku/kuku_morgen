import React from 'react'
import { active, consumer, user } from '../assets'
import InfoCard from './InfoCard'

const InfoCards = () => {
    const info = [
        { image: consumer, title: 'Total Consumer', value: '5,423' },
        { image: user, title: 'Premium Users', value: '1,893' },
        { image: active, title: 'Active Now', value: '189' }

    ]
    return (
        <div className='p-[10px] sl:p-[40px] w-full sl:w-[90%] flex justify-between'>
            {
                info.map((inf) => (
                    <InfoCard image={inf.image} title={inf.title} value={inf.value} key={inf.title} />
                ))
            }
        </div>
    )
}

export default InfoCards