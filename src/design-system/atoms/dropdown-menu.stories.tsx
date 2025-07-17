import type { Meta, StoryObj } from '@storybook/react-vite';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuShortcut
} from './dropdown-menu';
import { Button } from './button';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Badge } from './badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { 
  User, 
  Settings, 
  LogOut, 
  Plus, 
  Mail, 
  MessageSquare, 
  PlusCircle,
  Users,
  CreditCard,
  Keyboard,
  Cloud,
  LifeBuoy,
  Building,
  FileText,
  Download,
  Trash2,
  Edit,
  Copy,
  MoreHorizontal,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Design System/Organisms/Dropdown Menu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Dropdown Menu Component

A dropdown menu component built on Radix UI that displays a list of actions or options when triggered. Perfect for context menus, user menus, and action lists.

## Design Guidelines

### When to Use
- **User menus**: Profile actions, settings, logout
- **Context menus**: Right-click or action menus
- **Action lists**: Multiple actions for an item
- **Navigation**: Secondary navigation options
- **Filters**: Multiple filter options

### When Not to Use
- **Form inputs**: Use Select component instead
- **Simple choices**: Use radio buttons for few options
- **Always visible**: Use regular buttons for primary actions
- **Complex forms**: Use dedicated form layouts

## Accessibility

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Keyboard Navigation**: Arrow keys, Enter, Escape, Tab
- **Screen Reader Support**: Proper ARIA labels and roles
- **Focus Management**: Traps focus within menu
- **Shortcuts**: Supports keyboard shortcuts display

## Technical Implementation

### Components
- \`DropdownMenu\`: Root container
- \`DropdownMenuTrigger\`: Button that opens menu
- \`DropdownMenuContent\`: Menu content container
- \`DropdownMenuItem\`: Individual menu item
- \`DropdownMenuLabel\`: Section label
- \`DropdownMenuSeparator\`: Visual separator
- \`DropdownMenuGroup\`: Logical grouping
- \`DropdownMenuSub\`: Submenu container
- \`DropdownMenuCheckboxItem\`: Checkbox menu item
- \`DropdownMenuRadioGroup\`: Radio group container
- \`DropdownMenuRadioItem\`: Radio menu item
- \`DropdownMenuShortcut\`: Keyboard shortcut display

### Features
- **Nested menus**: Support for submenus
- **Checkboxes**: Toggle options
- **Radio groups**: Single selection
- **Keyboard shortcuts**: Display shortcuts
- **Icons**: Support for icons in items

## Best Practices

1. **Logical grouping**: Group related actions together
2. **Clear labels**: Use descriptive action names
3. **Consistent icons**: Use consistent icon style
4. **Appropriate separators**: Separate logical groups
5. **Keyboard shortcuts**: Include shortcuts for power users
6. **Loading states**: Show loading for async actions
        `,
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls menu visibility',
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Callback when menu state changes',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

// Basic Dropdown Menu
export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

// User Menu
export const UserMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>TT</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Theo Thompson</p>
            <p className="text-xs leading-none text-muted-foreground truncate">
              theo.thompson@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard className="mr-2 h-4 w-4" />
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            Team
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Plus className="mr-2 h-4 w-4" />
              Invite users
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare className="mr-2 h-4 w-4" />
                Message
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                More...
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          Support
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          API
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

// Context Menu
export const ContextMenu: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Right-click the card below or use the menu button:
      </p>
      <Card className="w-64">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Project File
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Copy className="mr-2 h-4 w-4" />
                Make a copy
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                Download
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">document.pdf</div>
          <p className="text-xs text-muted-foreground">
            Modified 2 hours ago
          </p>
        </CardContent>
      </Card>
    </div>
  ),
};

// Amazon Waste Management Menu
export const AmazonWasteMenu: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle className="text-amazon-orange">Facility Actions</CardTitle>
        <CardDescription>
          Quick actions for SEA1 - Seattle Fulfillment Center
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building className="h-4 w-4" />
            <span className="font-medium">SEA1 - Seattle</span>
          </div>
          <Badge variant="default">Active</Badge>
        </div>
        
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-amazon-orange hover:bg-amazon-orange/90">
                <Plus className="mr-2 h-4 w-4" />
                New Request
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Poster Types</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                General Waste Guidelines
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                Recycling Instructions
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                Hazardous Materials
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                Food Waste Management
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Plus className="mr-2 h-4 w-4" />
                Custom Poster
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Actions
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Reports</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                Monthly Report
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                Sustainability Metrics
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Facility Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4" />
                Manage Users
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  ),
};

// With Checkboxes
export const WithCheckboxes: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = useState(true);
    const [showActivityBar, setShowActivityBar] = useState(false);
    const [showPanel, setShowPanel] = useState(false);
    
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">View Options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
            disabled
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

// With Radio Groups
export const WithRadioGroups: Story = {
  render: () => {
    const [position, setPosition] = useState('bottom');
    
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Panel Position</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

// Complex Menu
export const ComplexMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Complex Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            Team
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Plus className="mr-2 h-4 w-4" />
              Invite users
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare className="mr-2 h-4 w-4" />
                Message
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                More...
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          Support
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          API
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}; 

// Interactive Selection Menu
export const InteractiveSelection: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [isOpen, setIsOpen] = useState(false);
    
    const options = [
      { value: 'create', label: 'Create New', icon: Plus },
      { value: 'edit', label: 'Edit Existing', icon: Edit },
      { value: 'copy', label: 'Copy', icon: Copy },
      { value: 'delete', label: 'Delete', icon: Trash2 }
    ];

    const handleSelect = (value: string) => {
      setSelectedOption(value);
      setIsOpen(false);
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Selected:</span>
          <Badge variant={selectedOption ? 'default' : 'secondary'}>
            {selectedOption || 'None'}
          </Badge>
        </div>
        
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Actions
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Available Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {options.map((option) => (
              <DropdownMenuItem 
                key={option.value}
                onClick={() => handleSelect(option.value)}
              >
                <option.icon className="mr-2 h-4 w-4" />
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  },
};

// Checkbox Group Menu
export const CheckboxGroup: Story = {
  render: () => {
    const [checkedItems, setCheckedItems] = useState<string[]>([]);
    
    const toggleItem = (itemId: string) => {
      setCheckedItems(prev => 
        prev.includes(itemId) 
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId]
      );
    };

    const menuItems = [
      { id: 'general', label: 'General Waste' },
      { id: 'recycling', label: 'Recycling' },
      { id: 'hazardous', label: 'Hazardous Materials' },
      { id: 'organic', label: 'Organic Waste' },
      { id: 'electronic', label: 'Electronic Waste' }
    ];

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Selected types:</span>
          <span className="text-sm text-muted-foreground">
            {checkedItems.length > 0 ? checkedItems.join(', ') : 'None'}
          </span>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Waste Types ({checkedItems.length})
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Waste Types</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {menuItems.map((item) => (
              <DropdownMenuCheckboxItem
                key={item.id}
                checked={checkedItems.includes(item.id)}
                onCheckedChange={() => toggleItem(item.id)}
              >
                {item.label}
              </DropdownMenuCheckboxItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setCheckedItems([])}>
              Clear All
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  },
};

// Radio Group Menu
export const RadioGroup: Story = {
  render: () => {
    const [selectedPriority, setSelectedPriority] = useState<string>('normal');
    
    const priorities = [
      { value: 'low', label: 'Low Priority' },
      { value: 'normal', label: 'Normal Priority' },
      { value: 'high', label: 'High Priority' },
      { value: 'urgent', label: 'Urgent' }
    ];

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Priority:</span>
          <Badge variant={selectedPriority === 'urgent' ? 'destructive' : 'default'}>
            {priorities.find(p => p.value === selectedPriority)?.label}
          </Badge>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Set Priority
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Request Priority</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup 
              value={selectedPriority} 
              onValueChange={setSelectedPriority}
            >
              {priorities.map((priority) => (
                <DropdownMenuRadioItem 
                  key={priority.value} 
                  value={priority.value}
                >
                  {priority.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  },
};

// Dynamic Content Menu
export const DynamicContent: Story = {
  render: () => {
    const [menuType, setMenuType] = useState<'actions' | 'settings' | 'user'>('actions');
    const [isLoading, setIsLoading] = useState(false);
    const [userRole, setUserRole] = useState<'admin' | 'user'>('user');
    
    const handleAsyncAction = async (action: string) => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoading(false);
      console.log(`Executed: ${action}`);
    };

    const renderMenuContent = () => {
      switch (menuType) {
        case 'actions':
          return (
            <>
              <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleAsyncAction('create')}>
                <Plus className="mr-2 h-4 w-4" />
                Create New
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleAsyncAction('edit')}>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleAsyncAction('copy')}>
                <Copy className="mr-2 h-4 w-4" />
                Copy
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                onClick={() => handleAsyncAction('delete')}
                className="text-red-600"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </>
          );
        case 'settings':
          return (
            <>
              <DropdownMenuLabel>Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Preferences
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Keyboard className="mr-2 h-4 w-4" />
                Keyboard Shortcuts
              </DropdownMenuItem>
            </>
          );
        case 'user':
          return (
            <>
              <DropdownMenuLabel>User Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                Messages
              </DropdownMenuItem>
              {userRole === 'admin' && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4" />
                    Admin Panel
                  </DropdownMenuItem>
                </>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </>
          );
        default:
          return null;
      }
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Menu Type:</span>
          <div className="flex space-x-1">
            <Button 
              size="sm" 
              variant={menuType === 'actions' ? 'default' : 'outline'}
              onClick={() => setMenuType('actions')}
            >
              Actions
            </Button>
            <Button 
              size="sm" 
              variant={menuType === 'settings' ? 'default' : 'outline'}
              onClick={() => setMenuType('settings')}
            >
              Settings
            </Button>
            <Button 
              size="sm" 
              variant={menuType === 'user' ? 'default' : 'outline'}
              onClick={() => setMenuType('user')}
            >
              User
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">User Role:</span>
          <Button 
            size="sm" 
            variant={userRole === 'admin' ? 'default' : 'outline'}
            onClick={() => setUserRole(userRole === 'admin' ? 'user' : 'admin')}
          >
            {userRole === 'admin' ? 'Admin' : 'User'}
          </Button>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Open Menu'}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {renderMenuContent()}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  },
};

// Nested Submenu
export const NestedSubmenu: Story = {
  render: () => {
    const [selectedPath, setSelectedPath] = useState<string>('');
    
    const handleMenuSelect = (path: string) => {
      setSelectedPath(path);
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Last Selected:</span>
          <Badge variant={selectedPath ? 'default' : 'secondary'}>
            {selectedPath || 'None'}
          </Badge>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Nested Menu
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Facility Management</DropdownMenuLabel>
            <DropdownMenuSeparator />
            
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Building className="mr-2 h-4 w-4" />
                Facilities
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => handleMenuSelect('facilities/create')}>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Facility
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleMenuSelect('facilities/list')}>
                  <FileText className="mr-2 h-4 w-4" />
                  List Facilities
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem onClick={() => handleMenuSelect('facilities/settings/general')}>
                      General Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleMenuSelect('facilities/settings/waste')}>
                      Waste Management
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleMenuSelect('facilities/settings/notifications')}>
                      Notifications
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <FileText className="mr-2 h-4 w-4" />
                Reports
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => handleMenuSelect('reports/waste')}>
                  Waste Reports
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleMenuSelect('reports/compliance')}>
                  Compliance Reports
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleMenuSelect('reports/analytics')}>
                  Analytics
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleMenuSelect('help')}>
              <LifeBuoy className="mr-2 h-4 w-4" />
              Help & Support
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  },
};

// Error Handling Menu
export const ErrorHandling: Story = {
  render: () => {
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [lastAction, setLastAction] = useState<string>('');
    
    const handleAction = async (action: string) => {
      setIsLoading(true);
      setHasError(false);
      setLastAction(action);
      
      // Simulate random error
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (Math.random() < 0.3) {
        setHasError(true);
      }
      
      setIsLoading(false);
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Status:</span>
          <Badge variant={hasError ? 'destructive' : isLoading ? 'secondary' : 'default'}>
            {hasError ? 'Error' : isLoading ? 'Loading' : 'Ready'}
          </Badge>
        </div>
        
        {hasError && (
          <div className="bg-red-50 border border-red-200 rounded-md p-3">
            <p className="text-sm text-red-600">
              Failed to execute "{lastAction}". Please try again.
            </p>
          </div>
        )}
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" disabled={isLoading}>
              {isLoading ? 'Processing...' : 'Actions'}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions (May Fail)</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleAction('Create Resource')}>
              <Plus className="mr-2 h-4 w-4" />
              Create Resource
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleAction('Update Resource')}>
              <Edit className="mr-2 h-4 w-4" />
              Update Resource
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleAction('Delete Resource')}>
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Resource
            </DropdownMenuItem>
            {hasError && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setHasError(false)}>
                  <Download className="mr-2 h-4 w-4" />
                  Retry Last Action
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  },
}; 