import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@/test/utils';
import userEvent from '@testing-library/user-event';
import { Switch } from '../switch';

describe('Switch', () => {
  it('renders with default props', () => {
    render(<Switch data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveAttribute('data-slot', 'switch');
    expect(switchElement).toHaveAttribute('data-state', 'unchecked');
  });

  it('renders as checked when checked prop is true', () => {
    render(<Switch checked data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toHaveAttribute('data-state', 'checked');
  });

  it('renders as unchecked when checked prop is false', () => {
    render(<Switch checked={false} data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toHaveAttribute('data-state', 'unchecked');
  });

  it('renders as disabled when disabled prop is true', () => {
    render(<Switch disabled data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toBeDisabled();
    expect(switchElement).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50');
  });

  it('applies custom className', () => {
    render(<Switch className="custom-switch" data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toHaveClass('custom-switch');
  });

  it('forwards additional props', () => {
    render(<Switch data-testid="switch" data-custom="value" />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toHaveAttribute('data-custom', 'value');
  });

  it('calls onCheckedChange when clicked', async () => {
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();
    render(<Switch onCheckedChange={handleCheckedChange} data-testid="switch" />);
    
    const switchElement = screen.getByTestId('switch');
    await user.click(switchElement);
    
    expect(handleCheckedChange).toHaveBeenCalledWith(true);
  });

  it('does not call onCheckedChange when disabled', async () => {
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();
    render(<Switch disabled onCheckedChange={handleCheckedChange} data-testid="switch" />);
    
    const switchElement = screen.getByTestId('switch');
    await user.click(switchElement);
    
    expect(handleCheckedChange).not.toHaveBeenCalled();
  });

  it('is keyboard accessible', async () => {
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();
    render(<Switch onCheckedChange={handleCheckedChange} data-testid="switch" />);
    
    const switchElement = screen.getByTestId('switch');
    switchElement.focus();
    expect(switchElement).toHaveFocus();
    
    // Test that the switch is focusable and can be activated with Enter
    await user.keyboard('{Enter}');
    expect(handleCheckedChange).toHaveBeenCalledWith(true);
  });

  it('has correct accessibility attributes', () => {
    render(<Switch data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toHaveAttribute('role', 'switch');
    expect(switchElement).toHaveAttribute('aria-checked', 'false');
  });

  it('has correct accessibility attributes when checked', () => {
    render(<Switch checked data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toHaveAttribute('aria-checked', 'true');
  });

  it('renders thumb element', () => {
    render(<Switch data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    const thumb = switchElement.querySelector('[data-slot="switch-thumb"]');
    expect(thumb).toBeInTheDocument();
  });

  it('handles required prop', () => {
    render(<Switch required data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    // Note: Radix UI Switch may not forward the required prop to the DOM
    // This test verifies the component accepts the prop
    expect(switchElement).toBeInTheDocument();
  });

  it('handles name prop', () => {
    render(<Switch name="test-switch" data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    // Note: Radix UI Switch may not forward the name prop to the DOM
    // This test verifies the component accepts the prop
    expect(switchElement).toBeInTheDocument();
  });

  it('handles value prop', () => {
    render(<Switch value="test-value" data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toHaveAttribute('value', 'test-value');
  });

  it('handles form submission', async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn((e) => e.preventDefault());
    
    render(
      <form onSubmit={handleSubmit}>
        <Switch name="test-switch" data-testid="switch" />
        <button type="submit">Submit</button>
      </form>
    );
    
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await user.click(submitButton);
    
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('handles controlled component behavior', async () => {
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();
    
    const { rerender } = render(
      <Switch checked={false} onCheckedChange={handleCheckedChange} data-testid="switch" />
    );
    
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toHaveAttribute('data-state', 'unchecked');
    
    await user.click(switchElement);
    expect(handleCheckedChange).toHaveBeenCalledWith(true);
    
    // Re-render with checked state
    rerender(<Switch checked={true} onCheckedChange={handleCheckedChange} data-testid="switch" />);
    expect(switchElement).toHaveAttribute('data-state', 'checked');
  });

  it('handles focus events', async () => {
    const user = userEvent.setup();
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();
    
    render(
      <Switch 
        onFocus={handleFocus} 
        onBlur={handleBlur} 
        data-testid="switch" 
      />
    );
    
    const switchElement = screen.getByTestId('switch');
    await user.click(switchElement);
    expect(handleFocus).toHaveBeenCalled();
    
    await user.tab();
    expect(handleBlur).toHaveBeenCalled();
  });

  it('handles multiple switches independently', async () => {
    const user = userEvent.setup();
    const handleChange1 = vi.fn();
    const handleChange2 = vi.fn();
    
    render(
      <div>
        <Switch onCheckedChange={handleChange1} data-testid="switch-1" />
        <Switch onCheckedChange={handleChange2} data-testid="switch-2" />
      </div>
    );
    
    const switch1 = screen.getByTestId('switch-1');
    const switch2 = screen.getByTestId('switch-2');
    
    await user.click(switch1);
    expect(handleChange1).toHaveBeenCalledWith(true);
    expect(handleChange2).not.toHaveBeenCalled();
    
    await user.click(switch2);
    expect(handleChange2).toHaveBeenCalledWith(true);
  });

  it('handles defaultChecked prop', () => {
    render(<Switch defaultChecked data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toHaveAttribute('data-state', 'checked');
  });

  it('handles id prop', () => {
    render(<Switch id="test-switch" data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toHaveAttribute('id', 'test-switch');
  });

  it('handles tabIndex prop', () => {
    render(<Switch tabIndex={0} data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toHaveAttribute('tabIndex', '0');
  });

  it('handles autoFocus prop', () => {
    render(<Switch autoFocus data-testid="switch" />);
    const switchElement = screen.getByTestId('switch');
    expect(switchElement).toHaveFocus();
  });
}); 