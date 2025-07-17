import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Badge } from './badge';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Calendar, MapPin, Clock, User, Star, Heart, Share2 } from 'lucide-react';

const meta: Meta<typeof Card> = {
  title: 'Design System/Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Card Component

A flexible card component with header, content, and footer sections built on semantic HTML elements.

## Design Guidelines

### When to Use
- Content containers with related information
- Product/item displays
- User profiles and information cards
- Dashboard widgets
- List items with rich content

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- Screen reader compatible
- Focus management

### Best Practices
- Use \`CardHeader\` for titles and descriptions
- Use \`CardContent\` for main content
- Use \`CardFooter\` for actions and metadata
- Keep content scannable and organized
- Use consistent spacing and typography

## Technical Details

### Components
- \`Card\`: Main container
- \`CardHeader\`: Header section with title/description
- \`CardTitle\`: Primary heading
- \`CardDescription\`: Secondary description
- \`CardContent\`: Main content area
- \`CardFooter\`: Footer with actions/metadata

### Styling
- Built with Tailwind CSS
- Consistent with design system
- Responsive design included
- Hover and focus states
- Dark mode support

### Layout
- Flexbox-based layout
- Responsive spacing
- Customizable through className
- Composable structure
        `,
      },
    },
  },
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic card
export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const HeaderOnly: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
        <CardDescription>Just a header, no content or footer</CardDescription>
      </CardHeader>
    </Card>
  ),
};

export const ContentOnly: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <p>This card only has content, no header or footer.</p>
      </CardContent>
    </Card>
  ),
};

// Product card example
export const ProductCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Wireless Headphones</CardTitle>
            <CardDescription>Premium noise-cancelling</CardDescription>
          </div>
          <Badge variant="secondary">New</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="aspect-square w-full bg-gray-100 rounded-md mb-4 flex items-center justify-center">
          <span className="text-gray-400">Product Image</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">(124 reviews)</span>
        </div>
        <p className="text-2xl font-bold mt-2">$299.99</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="flex-1">Add to Cart</Button>
        <Button variant="outline" size="icon">
          <Heart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  ),
};

// User profile card
export const UserProfileCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>Software Engineer</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Joined March 2023</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  ),
};

// Dashboard widget
export const DashboardWidget: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$45,231.89</div>
        <p className="text-xs text-muted-foreground">
          +20.1% from last month
        </p>
      </CardContent>
    </Card>
  ),
};

// Event card
export const EventCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="outline">Conference</Badge>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">2 hours</span>
          </div>
        </div>
        <CardTitle>React Conference 2024</CardTitle>
        <CardDescription>
          Join us for the latest in React development
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>March 15, 2024 at 9:00 AM</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>San Francisco Convention Center</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <User className="h-4 w-4 text-muted-foreground" />
            <span>1,234 attendees</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="flex-1">Register</Button>
        <Button variant="outline" size="icon">
          <Share2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  ),
};

// Article card
export const ArticleCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="aspect-video w-full bg-gray-100 rounded-md mb-4 flex items-center justify-center">
          <span className="text-gray-400">Article Image</span>
        </div>
        <CardTitle>Getting Started with React 19</CardTitle>
        <CardDescription>
          Learn about the new features and improvements in React 19
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">
          React 19 introduces several new features including automatic batching,
          concurrent features, and improved server-side rendering capabilities.
          This article covers everything you need to know to get started.
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarFallback className="text-xs">JD</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">John Doe</span>
        </div>
        <span className="text-sm text-muted-foreground">5 min read</span>
      </CardFooter>
    </Card>
  ),
};

// Notification card
export const NotificationCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">New Message</CardTitle>
          <Badge variant="destructive" className="text-xs">
            New
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-start gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">SA</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">Sarah Anderson</p>
            <p className="text-sm text-muted-foreground">
              Hey! I wanted to follow up on our meeting yesterday...
            </p>
            <p className="text-xs text-muted-foreground mt-1">2 minutes ago</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          Reply
        </Button>
      </CardFooter>
    </Card>
  ),
};

// Brand-themed card
export const BrandCard: Story = {
  render: () => (
    <Card className="w-[350px] border-primary-brand/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-primary-brand">Request Submission</CardTitle>
          <Badge className="bg-primary-brand text-white">Pending</Badge>
        </div>
        <CardDescription>
          Review and approve new submission requests from team members
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Sarah Johnson</p>
              <p className="text-xs text-muted-foreground">sarah.johnson@example.com</p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>Submitted: March 15, 2024</p>
            <p>Type: General Request</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Decline</Button>
        <Button className="flex-1 bg-primary-brand hover:bg-primary-brand/90">
          Approve Request
        </Button>
      </CardFooter>
    </Card>
  ),
}

// Card grid
export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="w-full">
          <CardHeader>
            <CardTitle>Card {i + 1}</CardTitle>
            <CardDescription>
              This is card number {i + 1} in the grid
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content for card {i + 1}</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Action {i + 1}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Cards displayed in a responsive grid layout.',
      },
    },
  },
}; 