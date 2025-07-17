import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../atoms/card';
import { Badge } from '../atoms/badge';
import { Button } from '../atoms/button';
import { Separator } from '../atoms/separator';
import { Layers, Mouse, Zap } from 'lucide-react';

const meta: Meta = {
  title: 'Design System/Foundation/Shadows',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Shadow System

The Application UI Kit uses a systematic shadow system to create depth, hierarchy, and visual interest while maintaining accessibility and performance.

## Design Principles

- **Depth**: Creates visual hierarchy through layering
- **Consistency**: Systematic approach to elevation levels
- **Performance**: Optimized shadow values for smooth animations
- **Accessibility**: Subtle shadows that don't interfere with content

## Shadow Scale

### Elevation Levels

Shadows are organized into elevation levels that correspond to component importance and interaction states.

## Usage Guidelines

- Use subtle shadows for base components
- Increase shadow intensity for elevated components
- Apply hover/focus shadows for interactive elements
- Consider accessibility when using colored shadows
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ShadowSample = ({ 
  className, 
  label, 
  description, 
  cssValue,
  level 
}: { 
  className: string; 
  label: string; 
  description: string; 
  cssValue: string;
  level: number;
}) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{label}</span>
          <Badge variant="outline" className="text-xs">
            Level {level}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
    <div className="flex items-center justify-center min-h-[120px] bg-gray-50 rounded-lg">
      <div className={`bg-white w-24 h-24 rounded-lg flex items-center justify-center ${className}`}>
        <Layers className="h-8 w-8 text-gray-400" />
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

const InteractiveShadow = ({ 
  baseClass, 
  hoverClass, 
  label, 
  description 
}: { 
  baseClass: string; 
  hoverClass: string; 
  label: string; 
  description: string;
}) => (
  <div className="space-y-4">
    <div>
      <h4 className="text-sm font-medium">{label}</h4>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
    <div className="flex items-center justify-center min-h-[120px] bg-gray-50 rounded-lg">
      <div className={`bg-white w-24 h-24 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${baseClass} ${hoverClass}`}>
        <Mouse className="h-8 w-8 text-gray-400" />
      </div>
    </div>
  </div>
);

export const ShadowSystem: Story = {
  render: () => (
    <div className="max-w-7xl mx-auto p-8 space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Layers className="h-8 w-8 text-primary-brand" />
          <h1 className="text-4xl font-bold">Shadow System</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Systematic shadow scale for creating depth and visual hierarchy
        </p>
      </div>

      {/* Base Shadow Scale */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Base Shadow Scale</h2>
          <p className="text-muted-foreground">
            Core shadow values for different elevation levels
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ShadowSample
            className="shadow-none"
            label="No Shadow"
            description="Ground level, no elevation"
            cssValue="box-shadow: none;"
            level={0}
          />
          <ShadowSample
            className="shadow-sm"
            label="Small Shadow"
            description="Subtle elevation for cards"
            cssValue="box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);"
            level={1}
          />
          <ShadowSample
            className="shadow"
            label="Default Shadow"
            description="Standard component elevation"
            cssValue="box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);"
            level={2}
          />
          <ShadowSample
            className="shadow-md"
            label="Medium Shadow"
            description="Elevated components"
            cssValue="box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);"
            level={3}
          />
          <ShadowSample
            className="shadow-lg"
            label="Large Shadow"
            description="Prominent components"
            cssValue="box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);"
            level={4}
          />
          <ShadowSample
            className="shadow-xl"
            label="Extra Large Shadow"
            description="Floating elements"
            cssValue="box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);"
            level={5}
          />
          <ShadowSample
            className="shadow-2xl"
            label="2XL Shadow"
            description="Modal overlays"
            cssValue="box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);"
            level={6}
          />
        </div>
      </section>

      <Separator />

      {/* Custom Shadows */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Custom Shadows</h2>
          <p className="text-muted-foreground">
            Project-specific shadow values for enhanced visual design
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ShadowSample
            className="shadow-sm"
            label="Subtle"
            description="Minimal elevation for cards"
            cssValue="box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);"
            level={1}
          />
          <ShadowSample
            className="shadow-md"
            label="Standard"
            description="Default component shadow"
            cssValue="box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);"
            level={2}
          />
          <ShadowSample
            className="shadow-lg"
            label="Elevated"
            description="Prominent UI elements"
            cssValue="box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);"
            level={3}
          />
        </div>
      </section>

      <Separator />

      {/* Interactive Shadows */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Interactive Shadows</h2>
          <p className="text-muted-foreground">
            Shadow transitions for hover and focus states
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InteractiveShadow
            baseClass="shadow-sm"
            hoverClass="hover:shadow-md"
            label="Hover Elevation"
            description="Subtle to medium shadow on hover"
          />
          <InteractiveShadow
            baseClass="shadow-md"
            hoverClass="hover:shadow-lg"
            label="Focus Elevation"
            description="Medium to large shadow on focus"
          />
          <InteractiveShadow
            baseClass="shadow"
            hoverClass="hover:shadow-xl"
            label="Dramatic Elevation"
            description="Standard to extra large shadow"
          />
        </div>
      </section>

      <Separator />

      {/* Component Examples */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Component Examples</h2>
          <p className="text-muted-foreground">
            Real-world usage of shadows in UI components
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Examples */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Cards</h3>
            <div className="space-y-4">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-sm">Basic Card</CardTitle>
                  <CardDescription className="text-xs">
                    Uses shadow-sm for subtle elevation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Minimal shadow for content cards
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-sm">Elevated Card</CardTitle>
                  <CardDescription className="text-xs">
                    Uses shadow-md for prominence
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Medium shadow for important content
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Button Examples */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Buttons</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Button className="shadow-sm hover:shadow-md transition-shadow">
                  Basic Button
                </Button>
                <p className="text-xs text-muted-foreground">
                  Shadow-sm with hover:shadow-md
                </p>
              </div>
              
              <div className="space-y-2">
                <Button variant="outline" className="shadow hover:shadow-lg transition-shadow">
                  Outlined Button
                </Button>
                <p className="text-xs text-muted-foreground">
                  Shadow with hover:shadow-lg
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Usage Guidelines */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Usage Guidelines</h2>
          <p className="text-muted-foreground">
            Best practices for applying shadows in your designs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5" />
                Elevation Hierarchy
              </CardTitle>
              <CardDescription>When to use different shadow levels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Level 0 (none)</span>
                  <span className="text-muted-foreground">Flat elements</span>
                </div>
                <div className="flex justify-between">
                  <span>Level 1 (shadow-sm)</span>
                  <span className="text-muted-foreground">Cards, inputs</span>
                </div>
                <div className="flex justify-between">
                  <span>Level 2 (shadow)</span>
                  <span className="text-muted-foreground">Buttons, chips</span>
                </div>
                <div className="flex justify-between">
                  <span>Level 3 (shadow-md)</span>
                  <span className="text-muted-foreground">Dropdowns, tooltips</span>
                </div>
                <div className="flex justify-between">
                  <span>Level 4 (shadow-lg)</span>
                  <span className="text-muted-foreground">Modals, sheets</span>
                </div>
                <div className="flex justify-between">
                  <span>Level 5+ (shadow-xl)</span>
                  <span className="text-muted-foreground">Overlays, floating</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Performance Tips
              </CardTitle>
              <CardDescription>Optimizing shadow performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-2">
                <p>• Use CSS custom properties for consistent values</p>
                <p>• Avoid excessive shadow layering</p>
                <p>• Consider will-change for animated shadows</p>
                <p>• Test on various devices for performance</p>
                <p>• Use transform for interactive effects</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Accessibility */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Accessibility</h2>
          <p className="text-muted-foreground">
            Shadow considerations for accessibility compliance
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Accessibility Guidelines</CardTitle>
            <CardDescription>Ensuring shadows don't interfere with usability</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-sm">Contrast Considerations</h4>
                <p className="text-sm text-muted-foreground">
                  Ensure shadows don't reduce text contrast below WCAG standards
                </p>
              </div>
              <div>
                <h4 className="font-medium text-sm">Reduced Motion</h4>
                <p className="text-sm text-muted-foreground">
                  Respect user preferences for reduced motion in shadow animations
                </p>
              </div>
              <div>
                <h4 className="font-medium text-sm">Focus Indicators</h4>
                <p className="text-sm text-muted-foreground">
                  Use shadows to enhance, not replace, focus indicators
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CSS Classes Reference */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">CSS Classes Reference</h2>
          <p className="text-muted-foreground">
            Complete reference of shadow classes
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Shadow Classes</CardTitle>
            <CardDescription>Tailwind CSS shadow utilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Static Shadows</h4>
                <div className="space-y-1 text-sm font-mono">
                  <div>shadow-none</div>
                  <div>shadow-sm</div>
                  <div>shadow</div>
                  <div>shadow-md</div>
                  <div>shadow-lg</div>
                  <div>shadow-xl</div>
                  <div>shadow-2xl</div>
                  <div>shadow-inner</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Interactive Shadows</h4>
                <div className="space-y-1 text-sm font-mono">
                  <div>hover:shadow-sm</div>
                  <div>hover:shadow-md</div>
                  <div>hover:shadow-lg</div>
                  <div>focus:shadow-md</div>
                  <div>focus:shadow-lg</div>
                  <div>active:shadow-sm</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  ),
}; 