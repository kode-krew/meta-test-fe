import { FC, ChangeEvent } from 'react';

interface SelectBoxProps {
    options: string[];
    selectedOption: string;
    onOptionChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBox: FC<SelectBoxProps> = ({ options, selectedOption, onOptionChange }) => (
    <select
        value={selectedOption}
        onChange={onOptionChange}
        className="focus:shadow-outline h-10 w-full 
        
        appearance-none
        rounded-lg border pl-3 pr-6 text-base placeholder-gray-600 shadow"
    >
        {options.map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
        ))}
    </select>
);

export default SelectBox;
