import React from 'react'
import { Pricing_Cards } from './utils'
import colors from '../../../../utils/colors'
import Button from '../../../../components/ui/button'
import { check, uncheck } from './assets'

const PricingCards = ({ }) => {
    return (
        <div className='flex justify-center gap-[60px]'>
            {
                Pricing_Cards.map((card) => (
                    <div key={card.name} className='p-8 rounded-md w-[40%]' style={{ backgroundColor: colors.lightPrimary, border: '1px solid', borderColor: colors.divider }}>
                        <div className='mb-5 text-3xl font-bold text-left'>{card.name}</div>
                        <hr className='mb-2' style={{ height: '1px', color: colors.divider }} />
                        <div className='my-5 text-left'>
                            <div style={{ color: colors.primary }} className='mb-2 font-bold'>
                                <span className='text-4xl'>${card.priceMonthly}</span>
                                /mo
                            </div>
                            <div className='mb-3'>{`or $${card.priceYearly} yearly`}</div>
                            <Button theme='primary' text={card.cta} className='w-full py-3 my-8 rounded-md' />
                            <hr style={{ height: '1px', color: colors.divider }} />

                        </div>
                        <div className='mt-7 flex flex-col gap-2'>
                            {
                                card.features.map((feature) => (
                                    <div key={feature[0]} className='text-left flex mb-2 gap-1' style={{color: colors.grey08}}>
                                        <img src={feature[1] === 'has_feature' ? check : uncheck} alt='check' className='mr-1' />
                                        {feature[0]}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PricingCards