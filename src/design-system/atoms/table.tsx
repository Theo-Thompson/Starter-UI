import * as React from "react";

import { cn } from "@/shared/utils/utils";

interface TableProps extends React.ComponentProps<"table"> {
  caption?: string;
  description?: string;
}

function Table({ className, ...props }: TableProps) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  );
}

interface TableRowProps extends React.ComponentProps<"tr"> {
  selected?: boolean;
  selectable?: boolean;
}

function TableRow({ 
  className, 
  selected = false,
  selectable = false,
  ...props 
}: TableRowProps) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        selected && "bg-muted",
        selectable && "cursor-pointer",
        className
      )}
      {...(selectable && { "aria-selected": selected })}
      {...props}
    />
  );
}

interface TableHeadProps extends React.ComponentProps<"th"> {
  sortable?: boolean;
  sortDirection?: "ascending" | "descending" | "none";
  onSort?: () => void;
}

function TableHead({ 
  className, 
  sortable = false,
  sortDirection = "none",
  onSort,
  children,
  ...props 
}: TableHeadProps) {
  const content = sortable ? (
    <button
      type="button"
      className="flex items-center gap-1 hover:bg-muted/50 px-2 py-1 rounded-sm transition-colors"
      onClick={onSort}
      {...(sortDirection !== "none" && { "aria-pressed": true })}
    >
      {children}
      {sortDirection !== "none" && (
        <span className="text-xs">
          {sortDirection === "ascending" ? "↑" : "↓"}
        </span>
      )}
    </button>
  ) : children;

  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...(sortable && { "aria-sort": sortDirection })}
      {...props}
    >
      {content}
    </th>
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  );
}

interface TableCaptionProps extends React.ComponentProps<"caption"> {
  description?: string;
}

function TableCaption({
  className,
  description,
  children,
  ...props
}: TableCaptionProps) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    >
      {children}
      {description && (
        <div className="text-xs text-muted-foreground/70 mt-1">
          {description}
        </div>
      )}
    </caption>
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
export type { TableProps, TableRowProps, TableHeadProps, TableCaptionProps };
