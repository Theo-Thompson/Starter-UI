import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../atoms/card';
import { Badge } from '../atoms/badge';
import { Button } from '../atoms/button';
import { Alert, AlertDescription } from '../atoms/alert';
import { Separator } from '../atoms/separator';
import { Palette, Sun, Moon, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const meta: Meta = {
  title: 'Design System/Foundation/Colors',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Color System

The Application UI Kit uses a comprehensive color system built on CSS custom properties and HSL values for consistent theming and accessibility.

## Design Principles

- **Accessibility**: All color combinations meet WCAG AA contrast requirements
- **Consistency**: Systematic approach to color usage across all components
- **Flexibility**: Easy theming and customization through CSS variables
- **Brand Consistency**: Primary brand orange and secondary brand blue as primary brand colors

## Color Categories

### Brand Colors
Primary brand colors that define the Application UI Kit identity

### Semantic Colors
Colors that convey meaning and provide user feedback

### Neutral Colors
Foundation colors for text, backgrounds, and UI elements

### Accessibility
All color combinations meet WCAG 2.1 AA standards

### CSS Custom Properties
All colors are implemented using CSS custom properties for easy theming
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch = ({ 
  color, 
  name, 
  description, 
  cssVariable,
  hexValue 
}: { 
  color: string; 
  name: string; 
  description: string;
  cssVariable?: string;
  hexValue?: string;
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
        className={`w-full h-20 rounded-lg border border-border ${color} mb-2 flex items-center justify-center cursor-pointer transition-all hover:scale-105`}
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

export const ColorSystem: Story = {
  render: () => {
    const [isDark, setIsDark] = useState(false);
    
    return (
      <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
        <div className="max-w-7xl mx-auto p-8 space-y-12 bg-background text-foreground">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Palette className="h-8 w-8 text-primary-brand" />
                <h1 className="text-4xl font-bold">Color System</h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Comprehensive color palette with accessibility and theming support
              </p>
            </div>
            <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
          </div>

          {/* Brand Colors */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Brand Colors</h2>
              <p className="text-muted-foreground">
                Primary brand colors that define the Application UI Kit identity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ColorSwatch
                color="bg-primary-brand"
                name="Primary Brand"
                description="Primary brand color for CTAs and highlights"
                cssVariable="primary-brand"
                hexValue="#ff9900"
              />
              <ColorSwatch
                color="bg-secondary-brand text-white"
                name="Secondary Brand"
                description="Secondary brand color for accents"
                cssVariable="secondary-brand"
                hexValue="#1a5490"
              />
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Usage Examples</h3>
                <div className="grid grid-cols-2 gap-sm">
                  <Button className="w-full">Primary Brand Orange</Button>
                  <Button variant="outline" className="w-full border-secondary-brand text-secondary-brand hover:bg-secondary-brand hover:text-white">
                    Secondary Brand Blue
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Semantic Colors */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Semantic Colors</h2>
              <p className="text-muted-foreground">
                Colors that convey meaning and provide user feedback
              </p>
            </div>
            
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

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Semantic Color Usage</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Error</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
                <div className="space-y-2">
                  <Button>Primary Action</Button>
                  <Button variant="secondary">Secondary Action</Button>
                  <Button variant="destructive">Destructive Action</Button>
                  <Button variant="outline">Outline Action</Button>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Neutral Colors */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Neutral Colors</h2>
              <p className="text-muted-foreground">
                Foundation colors for text, backgrounds, and UI elements
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ColorSwatch
                color="bg-background text-foreground border"
                name="Background"
                description="Main background color"
                cssVariable="hsl(var(--background))"
              />
              <ColorSwatch
                color="bg-foreground text-background"
                name="Foreground"
                description="Primary text color"
                cssVariable="hsl(var(--foreground))"
              />
              <ColorSwatch
                color="bg-card text-card-foreground border"
                name="Card"
                description="Card background"
                cssVariable="hsl(var(--card))"
              />
              <ColorSwatch
                color="bg-popover text-popover-foreground border"
                name="Popover"
                description="Popover background"
                cssVariable="hsl(var(--popover))"
              />
              <ColorSwatch
                color="bg-accent text-accent-foreground"
                name="Accent"
                description="Accent color"
                cssVariable="hsl(var(--accent))"
              />
              <ColorSwatch
                color="bg-border"
                name="Border"
                description="Border color"
                cssVariable="hsl(var(--border))"
              />
            </div>
          </section>

          <Separator />

          {/* Accessibility */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Accessibility</h2>
              <p className="text-muted-foreground">
                All color combinations meet WCAG 2.1 AA standards
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contrast Ratios</CardTitle>
                  <CardDescription>Minimum contrast requirements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Normal text</span>
                      <span className="font-mono">4.5:1</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Large text</span>
                      <span className="font-mono">3:1</span>
                    </div>
                    <div className="flex justify-between">
                      <span>UI components</span>
                      <span className="font-mono">3:1</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Color Blind Friendly</CardTitle>
                  <CardDescription>Accessible color combinations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <AlertDescription>
                      Our color system uses high contrast ratios and doesn't rely solely on color to convey meaning.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CSS Custom Properties */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">CSS Custom Properties</h2>
              <p className="text-muted-foreground">
                All colors are implemented using CSS custom properties for easy theming
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Light Theme Variables</CardTitle>
                <CardDescription>CSS custom properties for light mode</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="text-sm bg-muted p-4 rounded-md overflow-x-auto">
{`:root {
  --background: 0 0% 100%;
  --foreground: 224 71.4% 4.1%;
  --primary: 220.9 39.3% 11%;
  --primary-foreground: 210 20% 98%;
  --secondary: 220 14.3% 95.9%;
  --secondary-foreground: 220.9 39.3% 11%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 20% 98%;
  --muted: 220 14.3% 95.9%;
  --muted-foreground: 220 8.9% 46.1%;
  --accent: 220 14.3% 95.9%;
  --accent-foreground: 220.9 39.3% 11%;
  --border: 220 13% 91%;
  --input: 220 13% 91%;
  --ring: 224 71.4% 4.1%;
}`}
                </pre>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    );
  },
}; 