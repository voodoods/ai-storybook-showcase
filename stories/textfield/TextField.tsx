import React from 'react';
import 'tailwindcss/tailwind.css'

export interface TextFieldProps {
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
}

// please apply the properties from the interface above to the component below

const TextField: React.FC<TextFieldProps> = ({ label, placeholder, value, backgroundColor, size, disabled, error, onChange, onClick }) => {
    return (
        <div className="flex flex-col w-60">
            <label className="text-sm text-gray-500">{label}</label>
            <input
                className={`border-2 border-gray-300 rounded-md p-2 ${error ? 'border-red-500' : ''} ${disabled ? 'bg-gray-200' : ''} ${size === 'small' ? 'text-sm' : size === 'medium' ? 'text-md' : 'text-lg'}`}
                type="text"
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                onChange={onChange}
                onClick={onClick}
            />
        </div>
    );
}

export default TextField