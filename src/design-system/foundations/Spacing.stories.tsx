import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../atoms/card';
import { Badge } from '../atoms/badge';
import { Button } from '../atoms/button';
import { Separator } from '../atoms/separator';
import { Ruler, Square, Layout, Maximize2 } from 'lucide-react';

const meta: Meta = {
  title: 'Design System/Foundation/Spacing',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Spacing System

The Application UI Kit uses a systematic spacing scale based on a 4px (0.25rem) base unit for consistent layouts and visual rhythm.

## Design Principles

- **Consistency**: All spacing follows the 4px base unit system
- **Rhythm**: Creates visual rhythm and balance in layouts
- **Scalability**: Easy to scale across different screen sizes
- **Predictability**: Developers can predict spacing values

## Spacing Scale

### Base Unit: 4px (0.25rem)

All spacing values are based on a 4px (0.25rem) base unit, creating a harmonious and predictable spacing system.

## Usage Guidelines

- Use consistent spacing values from the scale
- Maintain visual rhythm with proportional spacing
- Ensure minimum touch target sizes (44px minimum)
- Use responsive spacing for different screen sizes
- Consider content hierarchy when applying spacing
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const SpacingSample = ({ 
  size, 
  label, 
  description, 
  className, 
  pixelValue,
  remValue 
}: { 
  size: string; 
  label: string; 
  description: string; 
  className: string; 
  pixelValue: string;
  remValue: string;
}) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between">
      <div>
        <span className="text-sm font-medium">{label}</span>
        <span className="text-xs text-muted-foreground ml-2">{description}</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="text-xs">
          {className}
        </Badge>
        <Badge variant="outline" className="text-xs">
          {pixelValue}
        </Badge>
        <Badge variant="outline" className="text-xs">
          {remValue}
        </Badge>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        <div className={`bg-primary-brand ${size}`} />
        <span className="text-xs text-muted-foreground ml-2">{pixelValue}</span>
      </div>
    </div>
  </div>
);

const SpacingDemo = ({ 
  type, 
  className, 
  label 
}: { 
  type: 'padding' | 'margin' | 'gap';
  className: string; 
  label: string; 
}) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium">{label}</span>
      <Badge variant="secondary" className="text-xs">
        {className}
      </Badge>
    </div>
    <div className="border border-dashed border-gray-300 min-h-[100px] relative">
      {type === 'padding' && (
        <div className={`bg-blue-100 h-full ${className}`}>
          <div className="bg-blue-500 h-full flex items-center justify-center text-white text-xs">
            Content
          </div>
        </div>
      )}
      {type === 'margin' && (
        <div className={`bg-blue-500 h-16 ${className} text-white flex items-center justify-center text-xs`}>
          Content
        </div>
      )}
      {type === 'gap' && (
        <div className={`h-full flex ${className}`}>
          <div className="bg-blue-500 flex-1 h-16 flex items-center justify-center text-white text-xs">
            Item 1
          </div>
          <div className="bg-blue-500 flex-1 h-16 flex items-center justify-center text-white text-xs">
            Item 2
          </div>
        </div>
      )}
    </div>
  </div>
);

export const SpacingSystem: Story = {
  render: () => (
    <div className="max-w-7xl mx-auto p-8 space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Ruler className="h-8 w-8 text-primary-brand" />
          <h1 className="text-4xl font-bold">Spacing System</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Systematic spacing scale for consistent layouts and visual rhythm
        </p>
      </div>

      {/* Spacing Scale */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Spacing Scale</h2>
          <p className="text-muted-foreground">
            All spacing values are based on a 4px (0.25rem) base unit
          </p>
        </div>
        
        <div className="space-y-6">
          {/* Tailwind Default Scale */}
          <Card>
            <CardHeader>
              <CardTitle>Tailwind Default Scale</CardTitle>
              <CardDescription>Standard Tailwind spacing values</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <SpacingSample
                size="w-0 h-4"
                label="0"
                description="No spacing"
                className="0"
                pixelValue="0px"
                remValue="0rem"
              />
              <SpacingSample
                size="w-px h-4"
                label="px"
                description="1px border"
                className="px"
                pixelValue="1px"
                remValue="1px"
              />
              <SpacingSample
                size="w-0.5 h-4"
                label="0.5"
                description="Very small spacing"
                className="0.5"
                pixelValue="2px"
                remValue="0.125rem"
              />
              <SpacingSample
                size="w-1 h-4"
                label="1"
                description="Base unit"
                className="1"
                pixelValue="4px"
                remValue="0.25rem"
              />
              <SpacingSample
                size="w-2 h-4"
                label="2"
                description="Small spacing"
                className="2"
                pixelValue="8px"
                remValue="0.5rem"
              />
              <SpacingSample
                size="w-3 h-4"
                label="3"
                description="Medium small"
                className="3"
                pixelValue="12px"
                remValue="0.75rem"
              />
              <SpacingSample
                size="w-4 h-4"
                label="4"
                description="Medium spacing"
                className="4"
                pixelValue="16px"
                remValue="1rem"
              />
              <SpacingSample
                size="w-5 h-4"
                label="5"
                description="Medium large"
                className="5"
                pixelValue="20px"
                remValue="1.25rem"
              />
              <SpacingSample
                size="w-6 h-4"
                label="6"
                description="Large spacing"
                className="6"
                pixelValue="24px"
                remValue="1.5rem"
              />
              <SpacingSample
                size="w-8 h-4"
                label="8"
                description="Extra large"
                className="8"
                pixelValue="32px"
                remValue="2rem"
              />
              <SpacingSample
                size="w-10 h-4"
                label="10"
                description="Very large"
                className="10"
                pixelValue="40px"
                remValue="2.5rem"
              />
              <SpacingSample
                size="w-12 h-4"
                label="12"
                description="Extra extra large"
                className="12"
                pixelValue="48px"
                remValue="3rem"
              />
              <SpacingSample
                size="w-16 h-4"
                label="16"
                description="Section spacing"
                className="16"
                pixelValue="64px"
                remValue="4rem"
              />
              <SpacingSample
                size="w-20 h-4"
                label="20"
                description="Large section"
                className="20"
                pixelValue="80px"
                remValue="5rem"
              />
              <SpacingSample
                size="w-24 h-4"
                label="24"
                description="Page spacing"
                className="24"
                pixelValue="96px"
                remValue="6rem"
              />
            </CardContent>
          </Card>

          {/* Custom Scale */}
          <Card>
            <CardHeader>
              <CardTitle>Custom Spacing Scale</CardTitle>
              <CardDescription>Project-specific spacing values</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <SpacingSample
                size="w-[0.25rem] h-4"
                label="xs"
                description="Extra small"
                className="xs"
                pixelValue="4px"
                remValue="0.25rem"
              />
              <SpacingSample
                size="w-[0.5rem] h-4"
                label="sm"
                description="Small"
                className="sm"
                pixelValue="8px"
                remValue="0.5rem"
              />
              <SpacingSample
                size="w-[1rem] h-4"
                label="md"
                description="Medium"
                className="md"
                pixelValue="16px"
                remValue="1rem"
              />
              <SpacingSample
                size="w-[2rem] h-4"
                label="lg"
                description="Large"
                className="lg"
                pixelValue="32px"
                remValue="2rem"
              />
              <SpacingSample
                size="w-[4rem] h-4"
                label="xl"
                description="Extra large"
                className="xl"
                pixelValue="64px"
                remValue="4rem"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Padding Examples */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <Square className="h-6 w-6" />
            Padding
          </h2>
          <p className="text-muted-foreground">
            Internal spacing within elements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SpacingDemo
            type="padding"
            className="p-2"
            label="Small Padding (p-2)"
          />
          <SpacingDemo
            type="padding"
            className="p-4"
            label="Medium Padding (p-4)"
          />
          <SpacingDemo
            type="padding"
            className="p-6"
            label="Large Padding (p-6)"
          />
          <SpacingDemo
            type="padding"
            className="px-4 py-2"
            label="Asymmetric (px-4 py-2)"
          />
          <SpacingDemo
            type="padding"
            className="pt-8 pb-4 px-6"
            label="Complex (pt-8 pb-4 px-6)"
          />
          <SpacingDemo
            type="padding"
            className="p-8"
            label="Extra Large (p-8)"
          />
        </div>
      </section>

      <Separator />

      {/* Margin Examples */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <Maximize2 className="h-6 w-6" />
            Margin
          </h2>
          <p className="text-muted-foreground">
            External spacing between elements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SpacingDemo
            type="margin"
            className="m-2"
            label="Small Margin (m-2)"
          />
          <SpacingDemo
            type="margin"
            className="m-4"
            label="Medium Margin (m-4)"
          />
          <SpacingDemo
            type="margin"
            className="m-6"
            label="Large Margin (m-6)"
          />
          <SpacingDemo
            type="margin"
            className="mx-4 my-2"
            label="Asymmetric (mx-4 my-2)"
          />
          <SpacingDemo
            type="margin"
            className="mt-8 mb-4 mx-6"
            label="Complex (mt-8 mb-4 mx-6)"
          />
          <SpacingDemo
            type="margin"
            className="m-8"
            label="Extra Large (m-8)"
          />
        </div>
      </section>

      <Separator />

      {/* Gap Examples */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <Layout className="h-6 w-6" />
            Gap (Flexbox/Grid)
          </h2>
          <p className="text-muted-foreground">
            Spacing between flex or grid items
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SpacingDemo
            type="gap"
            className="gap-2"
            label="Small Gap (gap-2)"
          />
          <SpacingDemo
            type="gap"
            className="gap-4"
            label="Medium Gap (gap-4)"
          />
          <SpacingDemo
            type="gap"
            className="gap-6"
            label="Large Gap (gap-6)"
          />
          <SpacingDemo
            type="gap"
            className="gap-x-4 gap-y-2"
            label="Asymmetric (gap-x-4 gap-y-2)"
          />
          <SpacingDemo
            type="gap"
            className="gap-8"
            label="Extra Large (gap-8)"
          />
          <SpacingDemo
            type="gap"
            className="gap-1"
            label="Tight Gap (gap-1)"
          />
        </div>
      </section>

      <Separator />

      {/* Usage Guidelines */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Usage Guidelines</h2>
          <p className="text-muted-foreground">
            Best practices for applying spacing in your designs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Component Spacing</CardTitle>
              <CardDescription>Internal spacing within components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Buttons</h4>
                <div className="flex items-center gap-2">
                  <Button size="sm" className="px-3 py-1">Small (px-3 py-1)</Button>
                  <Button className="px-4 py-2">Default (px-4 py-2)</Button>
                  <Button size="lg" className="px-6 py-3">Large (px-6 py-3)</Button>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Cards</h4>
                <div className="text-sm text-muted-foreground">
                  <p>• Header: p-6</p>
                  <p>• Content: p-6</p>
                  <p>• Footer: p-6</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Layout Spacing</CardTitle>
              <CardDescription>Spacing between layout elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Common Patterns</h4>
                <div className="text-sm text-muted-foreground">
                  <p>• Form fields: space-y-4</p>
                  <p>• Card grids: gap-6</p>
                  <p>• Navigation items: gap-2</p>
                  <p>• Section spacing: space-y-8</p>
                  <p>• Page margins: p-8</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Responsive Spacing</h4>
                <div className="text-sm text-muted-foreground">
                  <p>• Mobile: p-4, space-y-6</p>
                  <p>• Tablet: p-6, space-y-8</p>
                  <p>• Desktop: p-8, space-y-12</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Accessibility */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Accessibility Guidelines</h2>
          <p className="text-muted-foreground">
            Spacing considerations for accessibility compliance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Touch Targets</CardTitle>
              <CardDescription>Minimum spacing for interactive elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Minimum Size:</strong> 44px × 44px (iOS) / 48px × 48px (Android)
                </p>
                <p className="text-sm">
                  <strong>Recommended:</strong> Use p-3 (12px) or larger for buttons
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Button size="sm" className="min-h-[44px]">Accessible Button</Button>
                  <Button className="min-h-[44px]">Standard Button</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reading Experience</CardTitle>
              <CardDescription>Spacing for optimal readability</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Line Spacing:</strong> 1.4-1.6 times the font size
                </p>
                <p className="text-sm">
                  <strong>Paragraph Spacing:</strong> space-y-4 to space-y-6
                </p>
                <p className="text-sm">
                  <strong>Section Spacing:</strong> space-y-8 to space-y-12
                </p>
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
            Complete reference of spacing classes
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Spacing Classes</CardTitle>
            <CardDescription>Tailwind CSS spacing utilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Padding</h4>
                <div className="space-y-1 text-sm font-mono">
                  <div>p-{'{n}'} - all sides</div>
                  <div>px-{'{n}'} - horizontal</div>
                  <div>py-{'{n}'} - vertical</div>
                  <div>pt-{'{n}'} - top</div>
                  <div>pr-{'{n}'} - right</div>
                  <div>pb-{'{n}'} - bottom</div>
                  <div>pl-{'{n}'} - left</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Margin</h4>
                <div className="space-y-1 text-sm font-mono">
                  <div>m-{'{n}'} - all sides</div>
                  <div>mx-{'{n}'} - horizontal</div>
                  <div>my-{'{n}'} - vertical</div>
                  <div>mt-{'{n}'} - top</div>
                  <div>mr-{'{n}'} - right</div>
                  <div>mb-{'{n}'} - bottom</div>
                  <div>ml-{'{n}'} - left</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Gap & Space</h4>
                <div className="space-y-1 text-sm font-mono">
                  <div>gap-{'{n}'} - all directions</div>
                  <div>gap-x-{'{n}'} - horizontal</div>
                  <div>gap-y-{'{n}'} - vertical</div>
                  <div>space-x-{'{n}'} - horizontal</div>
                  <div>space-y-{'{n}'} - vertical</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  ),
}; 