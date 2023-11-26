import React, { useState } from 'react'
import colors from '../../utils/colors';

interface TableProps {
    data: any;
    columns: string[];
    renderCell?: (cellData: string, row: any, column: string) => React.ReactNode;
}
const Table = ({ columns, data, renderCell }: TableProps) => {
    console.log(columns)
    return (
        <table className={`text-xs border-separate border-spacing-x-0 border-spacing-y-[2px] w-[100%] rounded-[20px]`}>
            <thead className='bg-[#F1F5F9]'>
                <tr>
                    {columns.map((column) => (
                        <th className='p-4 text-xs font-[600] text-left' style={{color: colors.Gray_500}} key={column}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row: any) => (
                    <tr key={row['Role']} className='p-2 bg-[white]rounded-md shadow'>
                        {columns.map((column) => (
                            <td
                                className='p-4 relative text-left text-sm'
                                key={column}

                            >
                                {renderCell ? renderCell(row[column], row, column) : row[column]}
                            </td>

                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );

}

export default Table