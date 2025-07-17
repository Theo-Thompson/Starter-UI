import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './badge';
import { CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react';

const meta: Meta<typeof Badge> = {
  title: 'Design System/Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Badge Component

A small status indicator component with multiple variants for different use cases.

## Design Guidelines

### When to Use
- Status indicators
- Category labels
- Notification counts
- Feature flags
- Progress indicators

### Accessibility
- Semantic meaning through color
- Screen reader support
- Proper contrast ratios
- Icon support for clarity

### Best Practices
- Use appropriate variant for context
- Keep text concise
- Use icons when helpful
- Maintain consistent usage patterns

## Technical Details

### Props
- \`variant\`: Visual style (default, secondary, destructive, outline)
- \`className\`: Additional CSS classes
- \`children\`: Badge content

### Styling
- Built with Tailwind CSS
- Consistent with design system
- Responsive text sizing
- Dark mode support
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'Visual style variant',
    },
    children: {
      control: { type: 'text' },
      description: 'Badge content',
    },
  },
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

// Status badges
export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
        <CheckCircle className="mr-1 h-3 w-3" />
        Active
      </Badge>
      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
        <Clock className="mr-1 h-3 w-3" />
        Pending
      </Badge>
      <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
        <XCircle className="mr-1 h-3 w-3" />
        Inactive
      </Badge>
      <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
        <AlertTriangle className="mr-1 h-3 w-3" />
        Warning
      </Badge>
    </div>
  ),
};

// Amazon-themed badges
export const AmazonBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-amazon-orange text-white hover:bg-amazon-orange/90">
        Amazon Prime
      </Badge>
      <Badge className="bg-stratus-blue text-white hover:bg-stratus-blue/90">
        Stratus
      </Badge>
      <Badge variant="outline" className="border-amazon-orange text-amazon-orange">
        Special Offer
      </Badge>
    </div>
  ),
};

// Notification badges
export const NotificationBadges: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="relative">
        <span className="text-sm">Messages</span>
        <Badge className="absolute -top-2 -right-2 min-w-[20px] h-5 text-xs flex items-center justify-center p-0">
          3
        </Badge>
      </div>
      <div className="relative">
        <span className="text-sm">Notifications</span>
        <Badge variant="destructive" className="absolute -top-2 -right-2 min-w-[20px] h-5 text-xs flex items-center justify-center p-0">
          12
        </Badge>
      </div>
      <div className="relative">
        <span className="text-sm">Updates</span>
        <Badge variant="secondary" className="absolute -top-2 -right-2 min-w-[20px] h-5 text-xs flex items-center justify-center p-0">
          99+
        </Badge>
      </div>
    </div>
  ),
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge className="text-xs px-1.5 py-0.5">Small</Badge>
      <Badge>Default</Badge>
      <Badge className="text-sm px-3 py-1">Large</Badge>
    </div>
  ),
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>
        <CheckCircle className="mr-1 h-3 w-3" />
        Completed
      </Badge>
      <Badge variant="secondary">
        <Clock className="mr-1 h-3 w-3" />
        In Progress
      </Badge>
      <Badge variant="destructive">
        <XCircle className="mr-1 h-3 w-3" />
        Failed
      </Badge>
      <Badge variant="outline">
        <AlertTriangle className="mr-1 h-3 w-3" />
        Warning
      </Badge>
    </div>
  ),
}; 