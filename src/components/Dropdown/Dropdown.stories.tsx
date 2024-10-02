import type { Meta, StoryObj } from '@storybook/react';
import { WrapperUI } from '../../stories';
import { Dropdown } from './ui/Dropdown/Dropdown';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  decorators: [(story) => <WrapperUI>{story()}</WrapperUI>],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    value: { label: '123', value: 'as3331d' },
    options: [{ label: '123', value: 'as3331d' }],
  },
};
