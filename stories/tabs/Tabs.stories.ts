import { Tabs } from './Tabs';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    tabNames: {
        control: 'array',
    },
    selectedTab: {
        control: 'number',
    },
    onTabSelected: {
        action: 'onTabSelected',
    },
    darkTheme: {
        control: 'boolean',
    }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NoSelectedTab = {
    args: {
        tabNames: ['Tab 1', 'Tab 2', 'Tab 3'],
        selectedTab: -1,
    },
};

export const SelectedTab = {
    args: {
        tabNames: ['Tab 1', 'Tab 2', 'Tab 3'],
        selectedTab: 0,
    },
};

export const DarkTheme = {
    args: {
        tabNames: ['Tab 1', 'Tab 2', 'Tab 3'],
        selectedTab: 0,
        darkTheme: true,
    },
};