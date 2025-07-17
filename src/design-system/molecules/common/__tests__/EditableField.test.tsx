import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { EditableField } from '../EditableField';
import { toast } from 'sonner';

// Mock sonner toast
vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
  },
}));

describe('EditableField', () => {
  const defaultProps = {
    label: 'Name',
    value: 'John Doe',
    onSave: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders in display mode by default', () => {
    render(<EditableField {...defaultProps} />);
    
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });

  it('shows placeholder when value is empty', () => {
    render(<EditableField {...defaultProps} value="" />);
    
    expect(screen.getByText('Click to add name')).toBeInTheDocument();
  });

  it('shows custom placeholder when provided', () => {
    render(<EditableField {...defaultProps} value="" placeholder="Enter your name" />);
    
    expect(screen.getByText('Enter your name')).toBeInTheDocument();
  });

  it('switches to edit mode when edit button is clicked', () => {
    render(<EditableField {...defaultProps} />);
    
    const editButton = screen.getByRole('button', { name: /edit/i });
    fireEvent.click(editButton);
    
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByDisplayValue('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('saves changes when save button is clicked', () => {
    const onSave = vi.fn();
    render(<EditableField {...defaultProps} onSave={onSave} />);
    
    // Enter edit mode
    fireEvent.click(screen.getByRole('button', { name: /edit/i }));
    
    // Change value
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Jane Doe' } });
    
    // Save
    fireEvent.click(screen.getByText('Save'));
    
    expect(onSave).toHaveBeenCalledWith('Jane Doe');
    // Component returns to display mode showing original value until parent updates
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });

  it('cancels changes when cancel button is clicked', () => {
    const onSave = vi.fn();
    render(<EditableField {...defaultProps} onSave={onSave} />);
    
    // Enter edit mode
    fireEvent.click(screen.getByRole('button', { name: /edit/i }));
    
    // Change value
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Jane Doe' } });
    
    // Cancel
    fireEvent.click(screen.getByText('Cancel'));
    
    expect(onSave).not.toHaveBeenCalled();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });

  it('saves on Enter key press for single-line fields', () => {
    const onSave = vi.fn();
    render(<EditableField {...defaultProps} onSave={onSave} />);
    
    // Enter edit mode
    fireEvent.click(screen.getByRole('button', { name: /edit/i }));
    
    // Change value and press Enter
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Jane Doe' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    
    expect(onSave).toHaveBeenCalledWith('Jane Doe');
  });

  it('cancels on Escape key press', () => {
    const onSave = vi.fn();
    render(<EditableField {...defaultProps} onSave={onSave} />);
    
    // Enter edit mode
    fireEvent.click(screen.getByRole('button', { name: /edit/i }));
    
    // Change value and press Escape
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Jane Doe' } });
    fireEvent.keyDown(input, { key: 'Escape' });
    
    expect(onSave).not.toHaveBeenCalled();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('does not save on Enter for multiline fields', () => {
    const onSave = vi.fn();
    render(<EditableField {...defaultProps} onSave={onSave} multiline />);
    
    // Enter edit mode
    fireEvent.click(screen.getByRole('button', { name: /edit/i }));
    
    // Change value and press Enter
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'Jane Doe\nNew Line' } });
    fireEvent.keyDown(textarea, { key: 'Enter' });
    
    expect(onSave).not.toHaveBeenCalled();
    expect((textarea as HTMLTextAreaElement).value).toBe('Jane Doe\nNew Line');
  });

  it('renders textarea for multiline fields', () => {
    render(<EditableField {...defaultProps} multiline />);
    
    // Enter edit mode
    fireEvent.click(screen.getByRole('button', { name: /edit/i }));
    
    const textarea = screen.getByRole('textbox');
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('renders input for single-line fields', () => {
    render(<EditableField {...defaultProps} />);
    
    // Enter edit mode
    fireEvent.click(screen.getByRole('button', { name: /edit/i }));
    
    const input = screen.getByRole('textbox');
    expect(input.tagName).toBe('INPUT');
  });

  it('hides edit button when disabled', () => {
    render(<EditableField {...defaultProps} disabled />);
    
    expect(screen.queryByRole('button', { name: /edit/i })).not.toBeInTheDocument();
  });

  it('preserves whitespace in multiline display mode', () => {
    const multilineValue = 'Line 1\nLine 2\nLine 3';
    render(<EditableField {...defaultProps} value={multilineValue} multiline />);
    
    // Check that the text content contains the multiline value
    const textElement = screen.getByText((content, element) => {
      return !!(element?.tagName === 'SPAN' && 
             element?.textContent?.includes('Line 1') && 
             element?.textContent?.includes('Line 2') && 
             element?.textContent?.includes('Line 3'));
    });
    expect(textElement).toBeInTheDocument();
  });

  it('shows toast notification on successful save', () => {
    render(<EditableField {...defaultProps} />);
    
    // Enter edit mode and save
    fireEvent.click(screen.getByRole('button', { name: /edit/i }));
    fireEvent.click(screen.getByText('Save'));
    
    expect(toast.success).toHaveBeenCalledWith('Name updated successfully');
  });

  it('auto-focuses input when entering edit mode', () => {
    render(<EditableField {...defaultProps} />);
    
    // Enter edit mode
    fireEvent.click(screen.getByRole('button', { name: /edit/i }));
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveFocus();
  });

  it('handles empty value in edit mode', () => {
    render(<EditableField {...defaultProps} value="" />);
    
    // Enter edit mode
    fireEvent.click(screen.getByRole('button', { name: /edit/i }));
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');
  });
}); 