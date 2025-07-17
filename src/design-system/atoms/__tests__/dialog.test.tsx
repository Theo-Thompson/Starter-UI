
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '../dialog';

describe('DialogTrigger', () => {
  it('renders with default props', () => {
    render(
      <Dialog>
        <DialogTrigger data-testid="trigger">Open Dialog</DialogTrigger>
      </Dialog>
    );
    const trigger = screen.getByTestId('trigger');
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute('data-slot', 'dialog-trigger');
    expect(trigger).toHaveTextContent('Open Dialog');
  });

  it('forwards additional props', () => {
    const handleClick = vi.fn();
    render(
      <Dialog>
        <DialogTrigger 
          onClick={handleClick} 
          data-testid="trigger"
          data-custom="value"
        >
          Open Dialog
        </DialogTrigger>
      </Dialog>
    );
    const trigger = screen.getByTestId('trigger');
    fireEvent.click(trigger);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(trigger).toHaveAttribute('data-custom', 'value');
  });
});

describe('DialogClose', () => {
  it('renders with default props', () => {
    render(
      <Dialog>
        <DialogClose data-testid="close">Close</DialogClose>
      </Dialog>
    );
    const close = screen.getByTestId('close');
    expect(close).toBeInTheDocument();
    expect(close).toHaveAttribute('data-slot', 'dialog-close');
    expect(close).toHaveTextContent('Close');
  });

  it('forwards additional props', () => {
    const handleClick = vi.fn();
    render(
      <Dialog>
        <DialogClose 
          onClick={handleClick} 
          data-testid="close"
          data-custom="value"
        >
          Close
        </DialogClose>
      </Dialog>
    );
    const close = screen.getByTestId('close');
    fireEvent.click(close);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(close).toHaveAttribute('data-custom', 'value');
  });
});

describe('DialogOverlay', () => {
  it('renders with default props', () => {
    render(
      <Dialog defaultOpen>
        <DialogOverlay data-testid="overlay" />
      </Dialog>
    );
    const overlay = screen.getByTestId('overlay');
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveAttribute('data-slot', 'dialog-overlay');
    expect(overlay).toHaveClass('fixed', 'inset-0', 'z-50', 'bg-black/50');
  });

  it('applies custom className', () => {
    render(
      <Dialog defaultOpen>
        <DialogOverlay className="custom-class" data-testid="overlay" />
      </Dialog>
    );
    const overlay = screen.getByTestId('overlay');
    expect(overlay).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    const handleClick = vi.fn();
    render(
      <Dialog defaultOpen>
        <DialogOverlay 
          onClick={handleClick} 
          data-testid="overlay"
          data-custom="value"
        />
      </Dialog>
    );
    const overlay = screen.getByTestId('overlay');
    fireEvent.click(overlay);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(overlay).toHaveAttribute('data-custom', 'value');
  });
});

describe('DialogContent', () => {
  it('renders with default props and close button', () => {
    render(
      <Dialog defaultOpen>
        <DialogContent data-testid="content">
          <DialogTitle>Dialog Title</DialogTitle>
          <div>Dialog content</div>
        </DialogContent>
      </Dialog>
    );
    const content = screen.getByTestId('content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveAttribute('data-slot', 'dialog-content');
    expect(content).toHaveClass('bg-background', 'fixed', 'top-[50%]', 'left-[50%]');
    
    // Close button should be present by default
    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });

  it('renders without close button when showCloseButton is false', () => {
    render(
      <Dialog defaultOpen>
        <DialogContent showCloseButton={false} data-testid="content">
          <DialogTitle>Dialog Title</DialogTitle>
          <div>Dialog content</div>
        </DialogContent>
      </Dialog>
    );
    const content = screen.getByTestId('content');
    expect(content).toBeInTheDocument();
    
    // Close button should not be present
    expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Dialog defaultOpen>
        <DialogContent className="custom-class" data-testid="content">
          <DialogTitle>Dialog Title</DialogTitle>
          <div>Dialog content</div>
        </DialogContent>
      </Dialog>
    );
    const content = screen.getByTestId('content');
    expect(content).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    const handleClick = vi.fn();
    render(
      <Dialog defaultOpen>
        <DialogContent 
          onClick={handleClick} 
          data-testid="content"
          data-custom="value"
        >
          <DialogTitle>Dialog Title</DialogTitle>
          <div>Dialog content</div>
        </DialogContent>
      </Dialog>
    );
    const content = screen.getByTestId('content');
    fireEvent.click(content);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(content).toHaveAttribute('data-custom', 'value');
  });
});

describe('DialogHeader', () => {
  it('renders with default props', () => {
    render(<DialogHeader data-testid="header">Header content</DialogHeader>);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveAttribute('data-slot', 'dialog-header');
    expect(header).toHaveClass('flex', 'flex-col', 'gap-2', 'text-center', 'sm:text-left');
    expect(header).toHaveTextContent('Header content');
  });

  it('applies custom className', () => {
    render(<DialogHeader className="custom-class" data-testid="header">Header content</DialogHeader>);
    const header = screen.getByTestId('header');
    expect(header).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    const handleClick = vi.fn();
    render(
      <DialogHeader 
        onClick={handleClick} 
        data-testid="header"
        data-custom="value"
      >
        Header content
      </DialogHeader>
    );
    const header = screen.getByTestId('header');
    fireEvent.click(header);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(header).toHaveAttribute('data-custom', 'value');
  });
});

describe('DialogFooter', () => {
  it('renders with default props', () => {
    render(<DialogFooter data-testid="footer">Footer content</DialogFooter>);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveAttribute('data-slot', 'dialog-footer');
    expect(footer).toHaveClass('flex', 'flex-col-reverse', 'gap-2', 'sm:flex-row', 'sm:justify-end');
    expect(footer).toHaveTextContent('Footer content');
  });

  it('applies custom className', () => {
    render(<DialogFooter className="custom-class" data-testid="footer">Footer content</DialogFooter>);
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    const handleClick = vi.fn();
    render(
      <DialogFooter 
        onClick={handleClick} 
        data-testid="footer"
        data-custom="value"
      >
        Footer content
      </DialogFooter>
    );
    const footer = screen.getByTestId('footer');
    fireEvent.click(footer);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(footer).toHaveAttribute('data-custom', 'value');
  });
});

describe('DialogTitle', () => {
  it('renders with default props', () => {
    render(
      <Dialog>
        <DialogTitle data-testid="title">Dialog Title</DialogTitle>
      </Dialog>
    );
    const title = screen.getByTestId('title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute('data-slot', 'dialog-title');
    expect(title).toHaveClass('text-lg', 'leading-none', 'font-semibold');
    expect(title).toHaveTextContent('Dialog Title');
  });

  it('applies custom className', () => {
    render(
      <Dialog>
        <DialogTitle className="custom-class" data-testid="title">Dialog Title</DialogTitle>
      </Dialog>
    );
    const title = screen.getByTestId('title');
    expect(title).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(
      <Dialog>
        <DialogTitle data-testid="title" data-custom="value">Dialog Title</DialogTitle>
      </Dialog>
    );
    const title = screen.getByTestId('title');
    expect(title).toHaveAttribute('data-custom', 'value');
  });
});

describe('DialogDescription', () => {
  it('renders with default props', () => {
    render(
      <Dialog>
        <DialogDescription data-testid="description">Dialog description</DialogDescription>
      </Dialog>
    );
    const description = screen.getByTestId('description');
    expect(description).toBeInTheDocument();
    expect(description).toHaveAttribute('data-slot', 'dialog-description');
    expect(description).toHaveClass('text-muted-foreground', 'text-sm');
    expect(description).toHaveTextContent('Dialog description');
  });

  it('applies custom className', () => {
    render(
      <Dialog>
        <DialogDescription className="custom-class" data-testid="description">Dialog description</DialogDescription>
      </Dialog>
    );
    const description = screen.getByTestId('description');
    expect(description).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(
      <Dialog>
        <DialogDescription data-testid="description" data-custom="value">Dialog description</DialogDescription>
      </Dialog>
    );
    const description = screen.getByTestId('description');
    expect(description).toHaveAttribute('data-custom', 'value');
  });
});

describe('Dialog Composition', () => {
  it('renders a complete dialog with all components', () => {
    render(
      <Dialog defaultOpen>
        <DialogTrigger data-testid="trigger">Open Dialog</DialogTrigger>
        <DialogContent data-testid="content">
          <DialogHeader data-testid="header">
            <DialogTitle data-testid="title">Dialog Title</DialogTitle>
            <DialogDescription data-testid="description">Dialog description</DialogDescription>
          </DialogHeader>
          <div data-testid="body">Dialog body content</div>
          <DialogFooter data-testid="footer">
            <DialogClose data-testid="close">Cancel</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByTestId('trigger')).toBeInTheDocument();
    expect(screen.getByTestId('content')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('title')).toBeInTheDocument();
    expect(screen.getByTestId('description')).toBeInTheDocument();
    expect(screen.getByTestId('body')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('close')).toBeInTheDocument();
  });

  it('handles open/close state changes', () => {
    const handleOpenChange = vi.fn();
    render(
      <Dialog onOpenChange={handleOpenChange}>
        <DialogTrigger data-testid="trigger">Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogTitle>Dialog Title</DialogTitle>
          <div>Dialog content</div>
        </DialogContent>
      </Dialog>
    );

    const trigger = screen.getByTestId('trigger');
    fireEvent.click(trigger);
    expect(handleOpenChange).toHaveBeenCalledWith(true);
  });
}); 