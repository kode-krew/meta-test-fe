import React from 'react';

type ButtonType = 'submit' | 'reset' | 'button';
type ButtonSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
type ButtonStyle = 'primary' | 'secondary' | 'primary-unselect' | 'blue';

interface RoundedButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    classes?: React.ComponentProps<'button'>['className'];
    disabled?: boolean;
    children: string | React.ReactElement;
    variant: ButtonStyle;
}

const RoundedButton = ({
    type = 'button',
    size = 'base',
    classes,
    onClick,
    disabled = false,
    children,
    variant,
}: RoundedButtonProps) => {
    let variantClasses = '';
    switch (variant) {
        case 'primary':
            variantClasses = 'bg-violet-400 hover:bg-violet-700 text-white disabled:bg-violet-300 ';
            break;
        case 'secondary':
            variantClasses = 'bg-violet-300 hover:bg-violet-500 disabled:bg-violet-100 ';
            break;
        default:
            break;
    }

    return (
        <button
            type={type}
            className={`font 
            w-full
            cursor-pointer
            rounded-3xl
            border-none px-4 py-2 disabled:cursor-not-allowed text-${size} ${variantClasses} ${classes}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default RoundedButton;
