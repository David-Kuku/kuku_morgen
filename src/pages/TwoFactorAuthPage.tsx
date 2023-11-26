import React from 'react'
import TwoFactorAuth from '../features/authentication/2fa'

const TwoFactorAuthPage = () => {
    return (
        <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
            <TwoFactorAuth />
        </div>
    )
}

export default TwoFactorAuthPage