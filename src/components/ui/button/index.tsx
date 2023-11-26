import React, { FC, ReactNode, MouseEventHandler } from 'react';
import { buttonSize, buttonTheme, getIconSize } from './utils';
import { ClipLoader } from 'react-spinners';

interface ButtonProps {
    theme?: 'primary' | 'secondary' | 'secondary-grey' | 'tertiary' | 'danger' | 'tertiary-primary';
    text: string;
    icon?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    loading?: boolean;
    className?: string
    size?: 'sm' | 'md' | 'xs' | 'lg';
    iconSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    style?: any
}

const Button = ({
    theme, text, icon, onClick,
    loading = false, disabled = false,
    className, size = 'md', iconSize = 'sm', 
    style
}: ButtonProps) => {
    const iconElement: ReactNode = icon && <img src={`${icon}`} width={getIconSize(iconSize)} height={getIconSize(iconSize)} />;

    return (
        <button
            className={`flex items-center font-bold font-Inter justify-center transition-all hover:brightness-90 ease-in text-center gap-2 outline-none disabled:cursor-not-allowed
              ${className} ${buttonSize(size)}`}
            onClick={onClick}
            disabled={disabled || loading}
            style={theme ? buttonTheme(theme) : style}
        >
            <ClipLoader color='white' loading={loading} size={20} />
            {iconElement}
            {text}
        </button>
    );
};

export default Button;
