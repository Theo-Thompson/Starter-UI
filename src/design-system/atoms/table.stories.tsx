import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow
} from './table';
import { Badge } from './badge';
import { Button } from './button';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Input } from './input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Plus, Edit, Trash2 } from 'lucide-react';

const meta: Meta<typeof Table> = {
  title: 'Design System/Organisms/Table',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Table Component

A flexible table component for displaying structured data with support for sorting, filtering, and various content types. Built with semantic HTML and accessibility in mind.

## Design Guidelines

### When to Use
- **Data display**: Show structured information in rows and columns
- **Comparison**: Compare multiple items across different attributes
- **Lists with details**: Display lists with multiple data points per item
- **Reports**: Present analytical data and metrics

### When Not to Use
- **Simple lists**: Use list components for basic item lists
- **Very wide data**: Consider horizontal scrolling or card layouts
- **Mobile-first**: Tables can be challenging on small screens
- **Single column**: Use a simple list instead

## Accessibility

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Screen Reader Support**: Proper table headers and cell associations
- **Semantic HTML**: Uses proper table elements and structure
- **Responsive Design**: Handles overflow gracefully

## Technical Implementation

### Components
- \`Table\`: Root table container with overflow handling
- \`TableHeader\`: Table header section (\`thead\`)
- \`TableBody\`: Table body section (\`tbody\`)
- \`TableFooter\`: Table footer section (\`tfoot\`)
- \`TableRow\`: Table row (\`tr\`)
- \`TableHead\`: Table header cell (\`th\`)
- \`TableCell\`: Table data cell (\`td\`)
- \`TableCaption\`: Table caption for accessibility

### Features
- **Responsive**: Horizontal scrolling for wide tables
- **Hover states**: Row highlighting on hover
- **Selection**: Support for row selection states
- **Sorting**: Visual indicators for sortable columns
- **Flexible content**: Support for various content types

## Best Practices

1. **Clear headers**: Use descriptive column headers
2. **Consistent alignment**: Align data appropriately (numbers right, text left)
3. **Zebra striping**: Consider alternating row colors for long tables
4. **Loading states**: Show loading indicators for dynamic data
5. **Empty states**: Provide helpful messages when no data is available
6. **Pagination**: Break up large datasets into manageable chunks
        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

// Basic Table
export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of recent invoices</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>Unpaid</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$350.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Table with Badges
export const WithBadges: Story = {
  render: () => (
    <Table>
      <TableCaption>Order status tracking</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">ORD-001</TableCell>
          <TableCell>John Doe</TableCell>
          <TableCell>
            <Badge variant="default">Shipped</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="secondary">Normal</Badge>
          </TableCell>
          <TableCell className="text-right">$125.99</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">ORD-002</TableCell>
          <TableCell>Jane Smith</TableCell>
          <TableCell>
            <Badge variant="secondary">Processing</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="destructive">Urgent</Badge>
          </TableCell>
          <TableCell className="text-right">$89.50</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">ORD-003</TableCell>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>
            <Badge variant="outline">Pending</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="secondary">Normal</Badge>
          </TableCell>
          <TableCell className="text-right">$199.99</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Table with Actions
export const WithActions: Story = {
  render: () => (
    <Table>
      <TableCaption>User management</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Alice Johnson</TableCell>
          <TableCell>alice@example.com</TableCell>
          <TableCell>Admin</TableCell>
          <TableCell>
            <Badge variant="default">Active</Badge>
          </TableCell>
          <TableCell className="text-right">
            <div className="flex justify-end gap-2">
              <Button variant="outline" size="sm">Edit</Button>
              <Button variant="destructive" size="sm">Delete</Button>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Bob Smith</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>Editor</TableCell>
          <TableCell>
            <Badge variant="secondary">Inactive</Badge>
          </TableCell>
          <TableCell className="text-right">
            <div className="flex justify-end gap-2">
              <Button variant="outline" size="sm">Edit</Button>
              <Button variant="destructive" size="sm">Delete</Button>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Carol Wilson</TableCell>
          <TableCell>carol@example.com</TableCell>
          <TableCell>Viewer</TableCell>
          <TableCell>
            <Badge variant="default">Active</Badge>
          </TableCell>
          <TableCell className="text-right">
            <div className="flex justify-end gap-2">
              <Button variant="outline" size="sm">Edit</Button>
              <Button variant="destructive" size="sm">Delete</Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Table with Avatars
export const WithAvatars: Story = {
  render: () => (
    <Table>
      <TableCaption>Team members</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Member</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Last Active</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="John" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-muted-foreground">john@example.com</div>
              </div>
            </div>
          </TableCell>
          <TableCell>Engineering</TableCell>
          <TableCell>Seattle, WA</TableCell>
          <TableCell>2 hours ago</TableCell>
          <TableCell className="text-right">
            <Button variant="outline" size="sm">View Profile</Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" alt="Jane" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Jane Smith</div>
                <div className="text-sm text-muted-foreground">jane@example.com</div>
              </div>
            </div>
          </TableCell>
          <TableCell>Operations</TableCell>
          <TableCell>Austin, TX</TableCell>
          <TableCell>1 day ago</TableCell>
          <TableCell className="text-right">
            <Button variant="outline" size="sm">View Profile</Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback>BJ</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Bob Johnson</div>
                <div className="text-sm text-muted-foreground">bob@example.com</div>
              </div>
            </div>
          </TableCell>
          <TableCell>Design</TableCell>
          <TableCell>New York, NY</TableCell>
          <TableCell>3 days ago</TableCell>
          <TableCell className="text-right">
            <Button variant="outline" size="sm">View Profile</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Application Request Management Table
export const RequestManagement: Story = {
  render: () => {
    const data = [
      {
        id: 'REQ-001',
        name: 'John Smith',
        email: 'john.smith@example.com',
        department: 'Engineering',
        requestType: 'General Request',
        status: 'Pending',
        priority: 'Medium',
        createdAt: '2024-03-10',
        updatedAt: '2024-03-12'
      },
      {
        id: 'REQ-002',
        name: 'Sarah Johnson',
        email: 'sarah.johnson@example.com', 
        department: 'Marketing',
        requestType: 'Feature Request',
        status: 'Approved',
        priority: 'High',
        createdAt: '2024-03-12',
        updatedAt: '2024-03-13'
      },
      {
        id: 'REQ-003',
        name: 'Mike Wilson',
        email: 'mike.wilson@example.com',
        department: 'Sales',
        requestType: 'Support Request',
        status: 'In Progress',
        priority: 'Low',
        createdAt: '2024-03-13',
        updatedAt: '2024-03-14'
      },
      {
        id: 'REQ-004',
        name: 'Lisa Chen',
        email: 'lisa.chen@example.com',
        department: 'Operations',
        requestType: 'Bug Report',
        status: 'Completed',
        priority: 'High',
        createdAt: '2024-03-14',
        updatedAt: '2024-03-15'
      }
    ];

    return (
      <div className="w-full max-w-6xl mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary-brand">Application Requests</CardTitle>
            <CardDescription>
              Manage and track application requests across all departments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Search requests..."
                  className="max-w-sm"
                />
                <Select defaultValue="all">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Requests</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-primary-brand hover:bg-primary-brand/90">
                <Plus className="h-4 w-4 mr-2" />
                New Request
              </Button>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Request Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.id}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-muted-foreground">{item.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>{item.department}</TableCell>
                      <TableCell>{item.requestType}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            item.status === 'Completed' ? 'default' :
                            item.status === 'Approved' ? 'secondary' :
                            item.status === 'In Progress' ? 'outline' : 'destructive'
                          }
                        >
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={item.priority === 'High' ? 'destructive' : 'secondary'}
                        >
                          {item.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>{item.createdAt}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Showing 1-4 of 4 requests
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

// Data Table with Sorting
export const DataTable: Story = {
  render: () => {
    const [sortField, setSortField] = useState<string>('');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    
    const handleSort = (field: string) => {
      if (sortField === field) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortField(field);
        setSortDirection('asc');
      }
    };
    
    const SortableHeader = ({ field, children }: { field: string; children: React.ReactNode }) => (
      <TableHead 
        className="cursor-pointer select-none hover:bg-muted/50"
        onClick={() => handleSort(field)}
      >
        <div className="flex items-center gap-2">
          {children}
          {sortField === field && (
            <span className="text-xs">
              {sortDirection === 'asc' ? '↑' : '↓'}
            </span>
          )}
        </div>
      </TableHead>
    );
    
    return (
      <Table>
        <TableCaption>Facility waste statistics (click headers to sort)</TableCaption>
        <TableHeader>
          <TableRow>
            <SortableHeader field="facility">Facility</SortableHeader>
            <SortableHeader field="waste">Waste Generated (tons)</SortableHeader>
            <SortableHeader field="recycled">Recycled (%)</SortableHeader>
            <SortableHeader field="cost">Cost Savings</SortableHeader>
            <SortableHeader field="score">Sustainability Score</SortableHeader>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">SEA1 - Seattle</TableCell>
            <TableCell>145.2</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <div className="w-12 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }} />
                </div>
                78%
              </div>
            </TableCell>
            <TableCell>$12,450</TableCell>
            <TableCell>
              <Badge variant="default">Excellent</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">DFW1 - Dallas</TableCell>
            <TableCell>203.7</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <div className="w-12 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '65%' }} />
                </div>
                65%
              </div>
            </TableCell>
            <TableCell>$8,920</TableCell>
            <TableCell>
              <Badge variant="secondary">Good</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">JFK8 - New York</TableCell>
            <TableCell>189.1</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <div className="w-12 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '82%' }} />
                </div>
                82%
              </div>
            </TableCell>
            <TableCell>$15,200</TableCell>
            <TableCell>
              <Badge variant="default">Excellent</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">LAX9 - Los Angeles</TableCell>
            <TableCell>167.5</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <div className="w-12 bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '45%' }} />
                </div>
                45%
              </div>
            </TableCell>
            <TableCell>$5,100</TableCell>
            <TableCell>
              <Badge variant="destructive">Needs Improvement</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
};

// Empty State Table
export const EmptyState: Story = {
  render: () => (
    <Table>
      <TableCaption>No waste poster requests found</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Request ID</TableHead>
          <TableHead>Facility</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={5} className="text-center py-8">
            <div className="text-muted-foreground">
              <div className="text-2xl mb-2">📋</div>
              <div className="font-medium">No requests found</div>
              <div className="text-sm">Get started by creating your first waste poster request</div>
              <Button className="mt-4 bg-primary-brand hover:bg-primary-brand/90">
                Create Request
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Responsive Table
export const ResponsiveTable: Story = {
  render: () => (
    <div className="w-full max-w-xs sm:max-w-2xl">
      <Table>
        <TableCaption>Responsive table example</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="hidden sm:table-cell">Email</TableHead>
            <TableHead className="hidden md:table-cell">Department</TableHead>
            <TableHead className="hidden lg:table-cell">Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>001</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell className="hidden sm:table-cell">john@example.com</TableCell>
            <TableCell className="hidden md:table-cell">Engineering</TableCell>
            <TableCell className="hidden lg:table-cell">Seattle</TableCell>
            <TableCell>
              <Badge variant="default">Active</Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button variant="outline" size="sm">Edit</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>002</TableCell>
            <TableCell>Jane Smith</TableCell>
            <TableCell className="hidden sm:table-cell">jane@example.com</TableCell>
            <TableCell className="hidden md:table-cell">Design</TableCell>
            <TableCell className="hidden lg:table-cell">Austin</TableCell>
            <TableCell>
              <Badge variant="secondary">Inactive</Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button variant="outline" size="sm">Edit</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
}; 