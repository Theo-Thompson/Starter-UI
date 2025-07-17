import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../atoms/card';
import { Badge } from '../atoms/badge';
import { Button } from '../atoms/button';
import { Separator } from '../atoms/separator';
import { Input } from '../atoms/input';
import { 
  Palette, 
  User, 
  Settings, 
  LogOut, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  Search, 
  Filter, 
  Download, 
  Upload, 
  Plus, 
  Minus, 
  Edit, 
  Trash2, 
  Save, 
  Copy, 
  Eye, 
  EyeOff, 
   
  Home, 
  Building, 
   
  Package, 
  ShoppingCart, 
  CreditCard, 
  DollarSign, 
  TrendingUp, 
  BarChart, 
  PieChart, 
  FileText, 
  Folder, 
  Image, 
  Video, 
  Music, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Info, 
  HelpCircle, 
  Loader, 
  Zap, 
  Wifi, 
  Battery, 
  Bell, 
  MessageSquare, 
  Share, 
  Link, 
  Lock, 
  Unlock, 
  Shield, 
  Key, 
  Globe, 
  Monitor, 
  Smartphone, 
  Tablet, 
  ChevronLeft, 
  ChevronRight, 
  ChevronUp, 
  ChevronDown, 
  ArrowLeft, 
  ArrowRight, 
  ArrowUp, 
  ArrowDown, 
  ExternalLink, 
  MoreHorizontal, 
  MoreVertical, 
  X, 
  Check, 
  RefreshCw 
} from 'lucide-react';
import { useState } from 'react';

const meta: Meta = {
  title: 'Design System/Foundation/Icons',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Icon System

The Application UI Kit uses Lucide React icons for consistent, scalable, and accessible iconography throughout the application.

## Design Principles

- **Consistency**: Unified icon style across all components
- **Accessibility**: Proper ARIA labels and semantic meanings
- **Scalability**: Vector-based icons that scale perfectly
- **Performance**: Optimized icon loading and rendering

## Icon Library

### Navigation Icons

- **Home**: Represents the main landing page or dashboard.
- **ChevronLeft/ChevronRight**: Indicate previous/next navigation or back/forward.
- **ChevronUp/ChevronDown**: Expand/collapse sections or move up/down.
- **ArrowLeft/ArrowRight/ArrowUp/ArrowDown**: Navigate back, forward, up, or down.
- **ExternalLink**: Indicates a link that opens in a new tab.
- **MoreHorizontal/MoreVertical**: Show more options or expand a menu.

### Communication Icons

- **Mail**: Email and messages.
- **Phone**: Phone numbers.
- **MessageSquare**: Chat and messaging.
- **Bell**: Notifications.
- **Share**: Share content.
- **Link**: Links and URLs.

### Data & Content Icons

- **FileText**: Documents and files.
- **Folder**: Folders and directories.
- **Image**: Images and photos.
- **Video**: Video content.
- **Music**: Audio content.
- **Download/Upload**: Download and upload files.
- **Package**: Packages and deliveries.

### Status & Feedback Icons

- **CheckCircle**: Success states.
- **XCircle**: Error states.
- **AlertTriangle**: Warning states.
- **Info**: Information.
- **HelpCircle**: Help and support.
- **Loader**: Loading states.
- **Check/X**: Checkmarks and cancel.
- **RefreshCw**: Refresh and reload.

### Business & Commerce Icons

- **Building**: Buildings and offices.
- **ShoppingCart**: Shopping cart.
- **CreditCard**: Payment methods.
- **DollarSign**: Money and pricing.
- **TrendingUp**: Growth and trends.
- **BarChart/PieChart**: Charts and analytics.
- **Calendar**: Dates and scheduling.
- **Clock**: Time and duration.
- **MapPin**: Location and addresses.

### Technology & Security Icons

- **Monitor**: Desktop computers.
- **Smartphone/Tablet**: Mobile and tablet devices.
- **Wifi**: Network connectivity.
- **Battery**: Power and battery.
- **Lock/Unlock**: Security and privacy.
- **Shield**: Protection and security.
- **Key**: Authentication.
- **Globe**: Web and internet.
- **Zap**: Energy and performance.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const iconCategories = {
  'User Interface': [
    { name: 'User', icon: User, description: 'User profile and accounts' },
    { name: 'Settings', icon: Settings, description: 'Settings and configuration' },
    { name: 'LogOut', icon: LogOut, description: 'Sign out and logout' },
    { name: 'Search', icon: Search, description: 'Search functionality' },
    { name: 'Filter', icon: Filter, description: 'Filter and sort options' },
    { name: 'Plus', icon: Plus, description: 'Add new items' },
    { name: 'Minus', icon: Minus, description: 'Remove items' },
    { name: 'Edit', icon: Edit, description: 'Edit and modify' },
    { name: 'Trash2', icon: Trash2, description: 'Delete and remove' },
    { name: 'Save', icon: Save, description: 'Save changes' },
    { name: 'Copy', icon: Copy, description: 'Copy to clipboard' },
    { name: 'Eye', icon: Eye, description: 'Show visibility' },
    { name: 'EyeOff', icon: EyeOff, description: 'Hide visibility' },
  ],
  'Navigation': [
    { name: 'Home', icon: Home, description: 'Home page' },
    { name: 'ChevronLeft', icon: ChevronLeft, description: 'Previous/Back' },
    { name: 'ChevronRight', icon: ChevronRight, description: 'Next/Forward' },
    { name: 'ChevronUp', icon: ChevronUp, description: 'Up/Expand' },
    { name: 'ChevronDown', icon: ChevronDown, description: 'Down/Collapse' },
    { name: 'ArrowLeft', icon: ArrowLeft, description: 'Go back' },
    { name: 'ArrowRight', icon: ArrowRight, description: 'Go forward' },
    { name: 'ArrowUp', icon: ArrowUp, description: 'Move up' },
    { name: 'ArrowDown', icon: ArrowDown, description: 'Move down' },
    { name: 'ExternalLink', icon: ExternalLink, description: 'External links' },
    { name: 'MoreHorizontal', icon: MoreHorizontal, description: 'More options' },
    { name: 'MoreVertical', icon: MoreVertical, description: 'More options' },
  ],
  'Communication': [
    { name: 'Mail', icon: Mail, description: 'Email and messages' },
    { name: 'Phone', icon: Phone, description: 'Phone numbers' },
    { name: 'MessageSquare', icon: MessageSquare, description: 'Chat and messaging' },
    { name: 'Bell', icon: Bell, description: 'Notifications' },
    { name: 'Share', icon: Share, description: 'Share content' },
    { name: 'Link', icon: Link, description: 'Links and URLs' },
  ],
  'Data & Content': [
    { name: 'FileText', icon: FileText, description: 'Documents and files' },
    { name: 'Folder', icon: Folder, description: 'Folders and directories' },
    { name: 'Image', icon: Image, description: 'Images and photos' },
    { name: 'Video', icon: Video, description: 'Video content' },
    { name: 'Music', icon: Music, description: 'Audio content' },
    { name: 'Download', icon: Download, description: 'Download files' },
    { name: 'Upload', icon: Upload, description: 'Upload files' },
    { name: 'Package', icon: Package, description: 'Packages and deliveries' },
  ],
  'Status & Feedback': [
    { name: 'CheckCircle', icon: CheckCircle, description: 'Success states' },
    { name: 'XCircle', icon: XCircle, description: 'Error states' },
    { name: 'AlertTriangle', icon: AlertTriangle, description: 'Warning states' },
    { name: 'Info', icon: Info, description: 'Information' },
    { name: 'HelpCircle', icon: HelpCircle, description: 'Help and support' },
    { name: 'Loader', icon: Loader, description: 'Loading states' },
    { name: 'Check', icon: Check, description: 'Checkmarks' },
    { name: 'X', icon: X, description: 'Close and cancel' },
    { name: 'RefreshCw', icon: RefreshCw, description: 'Refresh and reload' },
  ],
  'Business & Commerce': [
    { name: 'Building', icon: Building, description: 'Buildings and offices' },
    { name: 'ShoppingCart', icon: ShoppingCart, description: 'Shopping cart' },
    { name: 'CreditCard', icon: CreditCard, description: 'Payment methods' },
    { name: 'DollarSign', icon: DollarSign, description: 'Money and pricing' },
    { name: 'TrendingUp', icon: TrendingUp, description: 'Growth and trends' },
    { name: 'BarChart', icon: BarChart, description: 'Charts and analytics' },
    { name: 'PieChart', icon: PieChart, description: 'Data visualization' },
    { name: 'Calendar', icon: Calendar, description: 'Dates and scheduling' },
    { name: 'Clock', icon: Clock, description: 'Time and duration' },
    { name: 'MapPin', icon: MapPin, description: 'Location and addresses' },
  ],
  'Technology & Security': [
    { name: 'Monitor', icon: Monitor, description: 'Desktop computers' },
    { name: 'Smartphone', icon: Smartphone, description: 'Mobile devices' },
    { name: 'Tablet', icon: Tablet, description: 'Tablet devices' },
    { name: 'Wifi', icon: Wifi, description: 'Network connectivity' },
    { name: 'Battery', icon: Battery, description: 'Power and battery' },
    { name: 'Lock', icon: Lock, description: 'Security and privacy' },
    { name: 'Unlock', icon: Unlock, description: 'Access granted' },
    { name: 'Shield', icon: Shield, description: 'Protection and security' },
    { name: 'Key', icon: Key, description: 'Authentication' },
    { name: 'Globe', icon: Globe, description: 'Web and internet' },
    { name: 'Zap', icon: Zap, description: 'Energy and performance' },
  ],
};

const IconCard = ({ 
  name, 
  icon: Icon, 
  description, 
  size = 'h-6 w-6' 
}: { 
  name: string; 
  icon: React.ComponentType<any>; 
  description: string; 
  size?: string;
}) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`<${name} className="${size}" />`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <Card className="transition-all hover:shadow-md cursor-pointer group" onClick={copyToClipboard}>
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <Icon className={`${size} text-muted-foreground group-hover:text-primary-brand transition-colors`} />
          <div className="flex-1">
            <h4 className="font-medium text-sm">{name}</h4>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <code className="text-xs bg-muted px-2 py-1 rounded font-mono">
            {name}
          </code>
          {copied && (
            <Badge variant="secondary" className="text-xs">
              Copied!
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const SizeExample = ({ 
  size, 
  className, 
  label 
}: { 
  size: string; 
  className: string; 
  label: string;
}) => (
  <div className="flex items-center gap-3">
    <User className={className} />
    <div>
      <span className="text-sm font-medium">{label}</span>
      <div className="text-xs text-muted-foreground">
        {size} • {className}
      </div>
    </div>
  </div>
);

const ContextExample = ({ 
  title, 
  description, 
  children 
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode;
}) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-base">{title}</CardTitle>
      <CardDescription className="text-sm">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      {children}
    </CardContent>
  </Card>
);

export const IconSystem: Story = {
  render: () => (
    <div className="max-w-7xl mx-auto p-8 space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Palette className="h-8 w-8 text-primary-brand" />
          <h1 className="text-4xl font-bold">Icon System</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Comprehensive icon library powered by Lucide React
        </p>
      </div>

      {/* Icon Sizes */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Icon Sizes</h2>
          <p className="text-muted-foreground">
            Standard icon sizes for different contexts and hierarchies
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Size Scale</CardTitle>
            <CardDescription>Standard icon sizes with their use cases</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <SizeExample size="12px" className="h-3 w-3" label="Extra Small" />
            <SizeExample size="16px" className="h-4 w-4" label="Small" />
            <SizeExample size="20px" className="h-5 w-5" label="Medium" />
            <SizeExample size="24px" className="h-6 w-6" label="Large (Default)" />
            <SizeExample size="32px" className="h-8 w-8" label="Extra Large" />
            <SizeExample size="48px" className="h-12 w-12" label="2X Large" />
            <SizeExample size="64px" className="h-16 w-16" label="3X Large" />
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Usage Examples */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Usage Examples</h2>
          <p className="text-muted-foreground">
            Icons in context within UI components
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContextExample
            title="Buttons with Icons"
            description="Icons enhance button actions and improve usability"
          >
            <div className="space-y-3">
              <div className="flex gap-2">
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Item
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
              <div className="flex gap-2">
                <Button variant="destructive" className="flex items-center gap-2">
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
                <Button variant="secondary" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </Button>
              </div>
            </div>
          </ContextExample>

          <ContextExample
            title="Form Fields"
            description="Icons provide visual cues for form inputs"
          >
            <div className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Email address" className="pl-10" />
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-10" />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Location" className="pl-10" />
              </div>
            </div>
          </ContextExample>

          <ContextExample
            title="Navigation"
            description="Icons improve navigation clarity and recognition"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer">
                <Home className="h-5 w-5 text-muted-foreground" />
                <span>Dashboard</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer">
                <User className="h-5 w-5 text-muted-foreground" />
                <span>Profile</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer">
                <Settings className="h-5 w-5 text-muted-foreground" />
                <span>Settings</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer">
                <LogOut className="h-5 w-5 text-muted-foreground" />
                <span>Sign Out</span>
              </div>
            </div>
          </ContextExample>

          <ContextExample
            title="Status Indicators"
            description="Icons communicate states and feedback"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span>Success - Task completed</span>
              </div>
              <div className="flex items-center gap-2 text-red-600">
                <XCircle className="h-5 w-5" />
                <span>Error - Something went wrong</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-600">
                <AlertTriangle className="h-5 w-5" />
                <span>Warning - Action required</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600">
                <Info className="h-5 w-5" />
                <span>Info - Additional information</span>
              </div>
            </div>
          </ContextExample>
        </div>
      </section>

      <Separator />

      {/* Icon Categories */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Icon Library</h2>
          <p className="text-muted-foreground">
            Complete collection of icons organized by category. Click any icon to copy its code.
          </p>
        </div>
        
        {Object.entries(iconCategories).map(([category, icons]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-lg font-semibold">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {icons.map((icon) => (
                <IconCard key={icon.name} {...icon} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <Separator />

      {/* Usage Guidelines */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Usage Guidelines</h2>
          <p className="text-muted-foreground">
            Best practices for using icons effectively in your designs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Visual Guidelines
              </CardTitle>
              <CardDescription>Consistent visual appearance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-2">
                <p>• Use consistent sizing within similar contexts</p>
                <p>• Maintain adequate spacing around icons</p>
                <p>• Ensure sufficient color contrast (4.5:1 minimum)</p>
                <p>• Align icons with text baselines</p>
                <p>• Use semantic colors for status icons</p>
                <p>• Avoid mixing icon styles from different libraries</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Accessibility
              </CardTitle>
              <CardDescription>Making icons accessible to all users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-2">
                <p>• Use aria-label for standalone icons</p>
                <p>• Hide decorative icons with aria-hidden="true"</p>
                <p>• Provide text alternatives for icon-only buttons</p>
                <p>• Don't rely solely on color to convey meaning</p>
                <p>• Test with screen readers</p>
                <p>• Use semantic HTML elements when possible</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Implementation */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Implementation</h2>
          <p className="text-muted-foreground">
            How to import and use icons in your components
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Import Icons</CardTitle>
              <CardDescription>Tree-shakeable imports for optimal performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-2">Named Imports (Recommended)</h4>
                  <code className="text-sm bg-muted p-3 rounded block font-mono">
                    import {'{ User, Settings, LogOut }'} from 'lucide-react'
                  </code>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Usage in Components</h4>
                  <code className="text-sm bg-muted p-3 rounded block font-mono">
                    {'<User className="h-4 w-4" />'}
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Icon Props</CardTitle>
              <CardDescription>Common props for customizing icons</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span>className</span>
                    <code className="bg-muted px-1 py-0.5 rounded text-xs">string</code>
                  </div>
                  <div className="flex justify-between">
                    <span>size</span>
                    <code className="bg-muted px-1 py-0.5 rounded text-xs">number</code>
                  </div>
                  <div className="flex justify-between">
                    <span>color</span>
                    <code className="bg-muted px-1 py-0.5 rounded text-xs">string</code>
                  </div>
                  <div className="flex justify-between">
                    <span>strokeWidth</span>
                    <code className="bg-muted px-1 py-0.5 rounded text-xs">number</code>
                  </div>
                  <div className="flex justify-between">
                    <span>aria-label</span>
                    <code className="bg-muted px-1 py-0.5 rounded text-xs">string</code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  ),
}; 