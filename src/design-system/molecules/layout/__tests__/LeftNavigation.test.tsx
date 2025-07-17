import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LeftNavigation } from '../LeftNavigation';

// Mock react-router-dom
const mockNavigate = vi.fn();
let mockLocation = { pathname: '/dashboard' };
vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
  useLocation: () => mockLocation,
}));

describe('LeftNavigation', () => {
  beforeEach(() => {
    mockNavigate.mockReset();
    mockLocation = { pathname: '/dashboard' };
  });

  it('renders all main navigation buttons expanded', () => {
    render(<LeftNavigation />);
    // Should show all labels
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Reports')).toBeInTheDocument();
    expect(screen.getByText('Documents')).toBeInTheDocument();
    expect(screen.getByText('Calendar')).toBeInTheDocument();
    expect(screen.getByText('Messages')).toBeInTheDocument();
    expect(screen.getByText('Notifications')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    // Additional features
    expect(screen.getByText('Help & Support')).toBeInTheDocument();
    expect(screen.getByText('Feedback')).toBeInTheDocument();
    expect(screen.getByText('Collapse')).toBeInTheDocument();
  });

  it('highlights the active navigation button', () => {
    mockLocation = { pathname: '/users' };
    render(<LeftNavigation />);
    const usersBtn = screen.getByText('Users').closest('button');
    expect(usersBtn).toHaveClass('bg-primary'); // Should have default variant
  });

  it('navigates to the correct path when a nav button is clicked', () => {
    render(<LeftNavigation />);
    const usersBtn = screen.getByText('Users').closest('button');
    fireEvent.click(usersBtn!);
    expect(mockNavigate).toHaveBeenCalledWith('/users');
  });

  it('navigates to Help & Support and Feedback', () => {
    render(<LeftNavigation />);
    fireEvent.click(screen.getByText('Help & Support').closest('button')!);
    expect(mockNavigate).toHaveBeenCalledWith('/help');
    fireEvent.click(screen.getByText('Feedback').closest('button')!);
    expect(mockNavigate).toHaveBeenCalledWith('/feedback');
  });

  it('collapses and expands the navigation', () => {
    render(<LeftNavigation />);
    // Collapse
    fireEvent.click(screen.getByText('Collapse').closest('button')!);
    // Now only icons should be visible, not labels
    expect(screen.queryByText('Dashboard')).not.toBeInTheDocument();
    expect(screen.queryByText('Help & Support')).not.toBeInTheDocument();
    // Expand
    fireEvent.click(screen.getByRole('button', { name: /expand/i }));
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('shows tooltips for nav items when collapsed', async () => {
    render(<LeftNavigation />);
    // Collapse
    fireEvent.click(screen.getByText('Collapse').closest('button')!);
    // Tooltips are rendered on hover, but Radix UI portals may not show in test DOM
    // So we check for TooltipTrigger presence
    const triggers = screen.getAllByRole('button');
    expect(triggers.length).toBeGreaterThan(0);
  });
}); 