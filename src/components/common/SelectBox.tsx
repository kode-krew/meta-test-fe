import { FC, ChangeEvent, MouseEventHandler, ChangeEventHandler } from 'react';
import CaretIcon from './Icons/CaretIcon';

export interface SelectBoxOptionType {
    id: string;
    label: string;
}

interface SelectBoxProps {
    options: SelectBoxOptionType[];
    selectedOption: string;
    onOptionChange: ChangeEventHandler<HTMLSelectElement>;
}

const SelectBox: FC<SelectBoxProps> = ({ options, selectedOption, onOptionChange }) => (
    <div className="container relative">
        <select
            value={selectedOption}
            onChange={onOptionChange}
            className="focus:shadow-outline h-10 
        w-full
        appearance-none
        rounded-lg border pl-3 pr-6 text-base placeholder-gray-600 shadow"
        >
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.label}
                </option>
            ))}
        </select>
        <p
            className="absolute bottom-2
        right-3
        w-max"
        >
            <CaretIcon />
        </p>
    </div>
);

export default SelectBox;
