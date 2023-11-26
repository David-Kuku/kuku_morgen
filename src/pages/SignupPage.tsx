import React from 'react'
import Navbar from '../components/navbar'
import Signup from '../features/authentication/signup'

const SignupPage = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
                <Signup />
            </div>
        </>
    )
}

export default SignupPage