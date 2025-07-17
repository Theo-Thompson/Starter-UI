import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toaster } from "./sonner";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
// Note: In a real implementation, you would import from "sonner"
// For this story, we'll mock the toast functionality
interface ToastOptions {
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface PromiseToastOptions extends ToastOptions {
  loading?: string;
  success?: string | ((data: unknown) => string);
  error?: string | ((error: Error) => string);
}

// Extended interface for specific use cases
interface ExtendedToastOptions extends ToastOptions {
  id?: string;
  className?: string;
}



const toast = Object.assign(
  (message: string, options?: ToastOptions) => console.log("Toast:", message, options),
  {
    success: (message: string, options?: ToastOptions) => console.log("Success:", message, options),
    error: (message: string, options?: ToastOptions) => console.log("Error:", message, options),
    warning: (message: string, options?: ToastOptions) => console.log("Warning:", message, options),
    info: (message: string, options?: ToastOptions) => console.log("Info:", message, options),
    loading: (message: string, options?: ToastOptions) => console.log("Loading:", message, options),
    promise: (promise: Promise<unknown>, options: PromiseToastOptions) => console.log("Promise:", promise, options),
    dismiss: () => console.log("Dismiss all toasts"),
  }
);
import {
  CheckCircleIcon,
  AlertTriangleIcon,
  XCircleIcon,
  InfoIcon,
  FileTextIcon,
  BuildingIcon,
  RecycleIcon,
  TruckIcon,
  ClipboardIcon,
  SettingsIcon,
} from "lucide-react";

const meta = {
  title: "Design System/Organisms/Sonner",
  component: Toaster,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# Sonner (Toast) Component

A toast notification system for providing feedback and status updates in Amazon waste management systems.

## Design Guidelines

### Visual Hierarchy
- **Toast Types**: Success, error, warning, info, and loading states
- **Positioning**: Consistent placement (typically top-right or bottom-right)
- **Animation**: Smooth slide-in/out animations
- **Stacking**: Multiple toasts stack gracefully

### Accessibility
- **WCAG 2.1 AA Compliant**: Proper ARIA labels and announcements
- **Screen Reader**: Toast messages announced to assistive technology
- **Focus Management**: Non-intrusive, doesn't steal focus
- **Dismissible**: Can be dismissed by user action or timeout

### Amazon Waste Management Integration
- **Success Notifications**: Confirm successful operations like poster installations
- **Error Alerts**: Notify users of failures or system issues
- **Progress Updates**: Show loading states for long-running operations
- **System Status**: Inform users about system maintenance or updates

## Technical Implementation

### Core Features
- Multiple toast types (success, error, warning, info, loading)
- Customizable duration and auto-dismiss
- Action buttons for interactive toasts
- Rich content support with icons and descriptions
- Promise-based toasts for async operations

### State Management
- Toast queue management
- Dismiss and clear functionality
- Persistent toasts for critical messages
- Integration with application state

### Customization
- Custom toast styling and themes
- Configurable positioning and animations
- Rich content with custom components
- Theme integration with CSS variables
        `,
      },
    },
  },
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"],
      description: "Position of toast notifications",
    },
    expand: {
      control: { type: "boolean" },
      description: "Whether toasts should expand on hover",
    },
    richColors: {
      control: { type: "boolean" },
      description: "Enable rich colors for different toast types",
    },
  },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-y-2">
        <Button onClick={() => toast("This is a default toast")}>
          Default Toast
        </Button>
        <Button onClick={() => toast.success("Operation completed successfully!")}>
          Success Toast
        </Button>
        <Button onClick={() => toast.error("Something went wrong!")}>
          Error Toast
        </Button>
        <Button onClick={() => toast.warning("This is a warning message")}>
          Warning Toast
        </Button>
        <Button onClick={() => toast.info("Here's some information")}>
          Info Toast
        </Button>
      </div>
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <div className="space-y-2">
        <Button
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => toast("Event cancelled"),
              },
            })
          }
        >
          Toast with Action
        </Button>
        <Button
          onClick={() =>
            toast.success("Poster installed successfully", {
              description: "SEA1 - Seattle Fulfillment Center",
              action: {
                label: "View Details",
                onClick: () => toast.info("Opening poster details..."),
              },
            })
          }
        >
          Success with Action
        </Button>
      </div>
    </div>
  ),
};

export const AmazonWasteManagement: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Waste Management Notifications</CardTitle>
          <CardDescription>
            Common notifications for Amazon waste management operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                toast.success("Poster request approved", {
                  description: "WG-001 approved for SEA1 installation",
                  action: {
                    label: "View",
                    onClick: () => toast.info("Opening request details..."),
                  },
                })
              }
            >
              <CheckCircleIcon className="w-4 h-4 mr-2" />
              Approved
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                toast.error("Pickup failed", {
                  description: "SEA2 - Unable to access facility",
                  action: {
                    label: "Reschedule",
                    onClick: () => toast.info("Rescheduling pickup..."),
                  },
                })
              }
            >
              <XCircleIcon className="w-4 h-4 mr-2" />
              Failed
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                toast.warning("Recycling target missed", {
                  description: "SEA3 - 82% (Target: 85%)",
                  action: {
                    label: "Review",
                    onClick: () => toast.info("Opening recycling report..."),
                  },
                })
              }
            >
              <AlertTriangleIcon className="w-4 h-4 mr-2" />
              Warning
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                toast.info("System maintenance scheduled", {
                  description: "March 20, 2024 at 2:00 AM PST",
                  action: {
                    label: "Details",
                    onClick: () => toast.info("Opening maintenance details..."),
                  },
                })
              }
            >
              <InfoIcon className="w-4 h-4 mr-2" />
              Info
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

export const PosterManagement: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Poster Management Actions</CardTitle>
          <CardDescription>
            Notifications for poster-related operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button
              className="w-full justify-start"
              variant="outline"
              onClick={() =>
                toast.success("Poster request submitted", {
                  description: "Request ID: REQ-2024-001",
                  action: {
                    label: "Track",
                    onClick: () => toast.info("Opening tracking page..."),
                  },
                })
              }
            >
              <ClipboardIcon className="w-4 h-4 mr-2" />
              Submit Request
            </Button>
            
            <Button
              className="w-full justify-start"
              variant="outline"
              onClick={() =>
                toast.success("Poster installed successfully", {
                  description: "HW-001 at SEA1 - Break Room Area",
                  action: {
                    label: "View Photo",
                    onClick: () => toast.info("Opening installation photo..."),
                  },
                })
              }
            >
              <FileTextIcon className="w-4 h-4 mr-2" />
              Installation Complete
            </Button>
            
            <Button
              className="w-full justify-start"
              variant="outline"
              onClick={() =>
                toast.warning("Poster requires update", {
                  description: "RC-001 - New recycling guidelines available",
                  action: {
                    label: "Update",
                    onClick: () => toast.info("Scheduling poster update..."),
                  },
                })
              }
            >
              <AlertTriangleIcon className="w-4 h-4 mr-2" />
              Update Required
            </Button>
            
            <Button
              className="w-full justify-start"
              variant="outline"
              onClick={() =>
                toast.error("Poster request rejected", {
                  description: "Insufficient budget allocation",
                  action: {
                    label: "Appeal",
                    onClick: () => toast.info("Opening appeal form..."),
                  },
                })
              }
            >
              <XCircleIcon className="w-4 h-4 mr-2" />
              Request Rejected
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

export const FacilityOperations: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Facility Operations</CardTitle>
          <CardDescription>
            Notifications for facility waste management operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button
              className="w-full justify-start"
              variant="outline"
              onClick={() =>
                toast.success("Waste pickup completed", {
                  description: "SEA1 - 45.2 tons collected",
                  action: {
                    label: "View Report",
                    onClick: () => toast.info("Opening pickup report..."),
                  },
                })
              }
            >
              <TruckIcon className="w-4 h-4 mr-2" />
              Pickup Complete
            </Button>
            
            <Button
              className="w-full justify-start"
              variant="outline"
              onClick={() =>
                toast.success("Recycling target achieved", {
                  description: "SEA2 - 91% recycling rate this month",
                  action: {
                    label: "Celebrate",
                    onClick: () => toast.success("🎉 Great job team!"),
                  },
                })
              }
            >
              <RecycleIcon className="w-4 h-4 mr-2" />
              Target Achieved
            </Button>
            
            <Button
              className="w-full justify-start"
              variant="outline"
              onClick={() =>
                toast.warning("Facility maintenance required", {
                  description: "SEA3 - Waste compactor needs service",
                  action: {
                    label: "Schedule",
                    onClick: () => toast.info("Scheduling maintenance..."),
                  },
                })
              }
            >
              <BuildingIcon className="w-4 h-4 mr-2" />
              Maintenance Alert
            </Button>
            
            <Button
              className="w-full justify-start"
              variant="outline"
              onClick={() =>
                toast.error("Hazardous waste threshold exceeded", {
                  description: "PDX1 - Immediate action required",
                  action: {
                    label: "Respond",
                    onClick: () => toast.info("Initiating emergency protocol..."),
                  },
                })
              }
            >
              <AlertTriangleIcon className="w-4 h-4 mr-2" />
              Emergency Alert
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Loading & Progress States</CardTitle>
          <CardDescription>
            Toast notifications for long-running operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button
              className="w-full"
              onClick={() => {
                const promise = new Promise((resolve) => {
                  setTimeout(() => resolve({ name: "WG-001" }), 3000);
                });
                
                toast.promise(promise, {
                  loading: "Submitting poster request...",
                  success: ((data: unknown) => `Request ${(data as { name: string }).name} submitted successfully!`),
                  error: "Failed to submit request",
                });
              }}
            >
              Submit Request (Promise)
            </Button>
            
            <Button
              className="w-full"
              onClick={() => {
                const promise = new Promise((resolve) => {
                  setTimeout(() => resolve({ facility: "SEA1", amount: "45.2 tons" }), 2000);
                });
                
                toast.promise(promise, {
                  loading: "Processing waste pickup...",
                  success: ((data: unknown) => `Pickup completed at ${(data as { facility: string; amount: string }).facility} - ${(data as { facility: string; amount: string }).amount} collected`),
                  error: "Pickup failed",
                });
              }}
            >
              Process Pickup (Promise)
            </Button>
            
            <Button
              className="w-full"
              onClick={() => {
                const toastId = toast.loading("Generating monthly report...");
                
                setTimeout(() => {
                  toast.success("Monthly report generated successfully", {
                    id: toastId,
                    description: "Report saved to downloads folder",
                    action: {
                      label: "Open",
                      onClick: () => toast.info("Opening report..."),
                    },
                  } as ExtendedToastOptions);
                }, 4000);
              }}
            >
              Generate Report (Manual)
            </Button>
            
            <Button
              className="w-full"
              onClick={() => {
                const toastId = toast.loading("Updating facility data...");
                
                setTimeout(() => {
                  toast.error("Failed to update facility data", {
                    id: toastId,
                    description: "Network connection lost",
                    action: {
                      label: "Retry",
                      onClick: () => toast.info("Retrying..."),
                    },
                  } as ExtendedToastOptions);
                }, 2500);
              }}
            >
              Update Data (Error)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

export const SystemAlerts: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster />
      <Card className="w-96">
        <CardHeader>
          <CardTitle>System Alerts</CardTitle>
          <CardDescription>
            Critical system notifications and alerts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button
              className="w-full justify-start"
              variant="outline"
              onClick={() =>
                toast.error("System maintenance starting", {
                  description: "System will be unavailable for 2 hours",
                  duration: 10000,
                  action: {
                    label: "Details",
                    onClick: () => toast.info("Maintenance window: 2:00 AM - 4:00 AM PST"),
                  },
                })
              }
            >
              <SettingsIcon className="w-4 h-4 mr-2" />
              Maintenance Alert
            </Button>
            
            <Button
              className="w-full justify-start"
              variant="outline"
              onClick={() =>
                toast.warning("Database backup in progress", {
                  description: "System performance may be affected",
                  duration: 8000,
                  action: {
                    label: "Monitor",
                    onClick: () => toast.info("Opening system monitor..."),
                  },
                })
              }
            >
              <InfoIcon className="w-4 h-4 mr-2" />
              Backup Alert
            </Button>
            
            <Button
              className="w-full justify-start"
              variant="outline"
              onClick={() =>
                toast.success("System update completed", {
                  description: "Version 2.1.0 is now active",
                  duration: 6000,
                  action: {
                    label: "What's New",
                    onClick: () => toast.info("Opening changelog..."),
                  },
                })
              }
            >
              <CheckCircleIcon className="w-4 h-4 mr-2" />
              Update Complete
            </Button>
            
            <Button
              className="w-full justify-start"
              variant="outline"
              onClick={() =>
                toast.error("Connection lost", {
                  description: "Attempting to reconnect...",
                  duration: Infinity,
                  action: {
                    label: "Retry",
                    onClick: () => {
                      toast.dismiss();
                      toast.success("Connection restored");
                    },
                  },
                })
              }
            >
              <XCircleIcon className="w-4 h-4 mr-2" />
              Connection Error
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <Toaster richColors />
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Custom Styled Toasts</CardTitle>
          <CardDescription>
            Toasts with custom styling and rich colors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button
              className="w-full"
              onClick={() =>
                toast("Custom styled toast", {
                  description: "This toast has custom styling applied",
                  className: "bg-blue-50 border-blue-200",
                  style: {
                    borderLeft: "4px solid #3b82f6",
                  },
                } as ExtendedToastOptions)
              }
            >
              Custom Style
            </Button>
            
            <Button
              className="w-full"
              onClick={() =>
                toast.success("Success with rich colors", {
                  description: "Rich colors are enabled for this toast",
                })
              }
            >
              Rich Colors Success
            </Button>
            
            <Button
              className="w-full"
              onClick={() =>
                toast.error("Error with rich colors", {
                  description: "Rich colors make errors more prominent",
                })
              }
            >
              Rich Colors Error
            </Button>
            
            <Button
              className="w-full"
              onClick={() =>
                toast("Toast with custom content", {
                  description: "Facility status updated - SEA1",
                })
              }
            >
              Custom Content
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

export const ResponsiveExample: Story = {
  render: () => (
    <div className="w-full max-w-sm mx-auto">
      <Toaster />
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Mobile Toasts</CardTitle>
          <CardDescription>
            Toast notifications optimized for mobile devices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button
              className="w-full"
              size="sm"
              onClick={() =>
                toast.success("Request submitted", {
                  description: "REQ-001 submitted successfully",
                })
              }
            >
              Success
            </Button>
            
            <Button
              className="w-full"
              size="sm"
              onClick={() =>
                toast.error("Upload failed", {
                  description: "File too large",
                })
              }
            >
              Error
            </Button>
            
            <Button
              className="w-full"
              size="sm"
              onClick={() =>
                toast.info("Sync complete", {
                  description: "Data synchronized",
                })
              }
            >
              Info
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

export const InteractiveExample: Story = {
  render: () => {
    const [toastCount, setToastCount] = React.useState(0);
    const [position, setPosition] = React.useState<"top-right" | "bottom-right">("top-right");

    return (
      <div className="space-y-4">
        <Toaster position={position} />
        
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Interactive Toast Demo</h3>
          <div className="flex items-center space-x-2">
            <label className="text-sm">Position:</label>
                         <select
               value={position}
               onChange={(e) => setPosition(e.target.value as "top-right" | "bottom-right")}
               className="border rounded px-2 py-1 text-sm"
               aria-label="Toast position"
             >
              <option value="top-right">Top Right</option>
              <option value="bottom-right">Bottom Right</option>
            </select>
          </div>
        </div>
        
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Toast Counter: {toastCount}</CardTitle>
            <CardDescription>
              Interactive toast notifications with counter
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setToastCount(prev => prev + 1);
                  toast.success(`Success toast #${toastCount + 1}`, {
                    description: "Operation completed successfully",
                  });
                }}
              >
                Success
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setToastCount(prev => prev + 1);
                  toast.error(`Error toast #${toastCount + 1}`, {
                    description: "Something went wrong",
                  });
                }}
              >
                Error
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setToastCount(prev => prev + 1);
                  toast.warning(`Warning toast #${toastCount + 1}`, {
                    description: "Please review this action",
                  });
                }}
              >
                Warning
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setToastCount(prev => prev + 1);
                  toast.info(`Info toast #${toastCount + 1}`, {
                    description: "Here's some information",
                  });
                }}
              >
                Info
              </Button>
            </div>
            
            <div className="mt-4 space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => toast.dismiss()}
              >
                Dismiss All Toasts
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => setToastCount(0)}
              >
                Reset Counter
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
}; 