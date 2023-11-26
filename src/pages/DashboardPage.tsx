import React from 'react'
import Dashboard from '../features/dashboard'
import Sidebar from '../components/sidebar/Sidebar'

const DashboardPage = () => {
    return (
        <div className='flex w-[100vw] h-[100%] bg-[#FAFBFF]'>
            <div className='fixed w-[20%] min-w-[250px] bg-white'>
                <Sidebar />
            </div>
            <div className='sl:ml-[20%] ml-[250px] flex-1'>
                <Dashboard />
            </div>
        </div>
    )
}

export default DashboardPage