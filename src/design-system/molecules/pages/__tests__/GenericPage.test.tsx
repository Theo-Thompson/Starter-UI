import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GenericPage } from '../GenericPage';

describe('GenericPage', () => {
  it('renders with title', () => {
    render(<GenericPage title="Test Page" />);
    
    expect(screen.getByRole('heading', { name: 'Test Page' })).toBeInTheDocument();
  });

  it('renders with title and description', () => {
    render(<GenericPage title="Test Page" description="Test description" />);
    
    expect(screen.getByRole('heading', { name: 'Test Page' })).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('does not render description when not provided', () => {
    render(<GenericPage title="Test Page" />);
    
    expect(screen.getByRole('heading', { name: 'Test Page' })).toBeInTheDocument();
    expect(screen.queryByText('Test description')).not.toBeInTheDocument();
  });

  it('renders children content when provided', () => {
    render(
      <GenericPage title="Test Page">
        <div data-testid="custom-content">Custom content</div>
      </GenericPage>
    );
    
    expect(screen.getByRole('heading', { name: 'Test Page' })).toBeInTheDocument();
    expect(screen.getByTestId('custom-content')).toBeInTheDocument();
    expect(screen.getByText('Custom content')).toBeInTheDocument();
  });

  it('renders default placeholder content when no children provided', () => {
    render(<GenericPage title="Test Page" />);
    
    expect(screen.getByRole('heading', { name: 'Test Page' })).toBeInTheDocument();
    expect(screen.getByText(/This is a placeholder page for the/)).toBeInTheDocument();
    expect(screen.getByText(/In a real application, this would contain/)).toBeInTheDocument();
  });

  it('includes title in placeholder content', () => {
    render(<GenericPage title="Settings" />);
    
    expect(screen.getByText(/This is a placeholder page for the/)).toBeInTheDocument();
    expect(screen.getByText(/actual content and functionality for the settings page/)).toBeInTheDocument();
  });

  it('renders with correct card structure', () => {
    render(<GenericPage title="Test Page" description="Test description" />);
    
    // Check for card elements
    expect(screen.getByRole('heading', { name: 'Test Page' })).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    
    // The title should have the text-2xl class
    const titleElement = screen.getByRole('heading', { name: 'Test Page' });
    expect(titleElement).toHaveClass('text-2xl');
  });

  it('renders description with correct styling', () => {
    render(<GenericPage title="Test Page" description="Test description" />);
    
    const descriptionElement = screen.getByText('Test description');
    expect(descriptionElement).toHaveClass('text-base');
  });

  it('renders with correct container styling', () => {
    const { container } = render(<GenericPage title="Test Page" />);
    
    // Check for the main container with p-6 and h-full classes
    const mainContainer = container.firstChild as HTMLElement;
    expect(mainContainer).toHaveClass('p-6', 'h-full');
  });

  it('renders card with max width constraint', () => {
    const { container } = render(<GenericPage title="Test Page" />);
    
    // Find the card element
    const card = container.querySelector('.max-w-2xl');
    expect(card).toBeInTheDocument();
  });

  it('handles empty title gracefully', () => {
    render(<GenericPage title="" />);
    
    expect(screen.getByRole('heading', { name: '' })).toBeInTheDocument();
  });

  it('handles complex children content', () => {
    render(
      <GenericPage title="Test Page">
        <div>
          <h2>Section Title</h2>
          <p>Some content</p>
          <button>Click me</button>
        </div>
      </GenericPage>
    );
    
    expect(screen.getByRole('heading', { name: 'Test Page' })).toBeInTheDocument();
    expect(screen.getByText('Section Title')).toBeInTheDocument();
    expect(screen.getByText('Some content')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('does not render placeholder content when children are provided', () => {
    render(
      <GenericPage title="Test Page">
        <div>Custom content</div>
      </GenericPage>
    );
    
    expect(screen.getByRole('heading', { name: 'Test Page' })).toBeInTheDocument();
    expect(screen.getByText('Custom content')).toBeInTheDocument();
    expect(screen.queryByText(/This is a placeholder page/)).not.toBeInTheDocument();
    expect(screen.queryByText(/In a real application/)).not.toBeInTheDocument();
  });

  it('renders with proper semantic structure', () => {
    render(<GenericPage title="Test Page" description="Test description" />);
    
    // Should have proper heading structure
    const titleElement = screen.getByRole('heading', { name: 'Test Page' });
    expect(titleElement.tagName).toBe('H3'); // CardTitle renders as h3
    
    // Should have description
    const descriptionElement = screen.getByText('Test description');
    expect(descriptionElement).toBeInTheDocument();
  });
}); 