import React from 'react'
import { Link } from 'react-router-dom'
const Page404 = () => {
    return (
        <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
                <div className=''>
                    <div className='font-bold text-4xl mb-2'>
                        Ooops...Looks like you&apos;re lost
                        the resource you are looking for went abroad!

                    </div>
                    <Link to='/'>
                        Let&apos;s go Home
                    </Link>
                </div>
        </div>
    )
}

export default Page404