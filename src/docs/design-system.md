# Design System Documentation

A comprehensive guide to our design system for both developers and designers.

## Table of Contents

- [Overview](#overview)
- [Design Tokens](#design-tokens)
- [Component Library](#component-library)
- [Usage Guidelines](#usage-guidelines)
- [Implementation](#implementation)
- [Accessibility](#accessibility)
- [Resources](#resources)

## Overview

Our design system is built on a foundation of consistent design tokens and reusable components, ensuring a cohesive user experience across all applications. It's designed to be accessible, scalable, and maintainable.

### Key Principles

- **Consistency**: Unified design language across all components
- **Accessibility**: WCAG AA compliant with proper ARIA support
- **Flexibility**: Customizable components that adapt to different contexts
- **Performance**: Optimized components with minimal bundle impact
- **Developer Experience**: Full TypeScript support and comprehensive documentation

## Design Tokens

### Color System

Our color system is built around semantic color tokens that work in both light and dark modes.

#### Brand Colors

```css
/* Primary Brand Color - Amazon Orange */
--primary-brand: #e67e00; /* Light mode */
--primary-brand: #ffa726; /* Dark mode */

/* Secondary Brand Color - Stratus Blue */
--secondary-brand: #1a5490; /* Light mode */
--secondary-brand: #64b5f6; /* Dark mode */
```

#### Semantic Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--background` | `#ffffff` | `#0a0a0a` | Page backgrounds |
| `--foreground` | `#0a0a0a` | `#fafafa` | Primary text |
| `--primary` | `#0a0a0a` | `#fafafa` | Primary actions |
| `--secondary` | `#f5f5f5` | `#1a1a1a` | Secondary actions |
| `--muted` | `#f5f5f5` | `#1a1a1a` | Muted backgrounds |
| `--muted-foreground` | `#737373` | `#a3a3a3` | Muted text |
| `--destructive` | `#ef4444` | `#dc2626` | Error states |
| `--border` | `#e5e5e5` | `#262626` | Borders and dividers |

#### Usage in Code

```tsx
// Using semantic colors
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    Primary Action
  </button>
  <button className="bg-secondary text-secondary-foreground">
    Secondary Action
  </button>
</div>

// Using brand colors
<div className="bg-primary-brand text-white">
  Brand Content
</div>
```

### Typography

Our typography system uses Inter as the primary font family with a comprehensive scale.

#### Font Family

```css
font-family: 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif';
```

#### Type Scale

| Class | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `text-xs` | `0.75rem` | `1rem` | `400` | Captions, metadata |
| `text-sm` | `0.875rem` | `1.25rem` | `400` | Body small |
| `text-base` | `1rem` | `1.5rem` | `400` | Body text |
| `text-lg` | `1.125rem` | `1.75rem` | `400` | Body large |
| `text-xl` | `1.25rem` | `1.75rem` | `500` | Headings |
| `text-2xl` | `1.5rem` | `2rem` | `600` | Section headers |
| `text-3xl` | `1.875rem` | `2.25rem` | `600` | Page titles |
| `text-4xl` | `2.25rem` | `2.5rem` | `700` | Hero titles |

#### Usage Examples

```tsx
<h1 className="text-4xl font-bold">Page Title</h1>
<h2 className="text-2xl font-semibold">Section Header</h2>
<p className="text-base">Body text content</p>
<small className="text-sm text-muted-foreground">Metadata</small>
```

### Spacing

Our spacing system uses a consistent 4px base unit with semantic tokens.

#### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | `0.25rem` (4px) | Minimal spacing |
| `sm` | `0.5rem` (8px) | Small spacing |
| `md` | `1rem` (16px) | Medium spacing |
| `lg` | `2rem` (32px) | Large spacing |
| `xl` | `4rem` (64px) | Extra large spacing |

#### Usage Examples

```tsx
// Using spacing tokens
<div className="p-md">Medium padding</div>
<div className="m-lg">Large margin</div>
<div className="space-y-sm">Small vertical spacing</div>

// Using Tailwind spacing
<div className="p-4">16px padding</div>
<div className="m-8">32px margin</div>
```

### Border Radius

Consistent border radius values for rounded corners.

#### Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | `0.25rem` (4px) | Small radius |
| `md` | `0.375rem` (6px) | Medium radius |
| `lg` | `0.5rem` (8px) | Default radius |
| `xl` | `0.75rem` (12px) | Large radius |
| `2xl` | `1rem` (16px) | Extra large radius |
| `full` | `9999px` | Fully rounded |

#### Usage Examples

```tsx
<button className="rounded-lg">Default button</button>
<card className="rounded-xl">Large radius card</card>
<avatar className="rounded-full">Circular avatar</avatar>
```

### Shadows

A comprehensive shadow system for depth and hierarchy.

#### Shadow Scale

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | `0 1px 2px 0 rgba(0,0,0,0.05)` | Subtle elevation |
| `md` | `0 4px 6px -1px rgba(0,0,0,0.1)` | Medium elevation |
| `lg` | `0 10px 15px -3px rgba(0,0,0,0.1)` | High elevation |

#### Usage Examples

```tsx
<card className="shadow-sm">Subtle card</card>
<modal className="shadow-lg">Elevated modal</modal>
```

## Component Library

Our component library is organized using Atomic Design principles:

### Atoms (Basic Components)

Fundamental building blocks that can't be broken down further.

#### Interactive Elements

- **Button** - Primary interaction component with multiple variants
- **Input** - Text input fields with validation states
- **Select** - Dropdown selection component
- **Checkbox** - Binary selection control
- **Switch** - Toggle control
- **Textarea** - Multi-line text input

#### Display Elements

- **Badge** - Status indicators and labels
- **Avatar** - User profile representations
- **Progress** - Progress indicators
- **Skeleton** - Loading placeholders
- **Separator** - Visual dividers

#### Feedback Elements

- **Alert** - Important messages and notifications
- **Toast** - Temporary notifications (via Sonner)

### Molecules (Compound Components)

Combinations of atoms that work together.

#### Navigation

- **Breadcrumb** - Navigation breadcrumbs
- **Pagination** - Page navigation controls
- **Dropdown Menu** - Context menus and dropdowns

#### Overlays

- **Dialog** - Modal dialogs
- **Sheet** - Side panel overlays
- **Popover** - Floating content overlays
- **Tooltip** - Hover tooltips

#### Data Entry

- **Command** - Command palette and search interface
- **Calendar** - Date picker component

### Organisms (Complex Components)

Complex components that combine multiple molecules.

- **Table** - Data table with sorting and pagination
- **Card** - Content containers with headers and actions
- **Form** - Complete form layouts

### Usage Examples

```tsx
// Basic button usage
<Button variant="primary" size="lg">
  Click me
</Button>

// Form with validation
<form className="space-y-4">
  <div>
    <Label htmlFor="email">Email</Label>
    <Input 
      id="email" 
      type="email" 
      placeholder="Enter your email"
      required 
    />
  </div>
  <Button type="submit">Submit</Button>
</form>

// Data table
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>
        <Badge variant="success">Active</Badge>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Usage Guidelines

### For Designers

#### Design Principles

1. **Consistency First** - Always use established design tokens
2. **Accessibility by Default** - Ensure sufficient contrast and proper focus states
3. **Progressive Enhancement** - Design for the lowest common denominator
4. **Mobile First** - Start with mobile layouts and scale up

#### Design Workflow

1. **Start with Design Tokens** - Use our color, typography, and spacing system
2. **Choose Appropriate Components** - Select from our component library
3. **Maintain Visual Hierarchy** - Use size, weight, and spacing to guide attention
4. **Test Accessibility** - Verify contrast ratios and keyboard navigation

#### Figma Integration

- Use our design tokens in Figma variables
- Create components that match our React components
- Maintain consistent naming conventions
- Document component states and variants

### For Developers

#### Component Usage

1. **Import Components** - Import from the design system
2. **Use Semantic Props** - Prefer semantic props over custom styling
3. **Follow Patterns** - Use established patterns for similar functionality
4. **Extend Carefully** - Only extend components when necessary

#### Best Practices

```tsx
// ✅ Good: Using semantic variants
<Button variant="primary" size="lg">
  Submit
</Button>

// ❌ Avoid: Custom styling
<Button className="bg-blue-500 text-white px-8 py-3">
  Submit
</Button>

// ✅ Good: Proper form structure
<form className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" />
  </div>
</form>

// ❌ Avoid: Missing labels and structure
<input type="email" placeholder="Email" />
```

#### Customization

When you need to customize components:

```tsx
// ✅ Good: Extending with className
<Button className="bg-brand-orange hover:bg-brand-orange/90">
  Custom Button
</Button>

// ✅ Good: Using CSS variables
<div className="bg-[hsl(var(--primary-brand))]">
  Custom background
</div>

// ❌ Avoid: Overriding component internals
<Button className="!bg-red-500 !text-white">
  Override Button
</Button>
```

## Implementation

### Installation

Our design system is built on shadcn/ui and Tailwind CSS:

```bash
# Install dependencies
npm install @radix-ui/react-* lucide-react class-variance-authority clsx tailwind-merge

# Add components
npx shadcn@latest add button input card badge
```

### Project Structure

```
src/
├── design-system/
│   ├── atoms/           # Basic components
│   ├── molecules/       # Compound components
│   ├── organisms/       # Complex components
│   ├── foundations/     # Design tokens
│   └── overview.stories.tsx  # Storybook overview
├── components/
│   └── ui/             # shadcn/ui components
└── styles/
    └── globals.css     # Global styles and tokens
```

### Adding New Components

1. **Create Component** - Use the established patterns
2. **Add Storybook Story** - Document usage and variants
3. **Update Overview** - Add to the design system overview
4. **Test Accessibility** - Ensure WCAG compliance

### Example Component

```tsx
// components/ui/custom-button.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

## Accessibility

### WCAG Compliance

Our design system is built with accessibility in mind:

- **WCAG AA Compliance** - All components meet AA standards
- **Keyboard Navigation** - Full keyboard support
- **Screen Reader Support** - Proper ARIA labels and roles
- **Focus Management** - Visible focus indicators
- **Color Contrast** - Sufficient contrast ratios

### Accessibility Features

#### ARIA Support

```tsx
// Proper labeling
<Input 
  id="email" 
  aria-describedby="email-error"
  aria-invalid={hasError}
/>

// Error messaging
{hasError && (
  <p id="email-error" className="text-destructive text-sm">
    Please enter a valid email address
  </p>
)}
```

#### Keyboard Navigation

```tsx
// Focus management
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogTitle>Dialog Title</DialogTitle>
    {/* Content automatically focuses on open */}
  </DialogContent>
</Dialog>
```

#### Color and Contrast

- All text meets WCAG AA contrast requirements
- Interactive elements have sufficient contrast
- Color is never the only way to convey information

### Testing Accessibility

```bash
# Run accessibility tests
npm run test:a11y

# Use axe-core for automated testing
npm install @axe-core/react
```

## Resources

### Documentation

- [Storybook](http://localhost:6006) - Interactive component documentation
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [shadcn/ui](https://ui.shadcn.com/) - Component library

### Tools

- **Figma** - Design tool with our design tokens
- **Storybook** - Component development and documentation
- **axe-core** - Accessibility testing
- **Lighthouse** - Performance and accessibility auditing

### Getting Help

- **Design Questions** - Consult with the design team
- **Technical Issues** - Check component documentation
- **Accessibility** - Review WCAG guidelines and test with screen readers

### Contributing

1. **Follow Patterns** - Use established component patterns
2. **Test Thoroughly** - Include accessibility and cross-browser testing
3. **Document Changes** - Update documentation and stories
4. **Review Process** - Submit for design and technical review

---

*This documentation is a living document. Please keep it updated as the design system evolves.* 