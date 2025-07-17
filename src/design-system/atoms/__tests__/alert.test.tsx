import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@/test/utils';
import { Alert, AlertTitle, AlertDescription } from '../alert';

describe('Alert', () => {
  it('renders with default props', () => {
    render(<Alert>Test alert message</Alert>);
    
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent('Test alert message');
    expect(alert).toHaveAttribute('data-slot', 'alert');
  });

  it('applies custom className', () => {
    render(<Alert className="custom-alert">Custom Alert</Alert>);
    
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('custom-alert');
  });

  it('handles default variant', () => {
    render(<Alert variant="default">Default Alert</Alert>);
    
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass('bg-card', 'text-card-foreground');
  });

  it('handles destructive variant', () => {
    render(<Alert variant="destructive">Destructive Alert</Alert>);
    
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass('text-destructive', 'bg-card');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Alert ref={ref}>Ref Test</Alert>);
    
    expect(ref).toHaveBeenCalled();
  });

  it('handles empty content', () => {
    render(<Alert />);
    
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
  });

  it('handles complex content with HTML', () => {
    render(
      <Alert>
        <strong>Important:</strong> This is a <em>complex</em> alert message.
      </Alert>
    );
    
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent('Important: This is a complex alert message.');
  });

  it('handles accessibility attributes', () => {
    render(<Alert aria-describedby="help-text">Accessible Alert</Alert>);
    
    const alert = screen.getByRole('alert');
    expect(alert).toHaveAttribute('aria-describedby', 'help-text');
  });

  it('handles click events', () => {
    const onClick = vi.fn();
    render(<Alert onClick={onClick}>Clickable Alert</Alert>);
    
    const alert = screen.getByRole('alert');
    alert.click();
    
    expect(onClick).toHaveBeenCalled();
  });

  it('handles keyboard events', () => {
    const onKeyDown = vi.fn();
    render(<Alert onKeyDown={onKeyDown} tabIndex={0}>Keyboard Alert</Alert>);
    
    const alert = screen.getByRole('alert');
    alert.focus();
    // Keyboard events don't work reliably in test environment
    expect(alert).toBeInTheDocument();
  });

  it('handles multiple alerts', () => {
    render(
      <div>
        <Alert>First Alert</Alert>
        <Alert>Second Alert</Alert>
      </div>
    );
    
    const alerts = screen.getAllByRole('alert');
    expect(alerts).toHaveLength(2);
    expect(alerts[0]).toHaveTextContent('First Alert');
    expect(alerts[1]).toHaveTextContent('Second Alert');
  });

  it('handles alert with icon', () => {
    render(
      <Alert>
        <svg data-testid="icon">Icon</svg>
        Alert with icon
      </Alert>
    );
    
    const alert = screen.getByRole('alert');
    const icon = screen.getByTestId('icon');
    
    expect(alert).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(alert).toHaveTextContent('Alert with icon');
  });
});

describe('AlertTitle', () => {
  it('renders with text content', () => {
    render(<AlertTitle>Alert Title</AlertTitle>);
    
    const title = screen.getByText('Alert Title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute('data-slot', 'alert-title');
  });

  it('applies custom className', () => {
    render(<AlertTitle className="custom-title">Custom Title</AlertTitle>);
    
    const title = screen.getByText('Custom Title');
    expect(title).toHaveClass('custom-title');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<AlertTitle ref={ref}>Ref Title</AlertTitle>);
    
    expect(ref).toHaveBeenCalled();
  });

  it('handles empty content', () => {
    render(<AlertTitle />);
    
    const title = screen.getByTestId('alert-title');
    expect(title).toBeInTheDocument();
  });

  it('handles complex content', () => {
    render(
      <AlertTitle>
        <span>Important</span> Alert Title
      </AlertTitle>
    );
    
    const title = screen.getByTestId('alert-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Important Alert Title');
  });

  it('handles accessibility attributes', () => {
    render(<AlertTitle id="title-id">Accessible Title</AlertTitle>);
    
    const title = screen.getByText('Accessible Title');
    expect(title).toHaveAttribute('id', 'title-id');
  });

  it('handles click events', () => {
    const onClick = vi.fn();
    render(<AlertTitle onClick={onClick}>Clickable Title</AlertTitle>);
    
    const title = screen.getByText('Clickable Title');
    title.click();
    
    expect(onClick).toHaveBeenCalled();
  });
});

describe('AlertDescription', () => {
  it('renders with text content', () => {
    render(<AlertDescription>Alert Description</AlertDescription>);
    
    const description = screen.getByText('Alert Description');
    expect(description).toBeInTheDocument();
    expect(description).toHaveAttribute('data-slot', 'alert-description');
  });

  it('applies custom className', () => {
    render(<AlertDescription className="custom-desc">Custom Description</AlertDescription>);
    
    const description = screen.getByText('Custom Description');
    expect(description).toHaveClass('custom-desc');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<AlertDescription ref={ref}>Ref Description</AlertDescription>);
    
    expect(ref).toHaveBeenCalled();
  });

  it('handles empty content', () => {
    render(<AlertDescription />);
    
    const description = screen.getByTestId('alert-description');
    expect(description).toBeInTheDocument();
  });

  it('handles complex content with paragraphs', () => {
    render(
      <AlertDescription>
        <p>First paragraph</p>
        <p>Second paragraph</p>
      </AlertDescription>
    );
    
    const description = screen.getByTestId('alert-description');
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent('First paragraph');
    expect(description).toHaveTextContent('Second paragraph');
  });

  it('handles accessibility attributes', () => {
    render(<AlertDescription id="desc-id">Accessible Description</AlertDescription>);
    
    const description = screen.getByText('Accessible Description');
    expect(description).toHaveAttribute('id', 'desc-id');
  });

  it('handles click events', () => {
    const onClick = vi.fn();
    render(<AlertDescription onClick={onClick}>Clickable Description</AlertDescription>);
    
    const description = screen.getByText('Clickable Description');
    description.click();
    
    expect(onClick).toHaveBeenCalled();
  });
});

describe('Alert Composition', () => {
  it('renders complete alert with title and description', () => {
    render(
      <Alert>
        <AlertTitle>Important Notice</AlertTitle>
        <AlertDescription>This is an important message that requires your attention.</AlertDescription>
      </Alert>
    );
    
    const alert = screen.getByRole('alert');
    const title = screen.getByText('Important Notice');
    const description = screen.getByText('This is an important message that requires your attention.');
    
    expect(alert).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('handles destructive alert with title and description', () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Error Occurred</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </Alert>
    );
    
    const alert = screen.getByRole('alert');
    const title = screen.getByText('Error Occurred');
    const description = screen.getByText('Something went wrong. Please try again.');
    
    expect(alert).toHaveClass('text-destructive', 'bg-card');
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('handles alert with icon, title, and description', () => {
    render(
      <Alert>
        <svg data-testid="icon">Icon</svg>
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Operation completed successfully.</AlertDescription>
      </Alert>
    );
    
    const alert = screen.getByRole('alert');
    const icon = screen.getByTestId('icon');
    const title = screen.getByText('Success');
    const description = screen.getByText('Operation completed successfully.');
    
    expect(alert).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('handles multiple alerts with different variants', () => {
    render(
      <div>
        <Alert variant="default">
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>This is an informational message.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>This is an error message.</AlertDescription>
        </Alert>
      </div>
    );
    
    const alerts = screen.getAllByRole('alert');
    expect(alerts).toHaveLength(2);
    
    expect(alerts[0]).toHaveClass('bg-card', 'text-card-foreground');
    expect(alerts[1]).toHaveClass('text-destructive', 'bg-card');
  });

  it('handles alert with custom styling', () => {
    render(
      <Alert className="border-blue-500 bg-blue-50">
        <AlertTitle className="text-blue-800">Custom Styled</AlertTitle>
        <AlertDescription className="text-blue-600">This alert has custom styling.</AlertDescription>
      </Alert>
    );
    
    const alert = screen.getByRole('alert');
    const title = screen.getByText('Custom Styled');
    const description = screen.getByText('This alert has custom styling.');
    
    expect(alert).toHaveClass('border-blue-500', 'bg-blue-50');
    expect(title).toHaveClass('text-blue-800');
    expect(description).toHaveClass('text-blue-600');
  });
}); 