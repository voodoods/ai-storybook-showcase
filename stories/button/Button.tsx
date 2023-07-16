import React from 'react';
import './button.css';

/**
 * Primary UI component for user interaction
 */

export interface IButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

// in the className property of the button element:
// if the property primary is true, make the button blue with white text using Tailwind CSS classes
// if the property primary is false, make the button white with blue text and a blue border using Tailwind CSS classes
// if the property size is small, make the button small using Tailwind CSS classes
// if the property size is medium, make the button medium using Tailwind CSS classes
// if the property size is large, make the button large using Tailwind CSS classes
// do not use storybook classes in the className property of the button element

export const Button = ({ primary, backgroundColor, size, label, ...props }: IButtonProps) => {
  return (
    <button
      type="button"
      className={[
        // Tailwind classes
        'rounded-lg',
        'text-blue-500',
        'font-bold',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-blue-400',
        'focus:ring-opacity-75',
        'hover:opacity-75',
        'transition-opacity',
        'duration-150',
        'ease-in-out',
        'transform',
        'motion-safe:hover:scale-105',
        'motion-safe:hover:shadow-2xl',
        'motion-safe:active:scale-95',
        'motion-safe:active:shadow-xl',
        'm-2',
        'my-5',
        // Size
        size === 'small' ? 'px-4 py-2 text-xs' : '',
        size === 'medium' ? 'px-6 py-3 text-sm' : '',
        size === 'large' ? 'px-8 py-4 text-base' : '',
        // Primary
        primary ? 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white' : 'border-2 border-blue-500 hover:bg-blue-50 active:bg-blue-100 text-blue-500',
      ].join(' ')}
      {...props}
    >
      {label}
      <style>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
