import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { WrapperUI } from '../../stories';

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [(story) => <WrapperUI>{story()}</WrapperUI>],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Войти',
    theme: 'primary',
    size: 'm',
  },
};
