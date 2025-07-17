import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { User, LogOut, Settings } from 'lucide-react';

// Mock user data
const mockUser = {
  id: '1',
  email: 'john.doe@example.com',
  name: 'John Doe',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john.doe@example.com',
  bio: 'Software developer and design enthusiast',
  accountCreated: '2023-01-15T10:30:00Z',
  lastLogin: '2024-01-15T14:25:00Z'
};

// Mock component that mimics the Header behavior without dependencies
interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  bio?: string;
  accountCreated: string;
  lastLogin: string;
}

const MockHeader = ({ user = mockUser }: { user?: User }) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const handleLogout = () => {
    // Logout action (demo only)
    alert('Logout functionality (demo only)');
  };

  const handleMyAccount = () => {
    // My Account action (demo only)
    alert('Navigate to My Account (demo only)');
  };

  const handleSettings = () => {
    // Settings action (demo only)
    alert('Navigate to Settings (demo only)');
  };

  return (
    <header className="w-full bg-background border-b border-border h-16 flex items-center justify-between px-6">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">AS</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold">App Shell</h1>
            <p className="text-xs text-muted-foreground -mt-1">Generic Framework</p>
          </div>
        </div>
      </div>

      {/* Right side - Profile */}
      <div className="flex items-center space-x-4">
        <span className="text-sm text-muted-foreground">
          Welcome, {user?.name || 'User'}
        </span>
        
        <div className="relative">
          <button
            className="relative h-8 w-8 rounded-full bg-transparent hover:bg-accent transition-colors"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-8 w-8 rounded-full"
                />
              ) : (
                <span className="text-sm font-medium">
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </span>
              )}
            </div>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-popover border border-border rounded-md shadow-lg z-50">
              <div className="p-3 border-b border-border">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user?.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user?.email}
                  </p>
                </div>
              </div>
              <div className="p-1">
                <button
                  className="w-full text-left px-2 py-1.5 text-sm hover:bg-accent rounded-sm flex items-center"
                  onClick={handleMyAccount}
                >
                  <User className="mr-2 h-4 w-4 text-foreground" />
                  My Account
                </button>
                <button
                  className="w-full text-left px-2 py-1.5 text-sm hover:bg-accent rounded-sm flex items-center"
                  onClick={handleSettings}
                >
                  <Settings className="mr-2 h-4 w-4 text-foreground" />
                  Settings
                </button>
                <div className="border-t border-border my-1" />
                <button
                  className="w-full text-left px-2 py-1.5 text-sm hover:bg-accent rounded-sm flex items-center"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4 text-foreground" />
                  Log out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const meta: Meta<typeof MockHeader> = {
  title: 'Design System/Organisms/Header',
  component: MockHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Header Component

The main application header component that provides navigation, branding, and user account access.

## Design Guidelines

### When to Use
- Primary navigation in application layouts
- User authentication status display
- Brand/logo placement
- Quick access to user profile actions

### Features
- **Brand Identity**: Logo and application name
- **User Profile**: Avatar, name, and dropdown menu
- **Navigation**: Access to My Account and Settings
- **Responsive Design**: Adapts to different screen sizes

### Accessibility
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatible
- Focus management in dropdown menus

### Dependencies
- Requires AuthContext for user data
- Requires React Router for navigation
- Uses Lucide React icons
- Built with shadcn/ui components

### Storybook Implementation
This story uses a mock implementation that demonstrates the header functionality without requiring authentication or routing dependencies.
        `
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="w-full">
        <Story />
      </div>
    ),
  ],
  args: {
    user: mockUser
  },
  argTypes: {
    user: {
      description: 'User object with profile information',
      control: { type: 'object' }
    }
  }
} satisfies Meta<typeof MockHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Header
export const Default: Story = {
  args: {
    user: mockUser
  },
  parameters: {
    docs: {
      description: {
        story: 'The default header showing a logged-in user with full profile information and dropdown menu.'
      }
    }
  }
};

// Header with different user
export const DifferentUser: Story = {
  args: {
    user: {
      id: '2',
      email: 'jane.smith@example.com',
      name: 'Jane Smith',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jane.smith@example.com',
      bio: 'Product manager and UX advocate',
      accountCreated: '2023-03-20T09:15:00Z',
      lastLogin: '2024-01-15T16:45:00Z'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with a different user profile showing how the component adapts to different user data.'
      }
    }
  }
};

// Header with long user name
export const LongUserName: Story = {
  args: {
    user: {
      id: '3',
      email: 'alexandra.wellington-smith@example.com',
      name: 'Alexandra Wellington-Smith',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alexandra@example.com',
      bio: 'Senior Software Engineer',
      accountCreated: '2023-02-10T11:30:00Z',
      lastLogin: '2024-01-15T13:20:00Z'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with a long user name to demonstrate text truncation and responsive behavior.'
      }
    }
  }
};

// Header with user without avatar
export const NoAvatar: Story = {
  args: {
    user: {
      id: '4',
      email: 'test@example.com',
      name: 'Test User',
      avatar: undefined,
      bio: 'Test account',
      accountCreated: '2024-01-01T00:00:00Z',
      lastLogin: '2024-01-15T12:00:00Z'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Header showing the fallback avatar when no profile image is available.'
      }
    }
  }
};

// Mobile view
export const Mobile: Story = {
  args: {
    user: mockUser
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Header optimized for mobile screens with responsive layout adjustments.'
      }
    }
  }
};

// Tablet view
export const Tablet: Story = {
  args: {
    user: mockUser
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    },
    docs: {
      description: {
        story: 'Header layout on tablet devices showing the balanced spacing and typography.'
      }
    }
  }
};

// Interactive demo
export const InteractiveDemo: Story = {
  args: {
    user: mockUser
  },
  parameters: {
    docs: {
      description: {
        story: `
Interactive demo of the header component. Try:
- Clicking the profile avatar to open the dropdown
- Using keyboard navigation (Tab, Enter, Escape)
- Resizing the viewport to see responsive behavior
        `
      }
    }
  }
}; 