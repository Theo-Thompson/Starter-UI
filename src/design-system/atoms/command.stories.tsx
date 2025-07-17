import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./command";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import {
  SearchIcon,
  FileTextIcon,
  CalendarIcon,
  SettingsIcon,
  UserIcon,
  RecycleIcon,
  TruckIcon,
  BuildingIcon,
  ClipboardIcon,
  AlertTriangleIcon,
} from "lucide-react";

const meta: Meta<typeof Command> = {
  title: 'Design System/Organisms/Command',
  component: Command,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# Command Component

A command palette component for quick navigation and actions in Amazon waste management systems.

## Design Guidelines

### Visual Hierarchy
- **Search Input**: Prominent search field with clear placeholder text
- **Command Groups**: Organized sections with descriptive headers
- **Command Items**: Clear action items with icons and shortcuts
- **Empty States**: Helpful messages when no results are found

### Accessibility
- **WCAG 2.1 AA Compliant**: Full keyboard navigation support
- **Screen Reader**: Proper ARIA labels and descriptions
- **Focus Management**: Clear focus indicators and logical tab order
- **Keyboard Shortcuts**: Support for common keyboard combinations

### Amazon Waste Management Integration
- **Quick Actions**: Rapid access to common waste management tasks
- **Facility Navigation**: Jump to specific facilities and locations
- **Poster Management**: Search and manage waste education materials
- **Reporting Tools**: Quick access to analytics and reporting features

## Technical Implementation

### Core Features
- Fuzzy search with real-time filtering
- Keyboard navigation with arrow keys
- Command grouping and organization
- Customizable shortcuts and actions
- Dialog mode for overlay presentation

### State Management
- Search query state management
- Command selection handling
- Dialog open/close state
- Integration with application routing

### Customization
- Custom command groups and items
- Flexible styling options
- Icon and shortcut customization
- Theme integration support
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
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Search Users</span>
            </CommandItem>
            <CommandItem>
              <SettingsIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <SettingsIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
};

export const DialogMode: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setOpen((open) => !open);
        }
      };

      document.addEventListener("keydown", down);
      return () => document.removeEventListener("keydown", down);
    }, []);

    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>{" "}
          to open the command palette
        </p>
        <Button onClick={() => setOpen(true)}>Open Command Palette</Button>
        
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <UserIcon className="mr-2 h-4 w-4" />
                <span>Search Users</span>
              </CommandItem>
              <CommandItem>
                <SettingsIcon className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    );
  },
};

export const AmazonWasteManagement: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="space-y-4">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Waste Management Command Center</CardTitle>
            <CardDescription>
              Quick access to all waste management tools and actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setOpen(true)} className="w-full">
              <SearchIcon className="mr-2 h-4 w-4" />
              Search Commands
            </Button>
          </CardContent>
        </Card>
        
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Search waste management commands..." />
          <CommandList>
            <CommandEmpty>No commands found.</CommandEmpty>
            
            <CommandGroup heading="Poster Management">
              <CommandItem>
                <FileTextIcon className="mr-2 h-4 w-4" />
                <span>Create New Poster</span>
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <SearchIcon className="mr-2 h-4 w-4" />
                <span>Search Posters</span>
                <CommandShortcut>⌘F</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <ClipboardIcon className="mr-2 h-4 w-4" />
                <span>Poster Requests</span>
                <CommandShortcut>⌘R</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            
            <CommandSeparator />
            
            <CommandGroup heading="Facility Management">
              <CommandItem>
                <BuildingIcon className="mr-2 h-4 w-4" />
                <span>SEA1 - Seattle</span>
                <Badge variant="secondary" className="ml-auto">
                  Active
                </Badge>
              </CommandItem>
              <CommandItem>
                <BuildingIcon className="mr-2 h-4 w-4" />
                <span>SEA2 - Tacoma</span>
                <Badge variant="secondary" className="ml-auto">
                  Active
                </Badge>
              </CommandItem>
              <CommandItem>
                <BuildingIcon className="mr-2 h-4 w-4" />
                <span>SEA3 - Spokane</span>
                <Badge variant="outline" className="ml-auto">
                  Maintenance
                </Badge>
              </CommandItem>
            </CommandGroup>
            
            <CommandSeparator />
            
            <CommandGroup heading="Waste Operations">
              <CommandItem>
                <RecycleIcon className="mr-2 h-4 w-4" />
                <span>Recycling Reports</span>
                <CommandShortcut>⌘⇧R</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <TruckIcon className="mr-2 h-4 w-4" />
                <span>Waste Pickup Schedule</span>
                <CommandShortcut>⌘⇧P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <AlertTriangleIcon className="mr-2 h-4 w-4" />
                <span>Hazardous Waste Tracking</span>
                <CommandShortcut>⌘⇧H</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            
            <CommandSeparator />
            
            <CommandGroup heading="Analytics & Reporting">
              <CommandItem>
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Monthly Waste Report</span>
              </CommandItem>
              <CommandItem>
                <FileTextIcon className="mr-2 h-4 w-4" />
                <span>Compliance Dashboard</span>
              </CommandItem>
              <CommandItem>
                <SettingsIcon className="mr-2 h-4 w-4" />
                <span>System Settings</span>
                <CommandShortcut>⌘,</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    );
  },
};

export const FacilityQuickAccess: Story = {
  render: () => (
    <div className="w-96">
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Search facilities..." />
        <CommandList>
          <CommandEmpty>No facilities found.</CommandEmpty>
          
          <CommandGroup heading="North America Facilities">
            <CommandItem>
              <BuildingIcon className="mr-2 h-4 w-4" />
              <span>SEA1 - Seattle Fulfillment Center</span>
              <Badge variant="secondary" className="ml-auto">
                24/7
              </Badge>
            </CommandItem>
            <CommandItem>
              <BuildingIcon className="mr-2 h-4 w-4" />
              <span>SEA2 - Tacoma Distribution</span>
              <Badge variant="secondary" className="ml-auto">
                Active
              </Badge>
            </CommandItem>
            <CommandItem>
              <BuildingIcon className="mr-2 h-4 w-4" />
              <span>SEA3 - Spokane Sortation</span>
              <Badge variant="outline" className="ml-auto">
                Maintenance
              </Badge>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Waste Metrics">
            <CommandItem>
              <RecycleIcon className="mr-2 h-4 w-4" />
              <span>Recycling Rate: 87%</span>
              <Badge variant="default" className="ml-auto">
                Target: 85%
              </Badge>
            </CommandItem>
            <CommandItem>
              <TruckIcon className="mr-2 h-4 w-4" />
              <span>Daily Pickup: 12 tons</span>
              <Badge variant="secondary" className="ml-auto">
                Normal
              </Badge>
            </CommandItem>
            <CommandItem>
              <AlertTriangleIcon className="mr-2 h-4 w-4" />
              <span>Hazardous: 0.3 tons</span>
              <Badge variant="destructive" className="ml-auto">
                Monitor
              </Badge>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
};

export const PosterSearchInterface: Story = {
  render: () => (
    <div className="w-96">
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Search posters and materials..." />
        <CommandList>
          <CommandEmpty>No posters found.</CommandEmpty>
          
          <CommandGroup heading="Waste Reduction Posters">
            <CommandItem>
              <FileTextIcon className="mr-2 h-4 w-4" />
              <span>General Waste Guidelines</span>
              <Badge variant="secondary" className="ml-auto">
                v2.1
              </Badge>
            </CommandItem>
            <CommandItem>
              <FileTextIcon className="mr-2 h-4 w-4" />
              <span>Recycling Best Practices</span>
              <Badge variant="secondary" className="ml-auto">
                v1.8
              </Badge>
            </CommandItem>
            <CommandItem>
              <FileTextIcon className="mr-2 h-4 w-4" />
              <span>Hazardous Material Safety</span>
              <Badge variant="destructive" className="ml-auto">
                Critical
              </Badge>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Facility Specific">
            <CommandItem>
              <BuildingIcon className="mr-2 h-4 w-4" />
              <span>SEA1 Break Room Guidelines</span>
              <Badge variant="outline" className="ml-auto">
                Local
              </Badge>
            </CommandItem>
            <CommandItem>
              <BuildingIcon className="mr-2 h-4 w-4" />
              <span>Warehouse Floor Safety</span>
              <Badge variant="outline" className="ml-auto">
                Local
              </Badge>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Quick Actions">
            <CommandItem>
              <ClipboardIcon className="mr-2 h-4 w-4" />
              <span>Submit Poster Request</span>
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Schedule Installation</span>
              <CommandShortcut>⌘I</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
};

export const WasteOperationsCommands: Story = {
  render: () => (
    <div className="w-96">
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Search waste operations..." />
        <CommandList>
          <CommandEmpty>No operations found.</CommandEmpty>
          
          <CommandGroup heading="Daily Operations">
            <CommandItem>
              <TruckIcon className="mr-2 h-4 w-4" />
              <span>Schedule Waste Pickup</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <RecycleIcon className="mr-2 h-4 w-4" />
              <span>Update Recycling Data</span>
              <CommandShortcut>⌘U</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <AlertTriangleIcon className="mr-2 h-4 w-4" />
              <span>Report Hazardous Waste</span>
              <CommandShortcut>⌘H</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="Reporting">
            <CommandItem>
              <FileTextIcon className="mr-2 h-4 w-4" />
              <span>Generate Monthly Report</span>
              <Badge variant="secondary" className="ml-auto">
                Due: 3 days
              </Badge>
            </CommandItem>
            <CommandItem>
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Compliance Audit Schedule</span>
              <Badge variant="outline" className="ml-auto">
                Q2 2024
              </Badge>
            </CommandItem>
          </CommandGroup>
          
          <CommandSeparator />
          
          <CommandGroup heading="System Management">
            <CommandItem>
              <SettingsIcon className="mr-2 h-4 w-4" />
              <span>System Preferences</span>
              <CommandShortcut>⌘,</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <UserIcon className="mr-2 h-4 w-4" />
              <span>User Management</span>
              <CommandShortcut>⌘⇧U</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
};

export const ResponsiveExample: Story = {
  render: () => (
    <div className="w-full max-w-sm mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Mobile Command</CardTitle>
          <CardDescription>
            Command palette optimized for mobile devices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Command className="rounded-lg border">
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Quick Actions">
                <CommandItem>
                  <FileTextIcon className="mr-2 h-4 w-4" />
                  <span>New Poster</span>
                </CommandItem>
                <CommandItem>
                  <SearchIcon className="mr-2 h-4 w-4" />
                  <span>Search</span>
                </CommandItem>
                <CommandItem>
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CardContent>
      </Card>
    </div>
  ),
};

export const InteractiveExample: Story = {
  render: () => {
    const [searchValue, setSearchValue] = React.useState("");
    const [selectedCommand, setSelectedCommand] = React.useState<string | null>(null);

    const commands = [
      { id: "poster-new", label: "Create New Poster", icon: FileTextIcon, group: "Poster Management" },
      { id: "poster-search", label: "Search Posters", icon: SearchIcon, group: "Poster Management" },
      { id: "facility-sea1", label: "SEA1 - Seattle", icon: BuildingIcon, group: "Facilities" },
      { id: "facility-sea2", label: "SEA2 - Tacoma", icon: BuildingIcon, group: "Facilities" },
      { id: "waste-recycling", label: "Recycling Reports", icon: RecycleIcon, group: "Waste Operations" },
      { id: "waste-pickup", label: "Pickup Schedule", icon: TruckIcon, group: "Waste Operations" },
    ];

    const filteredCommands = commands.filter(cmd =>
      cmd.label.toLowerCase().includes(searchValue.toLowerCase())
    );

    const groupedCommands = filteredCommands.reduce((acc, cmd) => {
      if (!acc[cmd.group]) acc[cmd.group] = [];
      acc[cmd.group].push(cmd);
      return acc;
    }, {} as Record<string, typeof commands>);

    return (
      <div className="space-y-4">
        <div className="w-96">
          <Command className="rounded-lg border shadow-md">
            <CommandInput
              placeholder="Type to search commands..."
              value={searchValue}
              onValueChange={setSearchValue}
            />
            <CommandList>
              {filteredCommands.length === 0 ? (
                <CommandEmpty>No commands found for "{searchValue}"</CommandEmpty>
              ) : (
                Object.entries(groupedCommands).map(([group, commands]) => (
                  <CommandGroup key={group} heading={group}>
                    {commands.map((cmd) => {
                      const Icon = cmd.icon;
                      return (
                        <CommandItem
                          key={cmd.id}
                          onSelect={() => setSelectedCommand(cmd.id)}
                        >
                          <Icon className="mr-2 h-4 w-4" />
                          <span>{cmd.label}</span>
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                ))
              )}
            </CommandList>
          </Command>
        </div>

        {selectedCommand && (
          <div className="p-3 bg-blue-50 rounded-lg">
            <div className="text-sm font-medium text-blue-900">
              Command Selected
            </div>
            <div className="text-sm text-blue-700">
              {commands.find(cmd => cmd.id === selectedCommand)?.label}
            </div>
          </div>
        )}
      </div>
    );
  },
}; 