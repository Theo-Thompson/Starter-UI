import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@/test/utils';
import { LoginForm } from '../LoginForm';
import { AuthProvider } from '@/shared/contexts/AuthContext';

// Mock the AuthContext
const mockLogin = vi.fn();
const mockUseAuth = vi.fn(() => ({
  login: mockLogin,
  isLoading: false,
  user: null,
  logout: vi.fn(),
}));

vi.mock('@/shared/contexts/AuthContext', async () => {
  const actual = await vi.importActual('@/shared/contexts/AuthContext');
  return {
    ...actual,
    useAuth: () => mockUseAuth(),
  };
});

describe('LoginForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseAuth.mockReturnValue({
      login: mockLogin,
      isLoading: false,
      user: null,
      logout: vi.fn(),
    });
  });

  it('renders login form with all elements', () => {
    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    expect(screen.getByText('Sign in to Application')).toBeInTheDocument();
    expect(screen.getByText('Enter your email below to access the application')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign In with Email' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /GitHub/ })).toBeInTheDocument();
  });

  it('handles email input changes', () => {
    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    expect(emailInput).toHaveValue('test@example.com');
  });

  it('handles password input changes', () => {
    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(passwordInput).toHaveValue('password123');
  });

  it('submits form with email and password', async () => {
    mockLogin.mockResolvedValue(undefined);

    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Sign In with Email' });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123');
    });
  });

  it('handles GitHub login', async () => {
    mockLogin.mockResolvedValue(undefined);

    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    const githubButton = screen.getByRole('button', { name: /GitHub/ });
    fireEvent.click(githubButton);

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('github@example.com');
    });
  });

  it('shows loading state when isLoading is true', () => {
    mockUseAuth.mockReturnValue({
      login: mockLogin,
      isLoading: true,
      user: null,
      logout: vi.fn(),
    });

    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    expect(screen.getByRole('button', { name: 'Signing in...' })).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeDisabled();
    expect(screen.getByLabelText('Password')).toBeDisabled();
    expect(screen.getByRole('button', { name: /GitHub/ })).toBeDisabled();
  });

  it('handles login errors gracefully', async () => {
    mockLogin.mockRejectedValue(new Error('Login failed'));

    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Sign In with Email' });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    // The error should be handled gracefully without crashing the component
    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123');
    });
  });

  it('handles GitHub login errors gracefully', async () => {
    mockLogin.mockRejectedValue(new Error('GitHub login failed'));

    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    const githubButton = screen.getByRole('button', { name: /GitHub/ });
    fireEvent.click(githubButton);

    // The error should be handled gracefully without crashing the component
    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('github@example.com');
    });
  });

  it('prevents form submission when fields are empty', () => {
    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    const submitButton = screen.getByRole('button', { name: 'Sign In with Email' });
    fireEvent.click(submitButton);

    expect(mockLogin).not.toHaveBeenCalled();
  });

  it('submits form on Enter key press', async () => {
    mockLogin.mockResolvedValue(undefined);

    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.submit(passwordInput.closest('form')!);

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123');
    });
  });

  it('displays demo message', () => {
    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    expect(screen.getByText('This is a demo login. Use any email to sign in.')).toBeInTheDocument();
  });

  it('shows divider text', () => {
    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    expect(screen.getByText('Or continue with')).toBeInTheDocument();
  });

  it('has proper form validation attributes', () => {
    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');

    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('required');
    expect(emailInput).toHaveAttribute('autoComplete', 'email');
    expect(emailInput).toHaveAttribute('placeholder', 'name@example.com');

    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(passwordInput).toHaveAttribute('required');
    expect(passwordInput).toHaveAttribute('autoComplete', 'current-password');
    expect(passwordInput).toHaveAttribute('placeholder', 'Enter your password');
  });

  it('maintains form state during loading', () => {
    mockUseAuth.mockReturnValue({
      login: mockLogin,
      isLoading: true,
      user: null,
      logout: vi.fn(),
    });

    render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');
  });
}); 