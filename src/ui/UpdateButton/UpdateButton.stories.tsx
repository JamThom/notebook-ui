import type { Meta, StoryObj } from '@storybook/react';

import UpdateButton from './UpdateButton';

const meta: Meta<typeof UpdateButton> = {
  component: UpdateButton,
};

export default meta;
type Story = StoryObj<typeof UpdateButton>;

export const Primary: Story = {
  args: {
    children: 'Update',
    onClick: () => new Promise((resolve) => setTimeout(resolve, 1000)),
  },
};