# Amazon Waste Poster Program - UI Kit

A modern, professional UI kit built with React, TypeScript, and shadcn/ui for managing Amazon's waste poster program requests and approvals.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui components (26 components installed)
│   ├── common/      # Shared utilities (ErrorBoundary implemented)
│   └── domain/      # Business-specific components
│       ├── auth/    # Authentication components (LoginForm only)
│       ├── layout/  # Layout and navigation (empty - not implemented)
│       ├── request/ # Request management (empty - not implemented)
│       ├── poster/  # Poster components (empty - not implemented)
│       ├── forms/   # Form components (empty - not implemented)
│       └── common/  # Domain-specific shared components (empty)
├── pages/           # Application pages (LoginPage only)
├── lib/            # Utilities and helpers
├── assets/         # Static assets
└── App.tsx         # Main app component with routing
```

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui + Radix UI (26 components installed)
- **Styling**: Tailwind CSS
- **State Management**: Zustand (installed but not implemented)
- **Routing**: React Router v7 (basic routing implemented)
- **Testing**: Vitest + Testing Library + Playwright (configured but no tests written)
- **Documentation**: Storybook (configured but no stories written)
- **Code Quality**: ESLint + Prettier

## 📦 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run type-check   # Run TypeScript check
npm run test         # Run unit tests (no tests implemented yet)
npm run test:run     # Run tests once
npm run test:coverage # Run tests with coverage
npm run validate     # Run all checks (lint, format, type, build)
npm run storybook    # Start Storybook (no stories implemented yet)
```

## ✅ What's Currently Implemented

### Core Infrastructure
- ✅ **Development Setup**: Vite + React 19 + TypeScript
- ✅ **UI Foundation**: 26 shadcn/ui components installed and ready
- ✅ **Styling**: Tailwind CSS with custom Amazon branding
- ✅ **Error Handling**: Professional React ErrorBoundary component

- ✅ **Build System**: Optimized Vite config with chunk splitting
- ✅ **Code Quality**: ESLint + Prettier configuration
- ✅ **Build System**: Optimized Vite config with chunk splitting

### Authentication
- ✅ **LoginForm Component**: Complete login form with validation
- ✅ **LoginPage**: Basic login page with routing
- ✅ **Routing**: React Router setup with login route

### Available UI Components
All shadcn/ui components are installed and ready to use:
- Forms: `input`, `textarea`, `select`, `label`, `button`
- Layout: `card`, `sheet`, `dialog`, `separator`
- Navigation: `breadcrumb`, `dropdown-menu`, `pagination`
- Data Display: `table`, `badge`, `avatar`, `skeleton`
- Feedback: `alert`, `progress`, `sonner` (toast)
- Utilities: `calendar`, `command`, `popover`, `tooltip`, `scroll-area`

## 🚧 What Needs to Be Built

### State Management
- ❌ **Zustand Store**: No store slices implemented yet
- ❌ **Auth State**: Authentication state management
- ❌ **Request State**: Request management state
- ❌ **UI State**: Global UI state (loading, modals, etc.)

### Core Application Pages
- ❌ **Dashboard**: Main dashboard view
- ❌ **Request Management**: Create, view, edit requests
- ❌ **Poster Gallery**: Browse and select posters
- ❌ **Admin Panel**: User and request administration
- ❌ **Profile Settings**: User profile management

### Domain Components

#### Layout Components (Not Implemented)
- ❌ **AppLayout**: Main application layout wrapper
- ❌ **Header**: Navigation header with user menu
- ❌ **Navigation**: Sidebar or top navigation
- ❌ **Footer**: Application footer

#### Request Management (Not Implemented)
- ❌ **RequestCard**: Individual request display
- ❌ **RequestTable**: Tabular request view
- ❌ **StatusBadge**: Request status indicators
- ❌ **RequestForm**: Create/edit request form

#### Poster Components (Not Implemented)
- ❌ **PosterPreview**: Poster thumbnail and details
- ❌ **PosterSelector**: Poster selection interface
- ❌ **PosterGallery**: Browse all available posters
- ❌ **CustomPosterUpload**: Upload custom poster designs

#### Form Components (Not Implemented)
- ❌ **LocationSelector**: Building/location picker
- ❌ **CustomPosterForm**: Custom poster request form
- ❌ **RequestDetailsForm**: Request information form

#### Common Components (Not Implemented)
- ❌ **LoadingSpinner**: Loading state indicator
- ❌ **EmptyState**: Empty state placeholder
- ❌ **DataTable**: Reusable data table component
- ❌ **SearchBar**: Global search functionality

### Testing & Documentation
- ❌ **Unit Tests**: No test files written yet
- ❌ **Integration Tests**: No user workflow tests
- ❌ **E2E Tests**: No end-to-end tests
- ❌ **Storybook Stories**: No component documentation
- ❌ **Visual Tests**: No visual regression tests

### Backend Integration
- ❌ **API Client**: HTTP client setup
- ❌ **Authentication**: JWT/OAuth integration
- ❌ **Data Fetching**: Request/poster data APIs
- ❌ **File Upload**: Poster upload functionality

## 🎨 Design System

Our comprehensive design system provides a unified foundation for building consistent, accessible, and beautiful user interfaces.

### Quick Links

- **[Design System Documentation](./design-system.md)** - Complete guide for developers and designers
- **[Quick Reference Guide](./design-system-quick-reference.md)** - Common patterns and usage examples
- **[Storybook Overview](../design-system/overview.stories.tsx)** - Interactive component showcase
- **[Design Tokens](../design-system/foundations/)** - Colors, typography, spacing, and more

### Key Features

- **Design Tokens**: Consistent colors, typography, spacing, and shadows
- **Component Library**: 30+ production-ready React components
- **Accessibility**: WCAG AA compliant with proper ARIA support
- **Dark Mode**: Built-in theme switching capabilities
- **Responsive**: Mobile-first approach with flexible breakpoints
- **TypeScript**: Full type safety and IntelliSense support

### Brand Colors

- **Primary Brand**: Amazon orange (#e67e00) - Primary actions and branding
- **Secondary Brand**: Stratus blue (#1a5490) - Secondary actions and accents
- **Semantic Colors**: Success, warning, error, and info states
- **Neutral Colors**: Text, backgrounds, and borders with proper contrast

### Typography

- **Font Family**: Inter (with system fallbacks)
- **Scale**: 9 text sizes from xs to 4xl
- **Weights**: Light (300) to Bold (700)
- **Line Heights**: Optimized for readability
- **Letter Spacing**: Subtle tracking for better legibility

### Getting Started

1. **Read the Documentation**: Start with the [Design System Guide](./design-system.md)
2. **Explore Components**: Use Storybook to see all available components
3. **Follow Guidelines**: Use established patterns and design tokens
4. **Test Accessibility**: Ensure your implementations meet WCAG standards

## 🔧 Development

### Adding New Components

1. Use shadcn/ui CLI to add base components:
```bash
npx shadcn@latest add [component-name]
```

2. Create domain-specific components in `src/components/domain/`

3. Add Storybook stories for documentation

### Implementing State Management

1. Create store slices in `src/store/`
2. Follow the established Zustand patterns
3. Import and use in components

### Code Quality

- **ESLint**: Enforces code standards
- **Prettier**: Automatic code formatting
- **TypeScript**: Type safety
- **Conventional**: Follow the established patterns

## 🧪 Testing (To Be Implemented)

- **Unit Tests**: Components and utilities
- **Integration Tests**: User workflows
- **E2E Tests**: Complete user journeys
- **Visual Tests**: Storybook integration

## 📖 Documentation

- **Design System Guide**: [Complete documentation](./design-system.md) for developers and designers
- **Storybook**: Interactive component documentation and examples
- **TypeScript**: Full type definitions and IntelliSense support
- **Component Stories**: Individual component documentation with usage examples
- **Design Tokens**: Foundation documentation for colors, typography, spacing, and more

## 🚀 Build and Deployment

```bash
npm run build       # Build the application
npm run preview     # Test the build locally
```

The `dist/` directory contains the production-ready files.

**Build Output:**
- ✅ **Static Files**: Optimized HTML, CSS, and JavaScript
- ✅ **Asset Optimization**: Compressed and minified assets
- ✅ **Source Maps**: Available for debugging (development builds)

## 👥 Team Setup

This project is designed as a comprehensive starter kit for development teams:

✅ **Zero Configuration**: Clone and start coding immediately  
✅ **Best Practices**: Industry-standard tooling and patterns  
✅ **Type Safety**: Full TypeScript integration  
✅ **UI Foundation**: 26 shadcn/ui components ready to use  
✅ **Code Quality**: Automated linting and formatting  
✅ **Build System**: Optimized for development and production  

⚠️ **Implementation Required**: Core business logic and components need to be built

## 🚀 Next Steps for Development Team

### Phase 1: Core Infrastructure
1. Implement Zustand store slices (auth, requests, UI)
2. Create main application layout components
3. Set up API client and authentication flow

### Phase 2: Core Features
1. Build request management components and pages
2. Implement poster gallery and selection
3. Create form components for data input

### Phase 3: Polish & Testing
1. Add comprehensive test coverage
2. Create Storybook documentation
3. Implement error handling and loading states

### Phase 4: Advanced Features
1. Add advanced search and filtering
2. Implement real-time updates
3. Add analytics and reporting

## 🤝 Contributing

1. Follow the established patterns in `src/components/domain/`
2. Add tests for new features
3. Update Storybook stories for UI components
4. Run `npm run validate` before committing
5. Use conventional commit messages

## 📝 License

Private - Amazon Internal Use Only
