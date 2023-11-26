import React from 'react'
import HeaderText from './HeaderText'
import Question from './Question'
import colors from '../../../../utils/colors'

const Faq = () => {
    return (
        <div className='flex flex-col items-center'>
            <HeaderText />
            <div className='flex flex-col gap-4 w-[80%] mt-[50px] lg:w-[70%]'>
                <Question
                    text={`You'll make a better win in digital if you know how to work around their creative contents and how to amplify them to the markets that need it most.`}
                    title={`Why is it called eXchange`}
                />
                <hr className='my-[20px]' style={{ color: colors.divider }} />

                <Question
                    text={`You'll make a better win in digital if you know how to work around their creative contents and how to amplify them to the markets that need it most.`}
                    title={`Why is it called eXchange`}
                />
                <hr className='my-[20px]' style={{ color: colors.divider }} />

                <Question
                    text={`You'll make a better win in digital if you know how to work around their creative contents and how to amplify them to the markets that need it most.`}
                    title={`Why is it called eXchange`}
                />

            </div>

        </div>
    )
}

export default Faq