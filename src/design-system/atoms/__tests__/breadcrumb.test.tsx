import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '../breadcrumb';

describe('Breadcrumb', () => {
  it('renders with default props', () => {
    render(<Breadcrumb />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute('aria-label', 'breadcrumb');
    expect(nav).toHaveAttribute('data-slot', 'breadcrumb');
  });

  it('forwards additional props', () => {
    render(<Breadcrumb data-testid="breadcrumb" className="custom-class" />);
    const nav = screen.getByTestId('breadcrumb');
    expect(nav).toHaveClass('custom-class');
  });
});

describe('BreadcrumbList', () => {
  it('renders with default props', () => {
    render(<BreadcrumbList />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list).toHaveAttribute('data-slot', 'breadcrumb-list');
    expect(list).toHaveClass('text-muted-foreground', 'flex', 'flex-wrap', 'items-center', 'gap-1.5', 'text-sm', 'break-words', 'sm:gap-2.5');
  });

  it('applies custom className', () => {
    render(<BreadcrumbList className="custom-class" />);
    const list = screen.getByRole('list');
    expect(list).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(<BreadcrumbList data-testid="list" />);
    const list = screen.getByTestId('list');
    expect(list).toBeInTheDocument();
  });
});

describe('BreadcrumbItem', () => {
  it('renders with default props', () => {
    render(<BreadcrumbItem />);
    const item = screen.getByRole('listitem');
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute('data-slot', 'breadcrumb-item');
    expect(item).toHaveClass('inline-flex', 'items-center', 'gap-1.5');
  });

  it('applies custom className', () => {
    render(<BreadcrumbItem className="custom-class" />);
    const item = screen.getByRole('listitem');
    expect(item).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(<BreadcrumbItem data-testid="item" />);
    const item = screen.getByTestId('item');
    expect(item).toBeInTheDocument();
  });
});

describe('BreadcrumbLink', () => {
  it('renders as anchor by default', () => {
    render(<BreadcrumbLink href="/test" />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
    expect(link).toHaveAttribute('data-slot', 'breadcrumb-link');
    expect(link).toHaveClass('hover:text-foreground', 'transition-colors');
  });

  it('applies custom className', () => {
    render(<BreadcrumbLink href="/test" className="custom-class" />);
    const link = screen.getByRole('link');
    expect(link).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(<BreadcrumbLink href="/test" data-testid="link" />);
    const link = screen.getByTestId('link');
    expect(link).toBeInTheDocument();
  });

  it('renders as child component when asChild is true', () => {
    render(
      <BreadcrumbLink asChild>
        <button type="button">Click me</button>
      </BreadcrumbLink>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
    expect(button).toHaveAttribute('data-slot', 'breadcrumb-link');
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<BreadcrumbLink href="/test" onClick={handleClick}>Test Link</BreadcrumbLink>);
    
    const link = screen.getByRole('link');
    await user.click(link);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('BreadcrumbPage', () => {
  it('renders with default props', () => {
    render(<BreadcrumbPage>Current Page</BreadcrumbPage>);
    const page = screen.getByText('Current Page');
    expect(page).toBeInTheDocument();
    expect(page).toHaveAttribute('data-slot', 'breadcrumb-page');
    expect(page).toHaveAttribute('role', 'link');
    expect(page).toHaveAttribute('aria-disabled', 'true');
    expect(page).toHaveAttribute('aria-current', 'page');
    expect(page).toHaveClass('text-foreground', 'font-normal');
  });

  it('applies custom className', () => {
    render(<BreadcrumbPage className="custom-class">Current Page</BreadcrumbPage>);
    const page = screen.getByText('Current Page');
    expect(page).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(<BreadcrumbPage data-testid="page">Current Page</BreadcrumbPage>);
    const page = screen.getByTestId('page');
    expect(page).toBeInTheDocument();
  });
});

describe('BreadcrumbSeparator', () => {
  it('renders with default chevron icon', () => {
    render(<BreadcrumbSeparator data-testid="separator" />);
    const separator = screen.getByTestId('separator');
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute('data-slot', 'breadcrumb-separator');
    expect(separator).toHaveAttribute('aria-hidden', 'true');
    expect(separator).toHaveAttribute('role', 'presentation');
    expect(separator).toHaveClass('[&>svg]:size-3.5');
    
    // Check for chevron icon
    const svg = separator.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders custom children', () => {
    render(<BreadcrumbSeparator data-testid="separator">Custom Separator</BreadcrumbSeparator>);
    const separator = screen.getByTestId('separator');
    expect(separator).toHaveTextContent('Custom Separator');
  });

  it('applies custom className', () => {
    render(<BreadcrumbSeparator data-testid="separator" className="custom-class" />);
    const separator = screen.getByTestId('separator');
    expect(separator).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(<BreadcrumbSeparator data-testid="separator" />);
    const separator = screen.getByTestId('separator');
    expect(separator).toBeInTheDocument();
  });
});

describe('BreadcrumbEllipsis', () => {
  it('renders with default props', () => {
    render(<BreadcrumbEllipsis data-testid="ellipsis" />);
    const ellipsis = screen.getByTestId('ellipsis');
    expect(ellipsis).toBeInTheDocument();
    expect(ellipsis).toHaveAttribute('data-slot', 'breadcrumb-ellipsis');
    expect(ellipsis).toHaveAttribute('aria-hidden', 'true');
    expect(ellipsis).toHaveAttribute('role', 'presentation');
    expect(ellipsis).toHaveClass('flex', 'size-9', 'items-center', 'justify-center');
    
    // Check for more horizontal icon
    const svg = ellipsis.querySelector('svg');
    expect(svg).toBeInTheDocument();
    
    // Check for screen reader text
    const srText = screen.getByText('More');
    expect(srText).toHaveClass('sr-only');
  });

  it('applies custom className', () => {
    render(<BreadcrumbEllipsis data-testid="ellipsis" className="custom-class" />);
    const ellipsis = screen.getByTestId('ellipsis');
    expect(ellipsis).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(<BreadcrumbEllipsis data-testid="ellipsis" />);
    const ellipsis = screen.getByTestId('ellipsis');
    expect(ellipsis).toBeInTheDocument();
  });
});

describe('Breadcrumb Composition', () => {
  it('renders a complete breadcrumb navigation', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current Product</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    
    // Get actual anchor links (not the current page which has role="link" but is a span)
    const anchorLinks = screen.getAllByRole('link').filter(link => link.tagName === 'A');
    expect(anchorLinks).toHaveLength(2);
    expect(anchorLinks[0]).toHaveTextContent('Home');
    expect(anchorLinks[1]).toHaveTextContent('Products');
    
    const currentPage = screen.getByText('Current Product');
    expect(currentPage).toHaveAttribute('aria-current', 'page');
    
    // Check for separators using data-slot instead of role
    const separators = document.querySelectorAll('[data-slot="breadcrumb-separator"]');
    expect(separators).toHaveLength(2);
  });

  it('handles complex breadcrumb with ellipsis', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    
    const currentPage = screen.getByText('Current Page');
    expect(currentPage).toBeInTheDocument();
    
    const moreText = screen.getByText('More');
    expect(moreText).toBeInTheDocument();
  });
}); 