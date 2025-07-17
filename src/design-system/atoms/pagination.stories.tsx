import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { Button } from "./button";

const meta: Meta<typeof Pagination> = {
  title: 'Design System/Organisms/Pagination',
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# Pagination Component

A pagination component for navigating through large datasets in Amazon waste management systems.

## Design Guidelines

### Visual Hierarchy
- **Current Page**: Bold highlighting with primary color
- **Navigation**: Clear previous/next buttons with icons
- **Page Numbers**: Clickable links with hover states
- **Ellipsis**: Indicates truncated page ranges

### Accessibility
- **WCAG 2.1 AA Compliant**: Full keyboard navigation support
- **Screen Reader**: Proper ARIA labels and page announcements
- **Focus Management**: Clear focus indicators and logical tab order
- **Page Context**: Current page and total pages clearly indicated

### Amazon Waste Management Integration
- **Poster Lists**: Navigate through waste education materials
- **Facility Data**: Browse through facility waste reports
- **Request History**: Page through poster request records
- **Analytics**: Navigate through waste metrics and reports

## Technical Implementation

### Core Features
- Configurable page size and total items
- Previous/next navigation with disabled states
- Ellipsis for large page ranges
- Responsive design for mobile devices
- Customizable styling and behavior

### State Management
- Current page state tracking
- Page change event handling
- Integration with data fetching
- URL synchronization support

### Customization
- Custom page size options
- Flexible styling with CSS variables
- Icon customization for navigation
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
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
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
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const SimplePagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = 5;

    return (
      <div className="space-y-4">
        <div className="text-sm text-muted-foreground text-center">
          Page {currentPage} of {totalPages}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i + 1}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === i + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(i + 1);
                  }}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  },
};

export const WithEllipsis: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(5);
    const totalPages = 20;

    const renderPageNumbers = () => {
      const pages = [];
      const showEllipsis = totalPages > 7;

      if (!showEllipsis) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={currentPage === i}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(i);
                }}
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }
      } else {
        // Always show first page
        pages.push(
          <PaginationItem key={1}>
            <PaginationLink
              href="#"
              isActive={currentPage === 1}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(1);
              }}
            >
              1
            </PaginationLink>
          </PaginationItem>
        );

        // Show ellipsis if current page is > 3
        if (currentPage > 3) {
          pages.push(
            <PaginationItem key="ellipsis-start">
              <PaginationEllipsis />
            </PaginationItem>
          );
        }

        // Show pages around current page
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) {
          pages.push(
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={currentPage === i}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(i);
                }}
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }

        // Show ellipsis if current page is < totalPages - 2
        if (currentPage < totalPages - 2) {
          pages.push(
            <PaginationItem key="ellipsis-end">
              <PaginationEllipsis />
            </PaginationItem>
          );
        }

        // Always show last page
        pages.push(
          <PaginationItem key={totalPages}>
            <PaginationLink
              href="#"
              isActive={currentPage === totalPages}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(totalPages);
              }}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        );
      }

      return pages;
    };

    return (
      <div className="space-y-4">
        <div className="text-sm text-muted-foreground text-center">
          Page {currentPage} of {totalPages}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            {renderPageNumbers()}
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  },
};

export const AmazonPosterCatalog: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = 12;
    const itemsPerPage = 10;
    const totalItems = 115;

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return (
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Waste Management Poster Catalog</CardTitle>
          <CardDescription>
            Browse through available waste education materials for Amazon facilities
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Showing {startItem}-{endItem} of {totalItems} posters</span>
            <Badge variant="secondary">
              {itemsPerPage} per page
            </Badge>
          </div>
          
          <div className="space-y-2">
            {Array.from({ length: Math.min(itemsPerPage, totalItems - startItem + 1) }, (_, i) => {
              const itemNumber = startItem + i;
              return (
                <div key={itemNumber} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">
                      Waste Guidelines Poster #{itemNumber.toString().padStart(3, '0')}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {itemNumber % 3 === 0 ? 'Hazardous Waste Safety' : 
                       itemNumber % 3 === 1 ? 'General Recycling Guidelines' : 
                       'Waste Reduction Best Practices'}
                    </div>
                  </div>
                  <Badge variant={itemNumber % 4 === 0 ? "destructive" : "secondary"}>
                    {itemNumber % 4 === 0 ? 'Critical' : 'Standard'}
                  </Badge>
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {/* First page */}
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === 1}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(1);
                    }}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                
                {/* Ellipsis if needed */}
                {currentPage > 3 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                
                {/* Pages around current */}
                {Array.from({ length: 3 }, (_, i) => {
                  const page = currentPage - 1 + i;
                  if (page > 1 && page < totalPages) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          isActive={currentPage === page}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }
                  return null;
                }).filter(Boolean)}
                
                {/* Ellipsis if needed */}
                {currentPage < totalPages - 2 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                
                {/* Last page */}
                {totalPages > 1 && (
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === totalPages}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(totalPages);
                      }}
                    >
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                )}
                
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const FacilityReports: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = 8;
    const reportsPerPage = 5;

    const facilities = [
      { code: "SEA1", name: "Seattle Fulfillment Center", waste: "45.2 tons", recycling: "89%" },
      { code: "SEA2", name: "Tacoma Distribution Center", waste: "32.1 tons", recycling: "91%" },
      { code: "SEA3", name: "Spokane Sortation Center", waste: "28.7 tons", recycling: "85%" },
      { code: "PDX1", name: "Portland Fulfillment Center", waste: "41.8 tons", recycling: "87%" },
      { code: "PDX2", name: "Portland Distribution Center", waste: "35.4 tons", recycling: "92%" },
    ];

    return (
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Facility Waste Reports</CardTitle>
          <CardDescription>
            Monthly waste generation and recycling data for North America facilities
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Showing facilities {((currentPage - 1) * reportsPerPage) + 1}-{Math.min(currentPage * reportsPerPage, totalPages * reportsPerPage)} of {totalPages * reportsPerPage}</span>
            <Badge variant="outline">
              Monthly Report - March 2024
            </Badge>
          </div>
          
          <div className="space-y-3">
            {facilities.map((facility) => (
              <div key={facility.code} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary">
                    {facility.code}
                  </Badge>
                  <div>
                    <div className="font-medium">{facility.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Total Waste: {facility.waste} | Recycling Rate: {facility.recycling}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Badge variant={parseInt(facility.recycling) >= 90 ? "default" : "secondary"}>
                    {parseInt(facility.recycling) >= 90 ? "Excellent" : "Good"}
                  </Badge>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => (
                  <PaginationItem key={i + 1}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === i + 1}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(i + 1);
                      }}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const RequestHistory: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = 15;
    const requestsPerPage = 8;

    const requests = [
      { id: "REQ-001", type: "Recycling Guidelines", facility: "SEA1", status: "Approved", date: "2024-03-15" },
      { id: "REQ-002", type: "Hazardous Waste Safety", facility: "SEA2", status: "Pending", date: "2024-03-14" },
      { id: "REQ-003", type: "General Waste Guidelines", facility: "SEA3", status: "Installed", date: "2024-03-13" },
      { id: "REQ-004", type: "Waste Reduction Tips", facility: "PDX1", status: "Approved", date: "2024-03-12" },
      { id: "REQ-005", type: "Break Room Guidelines", facility: "PDX2", status: "Rejected", date: "2024-03-11" },
      { id: "REQ-006", type: "Warehouse Safety", facility: "SEA1", status: "Installed", date: "2024-03-10" },
      { id: "REQ-007", type: "Recycling Best Practices", facility: "SEA2", status: "Pending", date: "2024-03-09" },
      { id: "REQ-008", type: "Hazardous Material Handling", facility: "SEA3", status: "Approved", date: "2024-03-08" },
    ];

    return (
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Poster Request History</CardTitle>
          <CardDescription>
            Track all poster installation requests across Amazon facilities
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Showing requests {((currentPage - 1) * requestsPerPage) + 1}-{Math.min(currentPage * requestsPerPage, totalPages * requestsPerPage)} of {totalPages * requestsPerPage}</span>
            <div className="flex space-x-2">
              <Badge variant="secondary">March 2024</Badge>
              <Badge variant="outline">All Facilities</Badge>
            </div>
          </div>
          
          <div className="space-y-2">
            {requests.map((request) => (
              <div key={request.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <Badge variant="outline" className="font-mono">
                    {request.id}
                  </Badge>
                  <div>
                    <div className="font-medium">{request.type}</div>
                    <div className="text-sm text-muted-foreground">
                      {request.facility} • {request.date}
                    </div>
                  </div>
                </div>
                <Badge 
                  variant={
                    request.status === "Installed" ? "default" :
                    request.status === "Approved" ? "secondary" :
                    request.status === "Pending" ? "outline" :
                    "destructive"
                  }
                >
                  {request.status}
                </Badge>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {/* Show first few pages */}
                {Array.from({ length: Math.min(3, totalPages) }, (_, i) => (
                  <PaginationItem key={i + 1}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === i + 1}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(i + 1);
                      }}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                {/* Ellipsis if needed */}
                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                
                {/* Show last few pages */}
                {totalPages > 3 && Array.from({ length: Math.min(2, totalPages - 3) }, (_, i) => {
                  const page = totalPages - 1 + i;
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        isActive={currentPage === page}
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(page);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const ResponsiveExample: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPages = 10;

    return (
      <div className="w-full max-w-sm mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Mobile Pagination</CardTitle>
            <CardDescription>
              Pagination optimized for mobile devices
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </div>
            
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {/* Show only current page and neighbors on mobile */}
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(currentPage - 1);
                      }}
                    >
                      {currentPage - 1}
                    </PaginationLink>
                  </PaginationItem>
                )}
                
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    {currentPage}
                  </PaginationLink>
                </PaginationItem>
                
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(currentPage + 1);
                      }}
                    >
                      {currentPage + 1}
                    </PaginationLink>
                  </PaginationItem>
                )}
                
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const InteractiveExample: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [itemsPerPage, setItemsPerPage] = React.useState(10);
    const totalItems = 247;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Showing {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} items
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Items per page:</span>
            <select 
              value={itemsPerPage} 
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border rounded px-2 py-1 text-sm"
              aria-label="Items per page"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
        
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            
            {/* First page */}
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive={currentPage === 1}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(1);
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>
            
            {/* Ellipsis and middle pages */}
            {totalPages > 5 && currentPage > 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            
            {/* Current page area */}
            {Array.from({ length: 3 }, (_, i) => {
              const page = currentPage - 1 + i;
              if (page > 1 && page < totalPages) {
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === page}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(page);
                      }}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              }
              return null;
            }).filter(Boolean)}
            
            {/* Ellipsis and last page */}
            {totalPages > 5 && currentPage < totalPages - 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            
            {totalPages > 1 && (
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={currentPage === totalPages}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(totalPages);
                  }}
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            )}
            
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        
        <div className="text-center text-sm text-muted-foreground">
          Page {currentPage} of {totalPages} • Total items: {totalItems}
        </div>
      </div>
    );
  },
}; 