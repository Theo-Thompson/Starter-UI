import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, AlertDescription, AlertTitle } from './alert';
import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from 'lucide-react';
import { Button } from './button';

const meta: Meta<typeof Alert> = {
  title: 'Design System/Molecules/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Alert Component

Important messages and notifications with different severity levels and optional actions.

## Design Guidelines

### When to Use
- System notifications and status updates
- Error messages and validation feedback
- Success confirmations
- Warning messages
- Informational content

### Accessibility
- Proper ARIA roles and labels
- Screen reader announcements
- Keyboard navigation support
- Color and icon indicators
- Semantic HTML structure

### Best Practices
- Use appropriate variant for message type
- Include clear, actionable titles
- Provide specific descriptions
- Use icons to reinforce meaning
- Keep messages concise but informative
- Consider dismissible alerts for non-critical messages

## Technical Details

### Components
- \`Alert\`: Main container with variant styling
- \`AlertTitle\`: Bold title/heading
- \`AlertDescription\`: Detailed message content

### Props
- \`variant\`: Visual style (default, destructive)
- \`className\`: Additional CSS classes
- \`children\`: Alert content

### Styling
- Built with Tailwind CSS
- Consistent with design system
- Responsive design
- Dark mode support
- Semantic color coding
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive'],
      description: 'Visual style variant',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
  },
  args: {
    variant: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: any) => (
    <Alert {...args}>
      <Info className="h-4 w-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is a default alert with some information for the user.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: (args: any) => (
    <Alert {...args} variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong. Please check your input and try again.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: (args: any) => (
    <Alert {...args} className="border-green-500 text-green-700 bg-green-50">
      <CheckCircle className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your request has been processed successfully.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: (args: any) => (
    <Alert {...args} className="border-yellow-500 text-yellow-700 bg-yellow-50">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Please review your information before submitting.
      </AlertDescription>
    </Alert>
  ),
};

export const WithoutIcon: Story = {
  render: (args: any) => (
    <Alert {...args}>
      <AlertTitle>No Icon Alert</AlertTitle>
      <AlertDescription>
        This alert doesn't have an icon, just text content.
      </AlertDescription>
    </Alert>
  ),
};

export const TitleOnly: Story = {
  render: (args: any) => (
    <Alert {...args}>
      <Info className="h-4 w-4" />
      <AlertTitle>Just a title, no description</AlertTitle>
    </Alert>
  ),
};

export const DescriptionOnly: Story = {
  render: (args: any) => (
    <Alert {...args}>
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>
        Just a description without a title.
      </AlertDescription>
    </Alert>
  ),
};

export const WithAction: Story = {
  render: (args: any) => (
    <Alert {...args}>
      <Info className="h-4 w-4" />
      <AlertTitle>Action Required</AlertTitle>
      <AlertDescription className="mb-3">
        Your session will expire in 5 minutes. Would you like to extend it?
      </AlertDescription>
      <div className="flex gap-2">
        <Button size="sm">Extend Session</Button>
        <Button variant="outline" size="sm">Logout</Button>
      </div>
    </Alert>
  ),
};

export const Dismissible: Story = {
  render: (args: any) => (
    <Alert {...args} className="relative">
      <CheckCircle className="h-4 w-4" />
      <AlertTitle>Dismissible Alert</AlertTitle>
      <AlertDescription>
        This alert can be dismissed by clicking the X button.
      </AlertDescription>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-6 w-6"
        onClick={() => alert('Alert dismissed!')}
      >
        <X className="h-4 w-4" />
      </Button>
    </Alert>
  ),
};

export const AmazonThemed: Story = {
  render: (args: any) => (
    <div className="space-y-4">
      <Alert {...args} className="border-amazon-orange bg-amazon-orange/10">
        <Info className="h-4 w-4 text-amazon-orange" />
        <AlertTitle className="text-amazon-orange">Amazon Notification</AlertTitle>
        <AlertDescription>
          Your waste poster request has been submitted and is being reviewed.
        </AlertDescription>
      </Alert>
      
      <Alert {...args} className="border-stratus-blue bg-stratus-blue/10">
        <CheckCircle className="h-4 w-4 text-stratus-blue" />
        <AlertTitle className="text-stratus-blue">Stratus Update</AlertTitle>
        <AlertDescription>
          System maintenance completed successfully. All services are operational.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

export const FormValidation: Story = {
  render: (args: any) => (
    <div className="space-y-4 max-w-md">
      <Alert {...args} variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Form Validation Error</AlertTitle>
        <AlertDescription>
          Please fix the following errors:
          <ul className="mt-2 list-disc list-inside">
            <li>Email is required</li>
            <li>Password must be at least 8 characters</li>
            <li>Phone number format is invalid</li>
          </ul>
        </AlertDescription>
      </Alert>
      
      <Alert {...args} className="border-green-500 text-green-700 bg-green-50">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Form Submitted</AlertTitle>
        <AlertDescription>
          Your information has been saved successfully.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>This is an informational alert.</AlertDescription>
      </Alert>
      
      <Alert className="border-green-500 text-green-700 bg-green-50">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>This is a success alert.</AlertDescription>
      </Alert>
      
      <Alert className="border-yellow-500 text-yellow-700 bg-yellow-50">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>This is a warning alert.</AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>This is an error alert.</AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All alert variants displayed together for comparison.',
      },
    },
  },
};

export const LongContent: Story = {
  render: (args: any) => (
    <Alert {...args}>
      <Info className="h-4 w-4" />
      <AlertTitle>System Maintenance Notice</AlertTitle>
      <AlertDescription>
        We will be performing scheduled maintenance on our systems from 2:00 AM to 4:00 AM EST on Saturday, March 16th. 
        During this time, the waste poster request system will be temporarily unavailable. Any requests submitted during 
        this period will be queued and processed once the maintenance is complete. We apologize for any inconvenience 
        this may cause and appreciate your patience. If you have any urgent requests, please contact the facilities 
        team directly at facilities@example.com or call the emergency line at (555) 123-4567.
      </AlertDescription>
    </Alert>
  ),
}; 