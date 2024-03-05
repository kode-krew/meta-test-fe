import { FC, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

interface CommonInputProps extends InputProps {
    placeholder: string;
}

const CommonInput: FC<CommonInputProps> = ({ placeholder, ...props }) => (
    <div>
        <input
            {...props}
            className="block w-full rounded-lg border border-violet-400 bg-violet-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-violet-400 dark:bg-violet-100 dark:text-black dark:placeholder-violet-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder={placeholder}
        />
    </div>
);

export default CommonInput;
