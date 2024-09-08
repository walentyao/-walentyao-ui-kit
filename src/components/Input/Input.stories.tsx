import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { WrapperUI } from '../../stories';

const meta: Meta<typeof Input> = {
  component: Input,
  decorators: [(story) => <WrapperUI>{story()}</WrapperUI>],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    placeholder: 'Placeholder',
  },
};
