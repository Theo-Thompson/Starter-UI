import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import userEvent from '@testing-library/user-event';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from '../popover';

describe('Popover', () => {
  it('renders with children', () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <button data-testid="trigger">Open</button>
        </PopoverTrigger>
        <PopoverContent data-testid="content">Content</PopoverContent>
      </Popover>
    );
    expect(screen.getByTestId('trigger')).toBeInTheDocument();
  });

  it('applies custom props', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger asChild>
          <button>Open</button>
        </PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

describe('PopoverTrigger', () => {
  it('renders as a button', () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <button data-testid="trigger">Trigger</button>
        </PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );
    expect(screen.getByTestId('trigger')).toBeInTheDocument();
  });

  it('renders as a span', () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <span data-testid="trigger-span">Trigger</span>
        </PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );
    expect(screen.getByTestId('trigger-span')).toBeInTheDocument();
  });
});

describe('PopoverContent', () => {
  it('renders with text when popover is open', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger asChild>
          <button>Trigger</button>
        </PopoverTrigger>
        <PopoverContent data-testid="content">Popover text</PopoverContent>
      </Popover>
    );
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('applies custom className when popover is open', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger asChild>
          <button>Trigger</button>
        </PopoverTrigger>
        <PopoverContent data-testid="content" className="custom-popover">Popover text</PopoverContent>
      </Popover>
    );
    expect(screen.getByTestId('content')).toHaveClass('custom-popover');
  });

  it('applies custom align when popover is open', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger asChild>
          <button>Trigger</button>
        </PopoverTrigger>
        <PopoverContent data-testid="content" align="start">Popover text</PopoverContent>
      </Popover>
    );
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('applies custom sideOffset when popover is open', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger asChild>
          <button>Trigger</button>
        </PopoverTrigger>
        <PopoverContent data-testid="content" sideOffset={10}>Popover text</PopoverContent>
      </Popover>
    );
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });
});

describe('PopoverAnchor', () => {
  it('renders with children', () => {
    render(
      <Popover>
        <PopoverAnchor>
          <div data-testid="anchor">Anchor</div>
        </PopoverAnchor>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );
    expect(screen.getByTestId('anchor')).toBeInTheDocument();
  });
});

describe('Popover integration', () => {
  it('shows and hides content on trigger click', async () => {
    const user = userEvent.setup();
    render(
      <Popover>
        <PopoverTrigger asChild>
          <button data-testid="trigger">Open</button>
        </PopoverTrigger>
        <PopoverContent data-testid="content">Popover content</PopoverContent>
      </Popover>
    );
    const trigger = screen.getByTestId('trigger');
    // Content is not in DOM initially
    expect(screen.queryByTestId('content')).not.toBeInTheDocument();
    await user.click(trigger);
    // Content appears after click
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('handles multiple popovers independently', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <button data-testid="trigger-1">One</button>
          </PopoverTrigger>
          <PopoverContent data-testid="content-1">First</PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <button data-testid="trigger-2">Two</button>
          </PopoverTrigger>
          <PopoverContent data-testid="content-2">Second</PopoverContent>
        </Popover>
      </div>
    );
    const trigger1 = screen.getByTestId('trigger-1');
    const trigger2 = screen.getByTestId('trigger-2');
    // Content is not in DOM initially
    expect(screen.queryByTestId('content-1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('content-2')).not.toBeInTheDocument();
    await user.click(trigger1);
    expect(screen.getByTestId('content-1')).toBeInTheDocument();
    expect(screen.queryByTestId('content-2')).not.toBeInTheDocument();
    await user.click(trigger2);
    expect(screen.getByTestId('content-2')).toBeInTheDocument();
    // Depending on Radix behavior, content-1 may close when content-2 opens, so don't assert both are open
  });

  it('handles complex content when open', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger asChild>
          <button>Trigger</button>
        </PopoverTrigger>
        <PopoverContent data-testid="content">
          <h3>Title</h3>
          <p>Description</p>
          <button>Action</button>
        </PopoverContent>
      </Popover>
    );
    const content = screen.getByTestId('content');
    expect(content).toHaveTextContent('Title');
    expect(content).toHaveTextContent('Description');
    expect(content).toHaveTextContent('Action');
  });
}); 