import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Checkbox } from './checkbox'
import { Label } from './label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'
import { Button } from './button'
import { Badge } from './badge'
import { Separator } from './separator'

const meta = {
  title: 'Design System/Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A checkbox component built on Radix UI primitives. Perfect for forms, settings, and multi-selection interfaces.

## Features
- **Accessible**: Full keyboard navigation and screen reader support
- **Customizable**: Flexible styling with Tailwind CSS classes
- **Controlled/Uncontrolled**: Supports both controlled and uncontrolled usage
- **Form Integration**: Works seamlessly with form libraries

## Design Guidelines
- Use checkboxes for multiple selections or boolean states
- Always pair with descriptive labels
- Group related checkboxes logically
- Provide clear visual feedback for checked/unchecked states

## Accessibility
- WCAG 2.1 AA compliant
- Proper focus management and keyboard navigation
- Screen reader announcements for state changes
- High contrast support
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'The checked state of the checkbox',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    onCheckedChange: {
      action: 'checked changed',
      description: 'Callback fired when the checked state changes',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="default" {...args} />
      <Label htmlFor="default">Accept terms and conditions</Label>
    </div>
  ),
}

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checked" {...args} />
      <Label htmlFor="checked">Email notifications enabled</Label>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" {...args} />
      <Label htmlFor="disabled">Feature not available</Label>
    </div>
  ),
}

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled-checked" {...args} />
      <Label htmlFor="disabled-checked">Permanently enabled feature</Label>
    </div>
  ),
}

export const WithForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      newsletter: false,
      terms: false,
      privacy: false,
    })

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.log('Form submitted:', formData)
    }

    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Account Preferences</CardTitle>
          <CardDescription>
            Manage your account settings and preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) =>
                  setFormData(prev => ({ ...prev, newsletter: !!checked }))
                }
              />
              <Label htmlFor="newsletter">Subscribe to newsletter</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.terms}
                onCheckedChange={(checked) =>
                  setFormData(prev => ({ ...prev, terms: !!checked }))
                }
              />
              <Label htmlFor="terms">I agree to the terms and conditions</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="privacy"
                checked={formData.privacy}
                onCheckedChange={(checked) =>
                  setFormData(prev => ({ ...prev, privacy: !!checked }))
                }
              />
              <Label htmlFor="privacy">I agree to the privacy policy</Label>
            </div>
            
            <Separator />
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={!formData.terms || !formData.privacy}
            >
              Save Preferences
            </Button>
          </form>
        </CardContent>
      </Card>
    )
  },
}

export const AmazonWasteManagement: Story = {
  render: () => {
    const [selectedWasteTypes, setSelectedWasteTypes] = useState<string[]>([])
    const [selectedFacilities, setSelectedFacilities] = useState<string[]>(['SEA1'])

    const wasteTypes = [
      { id: 'cardboard', label: 'Cardboard', description: 'Corrugated boxes and packaging' },
      { id: 'plastic', label: 'Plastic Wrap', description: 'Stretch wrap and plastic bags' },
      { id: 'electronics', label: 'Electronics', description: 'Defective devices and components' },
      { id: 'metal', label: 'Metal Scraps', description: 'Aluminum and steel materials' },
      { id: 'organic', label: 'Organic Waste', description: 'Food waste from cafeterias' },
      { id: 'hazardous', label: 'Hazardous Materials', description: 'Batteries and chemicals' },
    ]

    const facilities = [
      { id: 'SEA1', name: 'Seattle FC 1', region: 'US West' },
      { id: 'SEA2', name: 'Seattle FC 2', region: 'US West' },
      { id: 'PDX1', name: 'Portland FC 1', region: 'US West' },
      { id: 'DFW1', name: 'Dallas FC 1', region: 'US Central' },
      { id: 'ATL1', name: 'Atlanta FC 1', region: 'US East' },
    ]

    const handleWasteTypeChange = (wasteId: string, checked: boolean) => {
      setSelectedWasteTypes(prev => 
        checked 
          ? [...prev, wasteId]
          : prev.filter(id => id !== wasteId)
      )
    }

    const handleFacilityChange = (facilityId: string, checked: boolean) => {
      setSelectedFacilities(prev => 
        checked 
          ? [...prev, facilityId]
          : prev.filter(id => id !== facilityId)
      )
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Waste Type Selection</CardTitle>
            <CardDescription>
              Select the types of waste for poster generation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {wasteTypes.map((waste) => (
              <div key={waste.id} className="flex items-start space-x-3">
                <Checkbox
                  id={waste.id}
                  checked={selectedWasteTypes.includes(waste.id)}
                  onCheckedChange={(checked) => 
                    handleWasteTypeChange(waste.id, !!checked)
                  }
                />
                <div className="flex-1 space-y-1">
                  <Label htmlFor={waste.id} className="text-sm font-medium">
                    {waste.label}
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    {waste.description}
                  </p>
                </div>
              </div>
            ))}
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                Selected: {selectedWasteTypes.length} waste types
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedWasteTypes([])}
                disabled={selectedWasteTypes.length === 0}
              >
                Clear All
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Target Facilities</CardTitle>
            <CardDescription>
              Choose facilities for poster deployment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {facilities.map((facility) => (
              <div key={facility.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id={facility.id}
                    checked={selectedFacilities.includes(facility.id)}
                    onCheckedChange={(checked) => 
                      handleFacilityChange(facility.id, !!checked)
                    }
                  />
                  <div>
                    <Label htmlFor={facility.id} className="text-sm font-medium">
                      {facility.name}
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      {facility.region}
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {facility.id}
                </Badge>
              </div>
            ))}
            
            <Separator />
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  Selected: {selectedFacilities.length} facilities
                </span>
                <div className="space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedFacilities(facilities.map(f => f.id))}
                  >
                    Select All
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedFacilities([])}
                    disabled={selectedFacilities.length === 0}
                  >
                    Clear All
                  </Button>
                </div>
              </div>
              
              <Button className="w-full" disabled={selectedFacilities.length === 0}>
                Generate Posters ({selectedFacilities.length} facilities)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
}

export const PosterCustomization: Story = {
  render: () => {
    const [options, setOptions] = useState({
      includeQR: true,
      multilingual: false,
      largeText: false,
      colorPrint: true,
      weatherResistant: false,
      emergencyContact: true,
      complianceInfo: true,
      customBranding: false,
    })

    const handleOptionChange = (key: string, checked: boolean) => {
      setOptions(prev => ({ ...prev, [key]: checked }))
    }

    const customizationOptions = [
      {
        key: 'includeQR',
        label: 'Include QR Code',
        description: 'Add QR code for digital access to waste guidelines',
        recommended: true,
      },
      {
        key: 'multilingual',
        label: 'Multilingual Support',
        description: 'Include Spanish and other local languages',
        recommended: false,
      },
      {
        key: 'largeText',
        label: 'Large Text Format',
        description: 'Use larger fonts for better visibility',
        recommended: false,
      },
      {
        key: 'colorPrint',
        label: 'Color Printing',
        description: 'Use color coding for different waste types',
        recommended: true,
      },
      {
        key: 'weatherResistant',
        label: 'Weather Resistant',
        description: 'Laminated for outdoor use',
        recommended: false,
      },
      {
        key: 'emergencyContact',
        label: 'Emergency Contact Info',
        description: 'Include facility emergency contact details',
        recommended: true,
      },
      {
        key: 'complianceInfo',
        label: 'Compliance Information',
        description: 'Add regulatory compliance details',
        recommended: true,
      },
      {
        key: 'customBranding',
        label: 'Custom Facility Branding',
        description: 'Include facility-specific logos and colors',
        recommended: false,
      },
    ]

    const selectedCount = Object.values(options).filter(Boolean).length

    return (
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Poster Customization Options</CardTitle>
          <CardDescription>
            Customize your waste management posters for specific needs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {customizationOptions.map((option) => (
              <div key={option.key} className="flex items-start space-x-3">
                <Checkbox
                  id={option.key}
                  checked={options[option.key as keyof typeof options]}
                  onCheckedChange={(checked) => 
                    handleOptionChange(option.key, !!checked)
                  }
                />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center space-x-2">
                    <Label htmlFor={option.key} className="text-sm font-medium">
                      {option.label}
                    </Label>
                    {option.recommended && (
                      <Badge variant="secondary" className="text-xs">
                        Recommended
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                Selected Options: {selectedCount}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setOptions({
                  includeQR: true,
                  multilingual: false,
                  largeText: false,
                  colorPrint: true,
                  weatherResistant: false,
                  emergencyContact: true,
                  complianceInfo: true,
                  customBranding: false,
                })}
              >
                Reset to Recommended
              </Button>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="text-sm font-medium mb-2">Preview Configuration</h4>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>Format: {options.largeText ? 'Large Text' : 'Standard'}</p>
                <p>Colors: {options.colorPrint ? 'Full Color' : 'Grayscale'}</p>
                <p>Material: {options.weatherResistant ? 'Laminated' : 'Standard Paper'}</p>
                <p>Languages: {options.multilingual ? 'Multi-language' : 'English Only'}</p>
                <p>Features: {options.includeQR ? 'QR Code, ' : ''}{options.emergencyContact ? 'Emergency Info, ' : ''}{options.complianceInfo ? 'Compliance Details' : ''}</p>
              </div>
            </div>
            
            <Button className="w-full">
              Generate Custom Posters
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  },
}

export const ComplianceChecklist: Story = {
  render: () => {
    const [checklist, setChecklist] = useState({
      wasteSegregation: false,
      labelingComplete: false,
      storageCompliant: false,
      disposalScheduled: false,
      documentationComplete: false,
      staffTrained: false,
      emergencyProcedures: false,
      auditReady: false,
    })

    const handleChecklistChange = (key: string, checked: boolean) => {
      setChecklist(prev => ({ ...prev, [key]: checked }))
    }

    const checklistItems = [
      {
        key: 'wasteSegregation',
        label: 'Waste Segregation',
        description: 'All waste types properly separated and categorized',
        critical: true,
      },
      {
        key: 'labelingComplete',
        label: 'Container Labeling',
        description: 'All waste containers properly labeled with contents',
        critical: true,
      },
      {
        key: 'storageCompliant',
        label: 'Storage Compliance',
        description: 'Waste storage areas meet safety and regulatory requirements',
        critical: true,
      },
      {
        key: 'disposalScheduled',
        label: 'Disposal Scheduled',
        description: 'Regular pickup and disposal schedules established',
        critical: false,
      },
      {
        key: 'documentationComplete',
        label: 'Documentation Complete',
        description: 'All required waste tracking and manifests up to date',
        critical: true,
      },
      {
        key: 'staffTrained',
        label: 'Staff Training',
        description: 'All relevant staff trained on waste handling procedures',
        critical: false,
      },
      {
        key: 'emergencyProcedures',
        label: 'Emergency Procedures',
        description: 'Emergency response procedures documented and accessible',
        critical: true,
      },
      {
        key: 'auditReady',
        label: 'Audit Ready',
        description: 'Facility prepared for regulatory compliance audit',
        critical: false,
      },
    ]

    const completedCount = Object.values(checklist).filter(Boolean).length
    const criticalItems = checklistItems.filter(item => item.critical)
    const completedCritical = criticalItems.filter(item => checklist[item.key as keyof typeof checklist]).length
    const complianceScore = Math.round((completedCount / checklistItems.length) * 100)

    return (
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Facility Compliance Checklist</CardTitle>
          <CardDescription>
            Ensure your facility meets all waste management requirements
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{complianceScore}%</div>
              <div className="text-xs text-muted-foreground">Compliance Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{completedCritical}/{criticalItems.length}</div>
              <div className="text-xs text-muted-foreground">Critical Items</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{completedCount}/{checklistItems.length}</div>
              <div className="text-xs text-muted-foreground">Total Items</div>
            </div>
          </div>
          
          <div className="space-y-4">
            {checklistItems.map((item) => (
              <div key={item.key} className="flex items-start space-x-3">
                <Checkbox
                  id={item.key}
                  checked={checklist[item.key as keyof typeof checklist]}
                  onCheckedChange={(checked) => 
                    handleChecklistChange(item.key, !!checked)
                  }
                />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center space-x-2">
                    <Label htmlFor={item.key} className="text-sm font-medium">
                      {item.label}
                    </Label>
                    {item.critical && (
                      <Badge variant="destructive" className="text-xs">
                        Critical
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            {completedCritical < criticalItems.length && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium text-red-800">
                    Action Required
                  </span>
                </div>
                <p className="text-sm text-red-700 mt-1">
                  {criticalItems.length - completedCritical} critical compliance items need attention
                </p>
              </div>
            )}
            
            <div className="flex space-x-2">
              <Button 
                className="flex-1"
                disabled={completedCritical < criticalItems.length}
              >
                Generate Compliance Report
              </Button>
              <Button 
                variant="outline"
                onClick={() => setChecklist({
                  wasteSegregation: false,
                  labelingComplete: false,
                  storageCompliant: false,
                  disposalScheduled: false,
                  documentationComplete: false,
                  staffTrained: false,
                  emergencyProcedures: false,
                  auditReady: false,
                })}
              >
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  },
} 