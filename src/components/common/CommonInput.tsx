import { FC, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

type InputStyle = 'primary' | 'secondary';

interface CommonInputProps extends InputProps {
    placeholder?: string;
    variant?: InputStyle;
}

const CommonInput: FC<CommonInputProps> = ({ placeholder = 'primary', variant, ...props }) => {
    let variantClasses = '';
    switch (variant) {
        case 'primary':
            variantClasses =
                'block w-full rounded-lg border border-violet-400 bg-violet-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-violet-400 dark:bg-violet-100 dark:text-black dark:placeholder-violet-400 dark:focus:border-blue-500 dark:focus:ring-blue-500';
            break;
        case 'secondary':
            variantClasses =
                'block w-full rounded-lg border-none focus:border-blue-500 focus:ring-blue-500  p-2.5';
            break;
        default:
            break;
    }

    return (
        <div>
            <input {...props} className={`${variantClasses}`} placeholder={placeholder} />
        </div>
    );
};

export default CommonInput;
