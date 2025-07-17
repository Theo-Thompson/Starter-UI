import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';
import { Label } from './label';
import { Button } from './button';
import { Eye, EyeOff, Search, Mail, Lock } from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Design System/Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Input Component

A flexible input component built on native HTML input with consistent styling and validation states.

## Design Guidelines

### When to Use
- Text input fields in forms
- Search functionality
- User data collection
- Filters and queries

### Accessibility
- Proper labeling with \`Label\` component
- Error state indication
- Keyboard navigation support
- Screen reader compatible
- Focus management

### Best Practices
- Always pair with \`Label\` component
- Use \`placeholder\` for hints, not labels
- Provide clear error messages
- Use appropriate input types (email, password, etc.)
- Consider input masking for formatted data

## Technical Details

### Props
- \`type\`: Input type (text, email, password, etc.)
- \`placeholder\`: Placeholder text
- \`disabled\`: Disabled state
- \`value\`: Controlled value
- \`onChange\`: Change handler
- \`className\`: Additional CSS classes

### Styling
- Built with Tailwind CSS
- Consistent with design system
- Focus states included
- Error state styling
- Dark mode support

### Validation
- Use with form libraries (React Hook Form, Formik)
- Custom validation states
- Error message display
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'search', 'tel', 'url', 'number'],
      description: 'Input type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'Input value',
    },
  },
  args: {
    type: 'text',
    placeholder: 'Enter text...',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic input
export const Default: Story = {
  args: {
    placeholder: 'Enter your name',
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input {...args} id="email" />
    </div>
  ),
  args: {
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const Required: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="required">
        Full Name <span className="text-red-500">*</span>
      </Label>
      <Input {...args} id="required" required />
    </div>
  ),
  args: {
    placeholder: 'John Doe',
  },
};

// Input types
export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'name@example.com',
  },
};

export const Password: Story = {
  render: (args) => {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            {...args}
            id="password"
            type={showPassword ? 'text' : 'password'}
            className="pr-10"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    );
  },
  args: {
    placeholder: 'Enter password',
  },
};

export const SearchInput: Story = {
  render: (args) => (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input {...args} className="pl-8" />
    </div>
  ),
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '0',
    min: 0,
    max: 100,
  },
};

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
    value: 'Cannot edit this',
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'Read-only value',
  },
};

// Validation states
export const WithError: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="error">Email</Label>
      <Input
        {...args}
        id="error"
        className="border-red-500 focus:border-red-500 focus:ring-red-500"
      />
      <p className="text-sm text-red-500">Please enter a valid email address</p>
    </div>
  ),
  args: {
    type: 'email',
    value: 'invalid-email',
  },
};

export const WithSuccess: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="success">Email</Label>
      <Input
        {...args}
        id="success"
        className="border-green-500 focus:border-green-500 focus:ring-green-500"
      />
      <p className="text-sm text-green-600">Email is valid</p>
    </div>
  ),
  args: {
    type: 'email',
    value: 'user@example.com',
  },
};

export const WithHelperText: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="helper">Username</Label>
      <Input {...args} id="helper" />
      <p className="text-sm text-muted-foreground">
        Must be 3-20 characters, letters and numbers only
      </p>
    </div>
  ),
  args: {
    placeholder: 'johndoe123',
  },
};

// With icons
export const WithLeftIcon: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="icon-left">Email</Label>
      <div className="relative">
        <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input {...args} id="icon-left" className="pl-8" />
      </div>
    </div>
  ),
  args: {
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const WithRightIcon: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="icon-right">Secure Code</Label>
      <div className="relative">
        <Input {...args} id="icon-right" className="pr-8" />
        <Lock className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  ),
  args: {
    type: 'password',
    placeholder: 'Enter code',
  },
};

// Form example
export const FormExample: Story = {
  render: () => (
    <form className="w-full max-w-sm space-y-4">
      <div className="grid items-center gap-1.5">
        <Label htmlFor="form-name">
          Full Name <span className="text-red-500">*</span>
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
      
      <div className="grid items-center gap-1.5">
        <Label htmlFor="form-phone">Phone</Label>
        <Input
          id="form-phone"
          type="tel"
          placeholder="+1 (555) 123-4567"
        />
        <p className="text-sm text-muted-foreground">Optional</p>
      </div>
      
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of inputs used in a complete form with labels and validation.',
      },
    },
  },
};

// Sizes comparison
export const Sizes: Story = {
  render: () => (
    <div className="w-full max-w-sm space-y-4">
      <div className="grid items-center gap-1.5">
        <Label>Small (custom)</Label>
        <Input className="h-8 text-sm" placeholder="Small input" />
      </div>
      
      <div className="grid items-center gap-1.5">
        <Label>Default</Label>
        <Input placeholder="Default input" />
      </div>
      
      <div className="grid items-center gap-1.5">
        <Label>Large (custom)</Label>
        <Input className="h-12 text-lg" placeholder="Large input" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different input sizes achieved through custom classes.',
      },
    },
  },
}; 