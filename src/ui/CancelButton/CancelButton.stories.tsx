import type { Meta, StoryObj } from '@storybook/react';

import CancelButton from './CancelButton';

const meta: Meta<typeof CancelButton> = {
  component: CancelButton,
};

export default meta;
type Story = StoryObj<typeof CancelButton>;

export const Primary: Story = {
  args: {
    children: 'Cancel',
    onClick: () => new Promise((resolve) => setTimeout(resolve, 1000)),
  },
};