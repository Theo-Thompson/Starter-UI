import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Button } from '@/design-system/atoms/button';
import { ScrollArea } from '@/design-system/atoms/scroll-area';
import { Separator } from '@/design-system/atoms/separator';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/design-system/atoms/tooltip';
import { 
  Home, 
  Users, 
  Settings, 
  FileText, 
  BarChart3, 
  MessageSquare,
  Package,
  Calendar,
  Bell,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Navigation items
const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/dashboard' },
  { id: 'users', label: 'Users', icon: Users, path: '/users' },
  { id: 'projects', label: 'Projects', icon: Package, path: '/projects' },
  { id: 'reports', label: 'Reports', icon: BarChart3, path: '/reports' },
  { id: 'documents', label: 'Documents', icon: FileText, path: '/documents' },
  { id: 'calendar', label: 'Calendar', icon: Calendar, path: '/calendar' },
  { id: 'messages', label: 'Messages', icon: MessageSquare, path: '/messages' },
  { id: 'notifications', label: 'Notifications', icon: Bell, path: '/notifications' },
  { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' }
];

// Mock component that mimics the LeftNavigation behavior without dependencies
const MockLeftNavigation = ({ 
  isCollapsed = false, 
  activePath = '/dashboard',
  onNavigate = (path: string) => console.log('Navigate to:', path),
  onToggleCollapse = () => console.log('Toggle collapse')
}: { 
  isCollapsed?: boolean;
  activePath?: string;
  onNavigate?: (path: string) => void;
  onToggleCollapse?: () => void;
}) => {
  interface NavigationItem {
    id: string;
    label: string;
    path: string;
    icon: React.ComponentType<{ className?: string }>;
  }

  const NavigationButton = ({ item, isActive }: { item: NavigationItem; isActive: boolean }) => {
    const Icon = item.icon;
    const button = (
      <Button
        key={item.id}
        variant={isActive ? "default" : "ghost"}
        className={`w-full h-10 ${isCollapsed ? 'justify-center px-2' : 'justify-start'}`}
        onClick={() => onNavigate(item.path)}
      >
        <Icon className={`h-4 w-4 ${isCollapsed ? '' : 'mr-3'} ${isActive ? 'text-primary-foreground' : 'text-foreground'}`} />
        {!isCollapsed && item.label}
      </Button>
    );

    if (isCollapsed) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            {button}
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{item.label}</p>
          </TooltipContent>
        </Tooltip>
      );
    }

    return button;
  };

  return (
    <TooltipProvider>
      <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-background border-r border-border h-full flex flex-col relative transition-all duration-300`}>
        <ScrollArea className="flex-1 p-2 pb-12">
          <div className="space-y-1">
            {navigationItems.map((item) => {
              const isActive = activePath === item.path;
              return (
                <NavigationButton
                  key={item.id}
                  item={item}
                  isActive={isActive}
                />
              );
            })}
          </div>
          
          <Separator className="my-4" />
          
          {!isCollapsed && (
            <div className="text-xs text-muted-foreground mb-2 px-2">
              Additional Features
            </div>
          )}
          <div className="space-y-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`w-full h-8 ${isCollapsed ? 'justify-center px-2' : 'justify-start'}`}
                  onClick={() => onNavigate('/help')}
                >
                  <FileText className={`h-4 w-4 ${isCollapsed ? '' : 'mr-2'} text-foreground`} />
                  {!isCollapsed && "Help & Support"}
                </Button>
              </TooltipTrigger>
              {isCollapsed && (
                <TooltipContent side="right">
                  <p>Help & Support</p>
                </TooltipContent>
              )}
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`w-full h-8 ${isCollapsed ? 'justify-center px-2' : 'justify-start'}`}
                  onClick={() => onNavigate('/feedback')}
                >
                  <MessageSquare className={`h-4 w-4 ${isCollapsed ? '' : 'mr-2'} text-foreground`} />
                  {!isCollapsed && "Feedback"}
                </Button>
              </TooltipTrigger>
              {isCollapsed && (
                <TooltipContent side="right">
                  <p>Feedback</p>
                </TooltipContent>
              )}
            </Tooltip>
          </div>
        </ScrollArea>
        
        {/* Collapse button fixed at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-background border-t border-border">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={`w-full h-8 ${isCollapsed ? 'justify-center px-2' : 'justify-start'}`}
                onClick={onToggleCollapse}
              >
                {isCollapsed ? (
                  <ChevronRight className="h-4 w-4 text-foreground" />
                ) : (
                  <>
                    <ChevronLeft className="mr-2 h-4 w-4 text-foreground" />
                    Collapse
                  </>
                )}
              </Button>
            </TooltipTrigger>
            {isCollapsed && (
              <TooltipContent side="right">
                <p>Expand</p>
              </TooltipContent>
            )}
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
};

// Interactive wrapper for stories that need state management
const InteractiveLeftNavigation = ({ 
  initialCollapsed = false, 
  activePath = '/dashboard' 
}: { 
  initialCollapsed?: boolean;
  activePath?: string;
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(initialCollapsed);
  const [currentPath, setCurrentPath] = React.useState(activePath);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    // Navigation action logged for demo purposes
  };

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    // Toggle action logged for demo purposes
  };

  return (
    <MockLeftNavigation
      isCollapsed={isCollapsed}
      activePath={currentPath}
      onNavigate={handleNavigate}
      onToggleCollapse={handleToggleCollapse}
    />
  );
};

const meta: Meta<typeof MockLeftNavigation> = {
  title: 'Design System/Organisms/LeftNavigation',
  component: MockLeftNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# LeftNavigation Component

The main application navigation sidebar component that provides access to all major sections of the application.

## Design Guidelines

### When to Use
- Primary navigation in application layouts
- Hierarchical page organization
- Quick access to major application sections
- Space-efficient navigation patterns

### Features
- **Collapsible Design**: Can be collapsed to icon-only view
- **Active State**: Highlights current page
- **Tooltips**: Shows labels when collapsed
- **Responsive**: Adapts to different screen sizes
- **Keyboard Navigation**: Full keyboard accessibility

### States
- **Expanded**: Shows full navigation labels
- **Collapsed**: Shows only icons with tooltips
- **Active**: Highlights current page selection

### Accessibility
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatible
- Focus management
- Tooltip support for collapsed state

### Dependencies
- Requires React Router for navigation
- Uses Lucide React icons
- Built with shadcn/ui components
- Tooltip system for collapsed state

### Storybook Implementation
This story uses a mock implementation that demonstrates the navigation functionality without requiring routing dependencies.
        `
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="h-[600px]">
        <Story />
      </div>
    ),
  ],
  args: {
    isCollapsed: false,
    activePath: '/dashboard'
  },
  argTypes: {
    isCollapsed: {
      description: 'Whether the navigation is in collapsed state',
      control: { type: 'boolean' }
    },
    activePath: {
      description: 'Currently active navigation path',
      control: { 
        type: 'select',
        options: ['/dashboard', '/users', '/projects', '/reports', '/documents', '/calendar', '/messages', '/notifications', '/settings']
      }
    }
  }
} satisfies Meta<typeof MockLeftNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Navigation
export const Default: Story = {
  args: {
    isCollapsed: false,
    activePath: '/dashboard'
  },
  parameters: {
    docs: {
      description: {
        story: 'The default expanded navigation showing all navigation items with Dashboard as the active page.'
      }
    }
  }
};

// Collapsed Navigation
export const Collapsed: Story = {
  args: {
    isCollapsed: true,
    activePath: '/dashboard'
  },
  parameters: {
    docs: {
      description: {
        story: 'The collapsed navigation showing only icons with tooltips. Hover over icons to see the tooltips.'
      }
    }
  }
};

// Different Active Pages
export const ActiveUsers: Story = {
  args: {
    isCollapsed: false,
    activePath: '/users'
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation with Users page selected, showing how active states work.'
      }
    }
  }
};

export const ActiveProjects: Story = {
  args: {
    isCollapsed: false,
    activePath: '/projects'
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation with Projects page selected.'
      }
    }
  }
};

export const ActiveSettings: Story = {
  args: {
    isCollapsed: false,
    activePath: '/settings'
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation with Settings page selected.'
      }
    }
  }
};

// Collapsed with different active pages
export const CollapsedActiveUsers: Story = {
  args: {
    isCollapsed: true,
    activePath: '/users'
  },
  parameters: {
    docs: {
      description: {
        story: 'Collapsed navigation with Users page active, showing how active states work in collapsed mode.'
      }
    }
  }
};

// Interactive demo
export const InteractiveDemo: Story = {
  render: () => <InteractiveLeftNavigation />,
  parameters: {
    docs: {
      description: {
        story: `
Interactive demo of the left navigation component. Try:
- Clicking on different navigation items to see active states
- Clicking the collapse button at the bottom to toggle between expanded and collapsed states
- Hovering over icons in collapsed mode to see tooltips
- Using keyboard navigation (Tab, Enter, Escape)
        `
      }
    }
  }
};

// Responsive demo
export const Mobile: Story = {
  render: () => <InteractiveLeftNavigation />,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Navigation on mobile devices. The navigation maintains its functionality on smaller screens.'
      }
    }
  }
};

// Tablet demo
export const Tablet: Story = {
  render: () => <InteractiveLeftNavigation />,
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    },
    docs: {
      description: {
        story: 'Navigation on tablet devices showing the balanced layout.'
      }
    }
  }
}; 