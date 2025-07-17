import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { AccountInfoCard } from '../AccountInfoCard';
import * as AuthContext from '@/shared/contexts/AuthContext';

// Mock the AuthContext
vi.mock('@/shared/contexts/AuthContext', () => ({
  useAuth: vi.fn(),
}));

describe('AccountInfoCard', () => {
  const mockUser = {
    id: '1',
    email: 'test@example.com',
    name: 'Test User',
    accountCreated: '2024-01-15T10:00:00Z',
    lastLogin: '2024-01-20T14:30:00Z',
  };

  const mockAuthContext = (user: typeof mockUser | null) => {
    vi.mocked(AuthContext.useAuth).mockReturnValue({ 
      user,
      isAuthenticated: !!user,
      isLoading: false,
      login: vi.fn(),
      logout: vi.fn(),
      updateProfile: vi.fn()
    });
  };

  beforeEach(() => {
    vi.clearAllMocks();
    // Mock Date.now() to return a fixed timestamp
    vi.spyOn(Date, 'now').mockReturnValue(new Date('2024-01-20T15:30:00Z').getTime());
    // Mock new Date() to return the fixed date unless an argument is provided
    const RealDate = Date;
    global.Date = class extends RealDate {
      constructor(arg?: string | number | Date) {
        if (arg) {
          super(arg);
          return;
        }
        super('2024-01-20T15:30:00Z');
      }
      static now() {
        return new RealDate('2024-01-20T15:30:00Z').getTime();
      }
    } as DateConstructor;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    global.Date = Date;
  });

  it('renders account information when user is present', () => {
    vi.mocked(AuthContext.useAuth).mockReturnValue({ 
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
      login: vi.fn(),
      logout: vi.fn(),
      updateProfile: vi.fn()
    });
    
    render(<AccountInfoCard />);
    
    expect(screen.getByText('Account Information')).toBeInTheDocument();
    expect(screen.getByText('View your account details and session information')).toBeInTheDocument();
  });

  it('does not render when user is not present', () => {
    mockAuthContext(null);
    
    const { container } = render(<AccountInfoCard />);
    expect(container.firstChild).toBeNull();
  });

  it('displays account status badges', () => {
    mockAuthContext(mockUser);
    
    render(<AccountInfoCard />);
    
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Standard User')).toBeInTheDocument();
  });

  it('displays account timeline information', () => {
    mockAuthContext(mockUser);
    
    render(<AccountInfoCard />);
    
    expect(screen.getByText('Account Created')).toBeInTheDocument();
    expect(screen.getByText('Last Login')).toBeInTheDocument();
    expect(screen.getByText('Current Session')).toBeInTheDocument();
  });

  it('formats account creation date correctly', () => {
    mockAuthContext(mockUser);
    
    render(<AccountInfoCard />);
    
    // Should format "2024-01-15T10:00:00Z" to "January 15, 2024"
    expect(screen.getByText('January 15, 2024')).toBeInTheDocument();
  });

  it('formats last login date correctly', () => {
    mockAuthContext(mockUser);
    
    render(<AccountInfoCard />);
    // Should format "2024-01-20T14:30:00Z" to a readable date/time string
    expect(screen.getByText(/Jan 20, 2024/)).toBeInTheDocument();
  });

  it('calculates and displays session duration correctly', () => {
    mockAuthContext(mockUser);
    
    render(<AccountInfoCard />);
    
    // Session started at 14:30, current time is 15:30, so 1 hour difference
    expect(screen.getByTestId('session-duration').textContent).toContain('Active for 1 hour');
  });

  it('displays session duration in minutes for short sessions', () => {
    const recentUser = {
      ...mockUser,
      lastLogin: '2024-01-20T15:25:00Z', // 5 minutes ago
    };
    mockAuthContext(recentUser);
    
    render(<AccountInfoCard />);
    
    expect(screen.getByTestId('session-duration').textContent).toContain('Active for 5 minutes');
  });

  it('displays additional account information', () => {
    mockAuthContext(mockUser);
    
    render(<AccountInfoCard />);
    
    expect(screen.getByText('Account Type')).toBeInTheDocument();
    expect(screen.getByText('Personal')).toBeInTheDocument();
    expect(screen.getByText('Account Region')).toBeInTheDocument();
    expect(screen.getByText('US-East')).toBeInTheDocument();
  });

  it('displays security status section', () => {
    mockAuthContext(mockUser);
    
    render(<AccountInfoCard />);
    
    expect(screen.getByText('Security Status')).toBeInTheDocument();
    expect(screen.getByText('Your account is secure. All security features are enabled.')).toBeInTheDocument();
  });

  it('renders with correct card structure', () => {
    mockAuthContext(mockUser);
    
    render(<AccountInfoCard />);
    
    // Check for card elements
    expect(screen.getByText('Account Information')).toBeInTheDocument();
    expect(screen.getByText('View your account details and session information')).toBeInTheDocument();
    
    // Check for separators (they have role="none" in the component)
    const separators = screen.getAllByRole('none');
    expect(separators.length).toBeGreaterThan(0);
  });

  it('handles plural forms in session duration correctly', () => {
    const recentUser = {
      ...mockUser,
      lastLogin: '2024-01-20T15:29:00Z', // 1 minute ago
    };
    mockAuthContext(recentUser);
    
    render(<AccountInfoCard />);
    
    expect(screen.getByTestId('session-duration').textContent).toContain('Active for 1 minute');
  });

  it('handles multiple hours in session duration correctly', () => {
    const longSessionUser = {
      ...mockUser,
      lastLogin: '2024-01-20T13:30:00Z', // 2 hours ago
    };
    mockAuthContext(longSessionUser);
    
    render(<AccountInfoCard />);
    
    expect(screen.getByTestId('session-duration').textContent).toContain('Active for 2 hours');
  });
}); 