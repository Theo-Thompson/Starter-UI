import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@/test/utils';
import { Label } from '../label';

describe('Label', () => {
  it('renders with default props', () => {
    render(<Label>Test Label</Label>);
    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('flex', 'items-center', 'gap-2', 'text-sm', 'leading-none', 'font-medium', 'select-none');
  });

  it('applies custom className', () => {
    render(<Label className="custom-label">Custom Label</Label>);
    const label = screen.getByText('Custom Label');
    expect(label).toHaveClass('custom-label');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Label ref={ref}>Ref Test</Label>);
    expect(ref).toHaveBeenCalled();
  });

  it('handles htmlFor attribute', () => {
    render(<Label htmlFor="test-input">Input Label</Label>);
    const label = screen.getByText('Input Label');
    expect(label).toHaveAttribute('for', 'test-input');
  });

  it('handles empty content', () => {
    render(<Label />);
    const label = screen.getByRole('generic');
    expect(label).toBeInTheDocument();
    // Focus on functional behavior - label renders without content
  });

  it('applies disabled state styles', () => {
    render(<Label>Disabled Label</Label>);
    const label = screen.getByText('Disabled Label');
    expect(label).toHaveClass('group-data-[disabled=true]:pointer-events-none', 'group-data-[disabled=true]:opacity-50');
  });

  it('applies peer disabled styles', () => {
    render(<Label>Peer Label</Label>);
    const label = screen.getByText('Peer Label');
    expect(label).toHaveClass('peer-disabled:cursor-not-allowed', 'peer-disabled:opacity-50');
  });

  it('renders with icons', () => {
    render(
      <Label>
        <span>📝</span>
        Label with Icon
      </Label>
    );
    
    const label = screen.getByText('Label with Icon');
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('📝');
  });

  it('handles complex content', () => {
    render(
      <Label>
        <span>Required</span>
        <span className="text-red-500">*</span>
        <span>Field Name</span>
      </Label>
    );
    
    const label = screen.getByText('Field Name').closest('label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Required');
    expect(label).toHaveTextContent('*');
  });

  it('maintains proper spacing with gap', () => {
    render(
      <Label>
        <span>Icon</span>
        <span>Text</span>
      </Label>
    );
    
    const label = screen.getByText('Text').closest('label');
    expect(label).toHaveClass('gap-2');
  });

  it('handles accessibility attributes', () => {
    render(<Label aria-describedby="help-text">Accessible Label</Label>);
    const label = screen.getByText('Accessible Label');
    expect(label).toHaveAttribute('aria-describedby', 'help-text');
  });

  it('handles form association', () => {
    render(
      <div>
        <Label htmlFor="email" id="email-label">Email Address</Label>
        <input id="email" type="email" aria-labelledby="email-label" title="Email Address" />
      </div>
    );
    
    const label = screen.getByText('Email Address');
    const input = screen.getByRole('textbox');
    
    expect(label).toHaveAttribute('for', 'email');
    expect(input).toHaveAttribute('id', 'email');
  });

  it('handles multiple labels', () => {
    render(
      <div>
        <Label htmlFor="first">First Name</Label>
        <Label htmlFor="last">Last Name</Label>
      </div>
    );
    
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Last Name')).toBeInTheDocument();
  });

  it('handles label with description', () => {
    render(
      <div>
        <Label htmlFor="password" id="password-label">Password</Label>
        <p id="password-help">Must be at least 8 characters</p>
        <input id="password" type="password" aria-describedby="password-help" aria-labelledby="password-label" title="Password" />
      </div>
    );
    
    const label = screen.getByText('Password');
    const helpText = screen.getByText('Must be at least 8 characters');
    
    expect(label).toBeInTheDocument();
    expect(helpText).toBeInTheDocument();
  });

  it('handles label with error state', () => {
    render(
      <div>
        <Label htmlFor="email" id="email-label" className="text-red-500">Email</Label>
        <input id="email" type="email" aria-invalid="true" aria-labelledby="email-label" title="Email" />
      </div>
    );
    
    const label = screen.getByText('Email');
    expect(label).toHaveClass('text-red-500');
  });

  it('handles label with loading state', () => {
    render(
      <Label className="opacity-50">
        <span className="animate-spin">⏳</span>
        Loading...
      </Label>
    );
    
    const label = screen.getByText('Loading...');
    expect(label).toHaveClass('opacity-50');
    expect(label).toHaveTextContent('⏳');
  });
}); 