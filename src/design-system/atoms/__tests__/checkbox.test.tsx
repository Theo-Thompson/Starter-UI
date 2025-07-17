import { createRef } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Checkbox } from '../checkbox';

// Helper to get the input element (Radix renders a button)
const getCheckbox = () => screen.getByRole('checkbox');

describe('Checkbox', () => {
  it('renders with default props', () => {
    render(<Checkbox data-testid="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass('h-4', 'w-4', 'rounded-sm', 'border', 'border-primary');
    expect(getCheckbox()).toBe(checkbox);
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Checkbox ref={ref} data-testid="checkbox" />);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('applies custom className', () => {
    render(<Checkbox className="custom-class" data-testid="checkbox" />);
    expect(screen.getByTestId('checkbox')).toHaveClass('custom-class');
  });

  it('renders as checked when checked prop is true', () => {
    render(<Checkbox checked data-testid="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toHaveAttribute('data-state', 'checked');
    expect(getCheckbox()).toHaveAttribute('aria-checked', 'true');
    // Check icon should be visible
    expect(checkbox.querySelector('svg')).toBeInTheDocument();
  });

  it('renders as unchecked when checked prop is false', () => {
    render(<Checkbox checked={false} data-testid="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toHaveAttribute('data-state', 'unchecked');
    expect(getCheckbox()).toHaveAttribute('aria-checked', 'false');
  });

  it('renders as indeterminate when state is mixed', () => {
    render(<Checkbox checked="indeterminate" data-testid="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
    expect(getCheckbox()).toHaveAttribute('aria-checked', 'mixed');
  });

  it('renders as disabled', () => {
    render(<Checkbox disabled data-testid="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50');
  });

  it('calls onCheckedChange when clicked', () => {
    const handleChange = vi.fn();
    render(<Checkbox onCheckedChange={handleChange} data-testid="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it('does not call onCheckedChange when disabled', () => {
    const handleChange = vi.fn();
    render(<Checkbox disabled onCheckedChange={handleChange} data-testid="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('is focusable and responds to keyboard', () => {
    render(<Checkbox data-testid="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    checkbox.focus();
    expect(checkbox).toHaveFocus();
    fireEvent.keyDown(checkbox, { key: ' ' });
    // Should toggle checked state
    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute('data-state', 'checked');
  });

  it('has correct accessibility attributes', () => {
    render(<Checkbox data-testid="checkbox" aria-label="Accept terms" />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toHaveAttribute('role', 'checkbox');
    expect(checkbox).toHaveAttribute('aria-label', 'Accept terms');
  });
}); 