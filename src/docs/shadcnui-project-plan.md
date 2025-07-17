# Amazon Waste Poster Program - UI Kit Setup Plan

## Phase 1: Project Foundation & Setup (Steps 1-10)

### Step 1: Initialize Vite + React + TypeScript Project
```bash
pnpm create vite react-design-system-starter --template react-ts
cd react-design-system-starter
pnpm install
```

### Step 2: Install Core Dependencies
```bash
# Core UI and routing
pnpm add react-router-dom zustand
pnpm add @types/react-router-dom -D

# shadcn/ui prerequisites
pnpm add tailwindcss postcss autoprefixer
pnpm add -D @types/node
npx tailwindcss init -p

# shadcn/ui setup
pnpm add class-variance-authority clsx tailwind-merge
pnpm add lucide-react
pnpm add @radix-ui/react-slot
```

### Step 3: Install Development & Testing Dependencies
```bash
# Testing stack
pnpm add -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event
pnpm add -D @playwright/test
pnpm add -D msw

# Code quality
pnpm add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
pnpm add -D prettier eslint-config-prettier eslint-plugin-prettier
pnpm add -D eslint-plugin-react eslint-plugin-react-hooks

# Storybook
pnpm add -D @storybook/react-vite @storybook/addon-essentials @storybook/addon-interactions @storybook/testing-library
```

### Step 4: Configure shadcn/ui
```bash
npx shadcn@latest init
```
**Configure with these options:**
- Would you like to use TypeScript? → Yes
- Which style would you like to use? → Default (or New York for modern look)
- Which color would you like to use as base color? → Slate
- Where is your global CSS file? → src/index.css
- Would you like to use CSS variables for colors? → Yes
- Are you using a custom tailwind prefix? → No
- Where is your tailwind.config.js located? → tailwind.config.js
- Configure the import alias for components? → src/components
- Configure the import alias for utils? → src/lib/utils

### Step 5: Setup Design Tokens & Theming System
- Create `src/lib/design-tokens.ts` with colors (Amazon orange #ff9900, Stratus blue #1a5490), spacing, typography, shadows
- Include flexible theming system for easy customization

### Step 6: Install Essential shadcn/ui Components
```bash
# Form and input components
npx shadcn@latest add button input label form select checkbox radio-group textarea

# Layout and navigation
npx shadcn@latest add card separator badge avatar

# Data display
npx shadcn@latest add table dialog dropdown-menu tabs accordion

# Feedback
npx shadcn@latest add alert toast progress skeleton

# Advanced components
npx shadcn@latest add command popover scroll-area

# Additional components
npx shadcn@latest add sheet tooltip switch calendar pagination breadcrumb
```

### Step 7: Configure Tailwind with Design Tokens
- Update `tailwind.config.js` to include design tokens
- Add custom colors for Amazon/Stratus branding
- Configure responsive breakpoints and animations

### Step 8: Setup Testing Configuration
- Create `vitest.config.ts` with React and path alias support
- Create `src/test/setup.ts` with Jest DOM and MSW server setup
- Configure test environment for jsdom

### Step 9: Setup Storybook
```bash
npx storybook@latest init
```
- Update `.storybook/main.ts` for TypeScript support
- Create `.storybook/preview.ts` with design system integration and brand color backgrounds

**Note:** The newer shadcn CLI (`npx shadcn@latest`) automatically handles dependency management and framework detection, making setup much smoother than previous versions.

### Step 10: Configure ESLint & Prettier
- Create `.eslintrc.json` with React, TypeScript, and Prettier rules
- Create `.prettierrc` with consistent formatting rules
- Configure to work together without conflicts

## Phase 2: Core Component Library (Steps 11-20)

### Step 11: Create Domain-Specific Component Structure
Create folder structure:
```
src/components/domain/
├── auth/ (LoginForm + stories + tests)
├── layout/ (AppLayout, Header, Navigation)
├── request/ (RequestCard, RequestTable, StatusBadge)
├── poster/ (PosterPreview, PosterSelector)
├── forms/ (LocationSelector, CustomPosterForm)
└── common/ (LoadingSpinner, EmptyState, DataTable)
```

### Step 12: Build Authentication Components
- Create `LoginForm.tsx` with username/password fields, error handling, loading states
- Include placeholder logos and branding
- Add demo credentials display for easy testing
- Implement password visibility toggle

### Step 13: Create Layout Components
- Create `AppLayout.tsx` with role-based routing
- Create `Header.tsx` with Amazon/Stratus branding, user avatar, dropdown menu
- Create `Navigation.tsx` with different menus for Amazon vs Stratus users
- Include responsive design considerations

### Step 14: Build Request Management Components
- Create `StatusBadge.tsx` with all request status types and appropriate colors
- Create `RequestCard.tsx` for dashboard display with actions based on status
- Create `RequestTable.tsx` for data management with sorting, filtering
- Include role-based action buttons

### Step 15: Create Poster Components
- Create `PosterPreview.tsx` with image display, dimensions, pricing
- Create `PosterSelector.tsx` with quantity controls and grid layout
- Support both standard and custom poster types
- Include visual feedback for selections

### Step 16: Build Form Components
- Create `LocationSelector.tsx` with multi-select dropdown, search functionality
- Create `CustomPosterForm.tsx` with file upload, color picker, validation
- Include real-time preview capabilities
- Add comprehensive form validation

### Step 17: Add Utility Components
- Create `LoadingSpinner.tsx` with different sizes
- Create `EmptyState.tsx` with customizable icons and actions
- Create `DataTable.tsx` with pagination, search, sorting
- Include accessibility features

### Step 18: Enhanced Utilities and Helper Functions
- Update `src/lib/utils.ts` with date formatting, currency formatting, validation helpers
- Add file utilities, local storage helpers, debounce function
- Include status color helpers and text utilities

### Step 19: Complete Mock Data System
- Create comprehensive `src/lib/mock-data.ts` with:
  - Users (Amazon and Stratus roles)
  - Locations with regional data
  - Poster types with pricing and specifications
  - Requests with all status types and realistic data
  - Helper functions for data manipulation
- Include API simulation delays for realistic testing

### Step 20: Setup Zustand Store with All Slices
- Create `src/store/index.ts` with combined store
- Create `src/store/auth-slice.ts` for authentication state
- Create `src/store/request-slice.ts` for request management
- Create `src/store/ui-slice.ts` for UI state and notifications
- Include error handling and loading states

## Phase 3: Starter Screens (Steps 21-25)

### Step 21: Create Login Page
- Create `src/pages/LoginPage.tsx` with authentication flow
- Include automatic redirection based on user role
- Add error handling and form validation
- Integrate with auth store

### Step 22: Create Amazon Dashboard
- Create `src/pages/amazon/Dashboard.tsx` with:
  - Summary cards (total requests, pending, approved, spent)
  - Recent requests grid with status indicators
  - Quick action buttons
  - Responsive layout

### Step 23: Create Stratus Dashboard
- Create `src/pages/stratus/Dashboard.tsx` with:
  - Processing metrics and alerts
  - Request queue with filtering tabs
  - Priority indicators and bulk actions
  - Admin quick links

### Step 24: Setup Routing and Protected Routes
- Create `src/router/index.tsx` with role-based routing
- Create `src/router/ProtectedRoute.tsx` for authentication guards
- Configure automatic redirections based on user roles
- Include error boundaries

### Step 25: Complete Integration
- Update `src/App.tsx` with router provider and global error handling
- Update `src/main.tsx` with error boundary and production optimizations
- Test complete user flows for both roles

## Phase 4: Testing & Documentation (Steps 26-30)

### Step 26: Create Comprehensive Storybook Stories
- Create stories for all major components:
  - `LoginForm.stories.tsx` with all states
  - `StatusBadge.stories.tsx` with all status types
  - `RequestCard.stories.tsx` with different scenarios
  - `PosterPreview.stories.tsx` with grid examples
- Include interactive examples and documentation

### Step 27: Complete Test Coverage
- Create unit tests for key components:
  - `LoginForm.test.tsx` with user interactions
  - `RequestCard.test.tsx` with different props
  - `PosterPreview.test.tsx` with selection logic
- Include test utilities and helpers in `src/test/utils.tsx`

### Step 28: Setup E2E Testing
- Create `playwright.config.ts` with multi-browser testing
- Create `e2e/login.spec.ts` for authentication flows
- Create `e2e/dashboard.spec.ts` for user journeys
- Include CI/CD friendly configuration

### Step 29: Create Mock API Handlers
- Create `src/test/mocks/handlers.ts` with MSW handlers for:
  - Authentication endpoints
  - Request CRUD operations
  - Location and poster type data
  - Error simulation endpoints

### Step 30: Final Documentation and Validation
- Create comprehensive `README.md` with setup instructions
- Create `COMPONENT_GUIDE.md` with development patterns
- Create `SETUP_VALIDATION.md` with complete checklist
- Update `package.json` with all necessary scripts

## Important shadcn/ui Updates (2024)

**CLI Command Changes:**
- ✅ **NEW:** `npx shadcn@latest init` (replaces `npx shadcn-ui@latest init`)
- ✅ **NEW:** `npx shadcn@latest add [component]` (replaces `npx shadcn-ui@latest add`)

**Key Improvements:**
- **Framework Detection:** Automatically detects Vite, Next.js, Remix, etc.
- **Non-Destructive Updates:** No longer overwrites existing tailwind.config.js and CSS files
- **Component Dependencies:** Components now ship with their own Tailwind keyframes and dependencies
- **Style Options:** Choose between "default" and "new-york" styles during init
- **Better Error Handling:** Clearer error messages and validation

**Breaking Changes to Watch:**
- Old `shadcn-ui` package is deprecated, use `shadcn` instead
- Some component APIs may have changed - always check latest docs
- New CLI handles path aliases more intelligently

## Package Scripts Setup

Update `package.json` with these scripts:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "format": "prettier --write \"src/**/*.{ts,tsx,js,jsx,json,css,md}\"",
    "type-check": "tsc --noEmit",
    "validate": "npm run type-check && npm run lint && npm run test:run && npm run build"
  }
}
```

## Final Validation Checklist

### ✅ Development Environment
- [ ] `pnpm dev` starts without errors
- [ ] Login page loads with demo credentials
- [ ] Both Amazon and Stratus dashboards accessible
- [ ] Navigation works between all screens

### ✅ Component Library
- [ ] `pnpm storybook` shows all components
- [ ] All shadcn/ui components working
- [ ] Domain components render correctly
- [ ] Interactive examples functional

### ✅ Testing Infrastructure
- [ ] `pnpm test` runs all unit tests
- [ ] `pnpm test:e2e` runs Playwright tests
- [ ] All tests pass
- [ ] Coverage reports generate

### ✅ Code Quality
- [ ] `pnpm lint` passes without errors
- [ ] `pnpm format` works correctly
- [ ] `pnpm type-check` validates TypeScript
- [ ] `pnpm build` creates production build

### ✅ Ready for Development Team
- [ ] Complete component library available
- [ ] Mock data supports all business scenarios
- [ ] Clear development patterns established
- [ ] Documentation covers all major features

## 🎯 What the Development Team Gets

**Immediate Benefits:**
- Zero setup time - clone and start coding
- 50+ pre-built components ready to use
- Complete design system with Amazon/Stratus branding
- Realistic mock data matching business requirements
- Full testing infrastructure ready for expansion

**Technical Foundation:**
- TypeScript for type safety
- Zustand for state management
- React Router for navigation
- Tailwind CSS for styling
- Vite for fast development

**Development Tools:**
- Storybook for component documentation
- Comprehensive testing setup
- Code quality enforcement
- Production-ready build process

**Business Logic Ready:**
- Authentication flows for both user types
- Request management workflows
- Role-based access control
- Complete user journeys implemented

This foundation enables your development team to focus purely on business features rather than infrastructure setup.