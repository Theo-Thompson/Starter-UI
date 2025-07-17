import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@/test/utils';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '../card';

describe('Card', () => {
  it('renders with default props', () => {
    render(<Card>Card content</Card>);
    const card = screen.getByText('Card content');
    expect(card).toBeInTheDocument();
    expect(card.closest('[data-slot="card"]')).toHaveClass('rounded-lg', 'border', 'bg-card');
  });

  it('applies custom className', () => {
    render(<Card className="custom-card">Custom card</Card>);
    expect(screen.getByText('Custom card').closest('[data-slot="card"]')).toHaveClass('custom-card');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Card ref={ref}>Ref test</Card>);
    expect(ref).toHaveBeenCalled();
  });
});

describe('CardHeader', () => {
  it('renders with default props', () => {
    render(<CardHeader>Header content</CardHeader>);
    const header = screen.getByText('Header content');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('flex', 'flex-col', 'space-y-1.5', 'p-6');
  });

  it('applies custom className', () => {
    render(<CardHeader className="custom-header">Custom header</CardHeader>);
    expect(screen.getByText('Custom header')).toHaveClass('custom-header');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<CardHeader ref={ref}>Ref test</CardHeader>);
    expect(ref).toHaveBeenCalled();
  });
});

describe('CardTitle', () => {
  it('renders with default props', () => {
    render(<CardTitle>Card Title</CardTitle>);
    const title = screen.getByText('Card Title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-2xl', 'font-semibold', 'leading-none', 'tracking-tight');
  });

  it('renders as h3 by default', () => {
    render(<CardTitle>Card Title</CardTitle>);
    const title = screen.getByRole('heading', { level: 3, name: 'Card Title' });
    expect(title).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<CardTitle className="custom-title">Custom title</CardTitle>);
    expect(screen.getByText('Custom title')).toHaveClass('custom-title');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<CardTitle ref={ref}>Ref test</CardTitle>);
    expect(ref).toHaveBeenCalled();
  });
});

describe('CardDescription', () => {
  it('renders with default props', () => {
    render(<CardDescription>Card description</CardDescription>);
    const description = screen.getByText('Card description');
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('text-sm', 'text-muted-foreground');
  });

  it('applies custom className', () => {
    render(<CardDescription className="custom-desc">Custom description</CardDescription>);
    expect(screen.getByText('Custom description')).toHaveClass('custom-desc');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<CardDescription ref={ref}>Ref test</CardDescription>);
    expect(ref).toHaveBeenCalled();
  });
});

describe('CardContent', () => {
  it('renders with default props', () => {
    render(<CardContent>Content</CardContent>);
    const content = screen.getByText('Content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('p-6', 'pt-0');
  });

  it('applies custom className', () => {
    render(<CardContent className="custom-content">Custom content</CardContent>);
    expect(screen.getByText('Custom content')).toHaveClass('custom-content');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<CardContent ref={ref}>Ref test</CardContent>);
    expect(ref).toHaveBeenCalled();
  });
});

describe('CardFooter', () => {
  it('renders with default props', () => {
    render(<CardFooter>Footer content</CardFooter>);
    const footer = screen.getByText('Footer content');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('flex', 'items-center', 'p-6', 'pt-0');
  });

  it('applies custom className', () => {
    render(<CardFooter className="custom-footer">Custom footer</CardFooter>);
    expect(screen.getByText('Custom footer')).toHaveClass('custom-footer');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<CardFooter ref={ref}>Ref test</CardFooter>);
    expect(ref).toHaveBeenCalled();
  });
});

describe('Card Composition', () => {
  it('renders a complete card with all components', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
          <CardDescription>This is a test card</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the main content of the card.</p>
        </CardContent>
        <CardFooter>
          <button>Action</button>
        </CardFooter>
      </Card>
    );

    expect(screen.getByRole('heading', { name: 'Test Card' })).toBeInTheDocument();
    expect(screen.getByText('This is a test card')).toBeInTheDocument();
    expect(screen.getByText('This is the main content of the card.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
  });

  it('maintains proper semantic structure', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Semantic Test</CardTitle>
          <CardDescription>Testing semantic structure</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content</p>
        </CardContent>
      </Card>
    );

    const card = screen.getByText('Semantic Test').closest('[class*="rounded-lg"]');
    expect(card).toBeInTheDocument();
    
    const header = screen.getByText('Semantic Test').closest('[class*="flex flex-col"]');
    expect(header).toBeInTheDocument();
    
    const content = screen.getByText('Content').closest('[class*="p-6 pt-0"]');
    expect(content).toBeInTheDocument();
  });

  it('handles nested content properly', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Nested Content</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <h4>Subheading</h4>
            <p>Paragraph content</p>
            <ul>
              <li>List item 1</li>
              <li>List item 2</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    );

    expect(screen.getByRole('heading', { name: 'Nested Content' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Subheading' })).toBeInTheDocument();
    expect(screen.getByText('Paragraph content')).toBeInTheDocument();
    expect(screen.getByText('List item 1')).toBeInTheDocument();
    expect(screen.getByText('List item 2')).toBeInTheDocument();
  });
}); 