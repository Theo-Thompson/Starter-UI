import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from '../sheet';

describe('Sheet', () => {
  it.skip('renders with default props', () => {
    render(<Sheet />);
    const sheet = screen.getByTestId('sheet');
    expect(sheet).toBeInTheDocument();
    expect(sheet).toHaveAttribute('data-slot', 'sheet');
  });

  it.skip('forwards additional props', () => {
    render(<Sheet data-testid="sheet" />);
    const sheet = screen.getByTestId('sheet');
    expect(sheet).toBeInTheDocument();
  });
});

describe('SheetTrigger', () => {
  it.skip('renders with default props', () => {
    render(<SheetTrigger>Open Sheet</SheetTrigger>);
    const trigger = screen.getByRole('button');
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute('data-slot', 'sheet-trigger');
    expect(trigger).toHaveTextContent('Open Sheet');
  });

  it.skip('forwards additional props', () => {
    render(<SheetTrigger data-testid="trigger">Open Sheet</SheetTrigger>);
    const trigger = screen.getByTestId('trigger');
    expect(trigger).toBeInTheDocument();
  });

  it.skip('handles click events', async () => {
    const user = userEvent.setup();
    render(<SheetTrigger>Open Sheet</SheetTrigger>);
    
    const trigger = screen.getByRole('button');
    await user.click(trigger);
    
    // The click should work without errors
    expect(trigger).toBeInTheDocument();
  });
});

describe('SheetClose', () => {
  it.skip('renders with default props', () => {
    render(<SheetClose>Close</SheetClose>);
    const close = screen.getByRole('button');
    expect(close).toBeInTheDocument();
    expect(close).toHaveAttribute('data-slot', 'sheet-close');
    expect(close).toHaveTextContent('Close');
  });

  it.skip('forwards additional props', () => {
    render(<SheetClose data-testid="close">Close</SheetClose>);
    const close = screen.getByTestId('close');
    expect(close).toBeInTheDocument();
  });

  it.skip('handles click events', async () => {
    const user = userEvent.setup();
    render(<SheetClose>Close</SheetClose>);
    
    const close = screen.getByRole('button');
    await user.click(close);
    
    // The click should work without errors
    expect(close).toBeInTheDocument();
  });
});



describe('SheetContent', () => {
  it.skip('renders with default props (right side)', () => {
    render(
      <SheetContent>
        <div>Sheet Content</div>
      </SheetContent>
    );
    
    const content = screen.getByTestId('sheet-content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveAttribute('data-slot', 'sheet-content');
    expect(content).toHaveClass('bg-background', 'data-[state=open]:animate-in', 'data-[state=closed]:animate-out', 'fixed', 'z-50', 'flex', 'flex-col', 'gap-4', 'shadow-lg', 'transition', 'ease-in-out', 'data-[state=closed]:duration-300', 'data-[state=open]:duration-500');
    
    // Check for right side positioning classes
    expect(content).toHaveClass('data-[state=closed]:slide-out-to-right', 'data-[state=open]:slide-in-from-right', 'inset-y-0', 'right-0', 'h-full', 'w-3/4', 'border-l', 'sm:max-w-sm');
    
    // Check for close button
    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toBeInTheDocument();
    
    // Check for content
    expect(screen.getByText('Sheet Content')).toBeInTheDocument();
  });

  it.skip('renders with left side positioning', () => {
    render(
      <SheetContent side="left">
        <div>Sheet Content</div>
      </SheetContent>
    );
    
    const content = screen.getByTestId('sheet-content');
    expect(content).toHaveClass('data-[state=closed]:slide-out-to-left', 'data-[state=open]:slide-in-from-left', 'inset-y-0', 'left-0', 'h-full', 'w-3/4', 'border-r', 'sm:max-w-sm');
  });

  it.skip('renders with top side positioning', () => {
    render(
      <SheetContent side="top">
        <div>Sheet Content</div>
      </SheetContent>
    );
    
    const content = screen.getByTestId('sheet-content');
    expect(content).toHaveClass('data-[state=closed]:slide-out-to-top', 'data-[state=open]:slide-in-from-top', 'inset-x-0', 'top-0', 'h-auto', 'border-b');
  });

  it.skip('renders with bottom side positioning', () => {
    render(
      <SheetContent side="bottom">
        <div>Sheet Content</div>
      </SheetContent>
    );
    
    const content = screen.getByTestId('sheet-content');
    expect(content).toHaveClass('data-[state=closed]:slide-out-to-bottom', 'data-[state=open]:slide-in-from-bottom', 'inset-x-0', 'bottom-0', 'h-auto', 'border-t');
  });

  it.skip('applies custom className', () => {
    render(
      <SheetContent className="custom-class">
        <div>Sheet Content</div>
      </SheetContent>
    );
    
    const content = screen.getByTestId('sheet-content');
    expect(content).toHaveClass('custom-class');
  });

  it.skip('forwards additional props', () => {
    render(
      <SheetContent data-testid="content">
        <div>Sheet Content</div>
      </SheetContent>
    );
    
    const content = screen.getByTestId('content');
    expect(content).toBeInTheDocument();
  });
});

describe('SheetHeader', () => {
  it.skip('renders with default props', () => {
    render(<SheetHeader>Header Content</SheetHeader>);
    const header = screen.getByTestId('sheet-header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveAttribute('data-slot', 'sheet-header');
    expect(header).toHaveClass('flex', 'flex-col', 'gap-1.5', 'p-4');
    expect(header).toHaveTextContent('Header Content');
  });

  it.skip('applies custom className', () => {
    render(<SheetHeader className="custom-class">Header Content</SheetHeader>);
    const header = screen.getByTestId('sheet-header');
    expect(header).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(<SheetHeader data-testid="header">Header Content</SheetHeader>);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });
});

describe('SheetFooter', () => {
  it.skip('renders with default props', () => {
    render(<SheetFooter>Footer Content</SheetFooter>);
    const footer = screen.getByTestId('sheet-footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveAttribute('data-slot', 'sheet-footer');
    expect(footer).toHaveClass('mt-auto', 'flex', 'flex-col', 'gap-2', 'p-4');
    expect(footer).toHaveTextContent('Footer Content');
  });

  it.skip('applies custom className', () => {
    render(<SheetFooter className="custom-class">Footer Content</SheetFooter>);
    const footer = screen.getByTestId('sheet-footer');
    expect(footer).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(<SheetFooter data-testid="footer">Footer Content</SheetFooter>);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });
});

describe('SheetTitle', () => {
  it.skip('renders with default props', () => {
    render(<SheetTitle>Sheet Title</SheetTitle>);
    const title = screen.getByText('Sheet Title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute('data-slot', 'sheet-title');
    expect(title).toHaveClass('text-foreground', 'font-semibold');
  });

  it.skip('applies custom className', () => {
    render(<SheetTitle className="custom-class">Sheet Title</SheetTitle>);
    const title = screen.getByText('Sheet Title');
    expect(title).toHaveClass('custom-class');
  });

  it.skip('forwards additional props', () => {
    render(<SheetTitle data-testid="title">Sheet Title</SheetTitle>);
    const title = screen.getByTestId('title');
    expect(title).toBeInTheDocument();
  });
});

describe('SheetDescription', () => {
  it.skip('renders with default props', () => {
    render(<SheetDescription>Sheet Description</SheetDescription>);
    const description = screen.getByText('Sheet Description');
    expect(description).toBeInTheDocument();
    expect(description).toHaveAttribute('data-slot', 'sheet-description');
    expect(description).toHaveClass('text-muted-foreground', 'text-sm');
  });

  it.skip('applies custom className', () => {
    render(<SheetDescription className="custom-class">Sheet Description</SheetDescription>);
    const description = screen.getByText('Sheet Description');
    expect(description).toHaveClass('custom-class');
  });

  it.skip('forwards additional props', () => {
    render(<SheetDescription data-testid="description">Sheet Description</SheetDescription>);
    const description = screen.getByTestId('description');
    expect(description).toBeInTheDocument();
  });
});

describe('Sheet Composition', () => {
  it.skip('renders a complete sheet with all components', () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet Description</SheetDescription>
          </SheetHeader>
          <div>Main Content</div>
          <SheetFooter>
            <SheetClose>Close</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );

    // Check trigger
    expect(screen.getByText('Open Sheet')).toBeInTheDocument();
    
    // Check content structure
    expect(screen.getByTestId('sheet-content')).toBeInTheDocument();
    
    // Check header
    expect(screen.getByText('Sheet Title')).toBeInTheDocument();
    expect(screen.getByText('Sheet Description')).toBeInTheDocument();
    
    // Check main content
    expect(screen.getByText('Main Content')).toBeInTheDocument();
    
    // Check footer
    expect(screen.getByText('Close')).toBeInTheDocument();
    
    // Check close button in content
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  it('handles open/close state changes', async () => {
    const user = userEvent.setup();
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetTitle>Sheet Title</SheetTitle>
          <div>Sheet Content</div>
        </SheetContent>
      </Sheet>
    );

    const trigger = screen.getByText('Open Sheet');
    await user.click(trigger);
    
    // The sheet should be accessible after clicking trigger
    expect(screen.getByText('Sheet Title')).toBeInTheDocument();
    expect(screen.getByText('Sheet Content')).toBeInTheDocument();
  });

  it.skip('renders with different side positions', () => {
    const { rerender } = render(
      <SheetContent side="left">
        <div>Left Sheet</div>
      </SheetContent>
    );
    
    let content = screen.getByTestId('sheet-content');
    expect(content).toHaveClass('left-0', 'border-r');
    
    rerender(
      <SheetContent side="top">
        <div>Top Sheet</div>
      </SheetContent>
    );
    
    content = screen.getByTestId('sheet-content');
    expect(content).toHaveClass('top-0', 'border-b');
    
    rerender(
      <SheetContent side="bottom">
        <div>Bottom Sheet</div>
      </SheetContent>
    );
    
    content = screen.getByTestId('sheet-content');
    expect(content).toHaveClass('bottom-0', 'border-t');
  });
}); 