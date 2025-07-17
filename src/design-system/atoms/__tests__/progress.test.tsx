import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { Progress } from '../progress';

function getIndicator() {
  return screen.getByTestId('progress-indicator');
}

describe('Progress', () => {
  it('renders the progress root', () => {
    render(<Progress value={50} data-testid="progress-root" />);
    expect(screen.getByTestId('progress-root')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Progress value={10} className="custom-progress" data-testid="progress-root" />);
    expect(screen.getByTestId('progress-root')).toHaveClass('custom-progress');
  });

  it('renders the indicator', () => {
    render(<Progress value={25} />);
    expect(getIndicator()).toBeInTheDocument();
  });

  it('indicator style reflects value=0', () => {
    render(<Progress value={0} />);
    expect(getIndicator().style.transform).toBe('translateX(-100%)');
  });

  it('indicator style reflects value=50', () => {
    render(<Progress value={50} />);
    expect(getIndicator().style.transform).toBe('translateX(-50%)');
  });

  it('indicator style reflects value=100', () => {
    render(<Progress value={100} />);
    expect(getIndicator().style.transform).toBe('translateX(-0%)');
  });

  it('indicator style reflects value undefined (defaults to 0)', () => {
    render(<Progress />);
    expect(getIndicator().style.transform).toBe('translateX(-100%)');
  });

  it('has correct accessibility attributes', () => {
    render(<Progress value={40} data-testid="progress-root" />);
    const root = screen.getByTestId('progress-root');
    expect(root).toHaveAttribute('role', 'progressbar');
    // aria-valuenow, aria-valuemin, aria-valuemax are handled by Radix
    expect(root).toHaveAttribute('aria-valuenow', '40');
    expect(root).toHaveAttribute('aria-valuemin', '0');
    expect(root).toHaveAttribute('aria-valuemax', '100');
  });

  it('does not render children', () => {
    render(<Progress value={10}>Hello</Progress>);
    // Only indicator should be present
    expect(screen.queryByText('Hello')).not.toBeInTheDocument();
  });
}); 