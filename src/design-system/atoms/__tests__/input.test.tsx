import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@/test/utils';
import { Input } from '../input';

describe('Input', () => {
  it('renders with default props', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('flex', 'h-9', 'w-full');
  });

  it('renders with different types', () => {
    const { rerender } = render(<Input type="text" placeholder="Text" />);
    expect(screen.getByPlaceholderText('Text')).toHaveAttribute('type', 'text');

    rerender(<Input type="email" placeholder="Email" />);
    expect(screen.getByPlaceholderText('Email')).toHaveAttribute('type', 'email');

    rerender(<Input type="password" placeholder="Password" />);
    expect(screen.getByPlaceholderText('Password')).toHaveAttribute('type', 'password');

    rerender(<Input type="number" placeholder="Number" />);
    expect(screen.getByPlaceholderText('Number')).toHaveAttribute('type', 'number');

    rerender(<Input type="search" placeholder="Search" />);
    expect(screen.getByPlaceholderText('Search')).toHaveAttribute('type', 'search');
  });

  it('handles value changes', () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} placeholder="Test" />);
    
    const input = screen.getByPlaceholderText('Test');
    fireEvent.change(input, { target: { value: 'new value' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({ value: 'new value' })
    }));
  });

  it('can be controlled', () => {
    render(<Input value="controlled value" onChange={vi.fn()} placeholder="Test" />);
    const input = screen.getByPlaceholderText('Test');
    expect(input).toHaveValue('controlled value');
  });

  it('can be disabled', () => {
    render(<Input disabled placeholder="Disabled" />);
    const input = screen.getByPlaceholderText('Disabled');
    expect(input).toBeDisabled();
    expect(input).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50');
  });

  it('can be read-only', () => {
    render(<Input readOnly placeholder="Read only" />);
    const input = screen.getByPlaceholderText('Read only');
    expect(input).toHaveAttribute('readonly');
  });

  it('handles focus and blur events', () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();
    
    render(
      <Input 
        onFocus={handleFocus} 
        onBlur={handleBlur} 
        placeholder="Focus test" 
      />
    );
    
    const input = screen.getByPlaceholderText('Focus test');
    
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalledTimes(1);
    
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('handles keyboard events', () => {
    const handleKeyDown = vi.fn();
    const handleKeyUp = vi.fn();
    
    render(
      <Input 
        onKeyDown={handleKeyDown} 
        onKeyUp={handleKeyUp} 
        placeholder="Keyboard test" 
      />
    );
    
    const input = screen.getByPlaceholderText('Keyboard test');
    
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(handleKeyDown).toHaveBeenCalledTimes(1);
    
    fireEvent.keyUp(input, { key: 'Enter' });
    expect(handleKeyUp).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<Input className="custom-input" placeholder="Custom" />);
    expect(screen.getByPlaceholderText('Custom')).toHaveClass('custom-input');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Input ref={ref} placeholder="Ref test" />);
    expect(ref).toHaveBeenCalled();
  });

  it('handles invalid state', () => {
    render(<Input aria-invalid="true" placeholder="Invalid" />);
    const input = screen.getByPlaceholderText('Invalid');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveClass('aria-invalid:ring-destructive/20');
  });

  it('supports auto-complete attributes', () => {
    render(<Input autoComplete="email" placeholder="Email" />);
    expect(screen.getByPlaceholderText('Email')).toHaveAttribute('autocomplete', 'email');
  });

  it('supports form attributes', () => {
    render(
      <Input 
        name="test-input" 
        id="test-id" 
        required 
        placeholder="Form test" 
      />
    );
    
    const input = screen.getByPlaceholderText('Form test');
    expect(input).toHaveAttribute('name', 'test-input');
    expect(input).toHaveAttribute('id', 'test-id');
    expect(input).toHaveAttribute('required');
  });

  it('supports min and max attributes for number inputs', () => {
    render(
      <Input 
        type="number" 
        min="0" 
        max="100" 
        placeholder="Number range" 
      />
    );
    
    const input = screen.getByPlaceholderText('Number range');
    expect(input).toHaveAttribute('min', '0');
    expect(input).toHaveAttribute('max', '100');
  });

  it('supports step attribute for number inputs', () => {
    render(
      <Input 
        type="number" 
        step="0.1" 
        placeholder="Decimal" 
      />
    );
    
    expect(screen.getByPlaceholderText('Decimal')).toHaveAttribute('step', '0.1');
  });

  it('supports pattern attribute', () => {
    render(
      <Input 
        pattern="[A-Za-z]{3}" 
        placeholder="Pattern test" 
      />
    );
    
    expect(screen.getByPlaceholderText('Pattern test')).toHaveAttribute('pattern', '[A-Za-z]{3}');
  });

  it('supports placeholder attribute', () => {
    render(<Input placeholder="Enter your name" />);
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
  });

  it('supports size attribute', () => {
    render(<Input size={20} placeholder="Size test" />);
    expect(screen.getByPlaceholderText('Size test')).toHaveAttribute('size', '20');
  });

  it('supports spellCheck attribute', () => {
    render(<Input spellCheck={false} placeholder="Spell check test" />);
    expect(screen.getByPlaceholderText('Spell check test')).toHaveAttribute('spellcheck', 'false');
  });

  it('has proper focus styles', () => {
    render(<Input placeholder="Focus styles" />);
    const input = screen.getByPlaceholderText('Focus styles');
    
    fireEvent.focus(input);
    expect(input).toHaveClass('focus-visible:ring-ring/50', 'focus-visible:ring-[3px]');
  });

  it('supports aria-describedby for accessibility', () => {
    render(
      <Input 
        aria-describedby="error-message" 
        placeholder="Accessibility test" 
      />
    );
    
    expect(screen.getByPlaceholderText('Accessibility test')).toHaveAttribute('aria-describedby', 'error-message');
  });
}); 