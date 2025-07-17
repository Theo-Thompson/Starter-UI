import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Switch } from './switch';
import { Label } from './label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import { Button } from './button';

const meta: Meta<typeof Switch> = {
  title: 'Design System/Atoms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Switch Component

A toggle switch component built on Radix UI that allows users to switch between two states (on/off, enabled/disabled). Perfect for binary settings and preferences.

## Design Guidelines

### When to Use
- **Binary settings**: On/off, enabled/disabled states
- **Immediate effect**: Changes take effect immediately
- **Preferences**: User preferences and configuration
- **Feature toggles**: Enable/disable features or modes

### When Not to Use
- **Multiple options**: Use radio buttons or select for multiple choices
- **Confirmation needed**: Use checkbox for actions requiring confirmation
- **Complex state**: For more than simple on/off states
- **Form submission**: When changes need to be saved explicitly

## Accessibility

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Keyboard Navigation**: Space to toggle, Tab to navigate
- **Screen Reader Support**: Proper ARIA attributes and labels
- **Focus Management**: Clear focus indicators
- **State Announcement**: Screen readers announce state changes

## Technical Implementation

### Props
- \`checked\`: Current state of the switch
- \`onCheckedChange\`: Callback when state changes
- \`disabled\`: Disables the switch
- \`id\`: For associating with labels
- \`name\`: For form submission

### Features
- **Controlled**: Can be controlled with state
- **Uncontrolled**: Can work without external state
- **Animated**: Smooth transitions between states
- **Customizable**: Supports custom styling

## Best Practices

1. **Clear labels**: Use descriptive labels that explain what the switch controls
2. **Immediate feedback**: Provide visual feedback when state changes
3. **Consistent placement**: Place switches consistently in your interface
4. **Logical grouping**: Group related switches together
5. **Default states**: Choose sensible default states for switches
6. **Loading states**: Show loading state for async operations
        `,
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Current state of the switch',
    },
    onCheckedChange: {
      action: 'onCheckedChange',
      description: 'Callback when state changes',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the switch',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

// Basic Switch
export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

// Controlled Switch
export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch 
            id="notifications" 
            checked={checked} 
            onCheckedChange={setChecked}
          />
          <Label htmlFor="notifications">Enable Notifications</Label>
        </div>
        
        <div className="text-sm text-muted-foreground">
          Status: {checked ? 'Enabled' : 'Disabled'}
        </div>
        
        <Button 
          variant="outline" 
          onClick={() => setChecked(!checked)}
        >
          Toggle Programmatically
        </Button>
      </div>
    );
  },
};

// Disabled States
export const DisabledStates: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="disabled-off" disabled />
        <Label htmlFor="disabled-off">Disabled (Off)</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch id="disabled-on" disabled defaultChecked />
        <Label htmlFor="disabled-on">Disabled (On)</Label>
      </div>
    </div>
  ),
};

// Settings Panel
export const SettingsPanel: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      analytics: false,
      marketing: false
    });
    
    const updateSetting = (key: keyof typeof settings) => {
      setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };
    
    return (
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>User Preferences</CardTitle>
          <CardDescription>
            Customize your experience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications">Push Notifications</Label>
                <div className="text-sm text-muted-foreground">
                  Receive notifications about updates
                </div>
              </div>
              <Switch 
                id="notifications"
                checked={settings.notifications}
                onCheckedChange={() => updateSetting('notifications')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="dark-mode">Dark Mode</Label>
                <div className="text-sm text-muted-foreground">
                  Use dark theme throughout the app
                </div>
              </div>
              <Switch 
                id="dark-mode"
                checked={settings.darkMode}
                onCheckedChange={() => updateSetting('darkMode')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="auto-save">Auto Save</Label>
                <div className="text-sm text-muted-foreground">
                  Automatically save your work
                </div>
              </div>
              <Switch 
                id="auto-save"
                checked={settings.autoSave}
                onCheckedChange={() => updateSetting('autoSave')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="analytics">Analytics</Label>
                <div className="text-sm text-muted-foreground">
                  Help improve our service
                </div>
              </div>
              <Switch 
                id="analytics"
                checked={settings.analytics}
                onCheckedChange={() => updateSetting('analytics')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="marketing">Marketing Emails</Label>
                <div className="text-sm text-muted-foreground">
                  Receive promotional content
                </div>
              </div>
              <Switch 
                id="marketing"
                checked={settings.marketing}
                onCheckedChange={() => updateSetting('marketing')}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
};

// Amazon Facility Settings
export const AmazonFacilitySettings: Story = {
  render: () => {
    const [facilitySettings, setFacilitySettings] = useState({
      wasteTracking: true,
      recyclingAlerts: false,
      sustainabilityReports: true,
      complianceMode: true,
      autoApproval: false
    });
    
    const updateSetting = (key: keyof typeof facilitySettings) => {
      setFacilitySettings(prev => ({ ...prev, [key]: !prev[key] }));
    };
    
    return (
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle className="text-amazon-orange">Facility Settings</CardTitle>
          <CardDescription>
            Configure waste management settings for your Amazon facility
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Label htmlFor="waste-tracking">Waste Tracking</Label>
                  <Badge variant="default">Recommended</Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  Track waste generation and disposal metrics
                </div>
              </div>
              <Switch 
                id="waste-tracking"
                checked={facilitySettings.wasteTracking}
                onCheckedChange={() => updateSetting('wasteTracking')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="recycling-alerts">Recycling Alerts</Label>
                <div className="text-sm text-muted-foreground">
                  Get notified when recycling bins are full
                </div>
              </div>
              <Switch 
                id="recycling-alerts"
                checked={facilitySettings.recyclingAlerts}
                onCheckedChange={() => updateSetting('recyclingAlerts')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Label htmlFor="sustainability-reports">Sustainability Reports</Label>
                  <Badge variant="secondary">Monthly</Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  Receive monthly sustainability performance reports
                </div>
              </div>
              <Switch 
                id="sustainability-reports"
                checked={facilitySettings.sustainabilityReports}
                onCheckedChange={() => updateSetting('sustainabilityReports')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Label htmlFor="compliance-mode">Compliance Mode</Label>
                  <Badge variant="destructive">Required</Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  Ensure all waste handling meets regulatory standards
                </div>
              </div>
              <Switch 
                id="compliance-mode"
                checked={facilitySettings.complianceMode}
                onCheckedChange={() => updateSetting('complianceMode')}
                disabled={true}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="auto-approval">Auto Approval</Label>
                <div className="text-sm text-muted-foreground">
                  Automatically approve standard poster requests
                </div>
              </div>
              <Switch 
                id="auto-approval"
                checked={facilitySettings.autoApproval}
                onCheckedChange={() => updateSetting('autoApproval')}
              />
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Settings will be applied to facility SEA1
              </span>
              <Button className="bg-amazon-orange hover:bg-amazon-orange/90">
                Save Changes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
};

// Feature Toggles
export const FeatureToggles: Story = {
  render: () => {
    const [features, setFeatures] = useState({
      betaFeatures: false,
      advancedFilters: true,
      experimentalUI: false,
      apiAccess: false
    });
    
    const updateFeature = (key: keyof typeof features) => {
      setFeatures(prev => ({ ...prev, [key]: !prev[key] }));
    };
    
    return (
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Feature Toggles</CardTitle>
          <CardDescription>
            Enable or disable experimental features
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Label htmlFor="beta-features">Beta Features</Label>
                <Badge variant="outline">Beta</Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                Access to experimental features
              </div>
            </div>
            <Switch 
              id="beta-features"
              checked={features.betaFeatures}
              onCheckedChange={() => updateFeature('betaFeatures')}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="advanced-filters">Advanced Filters</Label>
              <div className="text-sm text-muted-foreground">
                Enhanced search and filtering options
              </div>
            </div>
            <Switch 
              id="advanced-filters"
              checked={features.advancedFilters}
              onCheckedChange={() => updateFeature('advancedFilters')}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Label htmlFor="experimental-ui">Experimental UI</Label>
                <Badge variant="destructive">Experimental</Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                New interface design (may be unstable)
              </div>
            </div>
            <Switch 
              id="experimental-ui"
              checked={features.experimentalUI}
              onCheckedChange={() => updateFeature('experimentalUI')}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="api-access">API Access</Label>
              <div className="text-sm text-muted-foreground">
                Enable programmatic access to your data
              </div>
            </div>
            <Switch 
              id="api-access"
              checked={features.apiAccess}
              onCheckedChange={() => updateFeature('apiAccess')}
            />
          </div>
        </CardContent>
      </Card>
    );
  },
};

// Form Integration
export const FormIntegration: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      weeklyDigest: false
    });
    
    const updateFormData = (key: keyof typeof formData) => {
      setFormData(prev => ({ ...prev, [key]: !prev[key] }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };
    
    return (
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>
            Choose how you want to receive notifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <Switch 
                  id="email-notifications"
                  checked={formData.emailNotifications}
                  onCheckedChange={() => updateFormData('emailNotifications')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="sms-notifications">SMS Notifications</Label>
                <Switch 
                  id="sms-notifications"
                  checked={formData.smsNotifications}
                  onCheckedChange={() => updateFormData('smsNotifications')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications">Push Notifications</Label>
                <Switch 
                  id="push-notifications"
                  checked={formData.pushNotifications}
                  onCheckedChange={() => updateFormData('pushNotifications')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="weekly-digest">Weekly Digest</Label>
                <Switch 
                  id="weekly-digest"
                  checked={formData.weeklyDigest}
                  onCheckedChange={() => updateFormData('weeklyDigest')}
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">
                Save Preferences
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  },
};

// Different Sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Switch id="small" className="scale-75" />
        <Label htmlFor="small">Small Switch</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch id="default" />
        <Label htmlFor="default">Default Switch</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch id="large" className="scale-125" />
        <Label htmlFor="large">Large Switch</Label>
      </div>
    </div>
  ),
};

// Loading State
export const LoadingState: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(false);
    const [checked, setChecked] = useState(false);
    
    const handleToggle = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setChecked(!checked);
      setIsLoading(false);
    };
    
    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch 
            id="loading-switch"
            checked={checked}
            onCheckedChange={handleToggle}
            disabled={isLoading}
          />
          <Label htmlFor="loading-switch">
            {isLoading ? 'Saving...' : 'Enable Feature'}
          </Label>
        </div>
        
        {isLoading && (
          <div className="text-sm text-muted-foreground">
            Please wait while we save your preferences...
          </div>
        )}
      </div>
    );
  },
}; 