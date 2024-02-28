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

const RoundSquareButton = ({
    type = 'button',
    size = 'base',
    classes,
    onClick,
    disabled,
    children,
    variant = 'primary',
}: IButtonProps) => {
    let variantClasses = '';
    switch (variant) {
        case 'primary':
            variantClasses = 'bg-yellow-500 hover:bg-yellow-700';
            break;
        case 'secondary':
            variantClasses = 'bg-gray-700 hover:bg-gray-500';
            break;
        default:
            break;
    }

    return (
        <button
            type={type}
            className={`font h-max w-full
            cursor-pointer rounded-3xl border-none px-4 py-4 text-${size} ${variantClasses} ${classes}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default RoundSquareButton;
