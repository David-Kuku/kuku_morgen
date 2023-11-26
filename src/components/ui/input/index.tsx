import React, { ChangeEvent, HTMLInputTypeAttribute, forwardRef } from 'react';
import colors from '../../../utils/colors';

interface InputProps {
    type: HTMLInputTypeAttribute;
    placeholder?: string;
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    label?: string
    className?: string
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ type, placeholder, value, onChange, label, className }, ref) => {
    return (
        <div>
            {
                label ?
                    <div className='mb-2 text-[14px] font-Inter text-left ' style={{color: colors.Gray_800}}>{label}</div> :
                    null
            }
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`border rounded-md px-3 outline-none py-2 ${className}`}
                style={{borderColor: colors.divider}}
                ref={ref}
            />
        </div>
    );
};

export default forwardRef(Input);
