import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from './separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import { Button } from './button';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Label } from './label';
import { Input } from './input';

const meta: Meta<typeof Separator> = {
  title: 'Design System/Atoms/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Separator Component

A visual separator component built on Radix UI that creates clear divisions between content sections. Can be used horizontally or vertically to organize and structure interface elements.

## Design Guidelines

### When to Use
- **Content sections**: Separate different content areas
- **List items**: Divide items in lists or menus
- **Form sections**: Group related form fields
- **Navigation**: Separate navigation items or sections
- **Layout structure**: Create visual hierarchy

### When Not to Use
- **Decorative only**: Don't use purely for decoration
- **Overuse**: Too many separators can create clutter
- **Subtle divisions**: Use spacing instead for minor divisions
- **Interactive elements**: Separators should not be clickable

## Accessibility

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Screen Reader Support**: Properly announced by screen readers
- **Semantic HTML**: Uses appropriate ARIA attributes
- **Decorative option**: Can be marked as decorative for screen readers
- **Keyboard Navigation**: Doesn't interfere with keyboard navigation

## Technical Implementation

### Props
- \`orientation\`: Direction of separator (horizontal, vertical)
- \`decorative\`: Whether separator is decorative (affects screen readers)
- \`className\`: Additional CSS classes for styling

### Features
- **Flexible orientation**: Horizontal or vertical layout
- **Accessibility aware**: Proper ARIA attributes
- **Customizable**: Easy to style and theme
- **Responsive**: Works well across different screen sizes

## Best Practices

1. **Logical grouping**: Use to separate logically related content
2. **Consistent spacing**: Maintain consistent spacing around separators
3. **Appropriate thickness**: Use appropriate thickness for context
4. **Color contrast**: Ensure sufficient contrast for visibility
5. **Semantic meaning**: Use decorative=false for meaningful separators
6. **Responsive design**: Consider how separators work on different screen sizes
        `,
      },
    },
  },
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Direction of the separator',
    },
    decorative: {
      control: 'boolean',
      description: 'Whether the separator is decorative',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Separator>;

// Basic Separator
export const Default: Story = {
  render: () => (
    <div className="w-64 space-y-4">
      <div>
        <p className="text-sm text-muted-foreground">
          This is some content above the separator.
        </p>
      </div>
      <Separator />
      <div>
        <p className="text-sm text-muted-foreground">
          This is some content below the separator.
        </p>
      </div>
    </div>
  ),
};

// Vertical Separator
export const Vertical: Story = {
  render: () => (
    <div className="flex h-20 items-center space-x-4">
      <div className="text-sm text-muted-foreground">
        Left content
      </div>
      <Separator orientation="vertical" />
      <div className="text-sm text-muted-foreground">
        Right content
      </div>
    </div>
  ),
};

// In Navigation
export const InNavigation: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Horizontal Navigation</h3>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">Home</Button>
          <Separator orientation="vertical" className="h-4" />
          <Button variant="ghost" size="sm">About</Button>
          <Separator orientation="vertical" className="h-4" />
          <Button variant="ghost" size="sm">Services</Button>
          <Separator orientation="vertical" className="h-4" />
          <Button variant="ghost" size="sm">Contact</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Vertical Navigation</h3>
        <div className="w-48 space-y-2">
          <Button variant="ghost" className="w-full justify-start">Dashboard</Button>
          <Separator />
          <Button variant="ghost" className="w-full justify-start">Projects</Button>
          <Button variant="ghost" className="w-full justify-start">Tasks</Button>
          <Separator />
          <Button variant="ghost" className="w-full justify-start">Settings</Button>
        </div>
      </div>
    </div>
  ),
};

// In Cards
export const InCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
          <CardDescription>Manage your account settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-muted-foreground">john@example.com</p>
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Member since</span>
              <span className="text-sm font-medium">January 2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Status</span>
              <Badge variant="default">Active</Badge>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Edit Profile</Button>
            <Button size="sm">Save Changes</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Statistics</CardTitle>
          <CardDescription>Your activity overview</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">24</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">156</div>
              <div className="text-sm text-muted-foreground">Tasks</div>
            </div>
          </div>
          
          <Separator />
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">89%</div>
              <div className="text-sm text-muted-foreground">Completion</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.8</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

// Amazon Waste Management Dashboard
export const AmazonWasteDashboard: Story = {
  render: () => (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-amazon-orange">Facility Overview</CardTitle>
        <CardDescription>
          SEA1 - Seattle Fulfillment Center sustainability metrics
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">78%</div>
            <div className="text-sm text-muted-foreground">Recycling Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amazon-orange">$12.4K</div>
            <div className="text-sm text-muted-foreground">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">94</div>
            <div className="text-sm text-muted-foreground">Sustainability Score</div>
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-3">
          <h4 className="font-medium">Recent Activity</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Poster Request #REQ-001</span>
              <Badge variant="secondary">Pending</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Monthly Report Generated</span>
              <Badge variant="default">Completed</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Recycling Bin Collection</span>
              <Badge variant="outline">Scheduled</Badge>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-3">
          <h4 className="font-medium">Quick Actions</h4>
          <div className="flex gap-2">
            <Button className="bg-amazon-orange hover:bg-amazon-orange/90" size="sm">
              Request Poster
            </Button>
            <Button variant="outline" size="sm">
              View Reports
            </Button>
            <Button variant="outline" size="sm">
              Settings
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

// In Forms
export const InForms: Story = {
  render: () => (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
        <CardDescription>Update your contact details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <h4 className="font-medium text-sm">Personal Information</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-4">
          <h4 className="font-medium text-sm">Contact Details</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-4">
          <h4 className="font-medium text-sm">Preferences</h4>
                     <div className="space-y-2">
             <div className="flex items-center space-x-2">
               <input type="checkbox" id="newsletter" aria-label="Subscribe to newsletter" />
               <Label htmlFor="newsletter">Subscribe to newsletter</Label>
             </div>
             <div className="flex items-center space-x-2">
               <input type="checkbox" id="notifications" aria-label="Email notifications" />
               <Label htmlFor="notifications">Email notifications</Label>
             </div>
           </div>
        </div>
      </CardContent>
    </Card>
  ),
};

// Different Styles
export const DifferentStyles: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Default Separator</h3>
        <div className="w-64">
          <p className="text-sm">Content above</p>
          <Separator className="my-4" />
          <p className="text-sm">Content below</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Thicker Separator</h3>
        <div className="w-64">
          <p className="text-sm">Content above</p>
          <Separator className="my-4 h-0.5" />
          <p className="text-sm">Content below</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Colored Separator</h3>
        <div className="w-64">
          <p className="text-sm">Content above</p>
          <Separator className="my-4 bg-amazon-orange" />
          <p className="text-sm">Content below</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Dashed Separator</h3>
        <div className="w-64">
          <p className="text-sm">Content above</p>
          <Separator className="my-4 border-dashed border-t border-border bg-transparent h-0" />
          <p className="text-sm">Content below</p>
        </div>
      </div>
    </div>
  ),
};

// In Lists
export const InLists: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Menu Items</h3>
        <div className="border rounded-md p-2">
          <div className="py-2 px-3 text-sm hover:bg-accent rounded-sm cursor-pointer">
            Dashboard
          </div>
          <Separator className="my-1" />
          <div className="py-2 px-3 text-sm hover:bg-accent rounded-sm cursor-pointer">
            Projects
          </div>
          <div className="py-2 px-3 text-sm hover:bg-accent rounded-sm cursor-pointer">
            Tasks
          </div>
          <Separator className="my-1" />
          <div className="py-2 px-3 text-sm hover:bg-accent rounded-sm cursor-pointer">
            Settings
          </div>
          <div className="py-2 px-3 text-sm hover:bg-accent rounded-sm cursor-pointer">
            Help
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Notification List</h3>
        <div className="border rounded-md p-4 space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">New message received</p>
              <p className="text-xs text-muted-foreground">2 minutes ago</p>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">Task completed</p>
              <p className="text-xs text-muted-foreground">1 hour ago</p>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">System update available</p>
              <p className="text-xs text-muted-foreground">3 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Complex Layout
export const ComplexLayout: Story = {
  render: () => (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Project Dashboard</CardTitle>
          <CardDescription>Manage your projects and tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Recent Projects</h3>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Website Redesign</p>
                      <p className="text-sm text-muted-foreground">Due in 3 days</p>
                    </div>
                    <Badge variant="destructive">High Priority</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Mobile App Update</p>
                      <p className="text-sm text-muted-foreground">Due in 1 week</p>
                    </div>
                    <Badge variant="secondary">Medium Priority</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Database Migration</p>
                      <p className="text-sm text-muted-foreground">Due in 2 weeks</p>
                    </div>
                    <Badge variant="outline">Low Priority</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator orientation="vertical" className="hidden lg:block" />
            
            <div className="space-y-4">
              <h3 className="font-medium">Team Members</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">Project Manager</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Jane Smith</p>
                    <p className="text-xs text-muted-foreground">Developer</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>BJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Bob Johnson</p>
                    <p className="text-xs text-muted-foreground">Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
}; 