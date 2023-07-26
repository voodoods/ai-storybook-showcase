// create a Storybook story for the ./Rating.tsx component

import React from 'react';
import { Meta } from '@storybook/react';

import { Rating } from './Rating';

//👇 This default export determines where your story goes in the story list
export default {
    title: 'Example/Rating',
    component: Rating,
    tags: ['autodocs'],
    argTypes: {
        rating: {
            control: 'number',
        },
        maxRating: {
            control: 'number',
        },
        color: {
            control: 'color',
        },
        size: {
            control: 'number',
        },
        spacing: {
            control: 'number',
        },
        direction: {
            control: 'radio',
        },
        onSetRating: {
            action: 'onSetRating',
        }
    },
    parameters: {
        jest: ['Rating.test.tsx'],
    }
} as Meta;

export const NoRating = {
    args: {
        rating: 0,
        maxRating: 5,
        color: '#FFD700',
        size: 24,
        spacing: 4,
        direction: 'row',
    },
};

export const Rating1 = {
    args: {
        rating: 1,
        maxRating: 5,
        color: '#FFD700',
        size: 24,
        spacing: 4,
        direction: 'row',
    },
};

export const Rating2 = {
    args: {
        rating: 2,
        maxRating: 5,
        color: '#FFD700',
        size: 24,
        spacing: 4,
        direction: 'row',
    },
};

export const Rating3 = {
    args: {
        rating: 3,
        maxRating: 5,
        color: '#FFD700',
        size: 24,
        spacing: 4,
        direction: 'row',
    },
};

export const Rating4 = {
    args: {
        rating: 4,
        maxRating: 5,
        color: '#FFD700',
        size: 24,
        spacing: 4,
        direction: 'row',
    },
};

export const Rating5 = {
    args: {
        rating: 5,
        maxRating: 5,
        color: '#FFD700',
        size: 24,
        spacing: 4,
        direction: 'row',
    },
};

export const colorBlue = {
    args: {
        rating: 5,
        maxRating: 5,
        color: '#0000FF',
        size: 24,
        spacing: 4,
        direction: 'row',
    },
};

export const withOnSetRating = {
    args: {
        rating: 0,
        maxRating: 5,
        color: '#FFD700',
        size: 24,
        spacing: 4,
        direction: 'row',
        onSetRating: (rating: number) => {
            alert(`onSetRating: ${rating}`);
        }
    },
};

export const directionColumn = {
    args: {
        rating: 5,
        maxRating: 5,
        color: '#FFD700',
        size: 24,
        spacing: 4,
        direction: 'column',
    },
};

export const spacing16 = {
    args: {
        rating: 5,
        maxRating: 5,
        color: '#FFD700',
        size: 24,
        spacing: 16,
        direction: 'row',
    },
};

export const size48 = {
    args: {
        rating: 5,
        maxRating: 5,
        color: '#FFD700',
        size: 48,
        spacing: 4,
        direction: 'row',
    },
};