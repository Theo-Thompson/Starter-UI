import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

// Foundation Components
import { Button } from './atoms/button';
import { Input } from './atoms/input';
import { Label } from './atoms/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './atoms/card';
import { Badge } from './atoms/badge';
import { Alert, AlertDescription, AlertTitle } from './atoms/alert';
import { Avatar, AvatarFallback, AvatarImage } from './atoms/avatar';
import { Progress } from './atoms/progress';
import { Separator } from './atoms/separator';
import { Skeleton } from './atoms/skeleton';
import { Switch } from './atoms/switch';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './atoms/table';
import { Checkbox } from './atoms/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './atoms/select';
import { Calendar } from './atoms/calendar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './atoms/breadcrumb';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './atoms/command';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './atoms/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './atoms/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from './atoms/popover';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './atoms/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './atoms/tooltip';
import { ScrollArea } from './atoms/scroll-area';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './atoms/pagination';

// Icons
import { 
  Settings, Package, Palette, Zap, AlertCircle, CheckCircle, Info, Mail, 
  ChevronDown, Search, Edit, Copy, Calendar as CalendarIcon, Trash2, MapPin, 
  ArrowRight, Layers, Sun, Sparkles, Type, Ruler, Box, Square
} from 'lucide-react';

const meta: Meta = {
  title: 'Design System/Overview',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DesignSystemOverview: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

    return (
      <TooltipProvider>
        <div className="max-w-7xl mx-auto p-8 space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-primary-brand rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">UI</span>
                </div>
                <h1 className="text-5xl font-bold text-primary-brand">
                  Design System
                </h1>
              </div>
              <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
                A comprehensive design system and component library for building modern web applications
              </p>
              <div className="flex items-center justify-center gap-3 mt-6">
                <Badge variant="outline" className="text-primary-brand border-primary-brand">
                  React 19
                </Badge>
                <Badge variant="outline" className="text-secondary-brand border-secondary-brand">
                  TypeScript
                </Badge>
                <Badge className="bg-primary-brand text-white">
                  Tailwind CSS
                </Badge>
                <Badge variant="outline">
                  shadcn/ui
                </Badge>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <section className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary-brand" />
                    Component Library
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    30+ production-ready React components with consistent design patterns and accessibility features.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5 text-secondary-brand" />
                    Design Tokens
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Consistent colors, typography, spacing, and shadows that scale across your entire application.
                  </p>
                  <Button variant="outline" size="sm" className="mt-3 w-full" asChild>
                    <a href="?path=/story/design-system-foundation-design-tokens--design-tokens-overview">
                      View Design Tokens
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-green-600" />
                    Developer Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Full TypeScript support, comprehensive documentation, and easy customization.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Core Components */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-semibold">Core Components</h2>
              <p className="text-muted-foreground">Essential building blocks for your application</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Buttons */}
              <Card>
                <CardHeader>
                  <CardTitle>Buttons</CardTitle>
                  <CardDescription>Interactive buttons with multiple variants and sizes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Variants</p>
                    <div className="flex flex-wrap gap-2">
                      <Button>Default</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Sizes</p>
                    <div className="flex items-center gap-2">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                      <Button size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Form Elements */}
              <Card>
                <CardHeader>
                  <CardTitle>Form Elements</CardTitle>
                  <CardDescription>Input fields, selects, and form controls</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="demo-input">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="demo-input" type="email" placeholder="email@example.com" className="pl-8" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="demo-select">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                        <SelectItem value="option3">Option 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="demo-checkbox" />
                      <Label htmlFor="demo-checkbox">Accept terms</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="demo-switch" />
                      <Label htmlFor="demo-switch">Notifications</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Data Display */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-semibold">Data Display</h2>
              <p className="text-muted-foreground">Components for presenting information</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Badges & Status */}
              <Card>
                <CardHeader>
                  <CardTitle>Badges & Status</CardTitle>
                  <CardDescription>Status indicators and labels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Badge Variants</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Status Indicators</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Active
                      </Badge>
                      <Badge className="bg-yellow-100 text-yellow-800">
                        <AlertCircle className="mr-1 h-3 w-3" />
                        Pending
                      </Badge>
                      <Badge className="bg-primary-brand text-white">
                        Brand
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Avatar & Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Avatar & Progress</CardTitle>
                  <CardDescription>User representations and progress indicators</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Avatars</p>
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">CD</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Progress</p>
                    <Progress value={33} className="w-full" />
                    <Progress value={66} className="w-full" />
                    <Progress value={100} className="w-full" />
                  </div>
                </CardContent>
              </Card>

              {/* Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle>Alerts & Notifications</CardTitle>
                  <CardDescription>Important messages and feedback</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                      This is an informational alert with important context.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Something went wrong. Please check your input.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Navigation & Overlays */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-semibold">Navigation & Overlays</h2>
              <p className="text-muted-foreground">Navigation components and modal interfaces</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Navigation */}
              <Card>
                <CardHeader>
                  <CardTitle>Navigation</CardTitle>
                  <CardDescription>Breadcrumbs and pagination</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Breadcrumb</p>
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Components</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Pagination</p>
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#" isActive>
                            2
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationNext href="#" />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                </CardContent>
              </Card>

              {/* Overlays */}
              <Card>
                <CardHeader>
                  <CardTitle>Overlays & Modals</CardTitle>
                  <CardDescription>Dialog, sheet, and popover components</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Dialog open={open} onOpenChange={setOpen}>
                      <DialogTrigger asChild>
                        <Button size="sm">Dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Confirm Action</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to proceed with this action?
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setOpen(false)}>
                            Cancel
                          </Button>
                          <Button onClick={() => setOpen(false)}>
                            Confirm
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                      <SheetTrigger asChild>
                        <Button size="sm" variant="outline">Sheet</Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Edit Profile</SheetTitle>
                          <SheetDescription>
                            Make changes to your profile here.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">Name</Label>
                            <Input id="name" value="John Doe" className="col-span-3" />
                          </div>
                        </div>
                        <SheetFooter>
                          <Button onClick={() => setSheetOpen(false)}>Save</Button>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>

                    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                      <PopoverTrigger asChild>
                        <Button size="sm" variant="outline">Popover</Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <div className="grid gap-4">
                          <div className="space-y-2">
                            <h4 className="font-medium">Settings</h4>
                            <p className="text-sm text-muted-foreground">
                              Configure your preferences here.
                            </p>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Interactive Components */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-semibold">Interactive Components</h2>
              <p className="text-muted-foreground">Advanced interactive elements</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Dropdown Menu */}
              <Card>
                <CardHeader>
                  <CardTitle>Dropdown Menu</CardTitle>
                  <CardDescription>Context menus and dropdowns</CardDescription>
                </CardHeader>
                <CardContent>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        Actions
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>

              {/* Command Palette */}
              <Card>
                <CardHeader>
                  <CardTitle>Command Palette</CardTitle>
                  <CardDescription>Search and command interface</CardDescription>
                </CardHeader>
                <CardContent>
                  <Command className="rounded-lg border shadow-md">
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup heading="Suggestions">
                        <CommandItem>
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>Calendar</span>
                        </CommandItem>
                        <CommandItem>
                          <Search className="mr-2 h-4 w-4" />
                          <span>Search</span>
                        </CommandItem>
                        <CommandItem>
                          <Settings className="mr-2 h-4 w-4" />
                          <span>Settings</span>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Data Components */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-semibold">Data Components</h2>
              <p className="text-muted-foreground">Tables, calendars, and data presentation</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* Calendar */}
              <Card>
                <CardHeader>
                  <CardTitle>Calendar</CardTitle>
                  <CardDescription>Date picker and calendar component</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              {/* Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Data Table</CardTitle>
                  <CardDescription>Tabular data presentation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Request ID</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Submitted</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">#WP-001</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            Building 42, Floor 3
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">Approved</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                            2 days ago
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">View</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">#WP-002</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            Building 15, Floor 1
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                            1 day ago
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">Review</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Utility Components */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-semibold">Utility Components</h2>
              <p className="text-muted-foreground">Helper components for better UX</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tooltip */}
              <Card>
                <CardHeader>
                  <CardTitle>Tooltip</CardTitle>
                  <CardDescription>Hover tooltips for additional information</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip with helpful information</p>
                    </TooltipContent>
                  </Tooltip>
                </CardContent>
              </Card>

              {/* Scroll Area */}
              <Card>
                <CardHeader>
                  <CardTitle>Scroll Area</CardTitle>
                  <CardDescription>Custom scrollable containers</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium leading-none">Scrollable Content</h4>
                      <p className="text-sm text-muted-foreground">
                        This is a scrollable area. You can scroll through this content.
                      </p>
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="text-sm">
                          Item {i + 1} - Lorem ipsum dolor sit amet.
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Loading States */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-semibold">Loading States</h2>
              <p className="text-muted-foreground">Skeleton loaders and loading indicators</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Skeleton Loaders</CardTitle>
                <CardDescription>Loading placeholders for better UX</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Footer */}
          <footer className="text-center pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              Built with React 19, TypeScript, Tailwind CSS, and shadcn/ui
            </p>
            <div className="text-center text-sm text-muted-foreground mt-4">
              Design System - Open Source
            </div>
          </footer>
        </div>
      </TooltipProvider>
    );
  },
};

// Foundation Card Component
const FoundationCard = ({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  features 
}: { 
  title: string; 
  description: string; 
  icon: React.ComponentType<{ className?: string }>; 
  href: string; 
  features: string[];
}) => (
  <Card className="group hover:shadow-lg transition-all duration-200">
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary-brand/10 rounded-lg group-hover:bg-primary-brand/20 transition-colors">
          <Icon className="h-6 w-6 text-primary-brand" />
        </div>
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Key Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
              <div className="w-1 h-1 bg-primary-brand rounded-full"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <Button asChild className="w-full">
        <a href={href}>
          Explore {title}
          <ArrowRight className="h-4 w-4 ml-2" />
        </a>
      </Button>
    </CardContent>
  </Card>
);

export const FoundationsOverview: Story = {
  render: () => (
    <div className="max-w-7xl mx-auto p-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="p-3 bg-primary-brand/10 rounded-xl">
            <Layers className="h-8 w-8 text-primary-brand" />
          </div>
          <h1 className="text-4xl font-bold">Design System Foundations</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          The atomic design decisions that form the foundation of our design system. 
          Explore colors, typography, spacing, and more.
        </p>
        <div className="flex items-center justify-center gap-2">
          <Badge variant="outline" className="text-primary-brand border-primary-brand">
            <Sun className="h-3 w-3 mr-1" />
            Light Mode
          </Badge>
          <Badge variant="outline">
            <Sparkles className="h-3 w-3 mr-1" />
            Dark Mode Ready
          </Badge>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FoundationCard
          title="Design Tokens"
          description="Complete overview of all design tokens in one place"
          icon={Layers}
          href="?path=/story/design-system-foundation-design-tokens--design-tokens-overview"
          features={[
            "All tokens in one view",
            "Copy CSS variables",
            "Light/dark mode toggle",
            "Usage examples"
          ]}
        />
        
        <FoundationCard
          title="Colors"
          description="Brand and semantic color system"
          icon={Palette}
          href="?path=/story/design-system-foundation-colors--color-system"
          features={[
            "Brand colors",
            "Semantic colors",
            "Accessibility compliant",
            "Theme support"
          ]}
        />
        
        <FoundationCard
          title="Typography"
          description="Font families, sizes, and hierarchy"
          icon={Type}
          href="?path=/story/design-system-foundation-typography--typography-system"
          features={[
            "Inter font family",
            "Heading scale",
            "Body text sizes",
            "Line heights"
          ]}
        />
        
        <FoundationCard
          title="Spacing"
          description="Consistent spacing scale"
          icon={Ruler}
          href="?path=/story/design-system-foundation-spacing--spacing-system"
          features={[
            "4px base unit",
            "Semantic tokens",
            "Responsive spacing",
            "Usage examples"
          ]}
        />
        
        <FoundationCard
          title="Shadows"
          description="Elevation and depth system"
          icon={Box}
          href="?path=/story/design-system-foundation-shadows--shadow-system"
          features={[
            "Progressive elevation",
            "Consistent shadows",
            "Component examples",
            "Usage guidelines"
          ]}
        />
        
        <FoundationCard
          title="Border Radius"
          description="Corner rounding values"
          icon={Square}
          href="?path=/story/design-system-foundation-border-radius--border-radius-system"
          features={[
            "Consistent radius",
            "Component examples",
            "Usage patterns",
            "Visual preview"
          ]}
        />
      </div>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle>Getting Started with Design Tokens</CardTitle>
          <CardDescription>
            Learn how to use design tokens effectively in your components
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">For Developers</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Use CSS variables for colors: <code className="bg-muted px-1 rounded">hsl(var(--primary-brand))</code></p>
                <p>• Use Tailwind classes for spacing: <code className="bg-muted px-1 rounded">p-4 m-8 space-y-4</code></p>
                <p>• Use semantic typography: <code className="bg-muted px-1 rounded">text-xl font-semibold</code></p>
                <p>• Test in both light and dark modes</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">For Designers</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Use established color palette for consistency</p>
                <p>• Follow typography hierarchy for readability</p>
                <p>• Maintain consistent spacing patterns</p>
                <p>• Ensure sufficient contrast ratios</p>
              </div>
            </div>
          </div>
          
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-medium mb-2">💡 Pro Tip</h4>
            <p className="text-sm text-muted-foreground">
              Start with the <strong>Design Tokens</strong> page for a complete overview, then explore individual categories 
              for detailed information and examples. All tokens support both light and dark themes automatically.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Ready to Explore?</h2>
        <p className="text-muted-foreground">
          Choose a foundation category to get started
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href="?path=/story/design-system-foundation-design-tokens--design-tokens-overview">
              View All Design Tokens
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </Button>
          <Button variant="outline" asChild size="lg">
            <a href="?path=/story/design-system-overview--design-system-overview">
              Back to Overview
            </a>
          </Button>
        </div>
      </div>
    </div>
  ),
}; 