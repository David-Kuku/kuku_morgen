import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import WelcomeAndSearch from './components/WelcomeAndSearch'
import InfoCards from './components/InfoCards'
import Sales from './components/Sales'
import Staff from './components/Staff'
import Summary from './components/Summary'
import AllCustomers from './components/AllCustomers'

const Dashboard = () => {
    return (
        <div className='flex-1 min-h-[100vh] h-[100%] p-[50px] flex flex-col gap-[40px]'>
            <WelcomeAndSearch />
            <div className='w-full flex justify-center'>
                <InfoCards />
            </div>
            <div className='flex justify-center '>
                <div className='w-[93%] flex flex-wrap gap-[30px] sl:gap-0 justify-center sl:justify-between'>
                    <Sales />
                    <Staff />
                </div>
            </div>
            <div className='flex justify-center '>
                <div className='w-[93%]'>
                    <Summary />
                </div>
            </div>

            <div className='flex justify-center '>
                <div className='w-[93%]'>
                    <AllCustomers />
                </div>
            </div>
        </div>
    )
}

export default Dashboard