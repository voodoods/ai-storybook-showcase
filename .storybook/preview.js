/** @type { import('@storybook/react').Preview } */
import { withTests } from '@storybook/addon-jest';

import results from '../.jest-test-results.json';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withTests({
      results,
    }),
  ]
};



export default preview;
