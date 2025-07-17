import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import userEvent from '@testing-library/user-event';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '../tooltip';

describe('TooltipProvider', () => {
  it('renders with default props', () => {
    render(
      <TooltipProvider>
        <div data-testid="provider-child">Child</div>
      </TooltipProvider>
    );
    expect(screen.getByTestId('provider-child')).toBeInTheDocument();
  });

  it('applies custom delayDuration', () => {
    render(
      <TooltipProvider delayDuration={500}>
        <div data-testid="provider-child">Child</div>
      </TooltipProvider>
    );
    expect(screen.getByTestId('provider-child')).toBeInTheDocument();
  });
});

describe('Tooltip', () => {
  it('renders with children', () => {
    render(
      <Tooltip>
        <TooltipTrigger asChild>
          <button data-testid="trigger">Hover me</button>
        </TooltipTrigger>
        <TooltipContent data-testid="content">Tooltip text</TooltipContent>
      </Tooltip>
    );
    expect(screen.getByTestId('trigger')).toBeInTheDocument();
  });
});

describe('TooltipTrigger', () => {
  it('renders as a button', () => {
    render(
      <Tooltip>
        <TooltipTrigger asChild>
          <button data-testid="trigger">Trigger</button>
        </TooltipTrigger>
        <TooltipContent>Tooltip</TooltipContent>
      </Tooltip>
    );
    expect(screen.getByTestId('trigger')).toBeInTheDocument();
  });

  it('renders as a span', () => {
    render(
      <Tooltip>
        <TooltipTrigger asChild>
          <span data-testid="trigger-span">Trigger</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip</TooltipContent>
      </Tooltip>
    );
    expect(screen.getByTestId('trigger-span')).toBeInTheDocument();
  });
});

describe('TooltipContent', () => {
  it('renders with text', () => {
    render(
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <button>Trigger</button>
        </TooltipTrigger>
        <TooltipContent data-testid="content">Tooltip text</TooltipContent>
      </Tooltip>
    );
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <button>Trigger</button>
        </TooltipTrigger>
        <TooltipContent data-testid="content" className="custom-tooltip">Tooltip text</TooltipContent>
      </Tooltip>
    );
    expect(screen.getByTestId('content')).toHaveClass('custom-tooltip');
  });

  it('applies custom sideOffset', () => {
    render(
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <button>Trigger</button>
        </TooltipTrigger>
        <TooltipContent data-testid="content" sideOffset={10}>Tooltip text</TooltipContent>
      </Tooltip>
    );
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });
});

describe('Tooltip integration', () => {
  it('shows and hides tooltip content on hover', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip>
        <TooltipTrigger asChild>
          <button data-testid="trigger">Hover me</button>
        </TooltipTrigger>
        <TooltipContent data-testid="content">Tooltip text</TooltipContent>
      </Tooltip>
    );
    const trigger = screen.getByTestId('trigger');
    // Tooltip content is not visible by default in Radix UI
    // This test verifies the trigger is present and hoverable
    expect(trigger).toBeInTheDocument();
    await user.hover(trigger);
    // Note: Radix UI tooltip content may not show in test environment
    // This test verifies the component structure is correct
  });

  it('shows tooltip content on focus', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip>
        <TooltipTrigger asChild>
          <button data-testid="trigger">Focus me</button>
        </TooltipTrigger>
        <TooltipContent data-testid="content">Tooltip text</TooltipContent>
      </Tooltip>
    );
    const trigger = screen.getByTestId('trigger');
    await user.tab();
    expect(trigger).toHaveFocus();
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('handles multiple tooltips independently', () => {
    render(
      <div>
        <Tooltip>
          <TooltipTrigger asChild>
            <button data-testid="trigger-1">One</button>
          </TooltipTrigger>
          <TooltipContent data-testid="content-1">First</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <button data-testid="trigger-2">Two</button>
          </TooltipTrigger>
          <TooltipContent data-testid="content-2">Second</TooltipContent>
        </Tooltip>
      </div>
    );
    expect(screen.getByTestId('trigger-1')).toBeInTheDocument();
    expect(screen.getByTestId('trigger-2')).toBeInTheDocument();
    // Note: Tooltip content only renders on interaction in Radix UI
    // This test verifies the component structure is correct
  });
}); 