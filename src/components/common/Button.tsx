import React from 'react';

type ButtonType = 'submit' | 'reset' | 'button';
type ButtonSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
type ButtonStyle = 'primary' | 'secondary';

interface IButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    classes?: React.ComponentProps<'button'>['className'];
    disabled?: boolean;
    children: string | React.ReactElement;
    variant: ButtonStyle;
}

const Button = ({
    type = 'button',
    size = 'base',
    classes,
    onClick,
    disabled = false,
    children,
    variant,
}: IButtonProps) => {
    let variantClasses = '';
    switch (variant) {
        case 'primary':
            variantClasses = 'bg-blue-500 hover:bg-blue-700 text-white';
            break;
        case 'secondary':
            variantClasses = 'bg-gray-700 hover:bg-gray-500 text-white';
            break;
        default:
            break;
    }

    return (
        <button
            type={type}
            className={`font cursor-pointer rounded-md border-none px-4 py-2 text-${size} ${variantClasses} ${classes}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
