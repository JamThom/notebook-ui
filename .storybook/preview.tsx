import UiProvider from '../src/ui/Provider/Provider';
import type { Preview } from '@storybook/react';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add FontAwesome icons to the library
library.add(fas);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <UiProvider>
      <Story />
    </UiProvider>
  ),
];

export default preview;