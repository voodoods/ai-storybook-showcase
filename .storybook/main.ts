
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  // Required
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  // Optional
  addons: [    "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: 'tag',
  }
};

export default config;