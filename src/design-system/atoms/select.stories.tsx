import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator
} from './select';
import { Label } from './label';
import { Button } from './button';
import { Badge } from './badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';

const meta: Meta<typeof Select> = {
  title: 'Design System/Molecules/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Select Component

A dropdown selection component built on Radix UI that allows users to choose from a list of options. Features keyboard navigation, search functionality, and accessibility support.

## Design Guidelines

### When to Use
- **Single selection**: Choose one option from a list
- **Limited options**: 3-15 options work best
- **Categorized options**: Group related options together
- **Form inputs**: Part of larger forms or filters

### When Not to Use
- **Multiple selection**: Use checkbox group or multi-select instead
- **Very few options**: Use radio buttons (2-3 options)
- **Many options**: Consider search/autocomplete input
- **Binary choices**: Use switch or checkbox instead

## Accessibility

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Keyboard Navigation**: Arrow keys, Enter, Escape, typing to search
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Clear focus indicators and logical tab order
- **Search Functionality**: Type to filter options

## Technical Implementation

### Components
- \`Select\`: Root container component
- \`SelectTrigger\`: Button that opens the dropdown
- \`SelectValue\`: Displays selected value or placeholder
- \`SelectContent\`: Dropdown content container
- \`SelectItem\`: Individual option in the dropdown
- \`SelectGroup\`: Groups related options
- \`SelectLabel\`: Labels for option groups
- \`SelectSeparator\`: Visual separator between groups

### Props
- \`value\`: Currently selected value
- \`onValueChange\`: Callback when selection changes
- \`placeholder\`: Text shown when no option is selected
- \`disabled\`: Disables the entire select
- \`size\`: Size variant (sm, default)

## Best Practices

1. **Clear labels**: Use descriptive option text
2. **Logical grouping**: Group related options together
3. **Sensible defaults**: Pre-select common options when appropriate
4. **Loading states**: Show loading indicator for dynamic options
5. **Error handling**: Provide clear error messages for validation
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Currently selected value',
    },
    onValueChange: {
      action: 'onValueChange',
      description: 'Callback when selection changes',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

// Basic Select
export const Default: Story = {
  render: () => (
    <div className="w-[200px]">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="grape">Grape</SelectItem>
          <SelectItem value="mango">Mango</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

// With Groups
export const WithGroups: Story = {
  render: () => (
    <div className="w-[250px]">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a location" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>North America</SelectLabel>
            <SelectItem value="usa">United States</SelectItem>
            <SelectItem value="canada">Canada</SelectItem>
            <SelectItem value="mexico">Mexico</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Europe</SelectLabel>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="germany">Germany</SelectItem>
            <SelectItem value="france">France</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Asia</SelectLabel>
            <SelectItem value="japan">Japan</SelectItem>
            <SelectItem value="china">China</SelectItem>
            <SelectItem value="india">India</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};

// Different Sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Small Size</Label>
        <Select>
          <SelectTrigger size="sm" className="w-[200px]">
            <SelectValue placeholder="Small select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label>Default Size</Label>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Default select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
};

// Controlled Select
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Select a priority level</Label>
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="urgent">Urgent</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="text-sm text-muted-foreground">
          Selected value: {value || 'None'}
        </div>
        
        <Button 
          variant="outline" 
          onClick={() => setValue('')}
          disabled={!value}
        >
          Clear Selection
        </Button>
      </div>
    );
  },
};

// Disabled States
export const DisabledStates: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Disabled Select</Label>
        <Select disabled>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="This is disabled" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label>With Disabled Options</Label>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Some options disabled" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="available">Available</SelectItem>
            <SelectItem value="disabled1" disabled>Disabled Option</SelectItem>
            <SelectItem value="available2">Available</SelectItem>
            <SelectItem value="disabled2" disabled>Another Disabled</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
};

// Amazon Facility Selector
export const AmazonFacilitySelector: Story = {
  render: () => {
    const [facility, setFacility] = useState<string>('');
    
    return (
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Select Facility</CardTitle>
          <CardDescription>
            Choose your Amazon facility for waste poster request
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="facility-select">Facility Location</Label>
            <Select value={facility} onValueChange={setFacility}>
              <SelectTrigger id="facility-select">
                <SelectValue placeholder="Select your facility" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fulfillment Centers</SelectLabel>
                  <SelectItem value="sea1">SEA1 - Seattle, WA</SelectItem>
                  <SelectItem value="dfw1">DFW1 - Dallas, TX</SelectItem>
                  <SelectItem value="jfk8">JFK8 - Staten Island, NY</SelectItem>
                  <SelectItem value="lax9">LAX9 - Los Angeles, CA</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Sortation Centers</SelectLabel>
                  <SelectItem value="sea2">SEA2 - Kent, WA</SelectItem>
                  <SelectItem value="dfw2">DFW2 - Irving, TX</SelectItem>
                  <SelectItem value="jfk2">JFK2 - Carteret, NJ</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Delivery Stations</SelectLabel>
                  <SelectItem value="dse1">DSE1 - Seattle, WA</SelectItem>
                  <SelectItem value="dda1">DDA1 - Dallas, TX</SelectItem>
                  <SelectItem value="dny1">DNY1 - New York, NY</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          {facility && (
            <div className="p-3 bg-amazon-light-blue/10 rounded-md">
              <p className="text-sm">
                <strong>Selected:</strong> {facility.toUpperCase()}
              </p>
              <Badge variant="secondary" className="mt-1">
                Active Facility
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};

// Poster Type Selector
export const PosterTypeSelector: Story = {
  render: () => {
    const [posterType, setPosterType] = useState<string>('');
    
    const posterDescriptions = {
      'general-waste': 'Standard waste disposal guidelines for all materials',
      'recycling': 'Specific instructions for recyclable materials',
      'hazardous': 'Safety protocols for hazardous waste handling',
      'food-waste': 'Guidelines for food waste and composting',
      'electronics': 'E-waste disposal and recycling procedures',
      'cardboard': 'Cardboard recycling and preparation instructions'
    };
    
    return (
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-amazon-orange">Waste Poster Types</CardTitle>
          <CardDescription>
            Choose the type of waste management poster you need
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="poster-type-select">Poster Category</Label>
            <Select value={posterType} onValueChange={setPosterType}>
              <SelectTrigger id="poster-type-select">
                <SelectValue placeholder="Select poster type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>General Guidelines</SelectLabel>
                  <SelectItem value="general-waste">General Waste Management</SelectItem>
                  <SelectItem value="recycling">Recycling Instructions</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Specialized Waste</SelectLabel>
                  <SelectItem value="hazardous">Hazardous Materials</SelectItem>
                  <SelectItem value="food-waste">Food Waste & Composting</SelectItem>
                  <SelectItem value="electronics">Electronics & E-Waste</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Material-Specific</SelectLabel>
                  <SelectItem value="cardboard">Cardboard & Packaging</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          {posterType && (
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-md border border-green-200 dark:border-green-800">
              <p className="text-sm font-medium text-green-800 dark:text-green-200">
                Selected: {posterType.split('-').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}
              </p>
              <p className="text-sm text-green-600 dark:text-green-300 mt-1">
                {posterDescriptions[posterType as keyof typeof posterDescriptions]}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};

// Form Integration
export const FormIntegration: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      department: '',
      priority: '',
      category: ''
    });
    
    return (
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Request Form</CardTitle>
          <CardDescription>
            Fill out the form to submit your request
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Select 
              value={formData.department} 
              onValueChange={(value: string) => setFormData(prev => ({ ...prev, department: value }))}
            >
              <SelectTrigger id="department">
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="operations">Operations</SelectItem>
                <SelectItem value="hr">Human Resources</SelectItem>
                <SelectItem value="it">Information Technology</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="legal">Legal</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="priority">Priority Level</Label>
            <Select 
              value={formData.priority} 
              onValueChange={(value: string) => setFormData(prev => ({ ...prev, priority: value }))}
            >
              <SelectTrigger id="priority">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">🟢 Low</SelectItem>
                <SelectItem value="medium">🟡 Medium</SelectItem>
                <SelectItem value="high">🟠 High</SelectItem>
                <SelectItem value="urgent">🔴 Urgent</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">Request Category</Label>
            <Select 
              value={formData.category} 
              onValueChange={(value: string) => setFormData(prev => ({ ...prev, category: value }))}
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Technical</SelectLabel>
                  <SelectItem value="bug-report">Bug Report</SelectItem>
                  <SelectItem value="feature-request">Feature Request</SelectItem>
                  <SelectItem value="system-access">System Access</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Administrative</SelectLabel>
                  <SelectItem value="policy-question">Policy Question</SelectItem>
                  <SelectItem value="process-improvement">Process Improvement</SelectItem>
                  <SelectItem value="training-request">Training Request</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          <div className="pt-4">
            <Button 
              className="w-full"
              disabled={!formData.department || !formData.priority || !formData.category}
            >
              Submit Request
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};

// Long List with Search
export const LongList: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <Label>Country Selection</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Search and select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="afghanistan">Afghanistan</SelectItem>
          <SelectItem value="albania">Albania</SelectItem>
          <SelectItem value="algeria">Algeria</SelectItem>
          <SelectItem value="argentina">Argentina</SelectItem>
          <SelectItem value="australia">Australia</SelectItem>
          <SelectItem value="austria">Austria</SelectItem>
          <SelectItem value="bangladesh">Bangladesh</SelectItem>
          <SelectItem value="belgium">Belgium</SelectItem>
          <SelectItem value="brazil">Brazil</SelectItem>
          <SelectItem value="bulgaria">Bulgaria</SelectItem>
          <SelectItem value="canada">Canada</SelectItem>
          <SelectItem value="chile">Chile</SelectItem>
          <SelectItem value="china">China</SelectItem>
          <SelectItem value="colombia">Colombia</SelectItem>
          <SelectItem value="croatia">Croatia</SelectItem>
          <SelectItem value="czech-republic">Czech Republic</SelectItem>
          <SelectItem value="denmark">Denmark</SelectItem>
          <SelectItem value="egypt">Egypt</SelectItem>
          <SelectItem value="finland">Finland</SelectItem>
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="germany">Germany</SelectItem>
          <SelectItem value="greece">Greece</SelectItem>
          <SelectItem value="india">India</SelectItem>
          <SelectItem value="indonesia">Indonesia</SelectItem>
          <SelectItem value="ireland">Ireland</SelectItem>
          <SelectItem value="israel">Israel</SelectItem>
          <SelectItem value="italy">Italy</SelectItem>
          <SelectItem value="japan">Japan</SelectItem>
          <SelectItem value="mexico">Mexico</SelectItem>
          <SelectItem value="netherlands">Netherlands</SelectItem>
          <SelectItem value="norway">Norway</SelectItem>
          <SelectItem value="poland">Poland</SelectItem>
          <SelectItem value="portugal">Portugal</SelectItem>
          <SelectItem value="russia">Russia</SelectItem>
          <SelectItem value="south-korea">South Korea</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
          <SelectItem value="sweden">Sweden</SelectItem>
          <SelectItem value="switzerland">Switzerland</SelectItem>
          <SelectItem value="turkey">Turkey</SelectItem>
          <SelectItem value="ukraine">Ukraine</SelectItem>
          <SelectItem value="united-kingdom">United Kingdom</SelectItem>
          <SelectItem value="united-states">United States</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-sm text-muted-foreground">
        Type to search through the options
      </p>
    </div>
  ),
}; 