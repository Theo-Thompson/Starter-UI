# React Design System Starter Kit

A production-ready React starter kit with a comprehensive design system, built for development teams who need a solid foundation for building modern web applications. This kit provides everything you need to start building scalable, accessible, and maintainable React applications with confidence.

## 🎯 Project Purpose

This starter kit is designed to:

- **Accelerate Development** - Get started quickly with a complete, battle-tested foundation
- **Ensure Quality** - Built-in accessibility, testing, and code quality standards
- **Scale Effectively** - Atomic design architecture that grows with your team
- **Maintain Consistency** - Comprehensive design system with reusable components
- **Support Teams** - Clear documentation, TypeScript safety, and development tools

Perfect for teams building:
- Internal tools and dashboards
- Customer-facing web applications
- Admin panels and management interfaces
- Any React-based web application

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **npm** 9+ or **yarn** 1.22+
- **Git**

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd react-design-system-starter

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📚 What's Included

### 🎨 Design System
- **Atomic Design Architecture** - Organized by atoms, molecules, organisms, and templates
- **Comprehensive Component Library** - 50+ reusable UI components
- **Accessibility-First** - WCAG AA compliant with ARIA support
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark/Light Theme Support** - Built-in theme switching

### 🛠️ Development Tools
- **TypeScript** - Full type safety and IntelliSense
- **Vite** - Lightning-fast build tool and dev server
- **Storybook** - Component documentation and testing
- **ESLint + Prettier** - Code quality and formatting
- **Vitest** - Unit testing framework
- **Playwright** - End-to-end testing

### 🎯 Key Features
- **Modern React 19** - Latest React features and patterns
- **Radix UI Primitives** - Accessible component primitives
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Zustand** - Lightweight state management
- **Lucide Icons** - Beautiful icon library

## 🏗️ Project Structure

```
src/
├── design-system/          # Design system components
│   ├── atoms/             # Basic UI components (Button, Input, etc.)
│   ├── molecules/         # Composite components (Forms, Cards, etc.)
│   ├── organisms/         # Complex components (Layouts, etc.)
│   ├── foundations/       # Design tokens and utilities
│   └── overview.stories.tsx  # Component showcase
├── features/              # Application pages
│   ├── DashboardPage.tsx
│   ├── LoginPage.tsx
│   ├── UsersPage.tsx
│   └── ... (other pages)
├── shared/                # Shared utilities and components
│   ├── components/        # Cross-cutting components
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript type definitions
│   ├── contexts/         # React contexts
│   └── assets/           # Static assets
├── docs/                 # Documentation
├── App.tsx               # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles
```

## 🎨 Design System Components

### Atoms (Basic Components)
- **Button** - Primary, secondary, outline, ghost variants
- **Input** - Text, email, password, search inputs
- **Select** - Dropdown selection with search
- **Checkbox** - Form checkbox with labels
- **Switch** - Toggle switch component
- **Avatar** - User profile images
- **Badge** - Status indicators and labels
- **Card** - Content containers
- **Dialog** - Modal dialogs and overlays
- **Tooltip** - Contextual information
- **Progress** - Loading and progress indicators
- **Skeleton** - Loading placeholders
- **Alert** - Notification messages
- **Toast** - Temporary notifications

### Molecules (Composite Components)
- **Forms** - Form layouts and validation
- **Navigation** - Header and sidebar navigation
- **Data Display** - Tables, lists, and data grids
- **Feedback** - Error states and loading states
- **Layout** - Page layouts and containers

### Foundations
- **Colors** - Brand colors and semantic color system
- **Typography** - Font families, sizes, and weights
- **Spacing** - Consistent spacing scale
- **Shadows** - Elevation and depth system
- **Border Radius** - Corner radius tokens
- **Breakpoints** - Responsive design breakpoints
- **Icons** - Icon system and usage guidelines

## 🚀 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run preview          # Preview production build

# Building
npm run build            # Build for production
npm run build-storybook  # Build Storybook for deployment

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
npm run type-check       # Run TypeScript type checking

# Testing
npm run test             # Run tests in watch mode
npm run test:run         # Run tests once
npm run test:coverage    # Run tests with coverage

# Validation
npm run validate         # Run all checks (type, lint, format, build)

# Storybook
npm run storybook        # Start Storybook development server
```

## 📖 Storybook

Storybook provides an interactive component library and documentation:

```bash
npm run storybook
```

Visit `http://localhost:6006` to explore:
- **Component Showcase** - Interactive examples of all components
- **Design Tokens** - Colors, typography, spacing, and shadows
- **Accessibility Testing** - Built-in a11y checks
- **Component Documentation** - Props, usage examples, and guidelines

## 🎯 Component Usage

### Basic Component Import

```tsx
import { Button } from '@/design-system/atoms/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/design-system/atoms/card';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default">Click me</Button>
      </CardContent>
    </Card>
  );
}
```

### Using Design System Tokens

```tsx
import { cn } from '@/shared/utils/utils';

// Using Tailwind classes with design system tokens
<div className={cn(
  "bg-background text-foreground p-md rounded-lg shadow-sm",
  "hover:shadow-md transition-shadow"
)}>
  Content
</div>
```

## 🎨 Theming

The design system supports light and dark themes:

```tsx
import { ThemeProvider } from 'next-themes';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <YourApp />
    </ThemeProvider>
  );
}
```

### Theme Variables

All colors are defined as CSS custom properties:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --primary: #2563eb;
  --primary-foreground: #ffffff;
  /* ... more variables */
}

[data-theme="dark"] {
  --background: #0a0a0a;
  --foreground: #ededed;
  /* ... dark theme overrides */
}
```

## ♿ Accessibility

All components are built with accessibility in mind:

- **WCAG AA Compliance** - Meets accessibility standards
- **Keyboard Navigation** - Full keyboard support
- **Screen Reader Support** - Proper ARIA labels and roles
- **Focus Management** - Visible focus indicators
- **Color Contrast** - Sufficient contrast ratios
- **Semantic HTML** - Proper HTML structure

### Accessibility Testing

```bash
# Run accessibility tests in Storybook
npm run storybook
# Navigate to any component story and check the "Accessibility" tab
```

## 🧪 Testing

### Unit Tests

```bash
npm run test
```

Tests are written with Vitest and React Testing Library:

```tsx
import { render, screen } from '@testing-library/react';
import { Button } from '@/design-system/atoms/button';

test('Button renders with correct text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button')).toHaveTextContent('Click me');
});
```

### E2E Tests

```bash
npx playwright test
```

### Visual Regression Testing

```bash
# In Storybook, use the Chromatic addon for visual testing
npm run storybook
```

## 📦 Build and Deployment

### Production Build

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deployment

The project builds to static files that can be deployed to any hosting platform:

- **Static Hosting** - Any static file server (Apache, Nginx, etc.)
- **CDN** - Content delivery networks
- **Cloud Storage** - AWS S3, Google Cloud Storage, etc.
- **Custom Server** - Your own deployment process

For detailed deployment instructions, see [DEPLOYMENT.md](./docs/DEPLOYMENT.md).

## 🔧 Configuration Files

- **`vite.config.ts`** - Vite build configuration
- **`tailwind.config.cjs`** - Tailwind CSS configuration
- **`tsconfig.json`** - TypeScript configuration
- **`eslint.config.js`** - ESLint rules and plugins
- **`.prettierrc`** - Code formatting rules
- **`components.json`** - Shadcn/ui configuration
- **`.gitignore`** - Git ignore patterns

## 🤝 Contributing

### Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/component-name
   ```

2. **Make your changes**
   - Follow the existing code style
   - Add tests for new components
   - Update documentation

3. **Run validation**
   ```bash
   npm run validate
   ```

4. **Create a pull request**
   - Include a description of changes
   - Reference any related issues

### Code Standards

- **TypeScript** - All code must be typed
- **ESLint** - Follow linting rules
- **Prettier** - Consistent code formatting
- **Testing** - Components should have tests
- **Accessibility** - Maintain a11y standards
- **Documentation** - Update Storybook stories

## 📚 Additional Resources

### Documentation
- [Design System Overview](./src/docs/README.md)
- [Accessibility Guidelines](./src/docs/accessibility-audit.md)
- [Component API Reference](./src/docs/component-api.md)

### External Resources
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [Storybook Documentation](https://storybook.js.org/docs/)

## 🐛 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

**TypeScript errors**
```bash
npm run type-check
```

**Build failures**
```bash
npm run validate
```

**Storybook issues**
```bash
rm -rf node_modules/.cache/storybook
npm run storybook
```

## 📄 License

This project is private and proprietary.

---

**Need help?** Check the documentation in `src/docs/` or create an issue in the repository. 