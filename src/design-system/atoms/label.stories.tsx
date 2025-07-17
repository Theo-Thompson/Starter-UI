import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './label';
import { Input } from './input';
import { Textarea } from './textarea';

const meta: Meta<typeof Label> = {
  title: 'Design System/Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Label Component

A semantic label component for form controls with proper accessibility support.

## Design Guidelines

### When to Use
- Form field labels
- Checkbox and radio button labels
- Input group labels
- Required field indicators

### Accessibility
- Proper \`for\` attribute linking
- Screen reader support
- Keyboard navigation
- Focus management

### Best Practices
- Always associate with form controls
- Use clear, descriptive text
- Indicate required fields
- Keep labels concise but informative

## Technical Details

### Props
- \`htmlFor\`: Associates label with form control
- \`className\`: Additional CSS classes
- \`children\`: Label content

### Styling
- Built with Tailwind CSS
- Consistent typography
- Proper spacing and alignment
- Dark mode support
        `,
      },
    },
  },
  argTypes: {
    htmlFor: {
      control: { type: 'text' },
      description: 'ID of the form control this label is for',
    },
    children: {
      control: { type: 'text' },
      description: 'Label text content',
    },
  },
  args: {
    children: 'Label',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Label',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="required">
        Full Name <span className="text-red-500">*</span>
      </Label>
      <Input id="required" placeholder="John Doe" />
    </div>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="helper">Password</Label>
      <Input
        id="helper"
        type="password"
        placeholder="Enter password"
      />
      <p className="text-xs text-muted-foreground">
        Must be at least 8 characters with numbers and symbols
      </p>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="disabled" className="text-muted-foreground">
        Disabled Field
      </Label>
      <Input id="disabled" placeholder="Cannot edit" disabled />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="error" className="text-red-500">
        Email (Error)
      </Label>
      <Input
        id="error"
        type="email"
        placeholder="Enter email"
        className="border-red-500"
      />
      <p className="text-xs text-red-500">Please enter a valid email address</p>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <form className="w-full max-w-sm space-y-4">
      <div className="grid items-center gap-1.5">
        <Label htmlFor="form-name">
          Name <span className="text-red-500">*</span>
        </Label>
        <Input id="form-name" placeholder="John Doe" required />
      </div>
      
      <div className="grid items-center gap-1.5">
        <Label htmlFor="form-email">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="form-email"
          type="email"
          placeholder="john@example.com"
          required
        />
      </div>
      
      <div className="grid gap-1.5">
        <Label htmlFor="form-message">Message</Label>
        <Textarea
          id="form-message"
          placeholder="Your message here..."
          className="min-h-[100px]"
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="form-terms" className="rounded border-gray-300" aria-label="Terms agreement" />
        <Label htmlFor="form-terms" className="text-sm">
          I agree to the terms and conditions
        </Label>
      </div>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of labels used in a complete form.',
      },
    },
  },
}; 