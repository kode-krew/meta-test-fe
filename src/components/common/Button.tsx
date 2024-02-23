import React from 'react';

type ButtonType = 'submit' | 'reset' | 'button';

interface IButtonProps {
    type?: ButtonType;
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    classes?: string;
    disabled?: boolean;
    children: string | React.ReactElement;
}

const Button = ({ type = 'button', size, classes, onClick, disabled, children }: IButtonProps) => (
    <button
        type={type}
        className={`py-2 px-4 rounded-md border-none cursor-pointer break-keep font-bold text-${size}  ${classes}`}
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>
);

export default Button;
