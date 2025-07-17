import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Separator } from '../separator';

describe('Separator', () => {
  it('renders with default props (horizontal, decorative)', () => {
    render(<Separator data-testid="separator" />);
    const separator = screen.getByTestId('separator');
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute('data-slot', 'separator');
    expect(separator).toHaveAttribute('data-orientation', 'horizontal');
    expect(separator).toHaveClass('bg-border', 'shrink-0');
    // Horizontal classes
    expect(separator.className).toMatch(/h-px/);
    expect(separator.className).toMatch(/w-full/);
    // Decorative by default, role should be 'none'
    expect(separator).toHaveAttribute('role', 'none');
  });

  it('renders as vertical', () => {
    render(<Separator orientation="vertical" data-testid="separator" />);
    const separator = screen.getByTestId('separator');
    expect(separator).toHaveAttribute('data-orientation', 'vertical');
    // Vertical classes
    expect(separator.className).toMatch(/h-full/);
    expect(separator.className).toMatch(/w-px/);
  });

  it('renders as non-decorative', () => {
    render(<Separator decorative={false} data-testid="separator" />);
    const separator = screen.getByTestId('separator');
    expect(separator).toHaveAttribute('data-slot', 'separator');
    expect(separator).toHaveAttribute('data-orientation', 'horizontal');
    // Radix adds role if decorative is false
    expect(separator).toHaveAttribute('role', 'separator');
  });

  it('applies custom className', () => {
    render(<Separator className="custom-class" data-testid="separator" />);
    const separator = screen.getByTestId('separator');
    expect(separator).toHaveClass('custom-class');
  });

  it('forwards ref', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Separator ref={ref} data-testid="separator" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('forwards additional props', () => {
    render(<Separator data-testid="separator" data-custom="value" />);
    const separator = screen.getByTestId('separator');
    expect(separator).toHaveAttribute('data-custom', 'value');
  });
}); 