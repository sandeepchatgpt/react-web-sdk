import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { WzButton } from '../components';

const meta = {
  title: 'Example/Button',
  component: WzButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: 'radio',
      options: ['primary', 'secondary', 'outline', 'subtle', 'transparent'],
    },
    size:{
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    children: {
      control: 'text', // Control type for children
    },
    onClick: { action: 'clicked' }, // This adds an action logger for the onClick event
  },
  args: { children: 'Button', onClick: fn(), appearance: 'primary', size: 'medium' },
} satisfies Meta<typeof WzButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    appearance: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    appearance: 'secondary',
    children: 'Secondary Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    appearance: 'secondary',
    children: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    appearance: 'secondary',
    children: 'Small Button',
  },
};
