import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@/test/utils';
import { Badge } from '../badge';

describe('Badge', () => {
  it('renders with default props', () => {
    render(<Badge>Default Badge</Badge>);
    const badge = screen.getByText('Default Badge');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('inline-flex', 'items-center', 'justify-center');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Badge variant="default">Default</Badge>);
    expect(screen.getByText('Default')).toHaveClass('bg-primary', 'text-primary-foreground');

    rerender(<Badge variant="secondary">Secondary</Badge>);
    expect(screen.getByText('Secondary')).toHaveClass('bg-secondary', 'text-secondary-foreground');

    rerender(<Badge variant="destructive">Destructive</Badge>);
    expect(screen.getByText('Destructive')).toHaveClass('bg-destructive', 'text-white');

    rerender(<Badge variant="outline">Outline</Badge>);
    expect(screen.getByText('Outline')).toHaveClass('text-foreground');
  });

  it('applies custom className', () => {
    render(<Badge className="custom-badge">Custom</Badge>);
    expect(screen.getByText('Custom')).toHaveClass('custom-badge');
  });

  it('renders as child component', () => {
    render(
      <Badge asChild>
        <a href="/test">Link Badge</a>
      </Badge>
    );
    
    const link = screen.getByRole('link', { name: 'Link Badge' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
    expect(link).toHaveClass('inline-flex', 'items-center', 'justify-center');
  });

  it('handles status prop correctly', () => {
    render(<Badge status>Status Badge</Badge>);
    const badge = screen.getByText('Status Badge');
    expect(badge).toHaveAttribute('role', 'status');
    expect(badge).toHaveAttribute('aria-live', 'polite');
  });

  it('handles custom live prop', () => {
    render(<Badge status live="assertive">Assertive Badge</Badge>);
    const badge = screen.getByText('Assertive Badge');
    expect(badge).toHaveAttribute('aria-live', 'assertive');
  });

  it('does not have status attributes when status is false', () => {
    render(<Badge>Normal Badge</Badge>);
    const badge = screen.getByText('Normal Badge');
    expect(badge).not.toHaveAttribute('role');
    expect(badge).not.toHaveAttribute('aria-live');
  });

  it('handles live="off" correctly', () => {
    render(<Badge status live="off">Off Badge</Badge>);
    const badge = screen.getByText('Off Badge');
    expect(badge).toHaveAttribute('aria-live', 'off');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Badge ref={ref}>Ref Test</Badge>);
    expect(ref).toHaveBeenCalled();
  });

  it('renders with icons', () => {
    render(
      <Badge>
        <span>🚀</span>
        With Icon
      </Badge>
    );
    
    const badge = screen.getByText('With Icon');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent('🚀');
  });

  it('handles empty content', () => {
    render(<Badge />);
    const badge = screen.getAllByRole('generic')[0];
    expect(badge).toBeInTheDocument();
    // Focus on functional behavior - badge renders without content
  });

  it('applies focus styles correctly', () => {
    render(<Badge>Focus Test</Badge>);
    const badge = screen.getByText('Focus Test');
    expect(badge).toHaveClass('focus-visible:border-ring', 'focus-visible:ring-ring/50');
  });

  it('handles invalid state', () => {
    render(<Badge aria-invalid="true">Invalid Badge</Badge>);
    const badge = screen.getByText('Invalid Badge');
    expect(badge).toHaveAttribute('aria-invalid', 'true');
    expect(badge).toHaveClass('aria-invalid:ring-destructive/20');
  });

  it('maintains proper spacing with gap', () => {
    render(
      <Badge>
        <span>Icon</span>
        <span>Text</span>
      </Badge>
    );
    
    const badge = screen.getByText('Text').closest('[data-slot="badge"]');
    expect(badge).toHaveClass('gap-1');
  });

  it('handles transition styles', () => {
    render(<Badge>Transition Test</Badge>);
    const badge = screen.getByText('Transition Test');
    expect(badge).toHaveClass('transition-[color,box-shadow]');
  });

  it('ensures proper overflow handling', () => {
    render(<Badge>Overflow Test</Badge>);
    const badge = screen.getByText('Overflow Test');
    expect(badge).toHaveClass('overflow-hidden');
  });
}); 