import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from '../command';

describe('Command', () => {
  it.skip('renders with default props', () => {
    render(<Command />);
    const command = screen.getByTestId('command');
    expect(command).toBeInTheDocument();
    expect(command).toHaveAttribute('data-slot', 'command');
    expect(command).toHaveClass('bg-popover', 'text-popover-foreground', 'flex', 'h-full', 'w-full', 'flex-col', 'overflow-hidden', 'rounded-md');
  });

  it.skip('applies custom className', () => {
    render(<Command className="custom-class" />);
    const command = screen.getByTestId('command');
    expect(command).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(<Command data-testid="command" />);
    const command = screen.getByTestId('command');
    expect(command).toBeInTheDocument();
  });
});

describe('CommandDialog', () => {
  it.skip('renders with default props', () => {
    render(
      <CommandDialog defaultOpen>
        <CommandInput />
        <CommandList>
          <CommandItem>Test Item</CommandItem>
        </CommandList>
      </CommandDialog>
    );
    
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    
    // Check for screen reader only header
    const title = screen.getByText('Command Palette');
    expect(title).toHaveClass('sr-only');
    
    const description = screen.getByText('Search for a command to run...');
    expect(description).toHaveClass('sr-only');
  });

  it.skip('renders with custom title and description', () => {
    render(
      <CommandDialog title="Custom Title" description="Custom Description" defaultOpen>
        <CommandInput />
        <CommandList>
          <CommandItem>Test Item</CommandItem>
        </CommandList>
      </CommandDialog>
    );
    
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom Description')).toBeInTheDocument();
  });

  it.skip('applies custom className', () => {
    render(
      <CommandDialog className="custom-class" defaultOpen>
        <CommandInput />
        <CommandList>
          <CommandItem>Test Item</CommandItem>
        </CommandList>
      </CommandDialog>
    );
    
    const content = screen.getByRole('dialog').querySelector('[data-slot="dialog-content"]');
    expect(content).toHaveClass('custom-class');
  });

  it.skip('renders without close button when showCloseButton is false', () => {
    render(
      <CommandDialog showCloseButton={false} defaultOpen>
        <CommandInput />
        <CommandList>
          <CommandItem>Test Item</CommandItem>
        </CommandList>
      </CommandDialog>
    );
    
    const closeButton = screen.queryByRole('button', { name: /close/i });
    expect(closeButton).not.toBeInTheDocument();
  });

  it.skip('forwards additional props', () => {
    render(
      <CommandDialog data-testid="dialog" defaultOpen>
        <CommandInput />
        <CommandList>
          <CommandItem>Test Item</CommandItem>
        </CommandList>
      </CommandDialog>
    );
    
    const dialog = screen.getByTestId('dialog');
    expect(dialog).toBeInTheDocument();
  });
});

describe('CommandInput', () => {
  it.skip('renders with default props', () => {
    render(
      <Command>
        <CommandInput />
      </Command>
    );
    const wrapper = screen.getByTestId('command-input-wrapper');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveAttribute('data-slot', 'command-input-wrapper');
    expect(wrapper).toHaveClass('flex', 'h-9', 'items-center', 'gap-2', 'border-b', 'px-3');
    
    const input = screen.getByRole('combobox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-slot', 'command-input');
    
    // Check for search icon
    const searchIcon = wrapper.querySelector('svg');
    expect(searchIcon).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Command>
        <CommandInput className="custom-class" />
      </Command>
    );
    const input = screen.getByRole('combobox');
    expect(input).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(
      <Command>
        <CommandInput data-testid="input" placeholder="Search..." />
      </Command>
    );
    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Search...');
  });

  it('handles input changes', async () => {
    const user = userEvent.setup();
    render(
      <Command>
        <CommandInput />
      </Command>
    );
    
    const input = screen.getByRole('combobox');
    await user.type(input, 'test');
    
    expect(input).toHaveValue('test');
  });
});

describe('CommandList', () => {
  it.skip('renders with default props', () => {
    render(
      <Command>
        <CommandList>
          <CommandItem>Test Item</CommandItem>
        </CommandList>
      </Command>
    );
    
    const list = screen.getByRole('listbox');
    expect(list).toBeInTheDocument();
    expect(list).toHaveAttribute('data-slot', 'command-list');
    expect(list).toHaveClass('max-h-[300px]', 'scroll-py-1', 'overflow-x-hidden', 'overflow-y-auto');
  });

  it.skip('applies custom className', () => {
    render(
      <Command>
        <CommandList className="custom-class">
          <CommandItem>Test Item</CommandItem>
        </CommandList>
      </Command>
    );
    
    const list = screen.getByRole('listbox');
    expect(list).toHaveClass('custom-class');
  });

  it.skip('forwards additional props', () => {
    render(
      <Command>
        <CommandList data-testid="list">
          <CommandItem>Test Item</CommandItem>
        </CommandList>
      </Command>
    );
    
    const list = screen.getByTestId('list');
    expect(list).toBeInTheDocument();
  });
});

describe('CommandEmpty', () => {
  it('renders with default props', () => {
    render(
      <Command>
        <CommandEmpty>No results found</CommandEmpty>
      </Command>
    );
    const empty = screen.getByText('No results found');
    expect(empty).toBeInTheDocument();
    expect(empty).toHaveAttribute('data-slot', 'command-empty');
    expect(empty).toHaveClass('py-6', 'text-center', 'text-sm');
  });

  it('forwards additional props', () => {
    render(
      <Command>
        <CommandEmpty data-testid="empty">No results found</CommandEmpty>
      </Command>
    );
    const empty = screen.getByTestId('empty');
    expect(empty).toBeInTheDocument();
  });
});

describe('CommandGroup', () => {
  it.skip('renders with default props', () => {
    render(
      <Command>
        <CommandGroup heading="Test Group">
          <CommandItem>Test Item</CommandItem>
        </CommandGroup>
      </Command>
    );
    
    const group = screen.getByRole('group');
    expect(group).toBeInTheDocument();
    expect(group).toHaveClass('text-foreground', '[&_[cmdk-group-heading]]:text-muted-foreground', 'overflow-hidden', 'p-1');
    
    const heading = screen.getByText('Test Group');
    expect(heading).toBeInTheDocument();
  });

  it.skip('applies custom className', () => {
    render(
      <Command>
        <CommandGroup heading="Test Group" className="custom-class">
          <CommandItem>Test Item</CommandItem>
        </CommandGroup>
      </Command>
    );
    
    const group = screen.getByRole('group');
    expect(group).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(
      <Command>
        <CommandGroup heading="Test Group" data-testid="group">
          <CommandItem>Test Item</CommandItem>
        </CommandGroup>
      </Command>
    );
    
    const group = screen.getByTestId('group');
    expect(group).toBeInTheDocument();
  });
});

describe('CommandSeparator', () => {
  it('renders with default props', () => {
    render(
      <Command>
        <CommandSeparator />
      </Command>
    );
    const separator = screen.getByRole('separator');
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute('data-slot', 'command-separator');
    expect(separator).toHaveClass('bg-border', '-mx-1', 'h-px');
  });

  it('applies custom className', () => {
    render(
      <Command>
        <CommandSeparator className="custom-class" />
      </Command>
    );
    const separator = screen.getByRole('separator');
    expect(separator).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(
      <Command>
        <CommandSeparator data-testid="separator" />
      </Command>
    );
    const separator = screen.getByTestId('separator');
    expect(separator).toBeInTheDocument();
  });
});

describe('CommandItem', () => {
  it('renders with default props', () => {
    render(
      <Command>
        <CommandItem>Test Item</CommandItem>
      </Command>
    );
    const item = screen.getByRole('option');
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute('data-slot', 'command-item');
    expect(item).toHaveClass('data-[selected=true]:bg-accent', 'data-[selected=true]:text-accent-foreground', 'relative', 'flex', 'cursor-default', 'items-center', 'gap-2', 'rounded-sm', 'px-2', 'py-1.5', 'text-sm', 'outline-hidden', 'select-none');
  });

  it('applies custom className', () => {
    render(
      <Command>
        <CommandItem className="custom-class">Test Item</CommandItem>
      </Command>
    );
    const item = screen.getByRole('option');
    expect(item).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(
      <Command>
        <CommandItem data-testid="item">Test Item</CommandItem>
      </Command>
    );
    const item = screen.getByTestId('item');
    expect(item).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <Command>
        <CommandItem onSelect={onSelect}>Test Item</CommandItem>
      </Command>
    );
    
    const item = screen.getByRole('option');
    await user.click(item);
    
    expect(onSelect).toHaveBeenCalled();
  });

  it('renders with disabled state', () => {
    render(
      <Command>
        <CommandItem disabled>Disabled Item</CommandItem>
      </Command>
    );
    const item = screen.getByRole('option');
    expect(item).toHaveAttribute('data-disabled', 'true');
  });
});

describe('CommandShortcut', () => {
  it('renders with default props', () => {
    render(<CommandShortcut>⌘K</CommandShortcut>);
    const shortcut = screen.getByText('⌘K');
    expect(shortcut).toBeInTheDocument();
    expect(shortcut).toHaveAttribute('data-slot', 'command-shortcut');
    expect(shortcut).toHaveClass('text-muted-foreground', 'ml-auto', 'text-xs', 'tracking-widest');
  });

  it('applies custom className', () => {
    render(<CommandShortcut className="custom-class">⌘K</CommandShortcut>);
    const shortcut = screen.getByText('⌘K');
    expect(shortcut).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(<CommandShortcut data-testid="shortcut">⌘K</CommandShortcut>);
    const shortcut = screen.getByTestId('shortcut');
    expect(shortcut).toBeInTheDocument();
  });
});

describe('Command Composition', () => {
  it.skip('renders a complete command palette', () => {
    render(
      <CommandDialog defaultOpen>
        <CommandInput placeholder="Search commands..." />
        <CommandList>
          <CommandGroup heading="Actions">
            <CommandItem>Create new file</CommandItem>
            <CommandItem>Open file</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>Preferences</CommandItem>
            <CommandItem>Keyboard shortcuts</CommandItem>
          </CommandGroup>
        </CommandList>
        <CommandEmpty>No commands found</CommandEmpty>
      </CommandDialog>
    );

    // Check dialog structure
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    
    // Check input
    const input = screen.getByRole('combobox');
    expect(input).toHaveAttribute('placeholder', 'Search commands...');
    
    // Check groups and items
    expect(screen.getByText('Actions')).toBeInTheDocument();
    expect(screen.getByText('Create new file')).toBeInTheDocument();
    expect(screen.getByText('Open file')).toBeInTheDocument();
    
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Preferences')).toBeInTheDocument();
    expect(screen.getByText('Keyboard shortcuts')).toBeInTheDocument();
    
    // Check separator
    expect(screen.getByRole('separator')).toBeInTheDocument();
    
    // Check empty state
    expect(screen.getByText('No commands found')).toBeInTheDocument();
  });

  it.skip('handles keyboard navigation', async () => {
    const user = userEvent.setup();
    render(
      <Command>
        <CommandInput />
        <CommandList>
          <CommandItem>First Item</CommandItem>
          <CommandItem>Second Item</CommandItem>
        </CommandList>
      </Command>
    );

    const input = screen.getByRole('combobox');
    await user.click(input);
    
    // Navigate with arrow keys
    await user.keyboard('{ArrowDown}');
    const firstItem = screen.getByText('First Item');
    expect(firstItem).toHaveAttribute('data-selected', 'true');
    
    await user.keyboard('{ArrowDown}');
    const secondItem = screen.getByText('Second Item');
    expect(secondItem).toHaveAttribute('data-selected', 'true');
  });
}); 