import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Textarea } from './textarea';
import { Label } from './label';
import { Button } from './button';

const meta: Meta<typeof Textarea> = {
  title: 'Design System/Atoms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Textarea Component

A multi-line text input component with consistent styling and validation states.

## Design Guidelines

### When to Use
- Multi-line text input
- Comments and feedback
- Long form content
- Message composition

### Accessibility
- Proper labeling with Label component
- Keyboard navigation support
- Screen reader compatible
- Resize functionality

### Best Practices
- Always pair with Label component
- Set appropriate rows for content
- Use placeholder for guidance
- Provide character limits when needed
- Enable resize when appropriate

## Technical Details

### Props
- \`placeholder\`: Placeholder text
- \`disabled\`: Disabled state
- \`rows\`: Number of visible rows
- \`value\`: Controlled value
- \`onChange\`: Change handler
- \`className\`: Additional CSS classes

### Styling
- Built with Tailwind CSS
- Consistent with design system
- Focus states included
- Resize handle styling
- Dark mode support
        `,
      },
    },
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    rows: {
      control: { type: 'number' },
      description: 'Number of visible rows',
    },
    value: {
      control: { type: 'text' },
      description: 'Textarea value',
    },
  },
  args: {
    placeholder: 'Type your message here...',
    disabled: false,
    rows: 4,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea {...args} id="message" />
    </div>
  ),
  args: {
    placeholder: 'Type your message here...',
  },
};

export const Required: Story = {
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="required">
        Message <span className="text-red-500">*</span>
      </Label>
      <Textarea {...args} id="required" required />
    </div>
  ),
  args: {
    placeholder: 'This field is required...',
  },
};

export const WithRows: Story = {
  render: () => (
    <div className="grid w-full gap-4">
      <div className="grid gap-1.5">
        <Label>Small (2 rows)</Label>
        <Textarea rows={2} placeholder="Small textarea..." />
      </div>
      <div className="grid gap-1.5">
        <Label>Medium (4 rows)</Label>
        <Textarea rows={4} placeholder="Medium textarea..." />
      </div>
      <div className="grid gap-1.5">
        <Label>Large (8 rows)</Label>
        <Textarea rows={8} placeholder="Large textarea..." />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'This textarea is disabled and cannot be edited.',
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'This textarea is read-only and cannot be edited.',
  },
};

export const WithError: Story = {
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="error">Message</Label>
      <Textarea
        {...args}
        id="error"
        className="border-red-500 focus:border-red-500 focus:ring-red-500"
      />
      <p className="text-sm text-red-500">Message must be at least 10 characters</p>
    </div>
  ),
  args: {
    value: 'Too short',
    placeholder: 'Enter a longer message...',
  },
};

export const WithSuccess: Story = {
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="success">Feedback</Label>
      <Textarea
        {...args}
        id="success"
        className="border-green-500 focus:border-green-500 focus:ring-green-500"
      />
      <p className="text-sm text-green-600">Great feedback! Thank you.</p>
    </div>
  ),
  args: {
    value: 'This is excellent feedback that meets all requirements.',
    placeholder: 'Enter your feedback...',
  },
};

export const WithCharacterCount: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    const maxLength = 280;
    
    return (
      <div className="grid w-full gap-1.5">
        <Label htmlFor="tweet">Tweet</Label>
        <Textarea
          id="tweet"
          placeholder="What's happening?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={maxLength}
          rows={3}
        />
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">
            Share your thoughts...
          </span>
          <span className={`${value.length > maxLength * 0.9 ? 'text-red-500' : 'text-muted-foreground'}`}>
            {value.length}/{maxLength}
          </span>
        </div>
      </div>
    );
  },
};

export const CommentForm: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <div className="grid gap-1.5">
        <Label htmlFor="comment">
          Add a comment <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="comment"
          placeholder="Share your thoughts..."
          rows={4}
          required
        />
        <p className="text-xs text-muted-foreground">
          Be respectful and constructive in your feedback.
        </p>
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Post Comment</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of textarea used in a comment form.',
      },
    },
  },
};

export const ContactForm: Story = {
  render: () => (
    <form className="w-full max-w-md space-y-4">
      <div className="grid gap-1.5">
        <Label htmlFor="contact-name">
          Name <span className="text-red-500">*</span>
        </Label>
        <input
          id="contact-name"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your name"
          required
        />
      </div>
      
      <div className="grid gap-1.5">
        <Label htmlFor="contact-email">
          Email <span className="text-red-500">*</span>
        </Label>
        <input
          id="contact-email"
          type="email"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="your@email.com"
          required
        />
      </div>
      
      <div className="grid gap-1.5">
        <Label htmlFor="contact-message">
          Message <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="contact-message"
          placeholder="How can we help you?"
          rows={6}
          required
        />
      </div>
      
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of textarea used in a contact form.',
      },
    },
  },
};

export const Resizable: Story = {
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="resizable">Resizable textarea</Label>
      <Textarea
        {...args}
        id="resizable"
        className="resize-y"
        style={{ minHeight: '100px' }}
      />
      <p className="text-xs text-muted-foreground">
        You can resize this textarea vertically by dragging the bottom-right corner.
      </p>
    </div>
  ),
  args: {
    placeholder: 'This textarea can be resized...',
    rows: 4,
  },
}; 