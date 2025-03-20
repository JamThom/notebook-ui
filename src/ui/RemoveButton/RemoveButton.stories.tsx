import type { Meta, StoryObj } from '@storybook/react';

import RemoveButton from './RemoveButton';

const meta: Meta<typeof RemoveButton> = {
  component: RemoveButton,
};

export default meta;
type Story = StoryObj<typeof RemoveButton>;

export const Primary: Story = {
  args: {
    children: 'Remove',
    onRemove: () => new Promise((resolve) => setTimeout(resolve, 1000)),
  },
};