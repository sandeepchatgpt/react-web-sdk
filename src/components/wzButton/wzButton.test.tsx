import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { WzButton } from './wzButton';
import { checkAccessibility, formatAxeResults } from '../../__tests__/accessibility-utils';

describe('WzButton Component', () => {
  it('renders the WzButton with default props', () => {
    render(<WzButton>Test Button</WzButton>);

    const button = screen.getByRole('button', { name: 'Test Button' });

    expect(button).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    render(<WzButton onClick={onClick}>Click Me</WzButton>);

    const button = screen.getByText('Click Me');
    button.click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<WzButton>Accessible Button</WzButton>);

    const results = await checkAccessibility(container);
    const formattedResults = formatAxeResults(results);

    expect(results.violations.length).toBe(0);
    if (results.violations.length > 0) {
      console.error(formattedResults); 
    }
  });

  it('should be accessible with a label', async () => {
    const { container } = render(<WzButton aria-label="Accessible button">Button</WzButton>);

    const button = screen.getByLabelText('Accessible button');
    expect(button).toBeInTheDocument();

     const results = await checkAccessibility(container);
    const formattedResults = formatAxeResults(results);

    expect(results.violations.length).toBe(0);
    if (results.violations.length > 0) {
      console.error(formattedResults); 
    }
  });
});
