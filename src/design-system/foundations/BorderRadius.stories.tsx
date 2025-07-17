import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../atoms/card';
import { Badge } from '../atoms/badge';
import { Button } from '../atoms/button';
import { Separator } from '../atoms/separator';
import { Input } from '../atoms/input';
import { Avatar, AvatarFallback } from '../atoms/avatar';
import { CornerRightUp, Square, Circle, Shapes } from 'lucide-react';

const meta: Meta = {
  title: 'Design System/Foundation/Border Radius',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Border Radius System

The Application UI Kit uses a systematic border radius scale based on CSS custom properties to create consistent, visually appealing rounded corners across all components.

## Design Principles

- **Consistency**: Systematic approach to border radius values
- **Flexibility**: Easy customization through CSS custom properties
- **Scalability**: Works across different component sizes
- **Visual Appeal**: Creates modern, approachable interfaces

## Radius Scale

### Base Values

All border radius values are based on a CSS custom property (--radius) set to 0.5rem (8px), with calculated variations for different use cases.

## Usage Guidelines

- Use subtle rounding for most components (radius-sm to radius-md)
- Use larger rounding for special emphasis (radius-lg)
- Use full rounding for circular elements (rounded-full)
- Consider content hierarchy when applying border radius
- Ensure rounded corners don't interfere with text readability
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const RadiusSample = ({ 
  className, 
  label, 
  description, 
  cssValue,
  pixelValue 
}: { 
  className: string; 
  label: string; 
  description: string; 
  cssValue: string;
  pixelValue: string;
}) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <div>
        <span className="text-sm font-medium">{label}</span>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="text-xs">
          {className}
        </Badge>
        <Badge variant="outline" className="text-xs">
          {pixelValue}
        </Badge>
      </div>
    </div>
    <div className="flex items-center justify-center min-h-[120px] bg-gray-50 rounded-lg">
      <div className={`bg-primary-brand w-20 h-20 flex items-center justify-center ${className}`}>
        <CornerRightUp className="h-8 w-8 text-white" />
      </div>
    </div>
    <div className="space-y-1">
      <p className="text-xs font-medium">CSS Value:</p>
      <code className="text-xs bg-muted p-2 rounded block font-mono">
        {cssValue}
      </code>
    </div>
  </div>
);

const ComponentRadiusExample = ({ 
  children, 
  label, 
  description, 
  className 
}: { 
  children: React.ReactNode; 
  label: string; 
  description: string; 
  className?: string;
}) => (
  <div className="space-y-3">
    <div>
      <h4 className="text-sm font-medium">{label}</h4>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
    <div className={`flex items-center justify-center min-h-[80px] bg-gray-50 rounded-lg ${className}`}>
      {children}
    </div>
  </div>
);

export const BorderRadiusSystem: Story = {
  render: () => (
    <div className="max-w-7xl mx-auto p-8 space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Shapes className="h-8 w-8 text-primary-brand" />
          <h1 className="text-4xl font-bold">Border Radius System</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Systematic border radius scale for consistent rounded corners
        </p>
      </div>

      {/* Base Radius Scale */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Base Radius Scale</h2>
          <p className="text-muted-foreground">
            Core border radius values based on CSS custom properties
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RadiusSample
            className="rounded-none"
            label="None"
            description="No rounding - sharp corners"
            cssValue="border-radius: 0px;"
            pixelValue="0px"
          />
          <RadiusSample
            className="rounded-sm"
            label="Small"
            description="Subtle rounding for inputs"
            cssValue="border-radius: calc(var(--radius) - 4px);"
            pixelValue="4px"
          />
          <RadiusSample
            className="rounded"
            label="Default"
            description="Standard component rounding"
            cssValue="border-radius: calc(var(--radius) - 2px);"
            pixelValue="6px"
          />
          <RadiusSample
            className="rounded-md"
            label="Medium"
            description="Cards and panels"
            cssValue="border-radius: calc(var(--radius) - 2px);"
            pixelValue="6px"
          />
          <RadiusSample
            className="rounded-lg"
            label="Large"
            description="Prominent components"
            cssValue="border-radius: var(--radius);"
            pixelValue="8px"
          />
          <RadiusSample
            className="rounded-xl"
            label="Extra Large"
            description="Special emphasis"
            cssValue="border-radius: 12px;"
            pixelValue="12px"
          />
          <RadiusSample
            className="rounded-2xl"
            label="2X Large"
            description="Hero sections"
            cssValue="border-radius: 16px;"
            pixelValue="16px"
          />
          <RadiusSample
            className="rounded-3xl"
            label="3X Large"
            description="Decorative elements"
            cssValue="border-radius: 24px;"
            pixelValue="24px"
          />
          <RadiusSample
            className="rounded-full"
            label="Full"
            description="Circular elements"
            cssValue="border-radius: 9999px;"
            pixelValue="50%"
          />
        </div>
      </section>

      <Separator />

      {/* Custom Radius Values */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Custom Radius Values</h2>
          <p className="text-muted-foreground">
            Project-specific border radius values using CSS custom properties
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>CSS Custom Properties</CardTitle>
            <CardDescription>Border radius values are calculated from --radius variable</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Small (rounded-sm)</h4>
                  <code className="text-xs bg-muted p-2 rounded block font-mono">
                    calc(var(--radius) - 4px)
                  </code>
                  <p className="text-xs text-muted-foreground">4px (0.25rem)</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Medium (rounded-md)</h4>
                  <code className="text-xs bg-muted p-2 rounded block font-mono">
                    calc(var(--radius) - 2px)
                  </code>
                  <p className="text-xs text-muted-foreground">6px (0.375rem)</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Large (rounded-lg)</h4>
                  <code className="text-xs bg-muted p-2 rounded block font-mono">
                    var(--radius)
                  </code>
                  <p className="text-xs text-muted-foreground">8px (0.5rem)</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm">
                  The base --radius value is set to 0.5rem (8px) in the root CSS, 
                  allowing for consistent theming across all components.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Component Examples */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Component Examples</h2>
          <p className="text-muted-foreground">
            Real-world usage of border radius in UI components
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Form Components */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Form Components</h3>
            <div className="space-y-6">
              <ComponentRadiusExample
                label="Input Fields"
                description="Uses rounded-md for form inputs"
              >
                <Input placeholder="Enter text..." className="w-48" />
              </ComponentRadiusExample>
              
              <ComponentRadiusExample
                label="Buttons"
                description="Standard button rounding"
              >
                <div className="flex gap-2">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </ComponentRadiusExample>
              
              <ComponentRadiusExample
                label="Button Variants"
                description="Different button styles with consistent rounding"
              >
                <div className="flex gap-2">
                  <Button variant="outline">Outline</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </ComponentRadiusExample>
            </div>
          </div>

          {/* Layout Components */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Layout Components</h3>
            <div className="space-y-6">
              <ComponentRadiusExample
                label="Cards"
                description="Uses rounded-lg for card containers"
              >
                <Card className="w-48">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Card Title</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      Card content with rounded corners
                    </p>
                  </CardContent>
                </Card>
              </ComponentRadiusExample>
              
              <ComponentRadiusExample
                label="Badges"
                description="Uses rounded-full for pill-shaped badges"
              >
                <div className="flex gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Error</Badge>
                </div>
              </ComponentRadiusExample>
              
              <ComponentRadiusExample
                label="Avatars"
                description="Uses rounded-full for circular avatars"
              >
                <div className="flex gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">AB</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>EF</AvatarFallback>
                  </Avatar>
                </div>
              </ComponentRadiusExample>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Directional Radius */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Directional Radius</h2>
          <p className="text-muted-foreground">
            Applying border radius to specific corners
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ComponentRadiusExample
            label="Top Only"
            description="rounded-t-lg"
          >
            <div className="bg-primary-brand w-16 h-16 rounded-t-lg flex items-center justify-center">
              <Square className="h-6 w-6 text-white" />
            </div>
          </ComponentRadiusExample>
          
          <ComponentRadiusExample
            label="Bottom Only"
            description="rounded-b-lg"
          >
            <div className="bg-primary-brand w-16 h-16 rounded-b-lg flex items-center justify-center">
              <Square className="h-6 w-6 text-white" />
            </div>
          </ComponentRadiusExample>
          
          <ComponentRadiusExample
            label="Left Only"
            description="rounded-l-lg"
          >
            <div className="bg-primary-brand w-16 h-16 rounded-l-lg flex items-center justify-center">
              <Square className="h-6 w-6 text-white" />
            </div>
          </ComponentRadiusExample>
          
          <ComponentRadiusExample
            label="Right Only"
            description="rounded-r-lg"
          >
            <div className="bg-primary-brand w-16 h-16 rounded-r-lg flex items-center justify-center">
              <Square className="h-6 w-6 text-white" />
            </div>
          </ComponentRadiusExample>
          
          <ComponentRadiusExample
            label="Top Left"
            description="rounded-tl-lg"
          >
            <div className="bg-primary-brand w-16 h-16 rounded-tl-lg flex items-center justify-center">
              <Square className="h-6 w-6 text-white" />
            </div>
          </ComponentRadiusExample>
          
          <ComponentRadiusExample
            label="Top Right"
            description="rounded-tr-lg"
          >
            <div className="bg-primary-brand w-16 h-16 rounded-tr-lg flex items-center justify-center">
              <Square className="h-6 w-6 text-white" />
            </div>
          </ComponentRadiusExample>
          
          <ComponentRadiusExample
            label="Bottom Left"
            description="rounded-bl-lg"
          >
            <div className="bg-primary-brand w-16 h-16 rounded-bl-lg flex items-center justify-center">
              <Square className="h-6 w-6 text-white" />
            </div>
          </ComponentRadiusExample>
          
          <ComponentRadiusExample
            label="Bottom Right"
            description="rounded-br-lg"
          >
            <div className="bg-primary-brand w-16 h-16 rounded-br-lg flex items-center justify-center">
              <Square className="h-6 w-6 text-white" />
            </div>
          </ComponentRadiusExample>
        </div>
      </section>

      <Separator />

      {/* Usage Guidelines */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Usage Guidelines</h2>
          <p className="text-muted-foreground">
            Best practices for applying border radius in your designs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Circle className="h-5 w-5" />
                Component Recommendations
              </CardTitle>
              <CardDescription>Appropriate radius values for different components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Inputs, selects</span>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">rounded-md</code>
                </div>
                <div className="flex justify-between">
                  <span>Buttons</span>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">rounded-md</code>
                </div>
                <div className="flex justify-between">
                  <span>Cards, panels</span>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">rounded-lg</code>
                </div>
                <div className="flex justify-between">
                  <span>Badges, pills</span>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">rounded-full</code>
                </div>
                <div className="flex justify-between">
                  <span>Avatars</span>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">rounded-full</code>
                </div>
                <div className="flex justify-between">
                  <span>Alerts, notifications</span>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">rounded-md</code>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CornerRightUp className="h-5 w-5" />
                Design Principles
              </CardTitle>
              <CardDescription>Guidelines for consistent border radius usage</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-2">
                <p>• Maintain consistency across similar components</p>
                <p>• Use larger radius for more prominent elements</p>
                <p>• Consider the component's function and hierarchy</p>
                <p>• Ensure radius doesn't interfere with content</p>
                <p>• Test on various screen sizes</p>
                <p>• Use CSS custom properties for easy theming</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CSS Classes Reference */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">CSS Classes Reference</h2>
          <p className="text-muted-foreground">
            Complete reference of border radius classes
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Border Radius Classes</CardTitle>
            <CardDescription>Tailwind CSS border radius utilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-3">All Corners</h4>
                <div className="space-y-1 text-sm font-mono">
                  <div>rounded-none</div>
                  <div>rounded-sm</div>
                  <div>rounded</div>
                  <div>rounded-md</div>
                  <div>rounded-lg</div>
                  <div>rounded-xl</div>
                  <div>rounded-2xl</div>
                  <div>rounded-3xl</div>
                  <div>rounded-full</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Sides</h4>
                <div className="space-y-1 text-sm font-mono">
                  <div>rounded-t-{'{size}'}</div>
                  <div>rounded-r-{'{size}'}</div>
                  <div>rounded-b-{'{size}'}</div>
                  <div>rounded-l-{'{size}'}</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Individual Corners</h4>
                <div className="space-y-1 text-sm font-mono">
                  <div>rounded-tl-{'{size}'}</div>
                  <div>rounded-tr-{'{size}'}</div>
                  <div>rounded-bl-{'{size}'}</div>
                  <div>rounded-br-{'{size}'}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  ),
}; 