import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Toaster } from '../sonner';

// Simple mock for next-themes
vi.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light' }),
}));

// Simple mock for sonner
vi.mock('sonner', () => ({
  Toaster: ({ children, ...props }: React.ComponentProps<'div'>) => (
    <div data-testid="sonner-toaster" {...props}>{children}</div>
  ),
}));

describe('Toaster', () => {
  it('renders the toaster component', () => {
    render(<Toaster />);
    expect(screen.getByTestId('sonner-toaster')).toBeInTheDocument();
  });

  it('applies default theme and className', () => {
    render(<Toaster />);
    const toaster = screen.getByTestId('sonner-toaster');
    expect(toaster).toHaveClass('toaster group');
    expect(toaster.getAttribute('theme')).toBe('light');
  });

  it('applies custom CSS variables for styling', () => {
    render(<Toaster />);
    const toaster = screen.getByTestId('sonner-toaster');
    expect(toaster.style.getPropertyValue('--normal-bg')).toBe('var(--popover)');
    expect(toaster.style.getPropertyValue('--normal-text')).toBe('var(--popover-foreground)');
    expect(toaster.style.getPropertyValue('--normal-border')).toBe('var(--border)');
  });
}); 