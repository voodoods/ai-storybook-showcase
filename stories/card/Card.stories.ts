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
        title: 'This is a cute kitten',
        description: 'Oh my gosh, look at this cute kitten! It is so cute! I just want to squeeze it! Meow!',
        image: 'https://placekitten.com/408/287',
    },
};

export const WithTitleAndDescriptionAndImageAndButtons = {
    args: {
        title: 'This is a cute kitten',
        description: 'Oh my gosh, look at this cute kitten! It is so cute! I just want to squeeze it! Meow!',
        image: 'https://placekitten.com/408/287',
        buttons: [
            {
                label: 'Cancel',
                primary: false,
                onClick: () => alert('Button 1 clicked'),
            },
            {
                label: 'Squeeze it!',
                primary: true,
                onClick: () => alert('Button 2 clicked'),
            },
        ],
    },
};