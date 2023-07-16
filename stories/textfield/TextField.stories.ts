// create a Storybook story for the TextField component using TypeScript   

import TextField from './TextField';

export default {
    title: 'Example/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {
            control: 'color',
        },
    },
};

export const Primary = {
    args: {
        primary: true,
        label: 'TextField',
    },
};

export const Secondary = {
    args: {
        label: 'TextField',
    },
};

export const Large = {
    args: {
        size: 'large',
        label: 'TextField',
    },
};

export const Small = {
    args: {
        size: 'small',
        label: 'TextField',
    },
};

export const TextFieldWithPlaceholder = {
    args: {
        size: 'small',
        label: 'TextField',
        placeholder: 'Placeholder',
    },
};

export const TextFieldWithPlaceholderAndValue = {
    args: {
        size: 'small',
        label: 'TextField',
        placeholder: 'Placeholder',
        value: 'Value',
    },
};

export const TextFieldWithPlaceholderAndValueAndDisabled = {
    args: {
        size: 'small',
        label: 'TextField',
        placeholder: 'Placeholder',
        value: 'Value',
        disabled: true,
    },
};

export const TextFieldWithPlaceholderAndValueAndDisabledAndError = {
    args: {
        size: 'small',
        label: 'TextField',
        placeholder: 'Placeholder',
        value: 'Value',
        disabled: true,
        error: true,
    },
};
