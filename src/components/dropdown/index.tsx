import React, { useState } from 'react';
import colors from '../../utils/colors';

interface DropdownProps {
    options: string[];
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    label?: string
    className?: string
}

const Dropdown: React.FC<DropdownProps> = ({ options, open, setOpen, label, className }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(options[0]);

    const handleSelection = (option: string) => {
        setSelectedOption(option);
        setOpen(false)
    };

    return (
        <div className={`relative inline-block text-left ${className}`}>
            <div className='w-full'>
                <div
                    onClick={() => setOpen(true)}
                    style={{ borderColor: colors.divider }}
                    className="inline-flex justify-between items-center w-full cursor-pointer rounded-md border shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none"
                >
                    <div className='flex flex-col gap-1'>
                        {label && <div className='text-xs' style={{color: colors.Black_4}}>{label}</div>}
                        {selectedOption || 'Select an option'}
                    </div>
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#CBD5E1"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            {
                open &&
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {options.map((option, index) => (
                            <div
                                key={index}
                                onClick={() => handleSelection(option)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                role="menuitem"
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
};

export default Dropdown;
