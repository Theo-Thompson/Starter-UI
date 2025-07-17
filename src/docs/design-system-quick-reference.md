# Design System Quick Reference

A quick reference guide for common design system patterns and usage.

## Color Usage

### Brand Colors
```tsx
// Primary brand color
<div className="bg-primary-brand text-white">Primary Content</div>

// Secondary brand color
<div className="bg-secondary-brand text-white">Secondary Content</div>

// Using semantic colors
<button className="bg-primary text-primary-foreground">Primary Action</button>
<button className="bg-secondary text-secondary-foreground">Secondary Action</button>
```

### Status Colors
```tsx
// Success
<Badge className="bg-green-100 text-green-800">Success</Badge>

// Warning
<Badge className="bg-yellow-100 text-yellow-800">Warning</Badge>

// Error
<Badge className="bg-red-100 text-red-800">Error</Badge>

// Info
<Badge className="bg-blue-100 text-blue-800">Info</Badge>
```

## Typography

### Headings
```tsx
<h1 className="text-4xl font-bold">Page Title</h1>
<h2 className="text-3xl font-semibold">Section Title</h2>
<h3 className="text-2xl font-semibold">Subsection</h3>
<h4 className="text-xl font-medium">Card Title</h4>
```

### Body Text
```tsx
<p className="text-base">Regular body text</p>
<p className="text-sm text-muted-foreground">Small muted text</p>
<p className="text-lg">Large body text</p>
```

## Spacing

### Common Patterns
```tsx
// Card with consistent spacing
<Card className="p-6">
  <CardHeader className="pb-4">
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <p>Content</p>
  </CardContent>
</Card>

// Form spacing
<form className="space-y-6">
  <div className="space-y-2">
    <Label>Field Label</Label>
    <Input />
  </div>
</form>

// Button groups
<div className="flex gap-2">
  <Button>Primary</Button>
  <Button variant="outline">Secondary</Button>
</div>
```

## Component Patterns

### Form Layout
```tsx
<form className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label htmlFor="firstName">First Name</Label>
      <Input id="firstName" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="lastName">Last Name</Label>
      <Input id="lastName" />
    </div>
  </div>
  <Button type="submit">Submit</Button>
</form>
```

### Data Display
```tsx
// Status with icon
<div className="flex items-center gap-2">
  <CheckCircle className="h-4 w-4 text-green-600" />
  <span>Active</span>
</div>

// User info
<div className="flex items-center gap-3">
  <Avatar>
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <div>
    <p className="font-medium">John Doe</p>
    <p className="text-sm text-muted-foreground">john@example.com</p>
  </div>
</div>
```

### Navigation
```tsx
// Breadcrumb
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

// Pagination
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

## Button Variants

```tsx
// Primary actions
<Button>Default</Button>
<Button size="lg">Large</Button>
<Button size="sm">Small</Button>

// Secondary actions
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>

// Destructive actions
<Button variant="destructive">Delete</Button>

// Icon buttons
<Button size="icon">
  <Settings className="h-4 w-4" />
</Button>
```

## Alert Patterns

```tsx
// Information
<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>This is an informational message.</AlertDescription>
</Alert>

// Error
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>
```

## Modal Patterns

```tsx
// Confirmation dialog
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogDescription>
        Are you sure you want to proceed?
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## Table Patterns

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">John Doe</TableCell>
      <TableCell>
        <Badge variant="outline">Active</Badge>
      </TableCell>
      <TableCell>
        <Button variant="outline" size="sm">Edit</Button>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Loading States

```tsx
// Skeleton loader
<div className="space-y-4">
  <Skeleton className="h-4 w-[250px]" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-3/4" />
</div>

// Progress indicator
<Progress value={33} className="w-full" />
```

## Responsive Patterns

```tsx
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card>Content</Card>
  <Card>Content</Card>
  <Card>Content</Card>
</div>

// Responsive spacing
<div className="p-4 md:p-6 lg:p-8">
  Content with responsive padding
</div>

// Responsive text
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
  Responsive Title
</h1>
```

## Dark Mode Support

```tsx
// Components automatically support dark mode
<Card className="bg-card text-card-foreground">
  <CardHeader>
    <CardTitle>Dark Mode Ready</CardTitle>
  </CardHeader>
  <CardContent>
    <p>This card automatically adapts to dark mode.</p>
  </CardContent>
</Card>
```

## Accessibility Patterns

```tsx
// Proper labeling
<div className="space-y-2">
  <Label htmlFor="email">Email Address</Label>
  <Input 
    id="email" 
    type="email" 
    aria-describedby="email-error"
    aria-invalid={hasError}
  />
  {hasError && (
    <p id="email-error" className="text-sm text-destructive">
      Please enter a valid email address
    </p>
  )}
</div>

// Focus management
<Button 
  className="focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
>
  Accessible Button
</Button>
```

## Common Utilities

```tsx
// Centering content
<div className="flex items-center justify-center min-h-screen">
  <Card className="w-full max-w-md">
    <CardContent className="p-6">
      Centered content
    </CardContent>
  </Card>
</div>

// Full width container
<div className="container mx-auto px-4">
  <div className="max-w-4xl mx-auto">
    Content with max width
  </div>
</div>

// Sticky header
<header className="sticky top-0 z-50 bg-background border-b">
  Header content
</header>
```

---

*For complete documentation, see the [Design System Guide](./design-system.md)* 