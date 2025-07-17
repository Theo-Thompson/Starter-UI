import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Textarea } from './textarea';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from './dialog';
import { Badge } from './badge';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Separator } from './separator';

const meta: Meta<typeof Dialog> = {
  title: 'Design System/Organisms/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Dialog Component

A modal dialog component built on Radix UI that displays content in a layer above the main application. Perfect for confirmations, forms, and detailed information display.

## Design Guidelines

### When to Use
- **Confirmations**: Delete actions, important decisions
- **Forms**: Create/edit forms that need focus
- **Details**: Expanded information that doesn't warrant a new page
- **Alerts**: Important messages requiring user attention

### When Not to Use
- **Simple notifications**: Use toast or alert instead
- **Navigation**: Use proper routing for page changes
- **Large content**: Consider a full page or drawer instead

## Accessibility

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Traps focus within dialog and restores on close
- **Escape Key**: Closes dialog when pressed

## Technical Implementation

### Props
- \`open\`: Controls dialog visibility
- \`onOpenChange\`: Callback for state changes
- \`showCloseButton\`: Shows/hides close button (default: true)

### Components
- \`DialogTrigger\`: Button that opens the dialog
- \`DialogContent\`: Main dialog container
- \`DialogHeader\`: Header section with title and description
- \`DialogFooter\`: Footer section with actions
- \`DialogTitle\`: Dialog title (required for accessibility)
- \`DialogDescription\`: Optional description text

## Best Practices

1. **Always include DialogTitle** for accessibility
2. **Use DialogDescription** for additional context
3. **Limit content** to avoid overwhelming users
4. **Clear actions** in footer with primary/secondary distinction
5. **Proper focus management** with logical tab order
        `,
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the dialog is open',
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Callback when dialog state changes',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// Basic Dialog
export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a basic dialog with a title and description. It demonstrates the fundamental structure of a dialog component.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// Confirmation Dialog
export const Confirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Item</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the item and remove it from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// Form Dialog
export const FormDialog: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Contact Support</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Support</DialogTitle>
            <DialogDescription>
              Send us a message and we'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="your.email@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="How can we help you?"
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Send Message</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

// User Profile Dialog
export const UserProfile: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="h-auto p-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>TT</AvatarFallback>
          </Avatar>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>User Profile</DialogTitle>
          <DialogDescription>
            View and manage user information
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>TT</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">Theo Thompson</h3>
              <p className="text-sm text-muted-foreground truncate">theo.thompson@example.com</p>
              <Badge variant="secondary" className="mt-1">Employee</Badge>
            </div>
          </div>
          <Separator />
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Department:</span>
              <span className="text-sm">Engineering</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">Location:</span>
              <span className="text-sm">Seattle, WA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">Employee ID:</span>
              <span className="text-sm">EMP-67890</span>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Edit Profile</Button>
          <Button>View Full Profile</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// Amazon Waste Poster Dialog
export const WastePosterDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-amazon-orange hover:bg-amazon-orange/90">
          Request Waste Poster
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Request Custom Waste Poster</DialogTitle>
          <DialogDescription>
            Create a custom waste management poster for your Amazon facility
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="facility">Facility Location</Label>
            <Input
              id="facility"
              placeholder="e.g., SEA1 - Seattle Fulfillment Center"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="poster-type">Poster Type</Label>
            <select 
              id="poster-type"
              className="w-full p-2 border rounded-md"
              aria-label="Select poster type"
            >
              <option>General Waste Guidelines</option>
              <option>Recycling Instructions</option>
              <option>Hazardous Material Handling</option>
              <option>Food Waste Management</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="custom-message">Custom Message (Optional)</Label>
            <Textarea
              id="custom-message"
              placeholder="Add any specific instructions or messages for your facility..."
              rows={3}
            />
          </div>
          <div className="bg-amazon-light-blue/10 p-3 rounded-md">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Poster requests are typically processed within 2-3 business days. 
              You'll receive an email confirmation once your poster is ready for download.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button className="bg-amazon-orange hover:bg-amazon-orange/90">
            Submit Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// Controlled Dialog
export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Button onClick={() => setOpen(true)}>
            Open Dialog
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setCount(c => c + 1)}
          >
            Count: {count}
          </Button>
        </div>
        
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Controlled Dialog</DialogTitle>
              <DialogDescription>
                This dialog is controlled by external state. Current count: {count}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">
                You can control this dialog programmatically using the <code>open</code> prop 
                and <code>onOpenChange</code> callback.
              </p>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Close
              </Button>
              <Button onClick={() => {
                setCount(c => c + 1);
                setOpen(false);
              }}>
                Increment & Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

// No Close Button Dialog
export const NoCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open (No Close Button)</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Important Notice</DialogTitle>
          <DialogDescription>
            This dialog doesn't have a close button. Users must use the action buttons or press Escape.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            This pattern is useful for critical confirmations where you want to ensure 
            users make a deliberate choice rather than accidentally closing the dialog.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Acknowledge</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// Large Content Dialog
export const LargeContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>View Terms of Service</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Please read and accept our terms of service
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-semibold mb-2">1. Acceptance of Terms</h3>
            <p className="text-muted-foreground">
              By accessing and using this service, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please 
              do not use this service.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">2. Use License</h3>
            <p className="text-muted-foreground">
              Permission is granted to temporarily download one copy of the materials on this 
              website for personal, non-commercial transitory viewing only. This is the grant 
              of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose</li>
              <li>attempt to decompile or reverse engineer any software</li>
              <li>remove any copyright or other proprietary notations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">3. Disclaimer</h3>
            <p className="text-muted-foreground">
              The materials on this website are provided on an 'as is' basis. To the fullest 
              extent permitted by law, this Company excludes all representations, warranties, 
              conditions and terms.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">4. Limitations</h3>
            <p className="text-muted-foreground">
              In no event shall Company or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business 
              interruption) arising out of the use or inability to use the materials.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Decline</Button>
          <Button>Accept Terms</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}; 

// Keyboard Navigation Test
export const KeyboardNavigation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Test Keyboard Navigation</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Keyboard Navigation Test</DialogTitle>
          <DialogDescription>
            This dialog tests keyboard navigation and focus management.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Button>First Button</Button>
          <Input placeholder="Test input" />
          <Button>Second Button</Button>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}; 

// Interactive Form Validation Dialog
export const FormValidation: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const validateForm = () => {
      const newErrors: Record<string, string> = {};
      
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      
      if (!formData.message.trim()) {
        newErrors.message = 'Message is required';
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
      if (!validateForm()) return;
      
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      setIsOpen(false);
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    };

    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button>Contact Support (Validated)</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Support</DialogTitle>
            <DialogDescription>
              Fill out the form below. All fields are required.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="val-name">Name</Label>
              <Input
                id="val-name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Your name"
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="val-email">Email</Label>
              <Input
                id="val-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="your.email@example.com"
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="val-message">Message</Label>
              <Textarea
                id="val-message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="How can we help you?"
                rows={4}
                className={errors.message ? 'border-red-500' : ''}
              />
              {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Send Message'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

// Multi-step Dialog
export const MultiStepDialog: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
      facility: '',
      posterType: '',
      message: '',
      priority: 'normal'
    });
    const [isOpen, setIsOpen] = useState(false);

    const handleNext = () => {
      if (currentStep < 3) {
        setCurrentStep(prev => prev + 1);
      }
    };

    const handlePrev = () => {
      if (currentStep > 1) {
        setCurrentStep(prev => prev - 1);
      }
    };

    const handleClose = () => {
      setIsOpen(false);
      setCurrentStep(1);
    };

    const renderStep = () => {
      switch (currentStep) {
        case 1:
          return (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="facility">Facility Location</Label>
                <Input
                  id="facility"
                  value={formData.facility}
                  onChange={(e) => setFormData(prev => ({ ...prev, facility: e.target.value }))}
                  placeholder="e.g., SEA1 - Seattle Fulfillment Center"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="poster-type">Poster Type</Label>
                                 <select 
                   id="poster-type"
                   value={formData.posterType}
                   onChange={(e) => setFormData(prev => ({ ...prev, posterType: e.target.value }))}
                   className="w-full p-2 border rounded-md"
                   aria-label="Poster Type"
                 >
                  <option value="">Select poster type</option>
                  <option value="general">General Waste Guidelines</option>
                  <option value="recycling">Recycling Instructions</option>
                  <option value="hazardous">Hazardous Material Handling</option>
                  <option value="food">Food Waste Management</option>
                </select>
              </div>
            </div>
          );
        case 2:
          return (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="priority">Priority Level</Label>
                                 <select 
                   id="priority"
                   value={formData.priority}
                   onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value }))}
                   className="w-full p-2 border rounded-md"
                   aria-label="Priority Level"
                 >
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="custom-message">Custom Message</Label>
                <Textarea
                  id="custom-message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Add any specific instructions..."
                  rows={4}
                />
              </div>
            </div>
          );
        case 3:
          return (
            <div className="space-y-4">
              <h3 className="font-semibold">Review Your Request</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Facility:</span>
                  <span>{formData.facility || 'Not specified'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Poster Type:</span>
                  <span>{formData.posterType || 'Not specified'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Priority:</span>
                  <span className="capitalize">{formData.priority}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Message:</span>
                  <span>{formData.message || 'None'}</span>
                </div>
              </div>
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button>Multi-Step Request</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Waste Poster Request - Step {currentStep} of 3</DialogTitle>
            <DialogDescription>
              {currentStep === 1 && 'Choose your facility and poster type'}
              {currentStep === 2 && 'Set priority and add custom message'}
              {currentStep === 3 && 'Review and submit your request'}
            </DialogDescription>
          </DialogHeader>
          
          {/* Progress indicator */}
          <div className="flex space-x-2 mb-4">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`h-2 flex-1 rounded ${
                  step <= currentStep ? 'bg-primary' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          {renderStep()}

          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={currentStep === 1 ? handleClose : handlePrev}
            >
              {currentStep === 1 ? 'Cancel' : 'Previous'}
            </Button>
            <Button 
              onClick={currentStep === 3 ? handleClose : handleNext}
              disabled={currentStep === 1 && (!formData.facility || !formData.posterType)}
            >
              {currentStep === 3 ? 'Submit Request' : 'Next'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

// Error State Dialog
export const ErrorState: Story = {
  render: () => {
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleAction = async () => {
      setIsLoading(true);
      setHasError(false);
      
      // Simulate API call with random error
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (Math.random() < 0.5) {
        setHasError(true);
      } else {
        setIsOpen(false);
      }
      
      setIsLoading(false);
    };

    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="destructive">Delete Resource</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Resource</DialogTitle>
            <DialogDescription>
              This action cannot be undone. Are you sure you want to delete this resource?
            </DialogDescription>
          </DialogHeader>
          
          {hasError && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3">
              <p className="text-sm text-red-600">
                <strong>Error:</strong> Failed to delete resource. Please try again or contact support.
              </p>
            </div>
          )}
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleAction}
              disabled={isLoading}
            >
              {isLoading ? 'Deleting...' : 'Delete Resource'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

// Dynamic Content Dialog
export const DynamicContent: Story = {
  render: () => {
    const [contentType, setContentType] = useState<'form' | 'list' | 'chart'>('form');
    const [isOpen, setIsOpen] = useState(false);

    const renderContent = () => {
      switch (contentType) {
        case 'form':
          return (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="dynamic-input">Input Field</Label>
                <Input id="dynamic-input" placeholder="Enter value" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dynamic-select">Select Option</Label>
                                 <select id="dynamic-select" className="w-full p-2 border rounded-md" aria-label="Dynamic Select Option">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          );
        case 'list':
          return (
            <div className="space-y-2">
              <h3 className="font-semibold">Recent Items</h3>
              <ul className="space-y-1">
                {['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].map((item, index) => (
                  <li key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>{item}</span>
                    <Button size="sm" variant="ghost">Edit</Button>
                  </li>
                ))}
              </ul>
            </div>
          );
        case 'chart':
          return (
            <div className="space-y-4">
              <h3 className="font-semibold">Data Visualization</h3>
              <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Chart would go here</p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold">42</p>
                  <p className="text-sm text-muted-foreground">Metric A</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">89</p>
                  <p className="text-sm text-muted-foreground">Metric B</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">156</p>
                  <p className="text-sm text-muted-foreground">Metric C</p>
                </div>
              </div>
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button>Dynamic Content</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Dynamic Content Dialog</DialogTitle>
            <DialogDescription>
              Switch between different content types to test dynamic rendering
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="flex space-x-2">
              <Button 
                size="sm" 
                variant={contentType === 'form' ? 'default' : 'outline'}
                onClick={() => setContentType('form')}
              >
                Form
              </Button>
              <Button 
                size="sm" 
                variant={contentType === 'list' ? 'default' : 'outline'}
                onClick={() => setContentType('list')}
              >
                List
              </Button>
              <Button 
                size="sm" 
                variant={contentType === 'chart' ? 'default' : 'outline'}
                onClick={() => setContentType('chart')}
              >
                Chart
              </Button>
            </div>
            
            {renderContent()}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Close
            </Button>
            <Button>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
}; 