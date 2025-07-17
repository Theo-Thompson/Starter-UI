import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AppShell } from '../AppShell';

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  Outlet: () => <div data-testid="outlet">Outlet Content</div>,
}));

// Mock Header component
vi.mock('../Header', () => ({
  Header: () => <div data-testid="header">Header Component</div>,
}));

// Mock LeftNavigation component
vi.mock('../LeftNavigation', () => ({
  LeftNavigation: () => <div data-testid="left-navigation">Left Navigation Component</div>,
}));

describe('AppShell', () => {
  it('renders the app shell with all components', () => {
    render(<AppShell />);
    
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('left-navigation')).toBeInTheDocument();
    expect(screen.getByTestId('outlet')).toBeInTheDocument();
  });

  it('renders the header component', () => {
    render(<AppShell />);
    expect(screen.getByText('Header Component')).toBeInTheDocument();
  });

  it('renders the left navigation component', () => {
    render(<AppShell />);
    expect(screen.getByText('Left Navigation Component')).toBeInTheDocument();
  });

  it('renders the outlet for child routes', () => {
    render(<AppShell />);
    expect(screen.getByText('Outlet Content')).toBeInTheDocument();
  });

  it('has the correct layout structure', () => {
    render(<AppShell />);
    
    // Check main container
    const mainContainer = screen.getByTestId('header').parentElement;
    expect(mainContainer).toHaveClass('h-screen', 'flex', 'flex-col');
    
    // Check content area
    const contentArea = mainContainer?.children[1];
    expect(contentArea).toHaveClass('flex-1', 'flex', 'overflow-hidden');
    
    // Check main content
    const mainContent = screen.getByRole('main');
    expect(mainContent).toHaveClass('flex-1', 'overflow-auto', 'bg-background');
  });

  it('renders components in the correct order', () => {
    render(<AppShell />);
    
    const container = screen.getByTestId('header').parentElement;
    const children = Array.from(container?.children || []);
    
    // First child should be header
    expect(children[0]).toContainElement(screen.getByTestId('header'));
    
    // Second child should be content area
    const contentArea = children[1];
    const contentChildren = Array.from(contentArea.children);
    
    // First child of content area should be left navigation
    expect(contentChildren[0]).toContainElement(screen.getByTestId('left-navigation'));
    
    // Second child of content area should be main content
    expect(contentChildren[1]).toContainElement(screen.getByTestId('outlet'));
  });

  it('maintains proper semantic structure', () => {
    render(<AppShell />);
    
    // Should have a main element
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
    
    // Main element should contain the outlet
    expect(mainElement).toContainElement(screen.getByTestId('outlet'));
  });
}); 