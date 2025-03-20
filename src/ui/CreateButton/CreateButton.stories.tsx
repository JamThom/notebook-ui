import type { Meta, StoryObj } from '@storybook/react';

import CreateButton from './CreateButton';

const meta: Meta<typeof CreateButton> = {
  component: CreateButton,
};

export default meta;
type Story = StoryObj<typeof CreateButton>;

export const Primary: Story = {
  args: {
    children: 'Create',
    onClick: () => new Promise((resolve) => setTimeout(resolve, 1000)),
  },
};