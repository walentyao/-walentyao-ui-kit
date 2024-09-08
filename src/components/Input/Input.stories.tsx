import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { WrapperUI } from '../../stories';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

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
    valid: true,
  },
};

export const InputWithIcon: Story = {
  args: {
    icon: MagnifyingGlassIcon,
    size: 'l',
    placeholder: 'Placeholder',
    valid: true,
  },
};
