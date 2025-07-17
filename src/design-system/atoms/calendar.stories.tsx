import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Calendar } from "./calendar";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { CalendarIcon } from "lucide-react";
import type { DateRange } from "react-day-picker";

const meta = {
  title: 'Design System/Organisms/Calendar',
  component: Calendar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# Calendar Component

A flexible calendar component built on top of React Day Picker with Amazon waste management system integration.

## Design Guidelines

### Visual Hierarchy
- **Primary Selection**: Bold highlighting for selected dates
- **Range Selection**: Connected visual flow for date ranges
- **Today Indicator**: Subtle accent to highlight current date
- **Navigation**: Clear month/year navigation controls

### Accessibility
- **WCAG 2.1 AA Compliant**: Full keyboard navigation support
- **Screen Reader**: Proper ARIA labels and descriptions
- **Focus Management**: Clear focus indicators and logical tab order
- **Date Announcements**: Descriptive date information for assistive technology

### Amazon Waste Management Integration
- **Poster Request Scheduling**: Date selection for waste poster campaigns
- **Facility Audits**: Schedule compliance checks and inspections
- **Reporting Periods**: Define waste tracking and reporting timeframes
- **Maintenance Windows**: Plan system updates and facility maintenance

## Technical Implementation

### Core Features
- Single date selection with controlled state
- Date range selection for periods
- Disabled dates for unavailable periods
- Custom formatters for localization
- Responsive design for mobile and desktop

### State Management
- Controlled component pattern
- External state integration
- Form validation support
- Real-time updates

### Customization
- Theme integration with CSS variables
- Custom button variants
- Flexible styling options
- Component composition support
        `,
      },
    },
  },
  argTypes: {
    selected: {
      control: { type: "date" },
      description: "Currently selected date",
    },
    mode: {
      control: { type: "select" },
      options: ["single", "multiple", "range"],
      description: "Selection mode",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable the calendar",
    },
    showOutsideDays: {
      control: { type: "boolean" },
      description: "Show days from adjacent months",
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    
    return (
      <div className="p-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          showOutsideDays={true}
          className="rounded-md border"
        />
      </div>
    );
  },
};

export const SingleDateSelection: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    
    return (
      <div className="space-y-4">
        <div className="text-sm text-muted-foreground">
          Selected: {date ? date.toLocaleDateString() : "None"}
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
    );
  },
};

export const DateRangeSelection: Story = {
  render: () => {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: new Date(),
      to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    
    return (
      <div className="space-y-4">
        <div className="text-sm text-muted-foreground">
          Range: {range?.from ? range.from.toLocaleDateString() : "None"} - {range?.to ? range.to.toLocaleDateString() : "None"}
        </div>
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          className="rounded-md border"
        />
      </div>
    );
  },
};

export const WithDisabledDates: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>();
    
    // Disable weekends and past dates
    const disabledDays = [
      { dayOfWeek: [0, 6] }, // Sunday and Saturday
      { before: new Date() }, // Past dates
    ];
    
    return (
      <div className="space-y-4">
        <div className="text-sm text-muted-foreground">
          Weekends and past dates are disabled
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={disabledDays}
          className="rounded-md border"
        />
      </div>
    );
  },
};

export const AmazonWastePosterScheduling: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();
    const [isOpen, setIsOpen] = React.useState(false);
    
    // Disable past dates and weekends for poster installation
    const disabledDays = [
      { dayOfWeek: [0, 6] }, // Weekends
      { before: new Date() }, // Past dates
    ];
    
    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Schedule Poster Installation</CardTitle>
          <CardDescription>
            Select a date for waste management poster installation at SEA1 facility
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Installation Date</label>
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? selectedDate.toLocaleDateString() : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    setSelectedDate(date);
                    setIsOpen(false);
                  }}
                  disabled={disabledDays}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">
              <strong>Facility:</strong> SEA1 - Seattle Fulfillment Center
            </div>
            <div className="text-sm text-muted-foreground">
              <strong>Poster Type:</strong> Waste Reduction Guidelines
            </div>
            <div className="text-sm text-muted-foreground">
              <strong>Installation Time:</strong> 8:00 AM - 5:00 PM (Business hours only)
            </div>
          </div>
          
          {selectedDate && (
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-sm font-medium text-blue-900">
                Installation Scheduled
              </div>
              <div className="text-sm text-blue-700">
                {selectedDate.toLocaleDateString()} at SEA1 facility
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};

export const AuditScheduling: Story = {
  render: () => {
    const [auditRange, setAuditRange] = React.useState<DateRange | undefined>();
    
    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Schedule Waste Compliance Audit</CardTitle>
          <CardDescription>
            Select date range for facility waste management audit
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Audit Period</label>
            <Calendar
              mode="range"
              selected={auditRange}
              onSelect={setAuditRange}
              className="rounded-md border"
              disabled={{ before: new Date() }}
            />
          </div>
          
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">
              <strong>Facilities:</strong> SEA1, SEA2, SEA3
            </div>
            <div className="text-sm text-muted-foreground">
              <strong>Audit Type:</strong> Comprehensive Waste Management Review
            </div>
            <div className="text-sm text-muted-foreground">
              <strong>Duration:</strong> 3-5 business days per facility
            </div>
          </div>
          
          {auditRange?.from && auditRange?.to && (
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="text-sm font-medium text-green-900">
                Audit Period Confirmed
              </div>
              <div className="text-sm text-green-700">
                {auditRange.from.toLocaleDateString()} - {auditRange.to.toLocaleDateString()}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};

export const ReportingPeriods: Story = {
  render: () => {
    const [reportingPeriod, setReportingPeriod] = React.useState<{
      from: Date | undefined;
      to: Date | undefined;
    }>({
      from: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      to: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
    });
    
    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Waste Reporting Period</CardTitle>
          <CardDescription>
            Define timeframe for waste management reporting
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Reporting Period</label>
            <Calendar
              mode="range"
              selected={reportingPeriod}
              onSelect={(value: DateRange | undefined) => setReportingPeriod({ 
                from: value?.from, 
                to: value?.to 
              })}
              className="rounded-md border"
              disabled={{ after: new Date() }}
            />
          </div>
          
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">
              <strong>Report Type:</strong> Monthly Waste Generation Summary
            </div>
            <div className="text-sm text-muted-foreground">
              <strong>Facilities:</strong> All North America Operations
            </div>
            <div className="text-sm text-muted-foreground">
              <strong>Metrics:</strong> Volume, Weight, Recycling Rate, Cost
            </div>
          </div>
          
          {reportingPeriod.from && reportingPeriod.to && (
            <div className="p-3 bg-orange-50 rounded-lg">
              <div className="text-sm font-medium text-orange-900">
                Reporting Period Set
              </div>
              <div className="text-sm text-orange-700">
                {reportingPeriod.from.toLocaleDateString()} - {reportingPeriod.to.toLocaleDateString()}
              </div>
              <div className="text-xs text-orange-600 mt-1">
                Report will include all waste data from this period
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};

export const MaintenanceScheduling: Story = {
  render: () => {
    const [maintenanceDate, setMaintenanceDate] = React.useState<Date | undefined>();
    
    // Disable weekends and next 3 days for maintenance scheduling
    const disabledDays = [
      { dayOfWeek: [0, 6] }, // Weekends
      { before: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) }, // Next 3 days
    ];
    
    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle>System Maintenance Window</CardTitle>
          <CardDescription>
            Schedule maintenance for waste management systems
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Maintenance Date</label>
            <Calendar
              mode="single"
              selected={maintenanceDate}
              onSelect={setMaintenanceDate}
              disabled={disabledDays}
              className="rounded-md border"
            />
          </div>
          
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">
              <strong>Systems:</strong> Waste Tracking Database, Poster Management
            </div>
            <div className="text-sm text-muted-foreground">
              <strong>Duration:</strong> 4-6 hours (overnight)
            </div>
            <div className="text-sm text-muted-foreground">
              <strong>Impact:</strong> System will be unavailable during maintenance
            </div>
          </div>
          
          {maintenanceDate && (
            <div className="p-3 bg-red-50 rounded-lg">
              <div className="text-sm font-medium text-red-900">
                Maintenance Scheduled
              </div>
              <div className="text-sm text-red-700">
                {maintenanceDate.toLocaleDateString()} - 2:00 AM to 6:00 AM PST
              </div>
              <div className="text-xs text-red-600 mt-1">
                All users will be notified 24 hours in advance
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};

export const ResponsiveExample: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    
    return (
      <div className="w-full max-w-sm mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Mobile Calendar</CardTitle>
            <CardDescription>
              Responsive calendar design for mobile devices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border w-full"
            />
            
            {date && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium">Selected Date</div>
                <div className="text-sm text-muted-foreground">
                  {date.toLocaleDateString()}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const InteractiveExample: Story = {
  render: () => {
    const [mode, setMode] = React.useState<"single" | "range">("single");
    const [singleDate, setSingleDate] = React.useState<Date | undefined>();
    const [rangeDate, setRangeDate] = React.useState<{
      from: Date | undefined;
      to: Date | undefined;
    }>({
      from: undefined,
      to: undefined,
    });
    
    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button
            variant={mode === "single" ? "default" : "outline"}
            size="sm"
            onClick={() => setMode("single")}
          >
            Single Date
          </Button>
          <Button
            variant={mode === "range" ? "default" : "outline"}
            size="sm"
            onClick={() => setMode("range")}
          >
            Date Range
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground">
          {mode === "single" 
            ? `Selected: ${singleDate ? singleDate.toLocaleDateString() : "None"}`
            : `Range: ${rangeDate.from ? rangeDate.from.toLocaleDateString() : "None"} - ${rangeDate.to ? rangeDate.to.toLocaleDateString() : "None"}`
          }
        </div>
        
        {mode === "single" ? (
          <Calendar
            mode="single"
            selected={singleDate}
            onSelect={(value: Date | undefined) => setSingleDate(value)}
            className="rounded-md border"
          />
        ) : (
          <Calendar
            mode="range"
            selected={rangeDate}
            onSelect={(value: DateRange | undefined) => setRangeDate({ 
              from: value?.from, 
              to: value?.to 
            })}
            className="rounded-md border"
          />
        )}
      </div>
    );
  },
}; 