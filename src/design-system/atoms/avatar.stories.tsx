import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { User } from 'lucide-react';

const meta: Meta<typeof Avatar> = {
  title: 'Design System/Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Avatar Component

User profile images with fallback support for consistent user representation.

## Design Guidelines

### When to Use
- User profile displays
- Comment sections
- Team member listings
- User identification in lists
- Navigation headers

### Accessibility
- Proper alt text for images
- Semantic HTML structure
- Screen reader support
- Keyboard navigation
- Focus management

### Best Practices
- Always provide fallback text
- Use consistent sizing
- Ensure proper contrast for fallbacks
- Consider loading states
- Use appropriate image formats

## Technical Details

### Components
- \`Avatar\`: Main container with sizing
- \`AvatarImage\`: Profile image with fallback
- \`AvatarFallback\`: Text fallback when image fails

### Sizing
- Default: 40px (h-10 w-10)
- Small: 32px (h-8 w-8)
- Large: 48px (h-12 w-12)
- Extra Large: 64px (h-16 w-16)

### Styling
- Built with Tailwind CSS
- Circular by default
- Consistent with design system
- Dark mode support
        `,
      },
    },
  },
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes for sizing and styling',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: any) => (
    <Avatar {...args}>
      <AvatarImage src="/placeholder-avatar.jpg" alt="User Avatar" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const WithImage: Story = {
  render: (args: any) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const FallbackOnly: Story = {
  render: (args: any) => (
    <Avatar {...args}>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const WithIcon: Story = {
  render: (args: any) => (
    <Avatar {...args}>
      <AvatarFallback>
        <User className="h-4 w-4" />
      </AvatarFallback>
    </Avatar>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="Small" />
        <AvatarFallback className="text-xs">SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="Default" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarImage src="https://github.com/shadcn.png" alt="Large" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarImage src="https://github.com/shadcn.png" alt="Extra Large" />
        <AvatarFallback className="text-lg">XL</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const TeamMembers: Story = {
  render: () => (
    <div className="flex -space-x-2">
      <Avatar className="border-2 border-white">
        <AvatarImage src="https://github.com/shadcn.png" alt="Team Member 1" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white">
        <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" alt="Team Member 2" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white">
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white">
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white">
        <AvatarFallback>+5</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const ColoredFallbacks: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback className="bg-red-500 text-white">JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-blue-500 text-white">AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-green-500 text-white">CD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-purple-500 text-white">EF</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-amazon-orange text-white">AM</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="Online User" />
          <AvatarFallback>ON</AvatarFallback>
        </Avatar>
        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
      </div>
      
      <div className="relative">
        <Avatar>
          <AvatarFallback>AW</AvatarFallback>
        </Avatar>
        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-yellow-500 border-2 border-white"></div>
      </div>
      
      <div className="relative">
        <Avatar>
          <AvatarFallback>OF</AvatarFallback>
        </Avatar>
        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-gray-500 border-2 border-white"></div>
      </div>
    </div>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar className="h-12 w-12">
        <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">John Doe</p>
        <p className="text-sm text-muted-foreground">john.doe@example.com</p>
      </div>
    </div>
  ),
};

export const CommentSection: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <div className="flex items-start gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="Sarah Wilson" />
          <AvatarFallback>SW</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm">Sarah Wilson</span>
            <span className="text-xs text-muted-foreground">2 hours ago</span>
          </div>
          <p className="text-sm mt-1">Great work on the waste poster design! The colors really pop and the message is clear.</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <Avatar className="h-8 w-8">
          <AvatarFallback>MJ</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm">Mike Johnson</span>
            <span className="text-xs text-muted-foreground">1 hour ago</span>
          </div>
          <p className="text-sm mt-1">Thanks! I'll submit this for approval today.</p>
        </div>
      </div>
    </div>
  ),
};

export const AmazonEmployees: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-md">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-amazon-orange text-white">JS</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-sm">John Smith</p>
          <p className="text-xs text-muted-foreground">Facilities Manager</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-stratus-blue text-white">EA</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-sm">Emily Adams</p>
          <p className="text-xs text-muted-foreground">Environmental Lead</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="David Chen" />
          <AvatarFallback>DC</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-sm">David Chen</p>
          <p className="text-xs text-muted-foreground">Operations</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>LM</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-sm">Lisa Martinez</p>
          <p className="text-xs text-muted-foreground">Sustainability</p>
        </div>
      </div>
    </div>
  ),
};

export const LoadingState: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback>
          <div className="animate-pulse bg-gray-300 h-full w-full rounded-full"></div>
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>
          <div className="animate-spin h-4 w-4 border-2 border-gray-300 border-t-gray-600 rounded-full"></div>
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-gray-100">
          <User className="h-4 w-4 text-gray-400" />
        </AvatarFallback>
      </Avatar>
    </div>
  ),
}; 