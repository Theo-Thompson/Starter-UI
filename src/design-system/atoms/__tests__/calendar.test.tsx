import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Calendar, CalendarDayButton } from '../calendar';
import React from 'react';
import { CalendarDay } from 'react-day-picker';

type Modifiers = Record<string, boolean>;

// Helper to get today as a Date object
const today = new Date();


describe('Calendar', () => {
  it('renders the calendar root with data-slot', () => {
    render(<Calendar />);
    const root = screen.getByTestId('calendar-root');
    expect(root).toBeInTheDocument();
    expect(root).toHaveAttribute('data-slot', 'calendar');
  });
});

describe('CalendarDayButton', () => {
  function makeDay(date: Date) {
    // Use the same date for displayMonth for simplicity
    return new CalendarDay(date, date);
  }

  it('renders with correct day and data attributes', () => {
    const day = makeDay(today);
    const modifiers: Modifiers = { selected: false, focused: false };
    render(
      <CalendarDayButton
        day={day}
        modifiers={modifiers}
        className="test-class"
      >
        {today.getDate()}
      </CalendarDayButton>
    );
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute('data-day', today.toLocaleDateString());
    expect(btn).toHaveClass('test-class');
  });

  it('applies data-selected-single when only selected', () => {
    const day = makeDay(today);
    const modifiers: Modifiers = { selected: true, focused: false };
    render(
      <CalendarDayButton day={day} modifiers={modifiers} />
    );
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('data-selected-single', 'true');
  });

  it('applies data-range-start, data-range-end, data-range-middle', () => {
    const day = makeDay(today);
    render(
      <>
        <CalendarDayButton day={day} modifiers={{ range_start: true, selected: true, focused: false }} />
        <CalendarDayButton day={day} modifiers={{ range_end: true, selected: true, focused: false }} />
        <CalendarDayButton day={day} modifiers={{ range_middle: true, selected: true, focused: false }} />
      </>
    );
    const [start, end, middle] = screen.getAllByRole('button');
    expect(start).toHaveAttribute('data-range-start', 'true');
    expect(end).toHaveAttribute('data-range-end', 'true');
    expect(middle).toHaveAttribute('data-range-middle', 'true');
  });

  it('focuses when modifiers.focused is true', () => {
    const day = makeDay(today);
    const modifiers: Modifiers = { selected: false, focused: true };
    render(
      <CalendarDayButton day={day} modifiers={modifiers} />
    );
    const btn = screen.getByRole('button');
    expect(document.activeElement).toBe(btn);
  });

  it('forwards additional props', () => {
    const day = makeDay(today);
    const modifiers: Modifiers = { selected: false, focused: false };
    render(
      <CalendarDayButton day={day} modifiers={modifiers} data-testid="day-btn" />
    );
    expect(screen.getByTestId('day-btn')).toBeInTheDocument();
  });
});

// Patch Calendar to add data-testid to the root for easier selection in tests
vi.mock('react-day-picker', async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...(mod as Record<string, unknown>),
    DayPicker: (props: unknown) => {
      if (!props || typeof props !== 'object') return null;
      const { components = {} } = props as { components?: Record<string, unknown> };
      let Root = components.Root;
      if (typeof Root !== 'function') {
        Root = ({ className, rootRef }: React.HTMLAttributes<HTMLDivElement> & { rootRef?: React.Ref<HTMLDivElement> }) => <div ref={rootRef} className={className} />;
      }
      const RootComponent = Root as React.FC<unknown>;
      if (typeof RootComponent !== 'function') return null;
      return <RootComponent data-slot="calendar" data-testid="calendar-root" />;
    },
  };
}); 