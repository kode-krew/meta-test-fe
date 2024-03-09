import { FC, ChangeEvent, MouseEventHandler, ChangeEventHandler } from 'react';

interface SelectBoxProps {
    options: {
        difficulty: string;
        text: string;
    }[];
    selectedOption: string;
    onOptionChange: ChangeEventHandler<HTMLSelectElement>;
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
            <option key={option.difficulty} value={option.difficulty}>
                {option.text}
            </option>
        ))}
    </select>
);

export default SelectBox;
