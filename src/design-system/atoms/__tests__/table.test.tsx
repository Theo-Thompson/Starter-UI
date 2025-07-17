import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@/test/utils';
import userEvent from '@testing-library/user-event';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '../table';

describe('Table', () => {
  it('renders a table with default props', () => {
    render(
      <Table data-testid="table">
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const tableContainer = screen.getByTestId('table').parentElement;
    expect(tableContainer).toHaveAttribute('data-slot', 'table-container');
    expect(screen.getByTestId('table')).toHaveAttribute('data-slot', 'table');
  });

  it('applies custom className', () => {
    render(<Table className="custom-table" data-testid="table" />);
    expect(screen.getByTestId('table')).toHaveClass('custom-table');
  });

  it('forwards additional props', () => {
    render(<Table data-testid="table" data-custom="value" />);
    expect(screen.getByTestId('table')).toHaveAttribute('data-custom', 'value');
  });

  it('renders a caption and description', () => {
    render(
      <Table data-testid="table">
        <TableCaption description="desc" data-testid="caption">caption</TableCaption>
      </Table>
    );
    expect(screen.getByTestId('caption')).toHaveAttribute('data-slot', 'table-caption');
    expect(screen.getByText('caption')).toBeInTheDocument();
    expect(screen.getByText('desc')).toBeInTheDocument();
  });
});

describe('TableHeader', () => {
  it('renders thead with correct slot', () => {
    render(
      <Table>
        <TableHeader data-testid="thead">
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    );
    expect(screen.getByTestId('thead')).toHaveAttribute('data-slot', 'table-header');
  });
});

describe('TableBody', () => {
  it('renders tbody with correct slot', () => {
    render(
      <Table>
        <TableBody data-testid="tbody">
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('tbody')).toHaveAttribute('data-slot', 'table-body');
  });
});

describe('TableFooter', () => {
  it('renders tfoot with correct slot', () => {
    render(
      <Table>
        <TableFooter data-testid="tfoot">
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    expect(screen.getByTestId('tfoot')).toHaveAttribute('data-slot', 'table-footer');
  });
});

describe('TableRow', () => {
  it('renders tr with correct slot', () => {
    render(
      <Table>
        <TableBody>
          <TableRow data-testid="row">
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('row')).toHaveAttribute('data-slot', 'table-row');
  });

  it('applies selected and selectable props', () => {
    render(
      <Table>
        <TableBody>
          <TableRow data-testid="row" selected selectable>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const row = screen.getByTestId('row');
    expect(row).toHaveClass('bg-muted', 'cursor-pointer');
    expect(row).toHaveAttribute('aria-selected', 'true');
  });

  it('applies selectable but not selected', () => {
    render(
      <Table>
        <TableBody>
          <TableRow data-testid="row" selectable>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const row = screen.getByTestId('row');
    expect(row).toHaveClass('cursor-pointer');
    expect(row).toHaveAttribute('aria-selected', 'false');
  });
});

describe('TableHead', () => {
  it('renders th with correct slot', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead data-testid="th">Header</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    );
    expect(screen.getByTestId('th')).toHaveAttribute('data-slot', 'table-head');
  });

  it('renders sortable head and handles click', async () => {
    const user = userEvent.setup();
    const onSort = vi.fn();
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead data-testid="th" sortable sortDirection="ascending" onSort={onSort}>
              Sortable
            </TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    );
    const th = screen.getByTestId('th');
    const button = th.querySelector('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-pressed', 'true');
    expect(button).toHaveTextContent('Sortable');
    expect(button).toHaveTextContent('↑');
    await user.click(button!);
    expect(onSort).toHaveBeenCalled();
  });

  it('renders non-sortable head', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead data-testid="th">Header</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    );
    const th = screen.getByTestId('th');
    expect(th.querySelector('button')).not.toBeInTheDocument();
    expect(th).toHaveTextContent('Header');
  });
});

describe('TableCell', () => {
  it('renders td with correct slot', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell data-testid="td">Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('td')).toHaveAttribute('data-slot', 'table-cell');
    expect(screen.getByTestId('td')).toHaveTextContent('Cell');
  });
});

describe('TableCaption', () => {
  it('renders caption with correct slot and description', () => {
    render(
      <Table>
        <TableCaption data-testid="caption" description="desc">caption</TableCaption>
      </Table>
    );
    const caption = screen.getByTestId('caption');
    expect(caption).toHaveAttribute('data-slot', 'table-caption');
    expect(caption).toHaveTextContent('caption');
    expect(caption).toHaveTextContent('desc');
  });
});

describe('Table composition', () => {
  it('renders a complete table with all subcomponents', () => {
    render(
      <Table data-testid="table">
        <TableCaption data-testid="caption">caption</TableCaption>
        <TableHeader>
          <TableRow data-testid="header-row">
            <TableHead data-testid="th1">Header 1</TableHead>
            <TableHead data-testid="th2">Header 2</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow data-testid="body-row">
            <TableCell data-testid="td1">Cell 1</TableCell>
            <TableCell data-testid="td2">Cell 2</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow data-testid="footer-row">
            <TableCell data-testid="footer-cell">Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    expect(screen.getByTestId('table')).toBeInTheDocument();
    expect(screen.getByTestId('caption')).toBeInTheDocument();
    expect(screen.getByTestId('header-row')).toBeInTheDocument();
    expect(screen.getByTestId('th1')).toBeInTheDocument();
    expect(screen.getByTestId('th2')).toBeInTheDocument();
    expect(screen.getByTestId('body-row')).toBeInTheDocument();
    expect(screen.getByTestId('td1')).toBeInTheDocument();
    expect(screen.getByTestId('td2')).toBeInTheDocument();
    expect(screen.getByTestId('footer-row')).toBeInTheDocument();
    expect(screen.getByTestId('footer-cell')).toBeInTheDocument();
  });
}); 