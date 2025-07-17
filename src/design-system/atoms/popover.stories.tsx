import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { Calendar } from "./calendar";
import { Separator } from "./separator";
import {
  InfoIcon,
  SettingsIcon,
  CalendarIcon,
  FileTextIcon,
  AlertTriangleIcon,
  RecycleIcon,
  TruckIcon,
  BuildingIcon,
  ClipboardIcon,
  HelpCircleIcon,
} from "lucide-react";

const meta: Meta<typeof Popover> = {
  title: 'Design System/Organisms/Popover',
  component: Popover,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# Popover Component

A popover component for displaying contextual content in Amazon waste management systems.

## Design Guidelines

### Visual Hierarchy
- **Trigger Element**: Clear indication of interactive element
- **Content Area**: Well-defined container with proper spacing
- **Positioning**: Smart placement relative to trigger element
- **Backdrop**: Subtle overlay to focus attention

### Accessibility
- **WCAG 2.1 AA Compliant**: Full keyboard navigation support
- **Screen Reader**: Proper ARIA labels and descriptions
- **Focus Management**: Focus trapping within popover content
- **Escape Handling**: Close on Escape key press

### Amazon Waste Management Integration
- **Quick Actions**: Contextual actions for waste management tasks
- **Information Display**: Detailed information about facilities and metrics
- **Form Interactions**: Inline forms for data entry and updates
- **Help Content**: Contextual help and guidance for users

## Technical Implementation

### Core Features
- Controlled and uncontrolled modes
- Flexible positioning with collision detection
- Click outside to close functionality
- Keyboard navigation support
- Custom styling and theming

### State Management
- Open/close state handling
- Form state within popover content
- Integration with external state management
- Event handling for user interactions

### Customization
- Custom trigger elements
- Flexible content composition
- Positioning and alignment options
- Theme integration with CSS variables
        `,
      },
    },
  },
  argTypes: {
    open: {
      control: { type: "boolean" },
      description: "Whether the popover is open",
    },
    defaultOpen: {
      control: { type: "boolean" },
      description: "Default open state",
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Popover Title</h4>
          <p className="text-sm text-muted-foreground">
            This is a popover with some content inside it.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button>Add Contact</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Add New Contact</h4>
              <p className="text-sm text-muted-foreground">
                Enter contact information below.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button size="sm">Save</Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};

export const FacilityQuickInfo: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Hover over facility badges to see detailed information
      </p>
      <div className="flex space-x-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              <BuildingIcon className="w-4 h-4 mr-2" />
              SEA1
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">SEA1 - Seattle Fulfillment Center</h4>
                <Badge variant="secondary">Active</Badge>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Daily Waste:</span>
                  <span className="font-medium">45.2 tons</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Recycling Rate:</span>
                  <span className="font-medium text-green-600">89%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Last Pickup:</span>
                  <span className="font-medium">2 hours ago</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status:</span>
                  <Badge variant="default" className="text-xs">
                    Operational
                  </Badge>
                </div>
              </div>
              <Separator />
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <FileTextIcon className="w-4 h-4 mr-2" />
                  View Reports
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <SettingsIcon className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              <BuildingIcon className="w-4 h-4 mr-2" />
              SEA2
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">SEA2 - Tacoma Distribution Center</h4>
                <Badge variant="secondary">Active</Badge>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Daily Waste:</span>
                  <span className="font-medium">32.1 tons</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Recycling Rate:</span>
                  <span className="font-medium text-green-600">91%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Last Pickup:</span>
                  <span className="font-medium">4 hours ago</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status:</span>
                  <Badge variant="default" className="text-xs">
                    Operational
                  </Badge>
                </div>
              </div>
              <Separator />
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <FileTextIcon className="w-4 h-4 mr-2" />
                  View Reports
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <SettingsIcon className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              <BuildingIcon className="w-4 h-4 mr-2" />
              SEA3
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">SEA3 - Spokane Sortation Center</h4>
                <Badge variant="outline">Maintenance</Badge>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Daily Waste:</span>
                  <span className="font-medium text-orange-600">28.7 tons</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Recycling Rate:</span>
                  <span className="font-medium text-yellow-600">85%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Last Pickup:</span>
                  <span className="font-medium">8 hours ago</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status:</span>
                  <Badge variant="destructive" className="text-xs">
                    Maintenance
                  </Badge>
                </div>
              </div>
              <Separator />
              <div className="p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <AlertTriangleIcon className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-medium text-orange-900">
                    Scheduled Maintenance
                  </span>
                </div>
                <p className="text-xs text-orange-700 mt-1">
                  System will be back online at 6:00 AM PST
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  ),
};

export const PosterRequestForm: Story = {
  render: () => {
    const [posterType, setPosterType] = React.useState("");
    const [facility, setFacility] = React.useState("");
    const [notes, setNotes] = React.useState("");
    const [isOpen, setIsOpen] = React.useState(false);

    const handleSubmit = () => {
      console.log("Poster request submitted:", { posterType, facility, notes });
      setIsOpen(false);
      // Reset form
      setPosterType("");
      setFacility("");
      setNotes("");
    };

    return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button>
            <ClipboardIcon className="w-4 h-4 mr-2" />
            Request Poster
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-96">
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">New Poster Request</h4>
              <p className="text-sm text-muted-foreground">
                Submit a request for waste management poster installation
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="poster-type">Poster Type</Label>
              <select
                id="poster-type"
                value={posterType}
                onChange={(e) => setPosterType(e.target.value)}
                className="w-full border rounded-md px-3 py-2 text-sm"
                aria-label="Select poster type"
              >
                <option value="">Select poster type</option>
                <option value="general-waste">General Waste Guidelines</option>
                <option value="recycling">Recycling Best Practices</option>
                <option value="hazardous">Hazardous Waste Safety</option>
                <option value="break-room">Break Room Guidelines</option>
                <option value="warehouse">Warehouse Floor Safety</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="facility">Target Facility</Label>
              <select
                id="facility"
                value={facility}
                onChange={(e) => setFacility(e.target.value)}
                className="w-full border rounded-md px-3 py-2 text-sm"
                aria-label="Select target facility"
              >
                <option value="">Select facility</option>
                <option value="SEA1">SEA1 - Seattle Fulfillment Center</option>
                <option value="SEA2">SEA2 - Tacoma Distribution Center</option>
                <option value="SEA3">SEA3 - Spokane Sortation Center</option>
                <option value="PDX1">PDX1 - Portland Fulfillment Center</option>
                <option value="PDX2">PDX2 - Portland Distribution Center</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                placeholder="Any specific requirements or locations..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
              />
            </div>
            
            <div className="flex justify-end space-x-2">
              <Button variant="outline" size="sm" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button 
                size="sm" 
                onClick={handleSubmit}
                disabled={!posterType || !facility}
              >
                Submit Request
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};

export const WasteMetricsTooltip: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Waste Management Dashboard</CardTitle>
        <CardDescription>
          Hover over metrics for detailed information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <div className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <RecycleIcon className="w-5 h-5 text-green-600" />
                  <Badge variant="secondary">87%</Badge>
                </div>
                <div className="mt-2">
                  <div className="text-sm font-medium">Recycling Rate</div>
                  <div className="text-xs text-muted-foreground">This Month</div>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-3">
                <h4 className="font-medium">Recycling Rate Details</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Total Waste Generated:</span>
                    <span className="font-medium">1,247 tons</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Recycled Material:</span>
                    <span className="font-medium text-green-600">1,085 tons</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Landfill Waste:</span>
                    <span className="font-medium text-red-600">162 tons</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-sm font-medium">
                    <span>Recycling Rate:</span>
                    <span className="text-green-600">87%</span>
                  </div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="text-sm font-medium text-green-900">
                    Target: 85% ✓
                  </div>
                  <div className="text-xs text-green-700">
                    Exceeding target by 2%
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <div className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <TruckIcon className="w-5 h-5 text-blue-600" />
                  <Badge variant="secondary">12.3</Badge>
                </div>
                <div className="mt-2">
                  <div className="text-sm font-medium">Daily Pickup</div>
                  <div className="text-xs text-muted-foreground">Tons/Day</div>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-3">
                <h4 className="font-medium">Daily Pickup Statistics</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Average Daily Pickup:</span>
                    <span className="font-medium">12.3 tons</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Peak Day (This Month):</span>
                    <span className="font-medium">18.7 tons</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Lowest Day:</span>
                    <span className="font-medium">8.2 tons</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Pickup Frequency:</span>
                    <span className="font-medium">Daily</span>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="text-sm font-medium text-blue-900">
                    Next Pickup: Tomorrow 6:00 AM
                  </div>
                  <div className="text-xs text-blue-700">
                    Estimated load: 11.8 tons
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <div className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <AlertTriangleIcon className="w-5 h-5 text-orange-600" />
                  <Badge variant="outline">0.3</Badge>
                </div>
                <div className="mt-2">
                  <div className="text-sm font-medium">Hazardous Waste</div>
                  <div className="text-xs text-muted-foreground">Tons/Month</div>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-3">
                <h4 className="font-medium">Hazardous Waste Tracking</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Monthly Total:</span>
                    <span className="font-medium">0.3 tons</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Chemical Waste:</span>
                    <span className="font-medium">0.15 tons</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Electronic Waste:</span>
                    <span className="font-medium">0.12 tons</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Other Hazardous:</span>
                    <span className="font-medium">0.03 tons</span>
                  </div>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="text-sm font-medium text-orange-900">
                    ⚠️ Requires Special Handling
                  </div>
                  <div className="text-xs text-orange-700">
                    All hazardous waste properly documented and disposed
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <div className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <FileTextIcon className="w-5 h-5 text-purple-600" />
                  <Badge variant="secondary">24</Badge>
                </div>
                <div className="mt-2">
                  <div className="text-sm font-medium">Active Posters</div>
                  <div className="text-xs text-muted-foreground">Installed</div>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-3">
                <h4 className="font-medium">Poster Installation Status</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Total Installed:</span>
                    <span className="font-medium">24 posters</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Waste Guidelines:</span>
                    <span className="font-medium">8 posters</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Recycling Info:</span>
                    <span className="font-medium">10 posters</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Safety Notices:</span>
                    <span className="font-medium">6 posters</span>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="text-sm font-medium text-purple-900">
                    📋 3 Pending Requests
                  </div>
                  <div className="text-xs text-purple-700">
                    Awaiting installation approval
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
    </Card>
  ),
};

export const DatePickerPopover: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div className="space-y-4">
        <div className="text-sm text-muted-foreground">
          Select a date for waste audit scheduling
        </div>
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-80 justify-start text-left font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? date.toLocaleDateString() : "Select audit date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(selectedDate) => {
                setDate(selectedDate);
                setIsOpen(false);
              }}
              disabled={{ before: new Date() }}
            />
          </PopoverContent>
        </Popover>
        
        {date && (
          <div className="p-3 bg-blue-50 rounded-lg">
            <div className="text-sm font-medium text-blue-900">
              Audit Scheduled
            </div>
            <div className="text-sm text-blue-700">
              {date.toLocaleDateString()} - All facilities will be audited for waste compliance
            </div>
          </div>
        )}
      </div>
    );
  },
};

export const HelpTooltips: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Waste Management Settings</CardTitle>
        <CardDescription>
          Configure your facility's waste management preferences
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Label htmlFor="pickup-frequency">Pickup Frequency</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="sm" className="h-4 w-4 p-0">
                  <HelpCircleIcon className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-medium">Pickup Frequency</h4>
                  <p className="text-sm text-muted-foreground">
                    How often waste pickup occurs at your facility:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Daily:</strong> High-volume facilities (&gt;20 tons/day)</li>
                    <li>• <strong>Every 2 days:</strong> Medium-volume facilities (10-20 tons/day)</li>
                    <li>• <strong>Weekly:</strong> Low-volume facilities (&lt;10 tons/day)</li>
                  </ul>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <select className="w-full border rounded-md px-3 py-2 text-sm" aria-label="Select pickup frequency">
            <option>Daily</option>
            <option>Every 2 days</option>
            <option>Weekly</option>
          </select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Label htmlFor="recycling-target">Recycling Target</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="sm" className="h-4 w-4 p-0">
                  <HelpCircleIcon className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-medium">Recycling Target</h4>
                  <p className="text-sm text-muted-foreground">
                    Set your facility's recycling rate goal:
                  </p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>• <strong>Amazon Standard:</strong> 85%</div>
                    <div>• <strong>Industry Average:</strong> 75%</div>
                    <div>• <strong>Best Practice:</strong> 90%+</div>
                  </div>
                  <div className="p-2 bg-green-50 rounded text-xs text-green-700">
                    💡 Higher targets may require additional sorting equipment
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <Input type="number" placeholder="85" className="w-full" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Label htmlFor="hazardous-handling">Hazardous Waste Handling</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="sm" className="h-4 w-4 p-0">
                  <HelpCircleIcon className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-medium">Hazardous Waste Handling</h4>
                  <p className="text-sm text-muted-foreground">
                    Configure how hazardous waste is processed:
                  </p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>• <strong>On-site Storage:</strong> Temporary holding before pickup</div>
                    <div>• <strong>Immediate Pickup:</strong> Direct disposal service</div>
                    <div>• <strong>Third-party:</strong> External waste management company</div>
                  </div>
                  <div className="p-2 bg-red-50 rounded text-xs text-red-700">
                    ⚠️ All hazardous waste requires special permits and tracking
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <select className="w-full border rounded-md px-3 py-2 text-sm" aria-label="Select disposal method">
            <option>On-site Storage</option>
            <option>Immediate Pickup</option>
            <option>Third-party</option>
          </select>
        </div>
      </CardContent>
    </Card>
  ),
};

export const ResponsiveExample: Story = {
  render: () => (
    <div className="w-full max-w-sm mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Mobile Popover</CardTitle>
          <CardDescription>
            Popover optimized for mobile devices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-full">
                <InfoIcon className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-3">
                <h4 className="font-medium">Facility Information</h4>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Facility:</span>
                    <span className="font-medium ml-2">SEA1</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Status:</span>
                    <Badge variant="secondary" className="ml-2">Active</Badge>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Waste:</span>
                    <span className="font-medium ml-2">45.2 tons/day</span>
                  </div>
                </div>
                <Button size="sm" className="w-full">
                  View Full Report
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </CardContent>
      </Card>
    </div>
  ),
};

export const InteractiveExample: Story = {
  render: () => {
    const [notifications, setNotifications] = React.useState([
      { id: 1, type: "info", message: "Waste pickup scheduled for tomorrow" },
      { id: 2, type: "warning", message: "Recycling rate below target" },
      { id: 3, type: "success", message: "New poster installed successfully" },
    ]);

    const removeNotification = (id: number) => {
      setNotifications(notifications.filter(n => n.id !== id));
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Notification Center</h3>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                <AlertTriangleIcon className="w-4 h-4 mr-2" />
                Notifications ({notifications.length})
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-3">
                <h4 className="font-medium">Recent Notifications</h4>
                {notifications.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No notifications</p>
                ) : (
                  <div className="space-y-2">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="flex items-start justify-between p-2 border rounded">
                        <div className="flex-1">
                          <div className="text-sm">{notification.message}</div>
                          <Badge 
                            variant={
                              notification.type === "success" ? "default" :
                              notification.type === "warning" ? "destructive" :
                              "secondary"
                            }
                            className="text-xs mt-1"
                          >
                            {notification.type}
                          </Badge>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => removeNotification(notification.id)}
                          className="h-6 w-6 p-0"
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
                <Button size="sm" variant="outline" className="w-full">
                  View All Notifications
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Click the notifications button to see recent alerts and updates about your waste management system.
          </p>
        </div>
      </div>
    );
  },
}; 