import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../atoms/card';
import { Badge } from '../atoms/badge';
import { Button } from '../atoms/button';
import { Separator } from '../atoms/separator';

import { Label } from '../atoms/label';
import { 
  Palette, Type, Ruler, Box, Sun, Moon, Copy, Check, 
  Layers, Square, ArrowRight, Code
} from 'lucide-react';

const meta: Meta = {
  title: 'Design System/Foundation/Design Tokens',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Design Tokens

A comprehensive overview of all design tokens used in our design system, including colors, typography, spacing, shadows, and border radius.

## What are Design Tokens?

Design tokens are the atomic design decisions that form the foundation of our design system. They represent the smallest, reusable pieces of design information such as colors, typography, spacing, and shadows.

## Benefits

- **Consistency**: Ensures visual consistency across all components
- **Maintainability**: Centralized design decisions that are easy to update
- **Accessibility**: Built-in accessibility considerations for all tokens
- **Theming**: Support for light and dark modes
- **Developer Experience**: Clear naming conventions and usage patterns

## Token Categories

### Colors
Semantic color tokens that work across light and dark themes

### Typography
Font families, sizes, weights, and line heights

### Spacing
Consistent spacing scale for margins, padding, and gaps

### Shadows
Elevation and depth through shadow tokens

### Border Radius
Consistent corner radius values

## Usage Guidelines

- Always use design tokens instead of hardcoded values
- Follow the established naming conventions
- Test tokens in both light and dark modes
- Ensure accessibility compliance
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Color Swatch Component
const ColorSwatch = ({ 
  color, 
  name, 
  description, 
  cssVariable,
  hexValue,
  className = ""
}: { 
  color: string; 
  name: string; 
  description: string;
  cssVariable?: string;
  hexValue?: string;
  className?: string;
}) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative">
      <div 
        className={`w-full h-16 rounded-lg border border-border ${color} mb-2 flex items-center justify-center cursor-pointer transition-all hover:scale-105 ${className}`}
        onClick={() => copyToClipboard(cssVariable || hexValue || color)}
      >
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          {copied ? (
            <Check className="h-4 w-4 text-white" />
          ) : (
            <Copy className="h-4 w-4 text-white" />
          )}
        </div>
      </div>
      <div className="space-y-1">
        <h4 className="font-medium text-sm">{name}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
        {cssVariable && (
          <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">
            {cssVariable}
          </code>
        )}
        {hexValue && (
          <div className="text-xs text-muted-foreground">{hexValue}</div>
        )}
      </div>
    </div>
  );
};

// Typography Sample Component
const TypographySample = ({ 
  className, 
  text, 
  label, 
  description,
  cssClass,
  lineHeight 
}: { 
  className: string; 
  text: string; 
  label: string; 
  description: string;
  cssClass: string;
  lineHeight?: string;
}) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <div>
        <span className="text-sm font-medium">{label}</span>
        <span className="text-xs text-muted-foreground ml-2">{description}</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="text-xs">
          {cssClass}
        </Badge>
        {lineHeight && (
          <Badge variant="outline" className="text-xs">
            {lineHeight}
          </Badge>
        )}
      </div>
    </div>
    <div className={className}>
      {text}
    </div>
  </div>
);

// Spacing Sample Component
const SpacingSample = ({ 
  size, 
  value, 
  description,
  className 
}: { 
  size: string; 
  value: string; 
  description: string;
  className: string;
}) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium">{size}</span>
      <Badge variant="secondary" className="text-xs">
        {className}
      </Badge>
    </div>
    <div className="flex items-center gap-2">
      <div className={`bg-primary-brand ${className} rounded`}></div>
      <span className="text-xs text-muted-foreground">{value}</span>
    </div>
    <p className="text-xs text-muted-foreground">{description}</p>
  </div>
);

// Shadow Sample Component
const ShadowSample = ({ 
  name, 
  className, 
  description 
}: { 
  name: string; 
  className: string; 
  description: string;
}) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium">{name}</span>
      <Badge variant="secondary" className="text-xs">
        {className}
      </Badge>
    </div>
    <div className={`w-full h-16 bg-card border rounded-lg ${className} flex items-center justify-center`}>
      <span className="text-xs text-muted-foreground">Shadow Preview</span>
    </div>
    <p className="text-xs text-muted-foreground">{description}</p>
  </div>
);

// Border Radius Sample Component
const BorderRadiusSample = ({ 
  name, 
  className, 
  description 
}: { 
  name: string; 
  className: string; 
  description: string;
}) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium">{name}</span>
      <Badge variant="secondary" className="text-xs">
        {className}
      </Badge>
    </div>
    <div className={`w-16 h-16 bg-primary-brand ${className} flex items-center justify-center`}>
      <span className="text-xs text-white">Radius</span>
    </div>
    <p className="text-xs text-muted-foreground">{description}</p>
  </div>
);

// Theme Toggle Component
const ThemeToggle = ({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) => (
  <Button
    variant="outline"
    size="sm"
    onClick={onToggle}
    className="flex items-center gap-2"
  >
    {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    {isDark ? 'Light Mode' : 'Dark Mode'}
  </Button>
);

export const DesignTokensOverview: Story = {
  render: () => {
    const [isDark, setIsDark] = useState(false);
    
    return (
      <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
        <div className="max-w-7xl mx-auto p-8 space-y-12 bg-background text-foreground">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Layers className="h-8 w-8 text-primary-brand" />
                <h1 className="text-4xl font-bold">Design Tokens</h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Complete overview of all design tokens and their usage
              </p>
            </div>
            <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
          </div>

          {/* Quick Navigation */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Navigation</CardTitle>
              <CardDescription>Jump to specific token categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  Colors
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Type className="h-4 w-4" />
                  Typography
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Ruler className="h-4 w-4" />
                  Spacing
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Box className="h-4 w-4" />
                  Shadows
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Square className="h-4 w-4" />
                  Border Radius
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Colors Section */}
          <section id="colors" className="space-y-6">
            <div className="flex items-center gap-2">
              <Palette className="h-6 w-6 text-primary-brand" />
              <h2 className="text-3xl font-semibold">Colors</h2>
            </div>
            <p className="text-muted-foreground">
              Semantic color tokens that work across light and dark themes
            </p>

            {/* Brand Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Brand Colors</CardTitle>
                <CardDescription>Primary and secondary brand colors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ColorSwatch
                    color="bg-primary-brand"
                    name="Primary Brand"
                    description="Primary brand color for CTAs and highlights"
                    cssVariable="--primary-brand"
                    hexValue="#e67e00"
                  />
                  <ColorSwatch
                    color="bg-secondary-brand text-white"
                    name="Secondary Brand"
                    description="Secondary brand color for accents"
                    cssVariable="--secondary-brand"
                    hexValue="#1a5490"
                  />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Usage Examples</h3>
                    <div className="grid grid-cols-1 gap-2">
                      <Button className="w-full">Primary Brand</Button>
                      <Button variant="outline" className="w-full border-secondary-brand text-secondary-brand hover:bg-secondary-brand hover:text-white">
                        Secondary Brand
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Semantic Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Semantic Colors</CardTitle>
                <CardDescription>Colors that convey meaning and provide user feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <ColorSwatch
                    color="bg-primary text-primary-foreground"
                    name="Primary"
                    description="Main action color"
                    cssVariable="hsl(var(--primary))"
                  />
                  <ColorSwatch
                    color="bg-secondary text-secondary-foreground"
                    name="Secondary"
                    description="Secondary actions"
                    cssVariable="hsl(var(--secondary))"
                  />
                  <ColorSwatch
                    color="bg-destructive text-destructive-foreground"
                    name="Destructive"
                    description="Errors and warnings"
                    cssVariable="hsl(var(--destructive))"
                  />
                  <ColorSwatch
                    color="bg-muted text-muted-foreground"
                    name="Muted"
                    description="Subtle backgrounds"
                    cssVariable="hsl(var(--muted))"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Neutral Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Neutral Colors</CardTitle>
                <CardDescription>Foundation colors for text, backgrounds, and borders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <ColorSwatch
                    color="bg-background text-foreground"
                    name="Background"
                    description="Page and component backgrounds"
                    cssVariable="hsl(var(--background))"
                  />
                  <ColorSwatch
                    color="bg-foreground text-background"
                    name="Foreground"
                    description="Primary text color"
                    cssVariable="hsl(var(--foreground))"
                  />
                  <ColorSwatch
                    color="bg-border"
                    name="Border"
                    description="Borders and dividers"
                    cssVariable="hsl(var(--border))"
                  />
                  <ColorSwatch
                    color="bg-input"
                    name="Input"
                    description="Form input backgrounds"
                    cssVariable="hsl(var(--input))"
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Typography Section */}
          <section id="typography" className="space-y-6">
            <div className="flex items-center gap-2">
              <Type className="h-6 w-6 text-primary-brand" />
              <h2 className="text-3xl font-semibold">Typography</h2>
            </div>
            <p className="text-muted-foreground">
              Font families, sizes, weights, and line heights for consistent text hierarchy
            </p>

            {/* Font Family */}
            <Card>
              <CardHeader>
                <CardTitle>Font Family</CardTitle>
                <CardDescription>Primary font with system fallbacks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-2xl font-sans">
                    Inter Font Family
                  </div>
                  <code className="text-sm bg-muted p-2 rounded block">
                    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif
                  </code>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>
                    Inter is a variable font designed for user interfaces with excellent legibility 
                    at small sizes and crisp rendering on screens.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Heading Scale */}
            <Card>
              <CardHeader>
                <CardTitle>Heading Scale</CardTitle>
                <CardDescription>Systematic heading hierarchy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <TypographySample
                  className="text-4xl font-bold leading-tight"
                  text="Heading 1 (text-4xl)"
                  label="Heading 1"
                  description="Page titles and hero sections"
                  cssClass="text-4xl font-bold"
                  lineHeight="leading-tight"
                />
                <TypographySample
                  className="text-3xl font-semibold leading-tight"
                  text="Heading 2 (text-3xl)"
                  label="Heading 2"
                  description="Section headers"
                  cssClass="text-3xl font-semibold"
                  lineHeight="leading-tight"
                />
                <TypographySample
                  className="text-2xl font-semibold leading-snug"
                  text="Heading 3 (text-2xl)"
                  label="Heading 3"
                  description="Subsection headers"
                  cssClass="text-2xl font-semibold"
                  lineHeight="leading-snug"
                />
                <TypographySample
                  className="text-xl font-medium leading-snug"
                  text="Heading 4 (text-xl)"
                  label="Heading 4"
                  description="Card titles and form sections"
                  cssClass="text-xl font-medium"
                  lineHeight="leading-snug"
                />
              </CardContent>
            </Card>

            {/* Body Text */}
            <Card>
              <CardHeader>
                <CardTitle>Body Text</CardTitle>
                <CardDescription>Text sizes for content and UI elements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <TypographySample
                  className="text-lg leading-relaxed"
                  text="Large body text (text-lg) - Perfect for lead paragraphs and introductions"
                  label="Large Body"
                  description="Lead paragraphs, introductions"
                  cssClass="text-lg"
                  lineHeight="leading-relaxed"
                />
                <TypographySample
                  className="text-base leading-relaxed"
                  text="Default body text (text-base) - Standard text for general content and UI elements"
                  label="Default Body"
                  description="General content, UI elements"
                  cssClass="text-base"
                  lineHeight="leading-relaxed"
                />
                <TypographySample
                  className="text-sm leading-relaxed"
                  text="Small body text (text-sm) - Helper text, captions, and secondary information"
                  label="Small Body"
                  description="Helper text, captions"
                  cssClass="text-sm"
                  lineHeight="leading-relaxed"
                />
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Spacing Section */}
          <section id="spacing" className="space-y-6">
            <div className="flex items-center gap-2">
              <Ruler className="h-6 w-6 text-primary-brand" />
              <h2 className="text-3xl font-semibold">Spacing</h2>
            </div>
            <p className="text-muted-foreground">
              Consistent spacing scale for margins, padding, and gaps
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Spacing Scale</CardTitle>
                <CardDescription>4px base unit with semantic tokens</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <SpacingSample
                    size="Extra Small"
                    value="4px"
                    description="Minimal spacing for tight layouts"
                    className="w-1 h-1"
                  />
                  <SpacingSample
                    size="Small"
                    value="8px"
                    description="Small spacing for related elements"
                    className="w-2 h-2"
                  />
                  <SpacingSample
                    size="Medium"
                    value="16px"
                    description="Default spacing for most layouts"
                    className="w-4 h-4"
                  />
                  <SpacingSample
                    size="Large"
                    value="32px"
                    description="Large spacing for section separation"
                    className="w-8 h-8"
                  />
                  <SpacingSample
                    size="Extra Large"
                    value="64px"
                    description="Extra large spacing for major sections"
                    className="w-16 h-16"
                  />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Usage Examples</h3>
                    <div className="space-y-2">
                      <div className="p-4 bg-muted rounded">Medium padding (p-4)</div>
                      <div className="m-8 bg-muted rounded">Large margin (m-8)</div>
                      <div className="space-y-2 bg-muted rounded p-2">
                        <div className="h-4 bg-primary-brand rounded"></div>
                        <div className="h-4 bg-primary-brand rounded"></div>
                        <div className="h-4 bg-primary-brand rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Shadows Section */}
          <section id="shadows" className="space-y-6">
            <div className="flex items-center gap-2">
              <Box className="h-6 w-6 text-primary-brand" />
              <h2 className="text-3xl font-semibold">Shadows</h2>
            </div>
            <p className="text-muted-foreground">
              Elevation and depth through shadow tokens
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Shadow Scale</CardTitle>
                <CardDescription>Progressive elevation levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <ShadowSample
                    name="Small Shadow"
                    className="shadow-sm"
                    description="Subtle elevation for cards and buttons"
                  />
                  <ShadowSample
                    name="Medium Shadow"
                    className="shadow-md"
                    description="Medium elevation for modals and dropdowns"
                  />
                  <ShadowSample
                    name="Large Shadow"
                    className="shadow-lg"
                    description="High elevation for overlays and tooltips"
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Border Radius Section */}
          <section id="border-radius" className="space-y-6">
            <div className="flex items-center gap-2">
              <Square className="h-6 w-6 text-primary-brand" />
              <h2 className="text-3xl font-semibold">Border Radius</h2>
            </div>
            <p className="text-muted-foreground">
              Consistent corner radius values for rounded elements
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Border Radius Scale</CardTitle>
                <CardDescription>Progressive corner rounding</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <BorderRadiusSample
                    name="Small"
                    className="rounded-sm"
                    description="Subtle rounding for inputs"
                  />
                  <BorderRadiusSample
                    name="Medium"
                    className="rounded-md"
                    description="Default rounding for cards"
                  />
                  <BorderRadiusSample
                    name="Large"
                    className="rounded-lg"
                    description="Prominent rounding for buttons"
                  />
                  <BorderRadiusSample
                    name="Extra Large"
                    className="rounded-xl"
                    description="Heavy rounding for modals"
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Implementation Guide */}
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-primary-brand" />
              <h2 className="text-3xl font-semibold">Implementation Guide</h2>
            </div>
            <p className="text-muted-foreground">
              How to use design tokens in your components
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>CSS Variables</CardTitle>
                  <CardDescription>Using design tokens in CSS</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Colors</Label>
                    <code className="text-sm bg-muted p-2 rounded block">
                      background-color: hsl(var(--primary-brand));<br/>
                      color: hsl(var(--foreground));
                    </code>
                  </div>
                  <div className="space-y-2">
                    <Label>Spacing</Label>
                    <code className="text-sm bg-muted p-2 rounded block">
                      padding: 1rem; /* 16px */<br/>
                      margin: 2rem; /* 32px */
                    </code>
                  </div>
                  <div className="space-y-2">
                    <Label>Typography</Label>
                    <code className="text-sm bg-muted p-2 rounded block">
                      font-size: 1.25rem; /* text-xl */<br/>
                      font-weight: 600; /* font-semibold */
                    </code>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tailwind Classes</CardTitle>
                  <CardDescription>Using design tokens with Tailwind</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Colors</Label>
                    <code className="text-sm bg-muted p-2 rounded block">
                      bg-primary-brand<br/>
                      text-foreground<br/>
                      border-border
                    </code>
                  </div>
                  <div className="space-y-2">
                    <Label>Spacing</Label>
                    <code className="text-sm bg-muted p-2 rounded block">
                      p-4 /* 16px padding */<br/>
                      m-8 /* 32px margin */<br/>
                      space-y-4 /* 16px gap */
                    </code>
                  </div>
                  <div className="space-y-2">
                    <Label>Typography</Label>
                    <code className="text-sm bg-muted p-2 rounded block">
                      text-xl font-semibold<br/>
                      text-base leading-relaxed<br/>
                      text-sm text-muted-foreground
                    </code>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Best Practices */}
          <Card>
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>Guidelines for using design tokens effectively</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">✅ Do</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Use semantic color tokens instead of hardcoded values
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Follow the established spacing scale
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Use appropriate typography hierarchy
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      Test tokens in both light and dark modes
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">❌ Don't</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      Use hardcoded color values like #ff0000
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      Create arbitrary spacing values
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      Skip accessibility considerations
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      Ignore the established design system
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  },
}; 