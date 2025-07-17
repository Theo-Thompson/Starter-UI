import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { ScrollArea } from "./scroll-area";
import { Separator } from "./separator";
import {
  MenuIcon,
  SettingsIcon,
  FileTextIcon,
  BuildingIcon,
  RecycleIcon,
  TruckIcon,
  AlertTriangleIcon,
  CalendarIcon,
  UserIcon,
  ClipboardIcon,
  PlusIcon,
  EditIcon,
  InfoIcon,
} from "lucide-react";

const meta = {
  title: "Design System/Organisms/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# Sheet Component

A slide-out panel component for displaying content and forms in Amazon waste management systems.

## Design Guidelines

### Visual Hierarchy
- **Slide Animation**: Smooth slide-in/out animations from screen edges
- **Backdrop**: Semi-transparent overlay to focus attention
- **Content Area**: Well-organized content with clear sections
- **Action Buttons**: Prominent primary and secondary actions

### Accessibility
- **WCAG 2.1 AA Compliant**: Full keyboard navigation support
- **Screen Reader**: Proper ARIA labels and descriptions
- **Focus Management**: Focus trapping within sheet content
- **Escape Handling**: Close on Escape key press

### Amazon Waste Management Integration
- **Navigation Menus**: Side navigation for mobile and desktop
- **Form Panels**: Slide-out forms for data entry and editing
- **Detail Views**: Detailed information panels for facilities and reports
- **Settings Panels**: Configuration and preference panels

## Technical Implementation

### Core Features
- Multiple slide directions (left, right, top, bottom)
- Controlled and uncontrolled modes
- Backdrop click to close functionality
- Keyboard navigation support
- Responsive design for mobile and desktop

### State Management
- Open/close state handling
- Form state within sheet content
- Integration with external state management
- Event handling for user interactions

### Customization
- Configurable slide direction
- Flexible content composition
- Custom sizing and positioning
- Theme integration with CSS variables
        `,
      },
    },
  },
  argTypes: {
    open: {
      control: { type: "boolean" },
      description: "Whether the sheet is open",
    },
  },
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            This is a sheet with some content inside it.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Sheet content goes here. This is a slide-out panel that can contain forms, information, or other interactive elements.
          </p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const LeftSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Left Side Sheet</SheetTitle>
          <SheetDescription>
            This sheet slides in from the left side.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Content for the left-side sheet. This is commonly used for navigation menus or secondary content.
          </p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const TopSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Top Sheet</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Top Side Sheet</SheetTitle>
          <SheetDescription>
            This sheet slides in from the top.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Content for the top sheet. This is useful for notifications, alerts, or compact information displays.
          </p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const BottomSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Bottom Sheet</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Bottom Side Sheet</SheetTitle>
          <SheetDescription>
            This sheet slides in from the bottom.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Content for the bottom sheet. This is popular on mobile devices for action sheets and quick forms.
          </p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const MobileNavigation: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 border rounded-lg">
        <h3 className="font-medium">Amazon Waste Management</h3>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              <MenuIcon className="w-4 h-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>
                Navigate through the waste management system
              </SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <nav className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <BuildingIcon className="w-4 h-4 mr-2" />
                  Facilities
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <FileTextIcon className="w-4 h-4 mr-2" />
                  Poster Catalog
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <ClipboardIcon className="w-4 h-4 mr-2" />
                  Requests
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <RecycleIcon className="w-4 h-4 mr-2" />
                  Recycling Reports
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <TruckIcon className="w-4 h-4 mr-2" />
                  Pickup Schedule
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <AlertTriangleIcon className="w-4 h-4 mr-2" />
                  Hazardous Waste
                </Button>
                <Separator className="my-2" />
                <Button variant="ghost" className="w-full justify-start">
                  <SettingsIcon className="w-4 h-4 mr-2" />
                  Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <UserIcon className="w-4 h-4 mr-2" />
                  Profile
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <p className="text-sm text-muted-foreground">
        Click the menu button to open the navigation panel
      </p>
    </div>
  ),
};

export const PosterRequestForm: Story = {
  render: () => {
    const [posterType, setPosterType] = React.useState("");
    const [facility, setFacility] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [notes, setNotes] = React.useState("");
    const [isOpen, setIsOpen] = React.useState(false);

    const handleSubmit = () => {
      console.log("Poster request submitted:", { posterType, facility, location, notes });
      setIsOpen(false);
      // Reset form
      setPosterType("");
      setFacility("");
      setLocation("");
      setNotes("");
    };

    return (
      <div className="space-y-4">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Poster Management</CardTitle>
            <CardDescription>
              Submit new poster installation requests
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button className="w-full">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  New Poster Request
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Submit Poster Request</SheetTitle>
                  <SheetDescription>
                    Fill out the form below to request a new waste management poster installation.
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="poster-type">Poster Type</Label>
                    <select
                      id="poster-type"
                      value={posterType}
                      onChange={(e) => setPosterType(e.target.value)}
                      className="w-full border rounded-md px-3 py-2 text-sm"
                      aria-label="Poster Type"
                    >
                      <option value="">Select poster type</option>
                      <option value="general-waste">General Waste Guidelines</option>
                      <option value="recycling">Recycling Best Practices</option>
                      <option value="hazardous">Hazardous Waste Safety</option>
                      <option value="break-room">Break Room Guidelines</option>
                      <option value="warehouse">Warehouse Floor Safety</option>
                      <option value="office">Office Waste Management</option>
                      <option value="cafeteria">Cafeteria Guidelines</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="facility">Target Facility</Label>
                    <select
                      id="facility"
                      value={facility}
                      onChange={(e) => setFacility(e.target.value)}
                      className="w-full border rounded-md px-3 py-2 text-sm"
                      aria-label="Target Facility"
                    >
                      <option value="">Select facility</option>
                      <option value="SEA1">SEA1 - Seattle Fulfillment Center</option>
                      <option value="SEA2">SEA2 - Tacoma Distribution Center</option>
                      <option value="SEA3">SEA3 - Spokane Sortation Center</option>
                      <option value="PDX1">PDX1 - Portland Fulfillment Center</option>
                      <option value="PDX2">PDX2 - Portland Distribution Center</option>
                      <option value="BOI1">BOI1 - Boise Fulfillment Center</option>
                      <option value="BOI2">BOI2 - Boise Distribution Center</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Installation Location</Label>
                    <Input
                      id="location"
                      placeholder="e.g., Main entrance, Break room, Warehouse floor"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any specific requirements, size preferences, or special instructions..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={4}
                    />
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="text-sm font-medium text-blue-900">
                      📋 Request Process
                    </div>
                    <div className="text-xs text-blue-700 mt-1">
                      Your request will be reviewed within 24 hours. Installation typically takes 2-3 business days after approval.
                    </div>
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </SheetClose>
                  <Button 
                    onClick={handleSubmit}
                    disabled={!posterType || !facility || !location}
                  >
                    Submit Request
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const FacilityDetails: Story = {
  render: () => {
    const facilities = [
      { code: "SEA1", name: "Seattle Fulfillment Center", status: "Active", waste: "45.2 tons", recycling: "89%", lastPickup: "2 hours ago" },
      { code: "SEA2", name: "Tacoma Distribution Center", status: "Active", waste: "32.1 tons", recycling: "91%", lastPickup: "4 hours ago" },
      { code: "SEA3", name: "Spokane Sortation Center", status: "Maintenance", waste: "28.7 tons", recycling: "85%", lastPickup: "8 hours ago" },
    ];

    return (
      <div className="space-y-4">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Facility Overview</CardTitle>
            <CardDescription>
              Click on any facility to view detailed information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {facilities.map((facility) => (
                <Sheet key={facility.code}>
                  <SheetTrigger asChild>
                    <div className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <BuildingIcon className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="font-medium text-sm">{facility.code}</div>
                          <div className="text-xs text-muted-foreground">{facility.name}</div>
                        </div>
                      </div>
                      <Badge variant={facility.status === "Active" ? "secondary" : "outline"}>
                        {facility.status}
                      </Badge>
                    </div>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>{facility.code} - {facility.name}</SheetTitle>
                      <SheetDescription>
                        Detailed waste management information and metrics
                      </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-6 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center space-x-2">
                            <TruckIcon className="w-4 h-4 text-gray-600" />
                            <span className="text-sm font-medium">Daily Waste</span>
                          </div>
                          <div className="text-lg font-bold mt-1">{facility.waste}</div>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center space-x-2">
                            <RecycleIcon className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium">Recycling Rate</span>
                          </div>
                          <div className="text-lg font-bold mt-1 text-green-600">{facility.recycling}</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium">Operational Details</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Status:</span>
                            <Badge variant={facility.status === "Active" ? "secondary" : "outline"}>
                              {facility.status}
                            </Badge>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Last Pickup:</span>
                            <span className="font-medium">{facility.lastPickup}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Pickup Schedule:</span>
                            <span className="font-medium">Daily at 6:00 AM</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Hazardous Waste:</span>
                            <span className="font-medium">0.2 tons/month</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium">Recent Activity</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-sm">
                            <span className="text-green-600">✓</span>
                            <span>Waste pickup completed</span>
                            <span className="text-muted-foreground">2 hours ago</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <span className="text-blue-600">ℹ</span>
                            <span>Recycling data updated</span>
                            <span className="text-muted-foreground">4 hours ago</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <span className="text-green-600">✓</span>
                            <span>Poster installation completed</span>
                            <span className="text-muted-foreground">1 day ago</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium">Quick Actions</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm">
                            <FileTextIcon className="w-4 h-4 mr-2" />
                            View Reports
                          </Button>
                          <Button variant="outline" size="sm">
                            <CalendarIcon className="w-4 h-4 mr-2" />
                            Schedule Pickup
                          </Button>
                          <Button variant="outline" size="sm">
                            <ClipboardIcon className="w-4 h-4 mr-2" />
                            New Request
                          </Button>
                          <Button variant="outline" size="sm">
                            <SettingsIcon className="w-4 h-4 mr-2" />
                            Settings
                          </Button>
                        </div>
                      </div>
                    </div>
                    <SheetFooter>
                      <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                      </SheetClose>
                      <Button>
                        <EditIcon className="w-4 h-4 mr-2" />
                        Edit Facility
                      </Button>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const SystemSettings: Story = {
  render: () => {
    const [notifications, setNotifications] = React.useState(true);
    const [autoPickup, setAutoPickup] = React.useState(true);
    const [recyclingTarget, setRecyclingTarget] = React.useState("85");

    return (
      <div className="space-y-4">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>System Configuration</CardTitle>
            <CardDescription>
              Manage your waste management system preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Sheet>
              <SheetTrigger asChild>
                <Button className="w-full">
                  <SettingsIcon className="w-4 h-4 mr-2" />
                  Open Settings
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>System Settings</SheetTitle>
                  <SheetDescription>
                    Configure your waste management system preferences and notifications.
                  </SheetDescription>
                </SheetHeader>
                <ScrollArea className="h-[calc(100vh-200px)] py-4">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-medium">Notifications</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="notifications">Email Notifications</Label>
                          <input
                            id="notifications"
                            type="checkbox"
                            checked={notifications}
                            onChange={(e) => setNotifications(e.target.checked)}
                            className="rounded"
                            aria-label="Email Notifications"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="auto-pickup">Auto-schedule Pickup</Label>
                          <input
                            id="auto-pickup"
                            type="checkbox"
                            checked={autoPickup}
                            onChange={(e) => setAutoPickup(e.target.checked)}
                            className="rounded"
                            aria-label="Auto-schedule Pickup"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-3">
                      <h4 className="font-medium">Recycling Targets</h4>
                      <div className="space-y-2">
                        <Label htmlFor="recycling-target">Default Recycling Target (%)</Label>
                        <Input
                          id="recycling-target"
                          type="number"
                          value={recyclingTarget}
                          onChange={(e) => setRecyclingTarget(e.target.value)}
                          min="0"
                          max="100"
                        />
                        <p className="text-xs text-muted-foreground">
                          Amazon standard is 85%. Industry average is 75%.
                        </p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-3">
                      <h4 className="font-medium">Facility Preferences</h4>
                      <div className="space-y-2">
                        <Label htmlFor="default-facility">Default Facility</Label>
                        <select
                          id="default-facility"
                          className="w-full border rounded-md px-3 py-2 text-sm"
                          aria-label="Default Facility"
                        >
                          <option value="">Select default facility</option>
                          <option value="SEA1">SEA1 - Seattle Fulfillment Center</option>
                          <option value="SEA2">SEA2 - Tacoma Distribution Center</option>
                          <option value="SEA3">SEA3 - Spokane Sortation Center</option>
                        </select>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-3">
                      <h4 className="font-medium">Data & Privacy</h4>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full">
                          <FileTextIcon className="w-4 h-4 mr-2" />
                          Export Data
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          <UserIcon className="w-4 h-4 mr-2" />
                          Privacy Settings
                        </Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-3">
                      <h4 className="font-medium">System Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Version:</span>
                          <span className="font-medium">v2.1.0</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Last Updated:</span>
                          <span className="font-medium">March 15, 2024</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Database:</span>
                          <Badge variant="secondary">Connected</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </SheetClose>
                  <Button>Save Changes</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const QuickActions: Story = {
  render: () => (
    <div className="space-y-4">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Commonly used actions for waste management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <ClipboardIcon className="w-4 h-4 mr-2" />
                  New Request
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Quick Request</SheetTitle>
                  <SheetDescription>
                    Submit a quick waste management request
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-20 flex-col">
                      <FileTextIcon className="w-6 h-6 mb-2" />
                      Poster Request
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <TruckIcon className="w-6 h-6 mb-2" />
                      Pickup Request
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <AlertTriangleIcon className="w-6 h-6 mb-2" />
                      Hazardous Waste
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <InfoIcon className="w-6 h-6 mb-2" />
                      General Inquiry
                    </Button>
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline">Close</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <FileTextIcon className="w-4 h-4 mr-2" />
                  Reports
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Quick Reports</SheetTitle>
                  <SheetDescription>
                    Generate common waste management reports
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-20 flex-col">
                      <RecycleIcon className="w-6 h-6 mb-2" />
                      Recycling Report
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <TruckIcon className="w-6 h-6 mb-2" />
                      Pickup Summary
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <BuildingIcon className="w-6 h-6 mb-2" />
                      Facility Report
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <CalendarIcon className="w-6 h-6 mb-2" />
                      Monthly Summary
                    </Button>
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline">Close</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

export const ResponsiveExample: Story = {
  render: () => (
    <div className="w-full max-w-sm mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Mobile Sheet</CardTitle>
          <CardDescription>
            Sheet component optimized for mobile devices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="w-full">
                <MenuIcon className="w-4 h-4 mr-2" />
                Open Mobile Sheet
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>Mobile Actions</SheetTitle>
                <SheetDescription>
                  Quick actions optimized for mobile use
                </SheetDescription>
              </SheetHeader>
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-1 gap-3">
                  <Button variant="outline" className="justify-start">
                    <FileTextIcon className="w-4 h-4 mr-2" />
                    View Posters
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <ClipboardIcon className="w-4 h-4 mr-2" />
                    New Request
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <BuildingIcon className="w-4 h-4 mr-2" />
                    Facilities
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <RecycleIcon className="w-4 h-4 mr-2" />
                    Recycling Data
                  </Button>
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline" className="w-full">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>
    </div>
  ),
};

export const InteractiveExample: Story = {
  render: () => {
    const [selectedFacility, setSelectedFacility] = React.useState<string | null>(null);
    const [formData, setFormData] = React.useState({
      name: "",
      email: "",
      message: "",
    });

    const facilities = ["SEA1", "SEA2", "SEA3", "PDX1", "PDX2"];

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Interactive Sheet Demo</h3>
          <div className="flex space-x-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <BuildingIcon className="w-4 h-4 mr-2" />
                  Select Facility
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Select Facility</SheetTitle>
                  <SheetDescription>
                    Choose a facility to work with
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-2 py-4">
                  {facilities.map((facility) => (
                    <Button
                      key={facility}
                      variant={selectedFacility === facility ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setSelectedFacility(facility)}
                    >
                      <BuildingIcon className="w-4 h-4 mr-2" />
                      {facility}
                    </Button>
                  ))}
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline">Close</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <UserIcon className="w-4 h-4 mr-2" />
                  Contact Form
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Contact Support</SheetTitle>
                  <SheetDescription>
                    Send a message to the waste management team
                  </SheetDescription>
                </SheetHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your issue or question..."
                      rows={4}
                    />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </SheetClose>
                  <Button disabled={!formData.name || !formData.email || !formData.message}>
                    Send Message
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="text-sm">
            <strong>Selected Facility:</strong> {selectedFacility || "None"}
          </div>
          <div className="text-sm mt-1">
            <strong>Form Data:</strong> {JSON.stringify(formData, null, 2)}
          </div>
        </div>
      </div>
    );
  },
}; 

// Multi-Step Form Sheet
export const MultiStepForm: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
      facility: '',
      requestType: '',
      priority: 'normal',
      description: '',
      contactInfo: {
        name: '',
        email: '',
        phone: ''
      }
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    
    const validateStep = (step: number) => {
      const newErrors: Record<string, string> = {};
      
      switch (step) {
        case 1:
          if (!formData.facility) newErrors.facility = 'Facility is required';
          if (!formData.requestType) newErrors.requestType = 'Request type is required';
          break;
        case 2:
          if (!formData.description) newErrors.description = 'Description is required';
          break;
        case 3:
          if (!formData.contactInfo.name) newErrors.contactName = 'Name is required';
          if (!formData.contactInfo.email) newErrors.contactEmail = 'Email is required';
          break;
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
    
    const handleNext = () => {
      if (validateStep(currentStep)) {
        setCurrentStep(prev => prev + 1);
      }
    };
    
    const handlePrev = () => {
      setCurrentStep(prev => prev - 1);
    };
    
    const handleSubmit = () => {
      if (validateStep(currentStep)) {
        setIsOpen(false);
        setCurrentStep(1);
        setFormData({
          facility: '',
          requestType: '',
          priority: 'normal',
          description: '',
          contactInfo: { name: '', email: '', phone: '' }
        });
        setErrors({});
      }
    };
    
    const renderStep = () => {
      switch (currentStep) {
        case 1:
          return (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="facility">Facility Location</Label>
                <Input
                  id="facility"
                  value={formData.facility}
                  onChange={(e) => setFormData(prev => ({ ...prev, facility: e.target.value }))}
                  placeholder="Select facility"
                  className={errors.facility ? 'border-red-500' : ''}
                />
                {errors.facility && <p className="text-sm text-red-500">{errors.facility}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="requestType">Request Type</Label>
                <select
                  id="requestType"
                  value={formData.requestType}
                  onChange={(e) => setFormData(prev => ({ ...prev, requestType: e.target.value }))}
                  className={`w-full p-2 border rounded-md ${errors.requestType ? 'border-red-500' : ''}`}
                  aria-label="Request Type"
                >
                  <option value="">Select type</option>
                  <option value="waste-poster">Waste Poster</option>
                  <option value="training">Training Material</option>
                  <option value="consultation">Consultation</option>
                </select>
                {errors.requestType && <p className="text-sm text-red-500">{errors.requestType}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <select
                  id="priority"
                  value={formData.priority}
                  onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value }))}
                  className="w-full p-2 border rounded-md"
                  aria-label="Priority Level"
                >
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
            </div>
          );
        case 2:
          return (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe your request in detail..."
                  rows={6}
                  className={errors.description ? 'border-red-500' : ''}
                />
                {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
              </div>
            </div>
          );
        case 3:
          return (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contactName">Full Name</Label>
                <Input
                  id="contactName"
                  value={formData.contactInfo.name}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    contactInfo: { ...prev.contactInfo, name: e.target.value }
                  }))}
                  placeholder="Your full name"
                  className={errors.contactName ? 'border-red-500' : ''}
                />
                {errors.contactName && <p className="text-sm text-red-500">{errors.contactName}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Email</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={formData.contactInfo.email}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    contactInfo: { ...prev.contactInfo, email: e.target.value }
                  }))}
                  placeholder="your.email@example.com"
                  className={errors.contactEmail ? 'border-red-500' : ''}
                />
                {errors.contactEmail && <p className="text-sm text-red-500">{errors.contactEmail}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contactPhone">Phone (Optional)</Label>
                <Input
                  id="contactPhone"
                  type="tel"
                  value={formData.contactInfo.phone}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    contactInfo: { ...prev.contactInfo, phone: e.target.value }
                  }))}
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
          );
        default:
          return null;
      }
    };
    
    return (
      <div className="space-y-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button>Multi-Step Request</Button>
          </SheetTrigger>
          <SheetContent className="sm:max-w-md">
            <SheetHeader>
              <SheetTitle>Request Form - Step {currentStep} of 3</SheetTitle>
              <SheetDescription>
                {currentStep === 1 && "Basic request information"}
                {currentStep === 2 && "Detailed description"}
                {currentStep === 3 && "Contact information"}
              </SheetDescription>
            </SheetHeader>
            
            {/* Progress indicator */}
            <div className="flex space-x-2 mb-6">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`h-2 flex-1 rounded ${
                    step <= currentStep ? 'bg-primary' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            
            <ScrollArea className="h-96">
              {renderStep()}
            </ScrollArea>
            
            <SheetFooter className="mt-6">
              <div className="flex justify-between w-full">
                <Button 
                  variant="outline" 
                  onClick={currentStep === 1 ? () => setIsOpen(false) : handlePrev}
                >
                  {currentStep === 1 ? 'Cancel' : 'Previous'}
                </Button>
                
                <Button 
                  onClick={currentStep === 3 ? handleSubmit : handleNext}
                >
                  {currentStep === 3 ? 'Submit' : 'Next'}
                </Button>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    );
  },
};

// Different Slide Directions
export const SlideDirections: Story = {
  render: () => {
    const [openSheets, setOpenSheets] = useState<Record<string, boolean>>({});
    
    const toggleSheet = (side: string) => {
      setOpenSheets(prev => ({
        ...prev,
        [side]: !prev[side]
      }));
    };
    
    const sides = [
      { key: 'left', label: 'Left', side: 'left' as const },
      { key: 'right', label: 'Right', side: 'right' as const },
      { key: 'top', label: 'Top', side: 'top' as const },
      { key: 'bottom', label: 'Bottom', side: 'bottom' as const }
    ];
    
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {sides.map(({ key, label, side }) => (
            <div key={key}>
              <Sheet open={openSheets[key]} onOpenChange={() => toggleSheet(key)}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    {label} Sheet
                  </Button>
                </SheetTrigger>
                <SheetContent side={side}>
                  <SheetHeader>
                    <SheetTitle>{label} Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet slides in from the {label.toLowerCase()} side.
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="py-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      This demonstrates the {label.toLowerCase()} slide direction for the sheet component.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Features:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Smooth slide animation</li>
                          <li>• Backdrop overlay</li>
                          <li>• Keyboard navigation</li>
                          <li>• Click outside to close</li>
                        </ul>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        onClick={() => toggleSheet(key)}
                        className="w-full"
                      >
                        Close Sheet
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="secondary" 
            onClick={() => setOpenSheets({})}
            className="mt-4"
          >
            Close All Sheets
          </Button>
        </div>
      </div>
    );
  },
};

// Dynamic Content Loading
export const DynamicLoading: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loadingState, setLoadingState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [content, setContent] = useState<any>(null);
    
    const loadContent = async (contentType: string) => {
      setLoadingState('loading');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (Math.random() < 0.8) {
        setContent({
          type: contentType,
          data: `Loaded ${contentType} content`,
          timestamp: new Date().toISOString()
        });
        setLoadingState('success');
      } else {
        setLoadingState('error');
      }
    };
    
    const resetContent = () => {
      setContent(null);
      setLoadingState('idle');
    };
    
    return (
      <div className="space-y-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button>Dynamic Content Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Dynamic Content Loader</SheetTitle>
              <SheetDescription>
                Test different loading states and content types
              </SheetDescription>
            </SheetHeader>
            
            <div className="space-y-4 mt-6">
              {loadingState === 'idle' && (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Select content type to load:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <Button 
                      variant="outline" 
                      onClick={() => loadContent('reports')}
                      size="sm"
                    >
                      Reports
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => loadContent('analytics')}
                      size="sm"
                    >
                      Analytics
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => loadContent('settings')}
                      size="sm"
                    >
                      Settings
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => loadContent('users')}
                      size="sm"
                    >
                      Users
                    </Button>
                  </div>
                </div>
              )}
              
              {loadingState === 'loading' && (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-sm text-muted-foreground">Loading content...</p>
                </div>
              )}
              
              {loadingState === 'success' && content && (
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Content Loaded</h4>
                    <p className="text-sm text-green-700">
                      Type: {content.type}
                    </p>
                    <p className="text-sm text-green-700">
                      Data: {content.data}
                    </p>
                    <p className="text-sm text-green-700">
                      Loaded at: {new Date(content.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    onClick={resetContent}
                    className="w-full"
                  >
                    Load Different Content
                  </Button>
                </div>
              )}
              
              {loadingState === 'error' && (
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Loading Failed</h4>
                    <p className="text-sm text-red-700">
                      Failed to load content. Please try again.
                    </p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    onClick={resetContent}
                    className="w-full"
                  >
                    Try Again
                  </Button>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    );
  },
};

// Nested Sheets
export const NestedSheets: Story = {
  render: () => {
    const [primaryOpen, setPrimaryOpen] = useState(false);
    const [secondaryOpen, setSecondaryOpen] = useState(false);
    const [tertiaryOpen, setTertiaryOpen] = useState(false);
    
    return (
      <div className="space-y-4">
        <Sheet open={primaryOpen} onOpenChange={setPrimaryOpen}>
          <SheetTrigger asChild>
            <Button>Open Primary Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Primary Sheet</SheetTitle>
              <SheetDescription>
                This is the first level sheet that can open another sheet
              </SheetDescription>
            </SheetHeader>
            
            <div className="space-y-4 mt-6">
              <p className="text-sm text-muted-foreground">
                This demonstrates nested sheet functionality. Click the button below to open a secondary sheet.
              </p>
              
              <Sheet open={secondaryOpen} onOpenChange={setSecondaryOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Open Secondary Sheet
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Secondary Sheet</SheetTitle>
                    <SheetDescription>
                      This secondary sheet slides from the left
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="space-y-4 mt-6">
                    <p className="text-sm text-muted-foreground">
                      This is the second level. You can open one more level.
                    </p>
                    
                    <Sheet open={tertiaryOpen} onOpenChange={setTertiaryOpen}>
                      <SheetTrigger asChild>
                        <Button variant="outline" className="w-full">
                          Open Tertiary Sheet
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="top">
                        <SheetHeader>
                          <SheetTitle>Tertiary Sheet</SheetTitle>
                          <SheetDescription>
                            This tertiary sheet slides from the top
                          </SheetDescription>
                        </SheetHeader>
                        
                        <div className="space-y-4 mt-6">
                          <p className="text-sm text-muted-foreground">
                            This is the third level. This demonstrates the layering of multiple sheets.
                          </p>
                          
                          <Button 
                            variant="outline" 
                            onClick={() => {
                              setTertiaryOpen(false);
                              setSecondaryOpen(false);
                              setPrimaryOpen(false);
                            }}
                            className="w-full"
                          >
                            Close All Sheets
                          </Button>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </SheetContent>
              </Sheet>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Sheet States:</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Primary:</span>
                    <Badge variant={primaryOpen ? 'default' : 'secondary'}>
                      {primaryOpen ? 'Open' : 'Closed'}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Secondary:</span>
                    <Badge variant={secondaryOpen ? 'default' : 'secondary'}>
                      {secondaryOpen ? 'Open' : 'Closed'}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Tertiary:</span>
                    <Badge variant={tertiaryOpen ? 'default' : 'secondary'}>
                      {tertiaryOpen ? 'Open' : 'Closed'}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    );
  },
};

// Form Validation and Error Handling
export const FormValidation: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
      title: '',
      category: '',
      description: '',
      urgency: 'medium',
      attachments: [] as File[]
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    
    const validateForm = () => {
      const newErrors: Record<string, string> = {};
      
      if (!formData.title.trim()) {
        newErrors.title = 'Title is required';
      } else if (formData.title.length < 3) {
        newErrors.title = 'Title must be at least 3 characters';
      }
      
      if (!formData.category) {
        newErrors.category = 'Category is required';
      }
      
      if (!formData.description.trim()) {
        newErrors.description = 'Description is required';
      } else if (formData.description.length < 10) {
        newErrors.description = 'Description must be at least 10 characters';
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = async () => {
      if (!validateForm()) return;
      
      setIsSubmitting(true);
      setSubmitStatus('idle');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (Math.random() < 0.7) {
        setSubmitStatus('success');
        setTimeout(() => {
          setIsOpen(false);
          setFormData({
            title: '',
            category: '',
            description: '',
            urgency: 'medium',
            attachments: []
          });
          setErrors({});
          setSubmitStatus('idle');
        }, 1500);
      } else {
        setSubmitStatus('error');
      }
      
      setIsSubmitting(false);
    };
    
    return (
      <div className="space-y-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button>Create Request (Validated)</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Create New Request</SheetTitle>
              <SheetDescription>
                Fill out the form below to create a new request
              </SheetDescription>
            </SheetHeader>
            
            <ScrollArea className="h-96 mt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Request Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter request title"
                    className={errors.title ? 'border-red-500' : ''}
                  />
                  {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className={`w-full p-2 border rounded-md ${errors.category ? 'border-red-500' : ''}`}
                    aria-label="Request Category"
                  >
                    <option value="">Select category</option>
                    <option value="waste-management">Waste Management</option>
                    <option value="training">Training</option>
                    <option value="consultation">Consultation</option>
                    <option value="equipment">Equipment</option>
                  </select>
                  {errors.category && <p className="text-sm text-red-500">{errors.category}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency Level</Label>
                  <select
                    id="urgency"
                    value={formData.urgency}
                    onChange={(e) => setFormData(prev => ({ ...prev, urgency: e.target.value }))}
                    className="w-full p-2 border rounded-md"
                    aria-label="Urgency Level"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe your request in detail..."
                    rows={4}
                    className={errors.description ? 'border-red-500' : ''}
                  />
                  {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
                </div>
                
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-600">
                      ✅ Request submitted successfully!
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">
                      ❌ Failed to submit request. Please try again.
                    </p>
                  </div>
                )}
              </div>
            </ScrollArea>
            
            <SheetFooter className="mt-6">
              <Button 
                variant="outline" 
                onClick={() => setIsOpen(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleSubmit}
                disabled={isSubmitting || submitStatus === 'success'}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    );
  },
}; 