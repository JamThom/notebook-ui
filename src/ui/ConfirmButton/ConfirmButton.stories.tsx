import type { Meta, StoryObj } from '@storybook/react';

import ConfirmButton from './ConfirmButton';

const meta: Meta<typeof ConfirmButton> = {
  component: ConfirmButton,
};

export default meta;
type Story = StoryObj<typeof ConfirmButton>;

export const Primary: Story = {
  args: {
    children: 'Confirm',
    onClick: () => new Promise((resolve) => setTimeout(resolve, 1000)),
  },
};