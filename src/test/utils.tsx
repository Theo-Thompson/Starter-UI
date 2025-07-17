import React, { type ReactElement } from 'react';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/shared/contexts/AuthContext';
import { vi } from 'vitest';

// Custom render function that includes providers
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  withRouter?: boolean;
  withAuth?: boolean;
}

const AllTheProviders = ({ 
  children, 
  withRouter = false, 
  withAuth = false 
}: { 
  children: React.ReactNode;
  withRouter?: boolean;
  withAuth?: boolean;
}) => {
  let content = children;

  if (withAuth) {
    content = <AuthProvider>{content}</AuthProvider>;
  }

  if (withRouter) {
    content = <BrowserRouter>{content}</BrowserRouter>;
  }

  return <>{content}</>;
};

const customRender = (
  ui: ReactElement,
  options: CustomRenderOptions = {}
) => {
  const { withRouter = false, withAuth = false, ...renderOptions } = options;
  
  return render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders withRouter={withRouter} withAuth={withAuth}>
        {children}
      </AllTheProviders>
    ),
    ...renderOptions,
  });
};

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render };

// Common test data
export const mockUser = {
  id: '1',
  email: 'test@example.com',
  name: 'Test User',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=test@example.com',
  bio: 'Test bio',
  accountCreated: '2024-01-01T00:00:00.000Z',
  lastLogin: '2024-01-01T00:00:00.000Z',
};

// Common test helpers
export const waitForLoadingToFinish = () => {
  return new Promise(resolve => setTimeout(resolve, 0));
};

export const mockLocalStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}; 