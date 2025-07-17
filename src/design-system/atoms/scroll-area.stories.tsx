import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollArea } from "./scroll-area";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { Button } from "./button";
import { Separator } from "./separator";
import {
  FileTextIcon,
  BuildingIcon,
  RecycleIcon,
  TruckIcon,
  AlertTriangleIcon,
  ClipboardIcon,
} from "lucide-react";

const meta: Meta<typeof ScrollArea> = {
  title: 'Design System/Organisms/Scroll Area',
  component: ScrollArea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# Scroll Area Component

A custom scrollable area component with styled scrollbars for Amazon waste management systems.

## Design Guidelines

### Visual Hierarchy
- **Content Area**: Clean, uncluttered scrollable content
- **Scrollbar**: Subtle, styled scrollbar that doesn't interfere with content
- **Focus States**: Clear focus indicators for keyboard navigation
- **Smooth Scrolling**: Fluid scrolling experience across devices

### Accessibility
- **WCAG 2.1 AA Compliant**: Full keyboard navigation support
- **Screen Reader**: Proper ARIA labels and scroll announcements
- **Focus Management**: Keyboard scrolling with arrow keys and page keys
- **High Contrast**: Visible scrollbars in high contrast mode

### Amazon Waste Management Integration
- **Data Lists**: Scrollable lists of facilities, reports, and metrics
- **Log Viewers**: Scroll through system logs and audit trails
- **Content Panels**: Scrollable content areas in dashboards
- **Mobile Optimization**: Touch-friendly scrolling on mobile devices

## Technical Implementation

### Core Features
- Custom styled scrollbars with theme integration
- Smooth scrolling behavior
- Responsive design for various screen sizes
- Keyboard navigation support
- Touch and mouse wheel scrolling

### State Management
- Scroll position tracking
- Scroll event handling
- Integration with virtualization libraries
- Performance optimization for large datasets

### Customization
- Configurable scrollbar appearance
- Flexible height and width sizing
- Theme integration with CSS variables
- Custom scroll behavior options
        `,
      },
    },
  },
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border p-4">
      <div className="space-y-2">
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const WithContent: Story = {
  render: () => (
    <ScrollArea className="h-96 w-80 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        <div className="space-y-1">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i}>
              <div className="text-sm">v1.2.{i}</div>
              <Separator className="my-1" />
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
};

export const FacilityList: Story = {
  render: () => {
    const facilities = [
      { code: "SEA1", name: "Seattle Fulfillment Center", status: "Active", waste: "45.2 tons", recycling: "89%" },
      { code: "SEA2", name: "Tacoma Distribution Center", status: "Active", waste: "32.1 tons", recycling: "91%" },
      { code: "SEA3", name: "Spokane Sortation Center", status: "Maintenance", waste: "28.7 tons", recycling: "85%" },
      { code: "PDX1", name: "Portland Fulfillment Center", status: "Active", waste: "41.8 tons", recycling: "87%" },
      { code: "PDX2", name: "Portland Distribution Center", status: "Active", waste: "35.4 tons", recycling: "92%" },
      { code: "BOI1", name: "Boise Fulfillment Center", status: "Active", waste: "38.9 tons", recycling: "88%" },
      { code: "BOI2", name: "Boise Distribution Center", status: "Active", waste: "29.3 tons", recycling: "90%" },
      { code: "SLC1", name: "Salt Lake City Fulfillment", status: "Active", waste: "42.1 tons", recycling: "86%" },
      { code: "SLC2", name: "Salt Lake City Distribution", status: "Active", waste: "31.7 tons", recycling: "89%" },
      { code: "DEN1", name: "Denver Fulfillment Center", status: "Active", waste: "47.3 tons", recycling: "84%" },
      { code: "DEN2", name: "Denver Distribution Center", status: "Active", waste: "33.8 tons", recycling: "91%" },
      { code: "PHX1", name: "Phoenix Fulfillment Center", status: "Active", waste: "44.6 tons", recycling: "87%" },
      { code: "PHX2", name: "Phoenix Distribution Center", status: "Active", waste: "36.2 tons", recycling: "90%" },
      { code: "LAS1", name: "Las Vegas Fulfillment Center", status: "Active", waste: "39.4 tons", recycling: "88%" },
      { code: "LAS2", name: "Las Vegas Distribution Center", status: "Active", waste: "27.9 tons", recycling: "93%" },
    ];

    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Facility Management</CardTitle>
          <CardDescription>
            Scroll through all Amazon facilities and their waste metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-80">
            <div className="space-y-3">
              {facilities.map((facility) => (
                <div key={facility.code} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <BuildingIcon className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-sm">{facility.code}</div>
                      <div className="text-xs text-muted-foreground">{facility.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={facility.status === "Active" ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {facility.status}
                    </Badge>
                    <div className="text-xs text-muted-foreground mt-1">
                      {facility.waste} • {facility.recycling}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    );
  },
};

export const PosterCatalog: Story = {
  render: () => {
    const posters = [
      { id: "WG-001", title: "General Waste Guidelines", category: "General", version: "v2.1", status: "Active" },
      { id: "RC-001", title: "Recycling Best Practices", category: "Recycling", version: "v1.8", status: "Active" },
      { id: "HW-001", title: "Hazardous Waste Safety", category: "Safety", version: "v3.0", status: "Critical" },
      { id: "BR-001", title: "Break Room Guidelines", category: "General", version: "v1.5", status: "Active" },
      { id: "WH-001", title: "Warehouse Floor Safety", category: "Safety", version: "v2.3", status: "Active" },
      { id: "WG-002", title: "Waste Reduction Tips", category: "General", version: "v1.2", status: "Active" },
      { id: "RC-002", title: "Cardboard Recycling", category: "Recycling", version: "v2.0", status: "Active" },
      { id: "RC-003", title: "Plastic Sorting Guide", category: "Recycling", version: "v1.7", status: "Active" },
      { id: "HW-002", title: "Battery Disposal", category: "Safety", version: "v2.1", status: "Critical" },
      { id: "HW-003", title: "Chemical Waste Handling", category: "Safety", version: "v1.9", status: "Critical" },
      { id: "WG-003", title: "Office Waste Management", category: "General", version: "v1.4", status: "Active" },
      { id: "BR-002", title: "Cafeteria Guidelines", category: "General", version: "v1.1", status: "Active" },
      { id: "WH-002", title: "Loading Dock Safety", category: "Safety", version: "v2.2", status: "Active" },
      { id: "RC-004", title: "Metal Recycling", category: "Recycling", version: "v1.6", status: "Active" },
      { id: "WG-004", title: "Seasonal Waste Tips", category: "General", version: "v1.0", status: "Draft" },
    ];

    return (
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Waste Management Poster Catalog</CardTitle>
          <CardDescription>
            Browse through all available waste education materials
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96">
            <div className="space-y-2">
              {posters.map((poster) => (
                <div key={poster.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <FileTextIcon className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="font-medium text-sm">{poster.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {poster.id} • {poster.category} • {poster.version}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={
                        poster.status === "Critical" ? "destructive" :
                        poster.status === "Draft" ? "outline" :
                        "secondary"
                      }
                      className="text-xs"
                    >
                      {poster.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    );
  },
};

export const ActivityLog: Story = {
  render: () => {
    const activities = [
      { id: 1, type: "info", user: "John Smith", action: "Created new poster request", target: "WG-005", time: "2 minutes ago" },
      { id: 2, type: "success", user: "Sarah Johnson", action: "Approved poster installation", target: "RC-001", time: "5 minutes ago" },
      { id: 3, type: "warning", user: "Mike Davis", action: "Updated recycling target", target: "SEA1", time: "12 minutes ago" },
      { id: 4, type: "info", user: "Lisa Chen", action: "Scheduled waste pickup", target: "SEA2", time: "18 minutes ago" },
      { id: 5, type: "error", user: "System", action: "Failed to process waste data", target: "SEA3", time: "25 minutes ago" },
      { id: 6, type: "success", user: "Tom Wilson", action: "Completed facility audit", target: "PDX1", time: "32 minutes ago" },
      { id: 7, type: "info", user: "Emma Brown", action: "Generated monthly report", target: "All Facilities", time: "45 minutes ago" },
      { id: 8, type: "warning", user: "David Lee", action: "Hazardous waste threshold exceeded", target: "SEA1", time: "1 hour ago" },
      { id: 9, type: "success", user: "Amy Taylor", action: "Poster installation completed", target: "HW-001", time: "1 hour ago" },
      { id: 10, type: "info", user: "Chris Anderson", action: "Updated facility information", target: "SEA2", time: "2 hours ago" },
      { id: 11, type: "success", user: "Rachel Green", action: "Recycling rate target achieved", target: "PDX2", time: "3 hours ago" },
      { id: 12, type: "warning", user: "System", action: "Maintenance window scheduled", target: "SEA3", time: "4 hours ago" },
      { id: 13, type: "info", user: "Kevin White", action: "New user account created", target: "User Management", time: "5 hours ago" },
      { id: 14, type: "success", user: "Jennifer Martinez", action: "Waste pickup completed", target: "All Facilities", time: "6 hours ago" },
      { id: 15, type: "info", user: "Ryan Clark", action: "System backup completed", target: "System", time: "8 hours ago" },
    ];

    const getActivityIcon = (type: string) => {
      switch (type) {
        case "success": return <span className="text-green-600">✓</span>;
        case "warning": return <span className="text-yellow-600">⚠</span>;
        case "error": return <span className="text-red-600">✗</span>;
        default: return <span className="text-blue-600">ℹ</span>;
      }
    };

    return (
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>System Activity Log</CardTitle>
          <CardDescription>
            Real-time activity feed for waste management system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96">
            <div className="space-y-3">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                  <div className="flex-shrink-0 mt-1">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm">
                      <span className="font-medium">{activity.user}</span>
                      <span className="text-muted-foreground"> {activity.action}</span>
                      {activity.target && (
                        <span className="font-medium"> {activity.target}</span>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    );
  },
};

export const WasteMetricsDashboard: Story = {
  render: () => {
    const metrics = [
      { facility: "SEA1", waste: 45.2, recycling: 89, hazardous: 0.3, pickup: "2 hours ago" },
      { facility: "SEA2", waste: 32.1, recycling: 91, hazardous: 0.2, pickup: "4 hours ago" },
      { facility: "SEA3", waste: 28.7, recycling: 85, hazardous: 0.4, pickup: "6 hours ago" },
      { facility: "PDX1", waste: 41.8, recycling: 87, hazardous: 0.1, pickup: "1 hour ago" },
      { facility: "PDX2", waste: 35.4, recycling: 92, hazardous: 0.2, pickup: "3 hours ago" },
      { facility: "BOI1", waste: 38.9, recycling: 88, hazardous: 0.3, pickup: "5 hours ago" },
      { facility: "BOI2", waste: 29.3, recycling: 90, hazardous: 0.1, pickup: "7 hours ago" },
      { facility: "SLC1", waste: 42.1, recycling: 86, hazardous: 0.2, pickup: "2 hours ago" },
      { facility: "SLC2", waste: 31.7, recycling: 89, hazardous: 0.3, pickup: "4 hours ago" },
      { facility: "DEN1", waste: 47.3, recycling: 84, hazardous: 0.4, pickup: "6 hours ago" },
      { facility: "DEN2", waste: 33.8, recycling: 91, hazardous: 0.1, pickup: "8 hours ago" },
      { facility: "PHX1", waste: 44.6, recycling: 87, hazardous: 0.2, pickup: "1 hour ago" },
      { facility: "PHX2", waste: 36.2, recycling: 90, hazardous: 0.3, pickup: "3 hours ago" },
      { facility: "LAS1", waste: 39.4, recycling: 88, hazardous: 0.1, pickup: "5 hours ago" },
      { facility: "LAS2", waste: 27.9, recycling: 93, hazardous: 0.2, pickup: "7 hours ago" },
    ];

    return (
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Real-time Waste Metrics</CardTitle>
          <CardDescription>
            Live dashboard showing waste generation and recycling data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96">
            <div className="space-y-3">
              {metrics.map((metric) => (
                <div key={metric.facility} className="grid grid-cols-5 gap-4 p-3 border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <BuildingIcon className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-sm">{metric.facility}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TruckIcon className="w-4 h-4 text-gray-600" />
                    <span className="text-sm">{metric.waste} tons</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RecycleIcon className="w-4 h-4 text-green-600" />
                    <span className="text-sm">{metric.recycling}%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertTriangleIcon className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">{metric.hazardous} tons</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric.pickup}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    );
  },
};

export const RequestHistory: Story = {
  render: () => {
    const requests = [
      { id: "REQ-001", type: "Recycling Guidelines", facility: "SEA1", status: "Approved", date: "2024-03-15", user: "John Smith" },
      { id: "REQ-002", type: "Hazardous Waste Safety", facility: "SEA2", status: "Pending", date: "2024-03-14", user: "Sarah Johnson" },
      { id: "REQ-003", type: "General Waste Guidelines", facility: "SEA3", status: "Installed", date: "2024-03-13", user: "Mike Davis" },
      { id: "REQ-004", type: "Waste Reduction Tips", facility: "PDX1", status: "Approved", date: "2024-03-12", user: "Lisa Chen" },
      { id: "REQ-005", type: "Break Room Guidelines", facility: "PDX2", status: "Rejected", date: "2024-03-11", user: "Tom Wilson" },
      { id: "REQ-006", type: "Warehouse Safety", facility: "SEA1", status: "Installed", date: "2024-03-10", user: "Emma Brown" },
      { id: "REQ-007", type: "Recycling Best Practices", facility: "SEA2", status: "Pending", date: "2024-03-09", user: "David Lee" },
      { id: "REQ-008", type: "Hazardous Material Handling", facility: "SEA3", status: "Approved", date: "2024-03-08", user: "Amy Taylor" },
      { id: "REQ-009", type: "Office Waste Management", facility: "BOI1", status: "Installed", date: "2024-03-07", user: "Chris Anderson" },
      { id: "REQ-010", type: "Cafeteria Guidelines", facility: "BOI2", status: "Pending", date: "2024-03-06", user: "Rachel Green" },
      { id: "REQ-011", type: "Loading Dock Safety", facility: "SLC1", status: "Approved", date: "2024-03-05", user: "Kevin White" },
      { id: "REQ-012", type: "Metal Recycling", facility: "SLC2", status: "Installed", date: "2024-03-04", user: "Jennifer Martinez" },
      { id: "REQ-013", type: "Seasonal Waste Tips", facility: "DEN1", status: "Draft", date: "2024-03-03", user: "Ryan Clark" },
      { id: "REQ-014", type: "Cardboard Recycling", facility: "DEN2", status: "Approved", date: "2024-03-02", user: "Jessica Adams" },
      { id: "REQ-015", type: "Plastic Sorting Guide", facility: "PHX1", status: "Installed", date: "2024-03-01", user: "Michael Brown" },
    ];

    return (
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Poster Request History</CardTitle>
          <CardDescription>
            Complete history of all poster installation requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96">
            <div className="space-y-2">
              {requests.map((request) => (
                <div key={request.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <ClipboardIcon className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="font-medium text-sm">{request.type}</div>
                      <div className="text-xs text-muted-foreground">
                        {request.id} • {request.facility} • {request.user}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-xs text-muted-foreground">
                      {request.date}
                    </div>
                    <Badge 
                      variant={
                        request.status === "Installed" ? "default" :
                        request.status === "Approved" ? "secondary" :
                        request.status === "Pending" ? "outline" :
                        request.status === "Draft" ? "outline" :
                        "destructive"
                      }
                      className="text-xs"
                    >
                      {request.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    );
  },
};

export const ResponsiveExample: Story = {
  render: () => (
    <div className="w-full max-w-sm mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Mobile Scroll Area</CardTitle>
          <CardDescription>
            Scroll area optimized for mobile devices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-64">
            <div className="space-y-2">
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="flex items-center justify-between p-2 border rounded">
                  <div className="flex items-center space-x-2">
                    <FileTextIcon className="w-4 h-4 text-purple-600" />
                    <span className="text-sm">Item {i + 1}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Active
                  </Badge>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  ),
};

export const InteractiveExample: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = React.useState<number[]>([]);
    const [filter, setFilter] = React.useState("");

    const items = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `Waste Item ${i + 1}`,
      type: ["General", "Recycling", "Hazardous"][i % 3],
      facility: ["SEA1", "SEA2", "SEA3", "PDX1", "PDX2"][i % 5],
    }));

    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.type.toLowerCase().includes(filter.toLowerCase()) ||
      item.facility.toLowerCase().includes(filter.toLowerCase())
    );

    const toggleItem = (id: number) => {
      setSelectedItems(prev =>
        prev.includes(id)
          ? prev.filter(item => item !== id)
          : [...prev, id]
      );
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Filter items..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded px-3 py-2 text-sm"
          />
          <div className="text-sm text-muted-foreground">
            {selectedItems.length} selected
          </div>
        </div>
        
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Interactive Item List</CardTitle>
            <CardDescription>
              Scroll through and select items with filtering
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-80">
              <div className="space-y-2">
                {filteredItems.map((item) => (
                  <div 
                    key={item.id} 
                    className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                      selectedItems.includes(item.id) ? 'bg-blue-50 border-blue-300' : ''
                    }`}
                    onClick={() => toggleItem(item.id)}
                  >
                    <div className="flex items-center space-x-3">
                                             <input
                         type="checkbox"
                         checked={selectedItems.includes(item.id)}
                         onChange={() => toggleItem(item.id)}
                         className="rounded"
                         aria-label={`Select ${item.name}`}
                       />
                      <div>
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {item.type} • {item.facility}
                        </div>
                      </div>
                    </div>
                    <Badge 
                      variant={
                        item.type === "Hazardous" ? "destructive" :
                        item.type === "Recycling" ? "secondary" :
                        "outline"
                      }
                      className="text-xs"
                    >
                      {item.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
        
        {selectedItems.length > 0 && (
          <div className="p-3 bg-blue-50 rounded-lg">
            <div className="text-sm font-medium text-blue-900">
              {selectedItems.length} items selected
            </div>
            <div className="text-sm text-blue-700 mt-1">
              Selected items: {selectedItems.join(", ")}
            </div>
          </div>
        )}
      </div>
    );
  },
}; 