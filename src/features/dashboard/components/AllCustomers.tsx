import React, { useState } from 'react'
import Table from '../../../components/table';
import colors from '../../../utils/colors';
import { arrowLeft, arrowRight, filter, premium, sort, standard, threeDots } from '../assets';
import SearchBar from '../../../components/searchBar';
import Button from '../../../components/ui/button';

const AllCustomers = () => {
    const [active, setActive] = useState(1)
    const consumers_columns = ['Consumer Name', 'Phone Number', 'Country', 'Email', 'Status', '']
    const consumers_rows = [
        {
            'Consumer Name': 'Joel Abiodun Bisola',
            'Phone Number': '(+234) 90-0118-1343',
            'Country': 'Nigeria',
            'Email': 'example@example.com',
            'Status': <img src={premium} alt='img' />,
            '': <img src={threeDots} alt='img' />
        },
        {
            'Consumer Name': 'Joel Abiodun Bisola',
            'Phone Number': '(+234) 90-0118-1343',
            'Country': 'Nigeria',
            'Email': 'example@example.com',
            'Status': <img src={premium} alt='img' />,
            '': <img src={threeDots} alt='img' />
        }, {
            'Consumer Name': 'Joel Abiodun Bisola',
            'Phone Number': '(+234) 90-0118-1343',
            'Country': 'Nigeria',
            'Email': 'example@example.com',
            'Status': <img src={standard} alt='img' />,
            '': <img src={threeDots} alt='img' />
        }, {
            'Consumer Name': 'Joel Abiodun Bisola',
            'Phone Number': '(+234) 90-0118-1343',
            'Country': 'Nigeria',
            'Email': 'example@example.com',
            'Status': <img src={standard} alt='img' />,
            '': <img src={threeDots} alt='img' />
        },
    ]
    const pages = [1, 2, 3]

    const renderCellFn = (data: string, column: string, row: any) => {
        const darkCols = new Set(['Consumer Name', 'Phone Number', 'Country'])
        if (darkCols.has(column)) {
            return <div className='font-Inter font-medium text-[14px] leading-[20px]' style={{ color: colors.Gray_900 }}>{data}</div>
        } else if (column === 'Email') {
            return <div className='font-Inter text-[14px] leading-[20px]' style={{ color: colors.Gray_500 }}>{data}</div>
        } else {
            return data
        }
    }
    return (
        <div className='flex flex-col items-center gap-[0px] rounded-[12px] flex-wrap w-full bg-white' style={{ border: '1px solid', borderColor: colors.divider }}>
            <div className='flex flex-start w-full px-5 py-7 '>
                <div className='text-[18px] font-Inter font-[600] leading-[22px]' style={{ color: colors.Gray_800 }}>All Customers</div>
            </div>

            <div className='p-4 w-full mb-3 flex justify-between rounded-md' style={{ backgroundColor: colors.Gray_50 }}>
                <SearchBar
                    className='border border-[#DDE1E6] !h-[50px] !w-[300px]'
                    handleChange={() => { }} placeholderText='Search'
                    iconClass='!top-[13px]' />

                <div className='flex gap-2'>
                    <Button icon={sort} text='Sort' theme='secondary-grey' className='rounded-[12px]' />
                    <Button icon={filter} text='Filter' theme='secondary-grey' className='rounded-[12px]' />

                </div>
            </div>

            <div className='w-full'>
                <Table
                    columns={consumers_columns} data={consumers_rows}
                    renderCell={(cellData, row, column) => {
                        return renderCellFn(cellData, column, row)
                    }}

                />
            </div>

            <div className='w-full p-4 flex justify-between'>
                <Button
                    icon={arrowLeft} text='Previous'
                    theme='secondary-grey'
                    disabled={active === 1}
                    className='rounded-[12px] !font-[500]'
                    onClick={() => {
                        if (active !== 1) {
                            setActive((prev) => (prev - 1))
                        }
                    }}
                />
                <div className='flex gap-1'>
                    {pages.map((no) => (
                        <div
                            key={no}
                            style={{
                                backgroundColor: no === active ? 'rgba(118, 0, 190, 0.1)' : '',
                                color: no === active ? colors.active_page : colors.Gray_500
                            }}
                            className='py-3 cursor-pointer px-5 rounded-md'
                            onClick={() => setActive(no)}
                        >{no}</div>
                    ))}
                </div>
                <Button
                    disabled={active === pages.length}
                    icon={arrowRight} text='Next'
                    theme='secondary-grey'
                    className='rounded-[12px] !font-[500]'
                    onClick={() => {
                        if (active !== pages.length) {
                            setActive((prev) => (prev + 1))
                        }
                    }}
                />

            </div>
        </div>
    )
}

export default AllCustomers