import React from 'react';
import { Button, IButtonProps } from '../button/Button';
import 'tailwindcss/tailwind.css';

export interface CardProps {
    title: string;
    description?: string;
    image?: string;
    buttons?: IButtonProps[];
}

export const CardComponent: React.FC<CardProps> = ({ title, description, image, buttons }: CardProps) => {
    return (
        <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg w-1/4">
            {image && <img className="rounded-t-lg" src={image} alt={title} />}
            <div className="flex flex-col justify-center items-center p-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-base">{description}</p>
                <div className="flex flex-row justify-center items-center">
                    {buttons?.map((button) => (
                        <Button key={button.label} {...button}/>
                    ))}
                </div>
            </div>
        </div>
    );
}