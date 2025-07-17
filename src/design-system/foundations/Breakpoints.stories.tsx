import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../atoms/card';
import { Badge } from '../atoms/badge';
import { Button } from '../atoms/button';
import { Separator } from '../atoms/separator';
import { Monitor, Tablet, Smartphone, Laptop, Maximize } from 'lucide-react';
import { useState, useEffect } from 'react';

const meta: Meta = {
  title: 'Design System/Foundation/Breakpoints',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Breakpoint System

The Application UI Kit uses a systematic breakpoint system for responsive design, ensuring consistent layouts across all device sizes.

## Design Principles

- **Mobile First**: Progressive enhancement from mobile to desktop
- **Consistency**: Systematic approach to responsive breakpoints
- **Flexibility**: Adaptable layouts for various screen sizes
- **Performance**: Optimized for fast loading on all devices

## Breakpoint Scale

### Standard Breakpoints

Based on Tailwind CSS's responsive design system with mobile-first approach.

## Usage Guidelines

- Design mobile-first, then add larger screen enhancements
- Use responsive utilities to create adaptive layouts
- Test on real devices, not just browser resize
- Consider touch targets and interaction patterns
- Optimize images and assets for different screen densities
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const BreakpointCard = ({ 
  icon: Icon, 
  name, 
  prefix, 
  minWidth, 
  maxWidth, 
  description, 
  examples,
  isActive = false 
}: { 
  icon: React.ComponentType<any>; 
  name: string; 
  prefix: string; 
  minWidth: string; 
  maxWidth?: string; 
  description: string; 
  examples: string[];
  isActive?: boolean;
}) => (
  <Card className={`transition-all ${isActive ? 'ring-2 ring-primary-brand shadow-lg' : ''}`}>
    <CardHeader>
      <div className="flex items-center gap-3">
        <Icon className={`h-6 w-6 ${isActive ? 'text-primary-brand' : 'text-muted-foreground'}`} />
        <div>
          <CardTitle className="text-lg">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-medium text-sm mb-1">Prefix</h4>
          <Badge variant="secondary" className="font-mono">
            {prefix}
          </Badge>
        </div>
        <div>
          <h4 className="font-medium text-sm mb-1">Min Width</h4>
          <Badge variant="outline" className="font-mono">
            {minWidth}
          </Badge>
        </div>
      </div>
      {maxWidth && (
        <div>
          <h4 className="font-medium text-sm mb-1">Max Width</h4>
          <Badge variant="outline" className="font-mono">
            {maxWidth}
          </Badge>
        </div>
      )}
      <div>
        <h4 className="font-medium text-sm mb-2">Typical Devices</h4>
        <div className="flex flex-wrap gap-1">
          {examples.map((example, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {example}
            </Badge>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

const ResponsiveDemo = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState('sm');
  
  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 640) setCurrentBreakpoint('default');
      else if (width < 768) setCurrentBreakpoint('sm');
      else if (width < 1024) setCurrentBreakpoint('md');
      else if (width < 1280) setCurrentBreakpoint('lg');
      else if (width < 1536) setCurrentBreakpoint('xl');
      else setCurrentBreakpoint('2xl');
    };
    
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Monitor className="h-5 w-5 text-muted-foreground" />
        <span className="text-sm font-medium">Current Breakpoint:</span>
        <Badge variant="secondary" className="font-mono">
          {currentBreakpoint}
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        <div className="bg-primary-brand p-4 rounded-lg text-white text-center">
          <div className="block sm:hidden">1 col</div>
          <div className="hidden sm:block md:hidden">2 cols</div>
          <div className="hidden md:block lg:hidden">3 cols</div>
          <div className="hidden lg:block xl:hidden">4 cols</div>
          <div className="hidden xl:block 2xl:hidden">5 cols</div>
          <div className="hidden 2xl:block">6 cols</div>
        </div>
        <div className="bg-secondary-brand p-4 rounded-lg text-white text-center">
          <div className="block sm:hidden">Item 2</div>
          <div className="hidden sm:block">Item 2</div>
        </div>
        <div className="bg-primary-brand p-4 rounded-lg text-white text-center hidden md:block">
          Item 3
        </div>
        <div className="bg-secondary-brand p-4 rounded-lg text-white text-center hidden lg:block">
          Item 4
        </div>
        <div className="bg-primary-brand p-4 rounded-lg text-white text-center hidden xl:block">
          Item 5
        </div>
        <div className="bg-secondary-brand p-4 rounded-lg text-white text-center hidden 2xl:block">
          Item 6
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground">
        Resize your browser window to see the responsive grid in action
      </p>
    </div>
  );
};

const UtilityExample = ({ 
  title, 
  description, 
  code, 
  children 
}: { 
  title: string; 
  description: string; 
  code: string; 
  children: React.ReactNode;
}) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-base">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        {children}
      </div>
      <div>
        <h4 className="font-medium text-sm mb-2">Code Example</h4>
        <code className="text-xs bg-muted p-2 rounded block font-mono">
          {code}
        </code>
      </div>
    </CardContent>
  </Card>
);

export const BreakpointsSystem: Story = {
  render: () => (
    <div className="max-w-7xl mx-auto p-8 space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Maximize className="h-8 w-8 text-primary-brand" />
          <h1 className="text-4xl font-bold">Breakpoints System</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Responsive design breakpoints for creating adaptive layouts
        </p>
      </div>

      {/* Current Breakpoint Demo */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Live Breakpoint Demo</h2>
          <p className="text-muted-foreground">
            Interactive demonstration of responsive grid behavior
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Responsive Grid</CardTitle>
            <CardDescription>
              This grid adapts to different screen sizes using Tailwind's responsive utilities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveDemo />
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Breakpoint Scale */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Breakpoint Scale</h2>
          <p className="text-muted-foreground">
            Standard breakpoints for responsive design, following mobile-first approach
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BreakpointCard
            icon={Smartphone}
            name="Mobile (Default)"
            prefix="(none)"
            minWidth="0px"
            maxWidth="639px"
            description="Base styles, no prefix needed"
            examples={['iPhone SE', 'iPhone 12', 'Galaxy S21']}
          />
          
          <BreakpointCard
            icon={Smartphone}
            name="Small"
            prefix="sm:"
            minWidth="640px"
            maxWidth="767px"
            description="Large mobile devices"
            examples={['iPhone 12 Pro Max', 'Large Android']}
          />
          
          <BreakpointCard
            icon={Tablet}
            name="Medium"
            prefix="md:"
            minWidth="768px"
            maxWidth="1023px"
            description="Tablet devices"
            examples={['iPad', 'iPad Air', 'Galaxy Tab']}
          />
          
          <BreakpointCard
            icon={Laptop}
            name="Large"
            prefix="lg:"
            minWidth="1024px"
            maxWidth="1279px"
            description="Small desktop screens"
            examples={['MacBook Air', 'Small laptops']}
          />
          
          <BreakpointCard
            icon={Monitor}
            name="Extra Large"
            prefix="xl:"
            minWidth="1280px"
            maxWidth="1535px"
            description="Desktop screens"
            examples={['MacBook Pro', 'Desktop monitors']}
          />
          
          <BreakpointCard
            icon={Monitor}
            name="2X Large"
            prefix="2xl:"
            minWidth="1536px"
            description="Large desktop screens"
            examples={['4K monitors', 'Large displays']}
          />
        </div>
      </section>

      <Separator />

      {/* Container System */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Container System</h2>
          <p className="text-muted-foreground">
            Responsive container max-widths and centering
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Container Breakpoints</CardTitle>
            <CardDescription>
              Tailwind's container utility automatically sets max-width at different breakpoints
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Default Container</h4>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span>None</span>
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">100%</code>
                    </div>
                    <div className="flex justify-between">
                      <span>sm (640px)</span>
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">640px</code>
                    </div>
                    <div className="flex justify-between">
                      <span>md (768px)</span>
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">768px</code>
                    </div>
                    <div className="flex justify-between">
                      <span>lg (1024px)</span>
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">1024px</code>
                    </div>
                    <div className="flex justify-between">
                      <span>xl (1280px)</span>
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">1280px</code>
                    </div>
                    <div className="flex justify-between">
                      <span>2xl (1536px)</span>
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">1536px</code>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Custom Container</h4>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span>2xl max-width</span>
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">1400px</code>
                    </div>
                    <div className="flex justify-between">
                      <span>Centered</span>
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">center: true</code>
                    </div>
                    <div className="flex justify-between">
                      <span>Padding</span>
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">2rem</code>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm">
                  The container configuration in tailwind.config.cjs sets center: true, 
                  padding: "2rem", and screens: {`{"2xl": "1400px"}`} for optimal content width.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Utility Examples */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Responsive Utilities</h2>
          <p className="text-muted-foreground">
            Examples of responsive utility classes in action
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UtilityExample
            title="Responsive Text Sizes"
            description="Text that scales with screen size"
            code="text-sm md:text-base lg:text-lg xl:text-xl"
          >
            <div className="text-sm md:text-base lg:text-lg xl:text-xl font-medium">
              This text scales with screen size
            </div>
          </UtilityExample>
          
          <UtilityExample
            title="Responsive Spacing"
            description="Padding that adapts to screen size"
            code="p-4 md:p-6 lg:p-8 xl:p-10"
          >
            <div className="bg-primary-brand text-white p-4 md:p-6 lg:p-8 xl:p-10 rounded-lg">
              Responsive padding
            </div>
          </UtilityExample>
          
          <UtilityExample
            title="Responsive Grid"
            description="Grid columns that change with screen size"
            code="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              <div className="bg-secondary-brand text-white p-2 rounded text-center text-sm">1</div>
              <div className="bg-secondary-brand text-white p-2 rounded text-center text-sm">2</div>
              <div className="bg-secondary-brand text-white p-2 rounded text-center text-sm">3</div>
              <div className="bg-secondary-brand text-white p-2 rounded text-center text-sm">4</div>
            </div>
          </UtilityExample>
          
          <UtilityExample
            title="Responsive Flex"
            description="Flex direction that changes with screen size"
            code="flex-col md:flex-row"
          >
            <div className="flex flex-col md:flex-row gap-2">
              <div className="bg-primary-brand text-white p-2 rounded text-center text-sm">Item 1</div>
              <div className="bg-primary-brand text-white p-2 rounded text-center text-sm">Item 2</div>
              <div className="bg-primary-brand text-white p-2 rounded text-center text-sm">Item 3</div>
            </div>
          </UtilityExample>
          
          <UtilityExample
            title="Responsive Display"
            description="Show/hide elements at different breakpoints"
            code="hidden md:block lg:hidden xl:block"
          >
            <div className="space-y-2">
              <div className="bg-green-500 text-white p-2 rounded text-center text-sm">
                Always visible
              </div>
              <div className="bg-blue-500 text-white p-2 rounded text-center text-sm hidden md:block">
                Visible from md up
              </div>
              <div className="bg-red-500 text-white p-2 rounded text-center text-sm md:hidden">
                Hidden from md up
              </div>
            </div>
          </UtilityExample>
          
          <UtilityExample
            title="Responsive Buttons"
            description="Button size that adapts to screen size"
            code="Button size='sm' md:size='default' lg:size='lg'"
          >
            <div className="flex gap-2">
              <Button size="sm" className="md:px-4 md:py-2 lg:px-6 lg:py-3">
                Responsive Button
              </Button>
            </div>
          </UtilityExample>
        </div>
      </section>

      <Separator />

      {/* Usage Guidelines */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Usage Guidelines</h2>
          <p className="text-muted-foreground">
            Best practices for responsive design implementation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Mobile-First Approach
              </CardTitle>
              <CardDescription>Start with mobile and enhance for larger screens</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-2">
                <p>• Design for mobile devices first (320px+)</p>
                <p>• Use base styles without prefixes for mobile</p>
                <p>• Add responsive prefixes for larger screens</p>
                <p>• Test on real devices, not just browser resize</p>
                <p>• Consider touch targets (minimum 44px)</p>
                <p>• Optimize images for different screen densities</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-5 w-5" />
                Content-Driven Breakpoints
              </CardTitle>
              <CardDescription>Base breakpoints on content needs, not devices</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-2">
                <p>• Use breakpoints when content needs to adapt</p>
                <p>• Don't assume specific device sizes</p>
                <p>• Test at various viewport widths</p>
                <p>• Consider typography and readability</p>
                <p>• Ensure touch-friendly interactions</p>
                <p>• Use container queries for component-level responsiveness</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CSS Reference */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">CSS Reference</h2>
          <p className="text-muted-foreground">
            Complete reference of responsive utility classes
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Responsive Prefixes</CardTitle>
            <CardDescription>Apply utilities at different breakpoints</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Breakpoint Prefixes</h4>
                <div className="space-y-1 text-sm font-mono">
                  <div>(none) - Mobile first (0px+)</div>
                  <div>sm: - Small screens (640px+)</div>
                  <div>md: - Medium screens (768px+)</div>
                  <div>lg: - Large screens (1024px+)</div>
                  <div>xl: - Extra large (1280px+)</div>
                  <div>2xl: - 2X large (1536px+)</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Example Usage</h4>
                <div className="space-y-1 text-sm font-mono">
                  <div>text-sm md:text-base lg:text-lg</div>
                  <div>p-4 md:p-6 lg:p-8</div>
                  <div>grid-cols-1 md:grid-cols-2 lg:grid-cols-3</div>
                  <div>hidden md:block</div>
                  <div>flex-col md:flex-row</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  ),
}; 