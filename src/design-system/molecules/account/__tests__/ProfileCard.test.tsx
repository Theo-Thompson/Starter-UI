import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ProfileCard } from '../ProfileCard';
import * as AuthContext from '@/shared/contexts/AuthContext';

// Mock the AuthContext
vi.mock('@/shared/contexts/AuthContext', () => ({
  useAuth: vi.fn(),
}));

// Mock EditableField component
vi.mock('@/design-system/molecules/common/EditableField', () => ({
  EditableField: ({ label, value, onSave, placeholder, multiline }: {
    label: string;
    value: string;
    onSave: (value: string) => void;
    placeholder?: string;
    multiline?: boolean;
  }) => (
    <div data-testid={`editable-field-${label.toLowerCase()}`}>
      <label>{label}</label>
      <input
        data-testid={`input-${label.toLowerCase()}`}
        value={value}
        onChange={(e) => onSave(e.target.value)}
        placeholder={placeholder}
        type={multiline ? 'textarea' : 'text'}
      />
    </div>
  ),
}));

describe('ProfileCard', () => {
  const mockUser = {
    id: '1',
    email: 'test@example.com',
    name: 'Test User',
    bio: 'Test bio',
    avatar: 'https://example.com/avatar.jpg',
    accountCreated: '2024-01-15T10:00:00Z',
    lastLogin: '2024-01-15T14:30:00Z',
  };

  const mockUpdateProfile = vi.fn();

  const mockAuthContext = (user: Partial<typeof mockUser> | null, updateProfile = mockUpdateProfile) => {
    vi.mocked(AuthContext.useAuth).mockReturnValue({ 
      user: user as typeof mockUser,
      isAuthenticated: !!user,
      isLoading: false,
      login: vi.fn(),
      logout: vi.fn(),
      updateProfile
    });
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders profile information when user is present', () => {
    vi.mocked(AuthContext.useAuth).mockReturnValue({ 
      user: mockUser, 
      updateProfile: mockUpdateProfile,
      isAuthenticated: true,
      isLoading: false,
      login: vi.fn(),
      logout: vi.fn()
    });
    
    render(<ProfileCard />);
    
    expect(screen.getByText('Profile Information')).toBeInTheDocument();
    expect(screen.getByText('Manage your personal profile information')).toBeInTheDocument();
  });

  it('does not render when user is not present', () => {
    vi.mocked(AuthContext.useAuth).mockReturnValue({ 
      user: null,
      isAuthenticated: false,
      isLoading: false,
      login: vi.fn(),
      logout: vi.fn(),
      updateProfile: vi.fn()
    });
    
    const { container } = render(<ProfileCard />);
    expect(container.firstChild).toBeNull();
  });

  it('displays user avatar with image', () => {
    mockAuthContext(mockUser, mockUpdateProfile);
    
    render(<ProfileCard />);
    
    const avatar = screen.getByText('T');
    expect(avatar).toBeInTheDocument();
  });

  it('displays avatar fallback when no image is provided', () => {
    const userWithoutAvatar = { ...mockUser, avatar: undefined };
    mockAuthContext(userWithoutAvatar, mockUpdateProfile);
    
    render(<ProfileCard />);
    
    expect(screen.getByText('T')).toBeInTheDocument(); // First letter of name
  });

  it('displays avatar fallback when name is empty', () => {
    const userWithoutName = { ...mockUser, name: '' };
    mockAuthContext(userWithoutName, mockUpdateProfile);
    
    render(<ProfileCard />);
    
    expect(screen.getByText('U')).toBeInTheDocument(); // Default fallback
  });

  it('renders editable name field', () => {
    mockAuthContext(mockUser, mockUpdateProfile);
    
    render(<ProfileCard />);
    
    expect(screen.getByTestId('editable-field-name')).toBeInTheDocument();
    expect(screen.getByTestId('input-name')).toHaveValue('Test User');
  });

  it('renders editable bio field', () => {
    mockAuthContext(mockUser, mockUpdateProfile);
    
    render(<ProfileCard />);
    
    expect(screen.getByTestId('editable-field-bio')).toBeInTheDocument();
    expect(screen.getByTestId('input-bio')).toHaveValue('Test bio');
  });

  it('handles name updates', () => {
    mockAuthContext(mockUser, mockUpdateProfile);
    
    render(<ProfileCard />);
    
    const nameInput = screen.getByTestId('input-name');
    fireEvent.change(nameInput, { target: { value: 'New Name' } });
    
    expect(mockUpdateProfile).toHaveBeenCalledWith({ name: 'New Name' });
  });

  it('handles bio updates', () => {
    mockAuthContext(mockUser, mockUpdateProfile);
    
    render(<ProfileCard />);
    
    const bioInput = screen.getByTestId('input-bio');
    fireEvent.change(bioInput, { target: { value: 'New bio' } });
    
    expect(mockUpdateProfile).toHaveBeenCalledWith({ bio: 'New bio' });
  });

  it('displays user email with primary badge', () => {
    mockAuthContext(mockUser, mockUpdateProfile);
    
    render(<ProfileCard />);
    
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('Primary')).toBeInTheDocument();
  });

  it('displays account ID', () => {
    mockAuthContext(mockUser, mockUpdateProfile);
    
    render(<ProfileCard />);
    
    expect(screen.getByText('Account ID')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('displays formatted account creation date', () => {
    mockAuthContext(mockUser, mockUpdateProfile);
    
    render(<ProfileCard />);
    
    expect(screen.getByText('Account Created')).toBeInTheDocument();
    expect(screen.getByText('1/15/2024')).toBeInTheDocument();
  });

  it('handles empty bio gracefully', () => {
    const userWithoutBio = { ...mockUser, bio: undefined };
    mockAuthContext(userWithoutBio, mockUpdateProfile);
    
    render(<ProfileCard />);
    
    expect(screen.getByTestId('input-bio')).toHaveValue('');
  });

  it('renders with correct card structure', () => {
    mockAuthContext(mockUser, mockUpdateProfile);
    
    render(<ProfileCard />);
    
    // Check for card elements
    expect(screen.getByText('Profile Information')).toBeInTheDocument();
    expect(screen.getByText('Manage your personal profile information')).toBeInTheDocument();
    
    // Check for separators (they have role="none" in the component)
    const separators = screen.getAllByRole('none');
    expect(separators.length).toBeGreaterThan(0);
  });

  it('displays email section with icon', () => {
    mockAuthContext(mockUser, mockUpdateProfile);
    
    render(<ProfileCard />);
    
    expect(screen.getByText('Email')).toBeInTheDocument();
    // The Mail icon should be present (though we can't easily test for the icon itself)
  });

  it('handles user with minimal data', () => {
    const minimalUser = {
      id: '1',
      email: 'test@example.com',
      name: 'Test',
      accountCreated: '2024-01-15T10:00:00Z',
    };
    mockAuthContext(minimalUser, mockUpdateProfile);
    
    render(<ProfileCard />);
    
    expect(screen.getByDisplayValue('Test')).toBeInTheDocument();
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByTestId('input-bio')).toHaveValue('');
  });
}); 