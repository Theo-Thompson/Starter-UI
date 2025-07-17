import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Skeleton } from './skeleton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Avatar, AvatarFallback } from './avatar';
import { Button } from './button';
import { Badge } from './badge';

const meta: Meta<typeof Skeleton> = {
  title: 'Design System/Atoms/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Skeleton Component

A loading placeholder component that displays animated placeholders while content is being loaded. Helps maintain layout structure and provides visual feedback during loading states.

## Design Guidelines

### When to Use
- **Loading states**: Show while content is being fetched
- **Progressive loading**: Display immediately while data loads
- **Perceived performance**: Reduce perceived loading time
- **Layout stability**: Maintain structure during loading

### When Not to Use
- **Quick operations**: For very fast loading (< 200ms)
- **Simple content**: For single text elements, use text placeholders
- **Error states**: Use proper error messages instead
- **Final state**: Never show skeletons as final content

## Accessibility

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Screen Reader Support**: Announced as loading content
- **Reduced Motion**: Respects user motion preferences
- **Semantic HTML**: Uses appropriate ARIA labels
- **Focus Management**: Doesn't interfere with keyboard navigation

## Technical Implementation

### Props
- \`className\`: Additional CSS classes for styling
- Standard \`div\` props are supported

### Features
- **Animated**: Subtle pulse animation
- **Flexible**: Can be sized and shaped as needed
- **Accessible**: Proper ARIA attributes for screen readers
- **Responsive**: Works well across different screen sizes

## Best Practices

1. **Match content shape**: Size skeletons to match expected content
2. **Use sparingly**: Don't overuse - can become distracting
3. **Consistent timing**: Keep loading times predictable
4. **Smooth transitions**: Ensure smooth transition to real content
5. **Accessibility**: Include proper ARIA labels for screen readers
6. **Performance**: Use skeletons for perceived performance improvements
        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

// Basic Skeleton
export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[150px]" />
    </div>
  ),
};

// Different Shapes
export const Shapes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Text Lines</h3>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Rectangles</h3>
        <div className="flex gap-2">
          <Skeleton className="h-20 w-20" />
          <Skeleton className="h-20 w-32" />
          <Skeleton className="h-20 w-16" />
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Circles</h3>
        <div className="flex gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-16 w-16 rounded-full" />
        </div>
      </div>
    </div>
  ),
};

// Card Skeleton
export const CardSkeleton: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[150px]" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-16" />
        </div>
      </CardContent>
    </Card>
  ),
};

// Table Skeleton
export const TableSkeleton: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-8 w-24" />
        </div>
        
        <div className="border rounded-md">
          {/* Header */}
          <div className="border-b p-4">
            <div className="flex gap-4">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
          
          {/* Rows */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="border-b last:border-b-0 p-4">
              <div className="flex gap-4">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// User Profile Skeleton
export const UserProfileSkeleton: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-16 w-16 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-5 w-[150px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
        
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-9 w-24" />
          <Skeleton className="h-9 w-32" />
        </div>
      </CardContent>
    </Card>
  ),
};

// Amazon Waste Poster Request Skeleton
export const WastePosterRequestSkeleton: Story = {
  render: () => (
    <Card className="w-[500px]">
      <CardHeader>
        <div className="space-y-2">
          <Skeleton className="h-6 w-64" />
          <Skeleton className="h-4 w-80" />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-9 w-full" />
          </div>
          
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-9 w-full" />
          </div>
          
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-20 w-full" />
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md">
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end gap-2">
          <Skeleton className="h-9 w-16" />
          <Skeleton className="h-9 w-28" />
        </div>
      </CardContent>
    </Card>
  ),
};

// List Item Skeleton
export const ListItemSkeleton: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-4 p-4 border rounded-md">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
          <Skeleton className="h-8 w-16" />
        </div>
      ))}
    </div>
  ),
};

// Navigation Skeleton
export const NavigationSkeleton: Story = {
  render: () => (
    <div className="w-64 space-y-2">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-5 w-24" />
        </div>
      </div>
      
      <div className="p-2 space-y-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-3 p-2 rounded">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-20" />
          </div>
        ))}
      </div>
    </div>
  ),
};

// Dashboard Skeleton
export const DashboardSkeleton: Story = {
  render: () => (
    <div className="w-full max-w-4xl space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-48" />
        </div>
        <Skeleton className="h-9 w-32" />
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-8 w-16" />
                </div>
                <Skeleton className="h-8 w-8 rounded" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Chart */}
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-64" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-64 w-full" />
        </CardContent>
      </Card>
      
      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-32" />
        </CardHeader>
        <CardContent className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
              <Skeleton className="h-4 w-16" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  ),
};

// Loading Transition Example
export const LoadingTransition: Story = {
  render: () => {
    const [isLoading, setIsLoading] = React.useState(true);
    
    React.useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }, []);
    
    const resetLoading = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 3000);
    };
    
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Loading Transition Example</h3>
          <Button onClick={resetLoading} variant="outline">
            Reset Loading
          </Button>
        </div>
        
        <Card className="w-[400px]">
          <CardHeader>
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-64" />
              </div>
            ) : (
              <>
                <CardTitle>Waste Management Report</CardTitle>
                <CardDescription>
                  Monthly sustainability metrics for your facility
                </CardDescription>
              </>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            {isLoading ? (
              <>
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-8 w-24" />
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>SEA1</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Seattle Fulfillment Center</div>
                    <div className="text-sm text-muted-foreground">SEA1</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm">
                    This month, your facility has achieved a 78% recycling rate, 
                    exceeding the target by 8%. Great work on sustainability!
                  </p>
                </div>
                <div className="flex justify-between">
                  <Badge variant="default">Excellent</Badge>
                  <Button variant="outline">View Details</Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    );
  },
}; 