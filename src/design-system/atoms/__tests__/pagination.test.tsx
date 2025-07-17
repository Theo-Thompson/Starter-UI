
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '../pagination';

describe('Pagination', () => {
  it('renders with default props', () => {
    render(<Pagination data-testid="pagination" />);
    const pagination = screen.getByTestId('pagination');
    expect(pagination).toBeInTheDocument();
    expect(pagination.tagName).toBe('NAV');
    expect(pagination).toHaveAttribute('role', 'navigation');
    expect(pagination).toHaveAttribute('aria-label', 'pagination');
    expect(pagination).toHaveAttribute('data-slot', 'pagination');
  });

  it('applies custom className', () => {
    render(<Pagination className="custom-class" data-testid="pagination" />);
    const pagination = screen.getByTestId('pagination');
    expect(pagination).toHaveClass('custom-class');
    expect(pagination).toHaveClass('mx-auto', 'flex', 'w-full', 'justify-center');
  });

  it('forwards additional props', () => {
    const handleClick = vi.fn();
    render(
      <Pagination 
        onClick={handleClick} 
        data-testid="pagination"
        data-custom="value"
      />
    );
    const pagination = screen.getByTestId('pagination');
    fireEvent.click(pagination);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(pagination).toHaveAttribute('data-custom', 'value');
  });
});

describe('PaginationContent', () => {
  it('renders with default props', () => {
    render(<PaginationContent data-testid="content" />);
    const content = screen.getByTestId('content');
    expect(content).toBeInTheDocument();
    expect(content.tagName).toBe('UL');
    expect(content).toHaveAttribute('data-slot', 'pagination-content');
  });

  it('applies custom className', () => {
    render(<PaginationContent className="custom-class" data-testid="content" />);
    const content = screen.getByTestId('content');
    expect(content).toHaveClass('custom-class');
    expect(content).toHaveClass('flex', 'flex-row', 'items-center', 'gap-1');
  });

  it('forwards additional props', () => {
    const handleClick = vi.fn();
    render(
      <PaginationContent 
        onClick={handleClick} 
        data-testid="content"
        data-custom="value"
      />
    );
    const content = screen.getByTestId('content');
    fireEvent.click(content);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(content).toHaveAttribute('data-custom', 'value');
  });
});

describe('PaginationItem', () => {
  it('renders with default props', () => {
    render(<PaginationItem data-testid="item" />);
    const item = screen.getByTestId('item');
    expect(item).toBeInTheDocument();
    expect(item.tagName).toBe('LI');
    expect(item).toHaveAttribute('data-slot', 'pagination-item');
  });

  it('forwards additional props', () => {
    const handleClick = vi.fn();
    render(
      <PaginationItem 
        onClick={handleClick} 
        data-testid="item"
        data-custom="value"
      />
    );
    const item = screen.getByTestId('item');
    fireEvent.click(item);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(item).toHaveAttribute('data-custom', 'value');
  });
});

describe('PaginationLink', () => {
  it('renders with default props', () => {
    render(<PaginationLink href="#" data-testid="link" />);
    const link = screen.getByTestId('link');
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('data-slot', 'pagination-link');
    expect(link).not.toHaveAttribute('data-active');
  });

  it('renders as active when isActive is true', () => {
    render(<PaginationLink href="#" isActive data-testid="link" />);
    const link = screen.getByTestId('link');
    expect(link).toHaveAttribute('aria-current', 'page');
    expect(link).toHaveAttribute('data-active', 'true');
  });

  it('applies custom className', () => {
    render(
      <PaginationLink 
        href="#" 
        className="custom-class" 
        data-testid="link" 
      />
    );
    const link = screen.getByTestId('link');
    expect(link).toHaveClass('custom-class');
  });

  it('supports different sizes', () => {
    const { rerender } = render(
      <PaginationLink href="#" size="default" data-testid="link" />
    );
    let link = screen.getByTestId('link');
    expect(link).toHaveClass('h-9', 'px-4', 'py-2');

    rerender(<PaginationLink href="#" size="sm" data-testid="link" />);
    link = screen.getByTestId('link');
    expect(link).toHaveClass('h-8', 'rounded-md', 'px-3');

    rerender(<PaginationLink href="#" size="lg" data-testid="link" />);
    link = screen.getByTestId('link');
    expect(link).toHaveClass('h-10', 'px-6');

    rerender(<PaginationLink href="#" size="icon" data-testid="link" />);
    link = screen.getByTestId('link');
    expect(link).toHaveClass('size-9');
  });

  it('forwards additional props', () => {
    const handleClick = vi.fn();
    render(
      <PaginationLink 
        href="#" 
        onClick={handleClick} 
        data-testid="link"
        data-custom="value"
      />
    );
    const link = screen.getByTestId('link');
    fireEvent.click(link);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(link).toHaveAttribute('data-custom', 'value');
  });
});

describe('PaginationPrevious', () => {
  it('renders with default props', () => {
    render(<PaginationPrevious href="#" data-testid="previous" />);
    const previous = screen.getByTestId('previous');
    expect(previous).toBeInTheDocument();
    expect(previous).toHaveAttribute('aria-label', 'Go to previous page');
    expect(previous).toHaveClass('gap-1', 'px-2.5', 'sm:pl-2.5');
  });

  it('contains chevron left icon and text', () => {
    render(<PaginationPrevious href="#" data-testid="previous" />);
    const previous = screen.getByTestId('previous');
    expect(previous).toHaveTextContent('Previous');
    
    // Check for chevron icon (lucide-react icon)
    const icon = previous.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <PaginationPrevious 
        href="#" 
        className="custom-class" 
        data-testid="previous" 
      />
    );
    const previous = screen.getByTestId('previous');
    expect(previous).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    const handleClick = vi.fn();
    render(
      <PaginationPrevious 
        href="#" 
        onClick={handleClick} 
        data-testid="previous"
        data-custom="value"
      />
    );
    const previous = screen.getByTestId('previous');
    fireEvent.click(previous);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(previous).toHaveAttribute('data-custom', 'value');
  });
});

describe('PaginationNext', () => {
  it('renders with default props', () => {
    render(<PaginationNext href="#" data-testid="next" />);
    const next = screen.getByTestId('next');
    expect(next).toBeInTheDocument();
    expect(next).toHaveAttribute('aria-label', 'Go to next page');
    expect(next).toHaveClass('gap-1', 'px-2.5', 'sm:pr-2.5');
  });

  it('contains chevron right icon and text', () => {
    render(<PaginationNext href="#" data-testid="next" />);
    const next = screen.getByTestId('next');
    expect(next).toHaveTextContent('Next');
    
    // Check for chevron icon (lucide-react icon)
    const icon = next.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <PaginationNext 
        href="#" 
        className="custom-class" 
        data-testid="next" 
      />
    );
    const next = screen.getByTestId('next');
    expect(next).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    const handleClick = vi.fn();
    render(
      <PaginationNext 
        href="#" 
        onClick={handleClick} 
        data-testid="next"
        data-custom="value"
      />
    );
    const next = screen.getByTestId('next');
    fireEvent.click(next);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(next).toHaveAttribute('data-custom', 'value');
  });
});

describe('PaginationEllipsis', () => {
  it('renders with default props', () => {
    render(<PaginationEllipsis data-testid="ellipsis" />);
    const ellipsis = screen.getByTestId('ellipsis');
    expect(ellipsis).toBeInTheDocument();
    expect(ellipsis.tagName).toBe('SPAN');
    expect(ellipsis).toHaveAttribute('aria-hidden', 'true');
    expect(ellipsis).toHaveAttribute('data-slot', 'pagination-ellipsis');
    expect(ellipsis).toHaveClass('flex', 'size-9', 'items-center', 'justify-center');
  });

  it('contains more horizontal icon and screen reader text', () => {
    render(<PaginationEllipsis data-testid="ellipsis" />);
    const ellipsis = screen.getByTestId('ellipsis');
    expect(ellipsis).toHaveTextContent('More pages');
    
    // Check for more horizontal icon (lucide-react icon)
    const icon = ellipsis.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <PaginationEllipsis 
        className="custom-class" 
        data-testid="ellipsis" 
      />
    );
    const ellipsis = screen.getByTestId('ellipsis');
    expect(ellipsis).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    const handleClick = vi.fn();
    render(
      <PaginationEllipsis 
        onClick={handleClick} 
        data-testid="ellipsis"
        data-custom="value"
      />
    );
    const ellipsis = screen.getByTestId('ellipsis');
    fireEvent.click(ellipsis);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(ellipsis).toHaveAttribute('data-custom', 'value');
  });
});

describe('Pagination Composition', () => {
  it('renders a complete pagination component', () => {
    render(
      <Pagination data-testid="pagination">
        <PaginationContent data-testid="content">
          <PaginationItem>
            <PaginationPrevious href="#" data-testid="previous" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" data-testid="link-1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive data-testid="link-2">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis data-testid="ellipsis" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" data-testid="link-10">10</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" data-testid="next" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
    expect(screen.getByTestId('content')).toBeInTheDocument();
    expect(screen.getByTestId('previous')).toBeInTheDocument();
    expect(screen.getByTestId('link-1')).toBeInTheDocument();
    expect(screen.getByTestId('link-2')).toBeInTheDocument();
    expect(screen.getByTestId('ellipsis')).toBeInTheDocument();
    expect(screen.getByTestId('link-10')).toBeInTheDocument();
    expect(screen.getByTestId('next')).toBeInTheDocument();
  });

  it('handles click events on pagination links', () => {
    const handleClick = vi.fn();
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink 
              href="#" 
              onClick={handleClick}
              data-testid="link"
            >
              1
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );

    const link = screen.getByTestId('link');
    fireEvent.click(link);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
}); 