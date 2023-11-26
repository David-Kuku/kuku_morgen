import React from 'react'
import colors from '../../../utils/colors'
import Table from '../../../components/table'
import Name from '../../../components/table/Name'
import { staff1, staff2, staff3, staff4, staff5, threeDots } from '../assets'

const Staff = () => {
    const staff_columns = ['Name', 'Role', '']
    const staff_rows = [
        {
            'Name': <Name email='Chi.ama@example.com' image={staff1} name='Chidinma Amanda' />,
            'Role': 'Human Resources',
            '': <img src={threeDots} alt='img' />
        },
        {
            'Name': <Name email='Umar.s@example.com' image={staff2} name='Umar Sultan' />,
            'Role': 'Human Resources',
            '': <img src={threeDots} alt='img' />
        },{
            'Name': <Name email='Oyin.afa@example.com' image={staff3} name='Oyinloye Afolabi' />,
            'Role': 'Human Resources',
            '': <img src={threeDots} alt='img' />
        },{
            'Name': <Name email='Enemuo@example.com' image={staff4} name='Enemuo Johnson' />,
            'Role': 'Human Resources',
            '': <img src={threeDots} alt='img' />
        },{
            'Name': <Name email='Chi.ama@example.com' image={staff5} name='Chidinma Amanda' />,
            'Role': 'Human Resources',
            '': <img src={threeDots} alt='img' />
        }
    ]

    return (
        <div className='flex flex-col items-center gap-[0px] rounded-[12px] flex-wrap w-[450px] bg-white' style={{ border: '1px solid', borderColor: colors.divider }}>
            <div className='flex flex-start w-full px-5 py-7 '>
                <div className='text-[18px] font-Inter font-[600] leading-[22px]' style={{ color: colors.Gray_800 }}>Staff</div>
            </div>

            <div className='w-full'>
                <Table
                    columns={staff_columns} data={staff_rows}
                    renderCell={(cellData) => {
                        return cellData;
                    }}

                />
            </div>
        </div>
    )
}

export default Staff