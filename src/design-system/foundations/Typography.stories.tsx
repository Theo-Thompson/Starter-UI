import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../atoms/card';
import { Badge } from '../atoms/badge';
import { Button } from '../atoms/button';
import { Separator } from '../atoms/separator';
import { Type, AlignLeft, Bold } from 'lucide-react';

const meta: Meta = {
  title: 'Design System/Foundation/Typography',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Typography System

The Application UI Kit uses a comprehensive typography system built on the Inter font family with systematic scaling and consistent hierarchy.

## Design Principles

- **Hierarchy**: Clear visual hierarchy through font sizes, weights, and spacing
- **Readability**: Optimized line heights and letter spacing for better readability
- **Consistency**: Systematic approach to typography across all components
- **Accessibility**: Proper contrast ratios and readable font sizes

## Typography Scale

### Headings

- **Display Large (text-6xl)**: Hero sections, landing pages
- **Display Medium (text-5xl)**: Page titles, major sections
- **Display Small (text-4xl)**: Section headers, dialogs
- **Heading 1 (text-3xl)**: Main page headings
- **Heading 2 (text-2xl)**: Section headings
- **Heading 3 (text-xl)**: Subsection headings
- **Heading 4 (text-lg)**: Card titles, form sections
- **Heading 5 (text-base)**: List headers, small sections
- **Heading 6 (text-sm)**: Labels, captions

### Body Text

- **Large Body (text-xl)**: Lead paragraphs, introductions
- **Medium Body (text-lg)**: Article content, descriptions
- **Default Body (text-base)**: General content, UI elements
- **Small Body (text-sm)**: Helper text, captions
- **Extra Small (text-xs)**: Fine print, metadata

### Font Weights

- **Normal (400)**: Default font weight
- **Medium (500)**: Secondary content, emphasis
- **Semibold (600)**: Section headings, bold emphasis
- **Bold (700)**: Strong emphasis, important actions

## Usage Guidelines

- Use appropriate font weights for hierarchy (400, 500, 600, 700)
- Maintain consistent line heights for readability
- Use proper heading levels for semantic structure
- Ensure sufficient color contrast for accessibility
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const FontSample = ({ 
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

const WeightSample = ({ 
 
  className, 
  label 
}: { 
  weight: string; 
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
    <div className={`text-lg ${className}`}>
      The quick brown fox jumps over the lazy dog
    </div>
  </div>
);

export const TypographySystem: Story = {
  render: () => (
    <div className="max-w-7xl mx-auto p-8 space-y-12">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Type className="h-8 w-8 text-primary-brand" />
          <h1 className="text-4xl font-bold">Typography System</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Comprehensive typography guidelines with consistent scaling and hierarchy
        </p>
      </div>

      {/* Font Family */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Font Family</h2>
          <p className="text-muted-foreground">
            Inter is our primary font with system font fallbacks for reliability
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Font Stack</CardTitle>
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
      </section>

      <Separator />

      {/* Heading Scale */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Heading Scale</h2>
          <p className="text-muted-foreground">
            Systematic heading hierarchy with appropriate sizing and spacing
          </p>
        </div>
        
        <div className="space-y-6">
          <FontSample
            className="text-6xl font-bold leading-none"
            text="Display Large"
            label="Display Large"
            description="Hero sections, landing pages"
            cssClass="text-6xl font-bold"
            lineHeight="leading-none"
          />
          <FontSample
            className="text-5xl font-bold leading-tight"
            text="Display Medium"
            label="Display Medium"
            description="Page titles, major sections"
            cssClass="text-5xl font-bold"
            lineHeight="leading-tight"
          />
          <FontSample
            className="text-4xl font-bold leading-tight"
            text="Display Small"
            label="Display Small"
            description="Section headers, dialogs"
            cssClass="text-4xl font-bold"
            lineHeight="leading-tight"
          />
          <FontSample
            className="text-3xl font-semibold leading-tight"
            text="Heading 1"
            label="Heading 1"
            description="Main page headings"
            cssClass="text-3xl font-semibold"
            lineHeight="leading-tight"
          />
          <FontSample
            className="text-2xl font-semibold leading-tight"
            text="Heading 2"
            label="Heading 2"
            description="Section headings"
            cssClass="text-2xl font-semibold"
            lineHeight="leading-tight"
          />
          <FontSample
            className="text-xl font-semibold leading-tight"
            text="Heading 3"
            label="Heading 3"
            description="Subsection headings"
            cssClass="text-xl font-semibold"
            lineHeight="leading-tight"
          />
          <FontSample
            className="text-lg font-semibold leading-tight"
            text="Heading 4"
            label="Heading 4"
            description="Card titles, form sections"
            cssClass="text-lg font-semibold"
            lineHeight="leading-tight"
          />
          <FontSample
            className="text-base font-semibold leading-tight"
            text="Heading 5"
            label="Heading 5"
            description="List headers, small sections"
            cssClass="text-base font-semibold"
            lineHeight="leading-tight"
          />
          <FontSample
            className="text-sm font-semibold leading-tight"
            text="Heading 6"
            label="Heading 6"
            description="Labels, captions"
            cssClass="text-sm font-semibold"
            lineHeight="leading-tight"
          />
        </div>
      </section>

      <Separator />

      {/* Body Text */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Body Text</h2>
          <p className="text-muted-foreground">
            Body text sizes with appropriate line heights for readability
          </p>
        </div>
        
        <div className="space-y-6">
          <FontSample
            className="text-xl leading-relaxed"
            text="Large body text for introductions and important content. This size is ideal for lead paragraphs and prominent text blocks that need to stand out."
            label="Large Body"
            description="Lead paragraphs, introductions"
            cssClass="text-xl"
            lineHeight="leading-relaxed"
          />
          <FontSample
            className="text-lg leading-relaxed"
            text="Medium body text for secondary content and longer reading experiences. This size works well for article content and detailed descriptions."
            label="Medium Body"
            description="Article content, descriptions"
            cssClass="text-lg"
            lineHeight="leading-relaxed"
          />
          <FontSample
            className="text-base leading-relaxed"
            text="Default body text for general content and user interface elements. This is the most commonly used text size for forms, buttons, and general content."
            label="Default Body"
            description="General content, UI elements"
            cssClass="text-base"
            lineHeight="leading-relaxed"
          />
          <FontSample
            className="text-sm leading-relaxed"
            text="Small body text for secondary information, captions, and helper text. Use this size for less important content that still needs to be readable."
            label="Small Body"
            description="Helper text, captions"
            cssClass="text-sm"
            lineHeight="leading-relaxed"
          />
          <FontSample
            className="text-xs leading-relaxed"
            text="Extra small text for fine print, timestamps, and metadata. This is the smallest readable size and should be used sparingly."
            label="Extra Small"
            description="Fine print, metadata"
            cssClass="text-xs"
            lineHeight="leading-relaxed"
          />
        </div>
      </section>

      <Separator />

      {/* Font Weights */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Font Weights</h2>
          <p className="text-muted-foreground">
            Available font weights for creating hierarchy and emphasis
          </p>
        </div>
        
        <div className="space-y-6">
          <WeightSample
            weight="400"
            className="font-normal"
            label="Normal (400)"
          />
          <WeightSample
            weight="500"
            className="font-medium"
            label="Medium (500)"
          />
          <WeightSample
            weight="600"
            className="font-semibold"
            label="Semibold (600)"
          />
          <WeightSample
            weight="700"
            className="font-bold"
            label="Bold (700)"
          />
        </div>
      </section>

      <Separator />

      {/* Usage Examples */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Usage Examples</h2>
          <p className="text-muted-foreground">
            Real-world examples of typography in UI components
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Example */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Card Title</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Card description with helpful context
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base leading-relaxed">
                This is default body text within a card component. It uses the base text size 
                with relaxed line height for optimal readability.
              </p>
              <div className="flex items-center gap-2">
                <Button>Primary Action</Button>
                <Button variant="outline">Secondary</Button>
              </div>
            </CardContent>
          </Card>

          {/* Form Example */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Form Typography</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Typography in form elements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Field Label
                </label>
                <input 
                  className="w-full px-3 py-2 text-base border rounded-md"
                  placeholder="Input placeholder text"
                />
                <p className="text-xs text-muted-foreground">
                  Helper text providing additional context
                </p>
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
            Typography best practices for accessibility compliance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlignLeft className="h-5 w-5" />
                Readability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="text-sm space-y-1">
                <li>• Minimum 16px (1rem) for body text</li>
                <li>• Line height 1.4-1.6 for body text</li>
                <li>• Maximum 70 characters per line</li>
                <li>• Sufficient contrast ratios</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bold className="h-5 w-5" />
                Hierarchy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="text-sm space-y-1">
                <li>• Use semantic HTML headings (h1-h6)</li>
                <li>• Maintain logical heading order</li>
                <li>• Don't skip heading levels</li>
                <li>• Use font weight for emphasis</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CSS Classes Reference */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">CSS Classes Reference</h2>
          <p className="text-muted-foreground">
            Tailwind CSS classes for typography
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Typography Classes</CardTitle>
            <CardDescription>Complete reference of available classes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Font Sizes</h4>
                <div className="space-y-1 text-sm font-mono">
                  <div>text-xs (12px)</div>
                  <div>text-sm (14px)</div>
                  <div>text-base (16px)</div>
                  <div>text-lg (18px)</div>
                  <div>text-xl (20px)</div>
                  <div>text-2xl (24px)</div>
                  <div>text-3xl (30px)</div>
                  <div>text-4xl (36px)</div>
                  <div>text-5xl (48px)</div>
                  <div>text-6xl (60px)</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Font Weights</h4>
                <div className="space-y-1 text-sm font-mono">
                  <div>font-normal (400)</div>
                  <div>font-medium (500)</div>
                  <div>font-semibold (600)</div>
                  <div>font-bold (700)</div>
                </div>
                <h4 className="font-semibold mb-3 mt-6">Line Heights</h4>
                <div className="space-y-1 text-sm font-mono">
                  <div>leading-tight (1.25)</div>
                  <div>leading-normal (1.5)</div>
                  <div>leading-relaxed (1.625)</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  ),
}; 