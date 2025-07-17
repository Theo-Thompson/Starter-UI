import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@/test/utils';
import { AuthProvider, useAuth } from '../AuthContext';
import { Button } from '@/design-system/atoms/button';

// Test component to access auth context
const TestComponent = () => {
  const { user, isAuthenticated, isLoading, login, logout, updateProfile } = useAuth();
  
  return (
    <div>
      <div data-testid="loading">{isLoading.toString()}</div>
      <div data-testid="authenticated">{isAuthenticated.toString()}</div>
      <div data-testid="user-name">{user?.name || 'No user'}</div>
      <div data-testid="user-email">{user?.email || 'No email'}</div>
      <Button onClick={() => login('test@example.com', 'password')}>
        Login
      </Button>
      <Button onClick={logout}>Logout</Button>
      <Button onClick={() => updateProfile({ name: 'Updated Name' })}>
        Update Profile
      </Button>
    </div>
  );
};

describe('AuthContext', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('provides initial unauthenticated state', async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    // Wait for the initial loading to complete
    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    }, { timeout: 2000 });
    
    expect(screen.getByTestId('authenticated')).toHaveTextContent('false');
    expect(screen.getByTestId('user-name')).toHaveTextContent('No user');
    expect(screen.getByTestId('user-email')).toHaveTextContent('No email');
  });

  it('loads existing user from localStorage on mount', async () => {
    const mockUser = {
      id: '1',
      email: 'existing@example.com',
      name: 'Existing User',
      avatar: 'https://example.com/avatar.jpg',
      bio: 'Test bio',
      accountCreated: '2024-01-01T00:00:00.000Z',
      lastLogin: '2024-01-01T00:00:00.000Z',
    };

    localStorage.setItem('user', JSON.stringify(mockUser));

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    }, { timeout: 2000 });

    expect(screen.getByTestId('authenticated')).toHaveTextContent('true');
    expect(screen.getByTestId('user-name')).toHaveTextContent('Existing User');
    expect(screen.getByTestId('user-email')).toHaveTextContent('existing@example.com');
  });

  it('handles login functionality', async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    // Wait for initial loading to complete
    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    });

    // Click login button
    fireEvent.click(screen.getByText('Login'));

    // Should show loading during login
    expect(screen.getByTestId('loading')).toHaveTextContent('true');

    // Wait for login to complete
    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    }, { timeout: 2000 });

    // Should be authenticated
    expect(screen.getByTestId('authenticated')).toHaveTextContent('true');
    expect(screen.getByTestId('user-name')).toHaveTextContent('test');
    expect(screen.getByTestId('user-email')).toHaveTextContent('test@example.com');

    // Check localStorage was updated
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    expect(storedUser.email).toBe('test@example.com');
    expect(storedUser.name).toBe('test');
  });

  it('handles logout functionality', async () => {
    // Start with authenticated user
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
      avatar: 'https://example.com/avatar.jpg',
      bio: 'Test bio',
      accountCreated: '2024-01-01T00:00:00.000Z',
      lastLogin: '2024-01-01T00:00:00.000Z',
    };

    localStorage.setItem('user', JSON.stringify(mockUser));

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('authenticated')).toHaveTextContent('true');
    }, { timeout: 2000 });

    // Click logout button
    fireEvent.click(screen.getByText('Logout'));

    // Should be unauthenticated
    expect(screen.getByTestId('authenticated')).toHaveTextContent('false');
    expect(screen.getByTestId('user-name')).toHaveTextContent('No user');
    expect(screen.getByTestId('user-email')).toHaveTextContent('No email');

    // Check localStorage was cleared
    expect(localStorage.getItem('user')).toBeNull();
  });

  it('handles profile updates', async () => {
    // Start with authenticated user
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      name: 'Original Name',
      avatar: 'https://example.com/avatar.jpg',
      bio: 'Original bio',
      accountCreated: '2024-01-01T00:00:00.000Z',
      lastLogin: '2024-01-01T00:00:00.000Z',
    };

    localStorage.setItem('user', JSON.stringify(mockUser));

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('user-name')).toHaveTextContent('Original Name');
    }, { timeout: 2000 });

    // Click update profile button
    fireEvent.click(screen.getByText('Update Profile'));

    // Should show updated name
    expect(screen.getByTestId('user-name')).toHaveTextContent('Updated Name');

    // Check localStorage was updated
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    expect(storedUser.name).toBe('Updated Name');
    expect(storedUser.bio).toBe('Original bio'); // Should preserve other fields
  });

  it('preserves existing user data on login', async () => {
    // Start with existing user
    const existingUser = {
      id: '1',
      email: 'existing@example.com',
      name: 'Existing User',
      avatar: 'https://example.com/avatar.jpg',
      bio: 'Existing bio',
      accountCreated: '2024-01-01T00:00:00.000Z',
      lastLogin: '2024-01-01T00:00:00.000Z',
    };

    localStorage.setItem('user', JSON.stringify(existingUser));

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    });

    // Login with new email
    fireEvent.click(screen.getByText('Login'));

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    }, { timeout: 2000 });

    // Should preserve existing data but update email and lastLogin
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    expect(storedUser.email).toBe('test@example.com');
    expect(storedUser.name).toBe('Existing User'); // Preserved
    expect(storedUser.bio).toBe('Existing bio'); // Preserved
    expect(storedUser.avatar).toBe('https://example.com/avatar.jpg'); // Preserved
    expect(storedUser.lastLogin).toBeDefined(); // Updated
  });

  it('creates new user on first login', async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    });

    // Login
    fireEvent.click(screen.getByText('Login'));

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    }, { timeout: 2000 });

    // Should create new user
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    expect(storedUser.id).toBe('1');
    expect(storedUser.email).toBe('test@example.com');
    expect(storedUser.name).toBe('test');
    expect(storedUser.accountCreated).toBeDefined();
    expect(storedUser.lastLogin).toBeDefined();
    expect(storedUser.avatar).toContain('api.dicebear.com');
  });

  it('handles localStorage errors gracefully', async () => {
    // Mock localStorage to throw errors
    const originalSetItem = localStorage.setItem;
    const originalGetItem = localStorage.getItem;
    const originalRemoveItem = localStorage.removeItem;

    localStorage.setItem = vi.fn().mockImplementation(() => {
      throw new Error('Storage error');
    });

    localStorage.getItem = vi.fn().mockImplementation(() => {
      throw new Error('Storage error');
    });

    localStorage.removeItem = vi.fn().mockImplementation(() => {
      throw new Error('Storage error');
    });

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    // Should not crash and should complete loading
    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    });

    // Restore original methods
    localStorage.setItem = originalSetItem;
    localStorage.getItem = originalGetItem;
    localStorage.removeItem = originalRemoveItem;
  });

  it('throws error when useAuth is used outside provider', () => {
    // Suppress console.error for this test
    const originalError = console.error;
    console.error = vi.fn();

    expect(() => {
      render(<TestComponent />);
    }).toThrow('useAuth must be used within an AuthProvider');

    console.error = originalError;
  });

  it('updates lastLogin on existing session', async () => {
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
      avatar: 'https://example.com/avatar.jpg',
      bio: 'Test bio',
      accountCreated: '2024-01-01T00:00:00.000Z',
      lastLogin: '2024-01-01T00:00:00.000Z',
    };

    localStorage.setItem('user', JSON.stringify(mockUser));

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('false');
    });

    // Check that lastLogin was updated
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    expect(storedUser.lastLogin).not.toBe('2024-01-01T00:00:00.000Z');
    expect(new Date(storedUser.lastLogin).getTime()).toBeGreaterThan(
      new Date('2024-01-01T00:00:00.000Z').getTime()
    );
  });
}); 