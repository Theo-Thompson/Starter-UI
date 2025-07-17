import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './progress';
import { Button } from './button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import React from 'react';

const meta: Meta<typeof Progress> = {
  title: 'Design System/Atoms/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Progress Component

Visual progress indicators for loading states, task completion, and process tracking.

## Design Guidelines

### When to Use
- File uploads and downloads
- Form submission progress
- Task completion tracking
- Loading states
- Multi-step processes

### Accessibility
- ARIA attributes for screen readers
- Semantic HTML structure
- Proper labeling
- Progress announcements
- Keyboard navigation support

### Best Practices
- Always provide context with labels
- Use appropriate colors for different states
- Consider animation for dynamic updates
- Provide percentage or step information
- Use consistent sizing across the app

## Technical Details

### Props
- \`value\`: Progress value (0-100)
- \`className\`: Additional CSS classes
- \`max\`: Maximum value (default: 100)

### Styling
- Built with Tailwind CSS
- Smooth animations
- Consistent with design system
- Dark mode support
- Customizable colors
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0-100)',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
  },
  args: {
    value: 50,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const Empty: Story = {
  args: {
    value: 0,
  },
};

export const Complete: Story = {
  args: {
    value: 100,
  },
};

export const WithLabel: Story = {
  render: (args: any) => (
    <div className="w-full max-w-md space-y-2">
      <div className="flex justify-between text-sm">
        <span>Progress</span>
        <span>{args.value}%</span>
      </div>
      <Progress {...args} />
    </div>
  ),
  args: {
    value: 75,
  },
};

export const DifferentValues: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Starting</span>
          <span>10%</span>
        </div>
        <Progress value={10} />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>In Progress</span>
          <span>45%</span>
        </div>
        <Progress value={45} />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Almost Done</span>
          <span>85%</span>
        </div>
        <Progress value={85} />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Complete</span>
          <span>100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <span className="text-sm">Default</span>
        <Progress value={60} />
      </div>
      
      <div className="space-y-2">
        <span className="text-sm">Success</span>
        <Progress value={100} className="[&>div]:bg-green-500" />
      </div>
      
      <div className="space-y-2">
        <span className="text-sm">Warning</span>
        <Progress value={30} className="[&>div]:bg-yellow-500" />
      </div>
      
      <div className="space-y-2">
        <span className="text-sm">Error</span>
        <Progress value={20} className="[&>div]:bg-red-500" />
      </div>
      
      <div className="space-y-2">
        <span className="text-sm">Amazon Orange</span>
        <Progress value={75} className="[&>div]:bg-amazon-orange" />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <span className="text-sm">Small</span>
        <Progress value={60} className="h-1" />
      </div>
      
      <div className="space-y-2">
        <span className="text-sm">Default</span>
        <Progress value={60} />
      </div>
      
      <div className="space-y-2">
        <span className="text-sm">Large</span>
        <Progress value={60} className="h-3" />
      </div>
      
      <div className="space-y-2">
        <span className="text-sm">Extra Large</span>
        <Progress value={60} className="h-4" />
      </div>
    </div>
  ),
};

export const FileUpload: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(0);
    const [isUploading, setIsUploading] = React.useState(false);
    
    const startUpload = () => {
      setIsUploading(true);
      setProgress(0);
      
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return prev + Math.random() * 10;
        });
      }, 200);
    };
    
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>File Upload</CardTitle>
          <CardDescription>Upload your waste poster design</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>poster-design.pdf</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="[&>div]:bg-amazon-orange" />
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              {isUploading ? 'Uploading...' : progress === 100 ? 'Complete!' : 'Ready to upload'}
            </span>
            <Button 
              onClick={startUpload} 
              disabled={isUploading}
              size="sm"
            >
              {isUploading ? 'Uploading...' : 'Upload'}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const MultiStep: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = React.useState(2);
    const totalSteps = 4;
    const progress = (currentStep / totalSteps) * 100;
    
    const steps = [
      'Request Details',
      'Location Selection',
      'Poster Design',
      'Review & Submit'
    ];
    
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Waste Poster Request</CardTitle>
          <CardDescription>Step {currentStep} of {totalSteps}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={progress} className="[&>div]:bg-amazon-orange" />
          
          <div className="space-y-2">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  index + 1 < currentStep 
                    ? 'bg-green-500 text-white' 
                    : index + 1 === currentStep 
                    ? 'bg-amazon-orange text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {index + 1 < currentStep ? '✓' : index + 1}
                </div>
                <span className={`text-sm ${
                  index + 1 === currentStep ? 'font-medium' : 'text-muted-foreground'
                }`}>
                  {step}
                </span>
              </div>
            ))}
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              size="sm"
            >
              Previous
            </Button>
            <Button 
              onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
              disabled={currentStep === totalSteps}
              size="sm"
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const TaskProgress: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Request Processing</CardTitle>
            <Badge className="bg-amazon-orange">In Progress</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Validation</span>
              <span>✓ Complete</span>
            </div>
            <Progress value={100} className="[&>div]:bg-green-500" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Design Review</span>
              <span>75%</span>
            </div>
            <Progress value={75} className="[&>div]:bg-amazon-orange" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Approval</span>
              <span>Pending</span>
            </div>
            <Progress value={0} />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Production</span>
              <span>Waiting</span>
            </div>
            <Progress value={0} />
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

export const AnimatedProgress: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(0);
    
    React.useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0; // Reset to create loop
          }
          return prev + 1;
        });
      }, 50);
      
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className="w-full max-w-md space-y-2">
        <div className="flex justify-between text-sm">
          <span>Loading...</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="[&>div]:transition-all [&>div]:duration-100" />
      </div>
    );
  },
};

export const IndeterminateProgress: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <span className="text-sm">Processing request...</span>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div className="h-full bg-amazon-orange animate-pulse"></div>
        </div>
      </div>
      
      <div className="space-y-2">
        <span className="text-sm">Analyzing design...</span>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div className="h-full bg-blue-500 animate-bounce"></div>
        </div>
      </div>
      
      <div className="space-y-2">
        <span className="text-sm">Connecting to server...</span>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div className="h-full bg-green-500 animate-ping"></div>
        </div>
      </div>
    </div>
  ),
}; 