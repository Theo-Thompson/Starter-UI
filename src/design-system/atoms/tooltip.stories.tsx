import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';
import { Button } from './button';
import { Badge } from './badge';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Input } from './input';
import { Label } from './label';
import { HelpCircle, Info, AlertCircle, CheckCircle, Settings, Download } from 'lucide-react';

const meta: Meta<typeof Tooltip> = {
  title: 'Design System/Molecules/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Tooltip Component

A floating tooltip component built on Radix UI that displays helpful information when users hover over or focus on elements. Perfect for providing additional context without cluttering the interface.

## Design Guidelines

### When to Use
- **Help text**: Explain complex features or controls
- **Additional context**: Provide extra information about elements
- **Definitions**: Define technical terms or abbreviations
- **Status information**: Show current state or progress
- **Keyboard shortcuts**: Display available shortcuts

### When Not to Use
- **Essential information**: Don't hide critical information in tooltips
- **Long content**: Use modals or expandable sections for lengthy text
- **Mobile interfaces**: Touch devices don't have hover states
- **Actionable content**: Tooltips should be informational only

## Accessibility

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Keyboard Navigation**: Accessible via keyboard focus
- **Screen Reader Support**: Proper ARIA attributes and descriptions
- **Focus Management**: Doesn't interfere with keyboard navigation
- **Hover/Focus**: Activates on both mouse hover and keyboard focus

## Technical Implementation

### Components
- \`Tooltip\`: Root container component
- \`TooltipTrigger\`: Element that triggers the tooltip
- \`TooltipContent\`: The tooltip content container
- \`TooltipProvider\`: Context provider for tooltip configuration

### Props
- \`side\`: Position of tooltip (top, right, bottom, left)
- \`sideOffset\`: Distance from trigger element
- \`delayDuration\`: Delay before showing tooltip
- \`open\`: Controlled open state
- \`onOpenChange\`: Callback for open state changes

### Features
- **Positioning**: Smart positioning to avoid viewport edges
- **Animations**: Smooth fade in/out animations
- **Arrow**: Optional arrow pointing to trigger element
- **Delay**: Configurable delay before showing

## Best Practices

1. **Concise content**: Keep tooltip text short and helpful
2. **Consistent timing**: Use consistent delay across your app
3. **Positioning**: Choose appropriate positioning for context
4. **Don't repeat**: Don't duplicate visible text in tooltips
5. **Test accessibility**: Ensure tooltips work with keyboard navigation
6. **Mobile consideration**: Provide alternative access methods for touch devices
        `,
      },
    },
  },

  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// Basic Tooltip
export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a helpful tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

// Different Positions
export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-8">
      <div className="space-y-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Tooltip on top</p>
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Tooltip on right</p>
          </TooltipContent>
        </Tooltip>
      </div>
      
      <div className="space-y-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Tooltip on bottom</p>
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Tooltip on left</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Get help and support</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Info className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>View additional information</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Open settings menu</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Download file</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

// Status Indicators
export const StatusIndicators: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Completed</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Task completed successfully at 2:30 PM</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-yellow-500" />
            <span>Warning</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>This action requires admin approval</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <span>Error</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Failed to save. Please try again.</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

// Form Field Help
export const FormFieldHelp: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>We'll never share your email with anyone else</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Input id="email" placeholder="Enter your email" />
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="password">Password</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Must be at least 8 characters with uppercase, lowercase, and numbers</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Input id="password" type="password" placeholder="Enter your password" />
      </div>
    </div>
  ),
};

// Amazon Waste Management Tooltips
export const AmazonWasteTooltips: Story = {
  render: () => (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle className="text-amazon-orange">Waste Management Dashboard</CardTitle>
        <CardDescription>
          Track your facility's sustainability metrics
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Recycling Rate</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Percentage of waste diverted from landfills through recycling</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="text-2xl font-bold text-green-600">78%</div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Cost Savings</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Money saved through waste reduction and recycling programs</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="text-2xl font-bold text-amazon-orange">$12,450</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Sustainability Score</span>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Overall sustainability rating based on waste reduction, recycling rate, and compliance</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="default">Excellent</Badge>
            <span className="text-sm text-muted-foreground">94/100</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="bg-amazon-orange hover:bg-amazon-orange/90">
                Request Poster
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Create a custom waste management poster for your facility</p>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">
                View Report
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download detailed sustainability report (PDF)</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </CardContent>
    </Card>
  ),
};

// User Profile Tooltips
export const UserProfileTooltips: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Team Member</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar className="h-12 w-12 cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="Theo Thompson" />
                <AvatarFallback>TT</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
                          <TooltipContent>
                <p>Theo Thompson - Senior Engineer<br/>Last active: 2 hours ago</p>
              </TooltipContent>
          </Tooltip>
          
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-medium">Theo Thompson</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="secondary">Admin</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Has full administrative privileges</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <p className="text-sm text-muted-foreground truncate">theo.thompson@example.com</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm">Department:</span>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="text-sm font-medium cursor-pointer">Engineering</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Software Engineering - Cloud Infrastructure Team</p>
              </TooltipContent>
            </Tooltip>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm">Location:</span>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="text-sm font-medium cursor-pointer">Seattle, WA</span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Amazon HQ - Doppler Building<br/>Office: 12.234</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

// Interactive Elements
export const InteractiveElements: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Navigation Bar</h3>
        <div className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm">
                Dashboard
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View your main dashboard (Ctrl+D)</p>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm">
                Requests
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Manage poster requests (Ctrl+R)</p>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm">
                Analytics
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View sustainability analytics (Ctrl+A)</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Toolbar</h3>
        <div className="flex gap-2 p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download current view</p>
            </TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <HelpCircle className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Help & Documentation</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
};

// Long Content
export const LongContent: Story = {
  render: () => (
    <div className="space-y-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover for details</Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p>
            This is a longer tooltip that contains more detailed information about the feature. 
            It wraps to multiple lines when the content is too long to fit on a single line.
          </p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Policy Information</Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-sm">
          <div className="space-y-2">
            <p className="font-medium">Amazon Waste Policy</p>
            <p className="text-xs">
              All facilities must comply with local and federal waste management regulations. 
              This includes proper sorting, disposal, and documentation of all waste materials.
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

// Disabled State
export const DisabledState: Story = {
  render: () => (
    <div className="space-y-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button disabled>Disabled Button</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This feature is currently disabled</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" disabled>
            Unavailable Action
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This action is not available in your current plan</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}; 