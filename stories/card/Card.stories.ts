import { CardComponent } from './Card';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Card',
  component: CardComponent,
  tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
        },
        description: {
            control: 'text',
        },
        image: {
            control: 'text',
        },
        buttons: {
            control: 'array',
        },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WithTitle = {
  args: {
    title: 'Card Title',
  },
};

export const WithTitleAndDescription = {
    args: {
        title: 'Card Title',
        description: 'This is a card description that is long enough to wrap to a second line.',
    },
};

export const WithTitleAndDescriptionAndImage = {
    args: {
        title: 'Card Title',
        description: 'This is a card description that is long enough to wrap to a second line.',
        image: 'https://googlechrome.github.io/samples/intrinsic-size/cat.jpg',
    },
};

export const WithTitleAndDescriptionAndImageAndButtons = {
    args: {
        title: 'Card Title',
        description: 'This is a card description that is long enough to wrap to a second line.',
        image: 'https://googlechrome.github.io/samples/intrinsic-size/cat.jpg',
        buttons: [
            {
                label: 'Cancel',
                primary: false,
                onClick: () => alert('Button 1 clicked'),
            },
            {
                label: 'Continue',
                primary: true,
                onClick: () => alert('Button 2 clicked'),
            },
        ],
    },
};