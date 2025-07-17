import * as React from "react";
import { cn } from "@/shared/utils/utils";
import { reportBoundaryError } from "@/shared/utils/errorReporting";

// Live Region for dynamic content announcements
interface LiveRegionProps {
  children: React.ReactNode;
  className?: string;
  live?: "polite" | "assertive" | "off";
  busy?: boolean;
}

export function LiveRegion({ 
  children, 
  className, 
  live = "polite", 
  busy = false 
}: LiveRegionProps) {
  const ariaLive = live === "polite" ? "polite" : live === "assertive" ? "assertive" : "off";
  const ariaBusy = busy ? "true" : "false";
  
   
  return (
    <div
      aria-live={ariaLive}
      aria-busy={ariaBusy}
      className={cn("sr-only", className)}
    >
      {children}
    </div>
  );
   
}

// Error Boundary with accessibility support
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    reportBoundaryError(error, errorInfo, "AccessibilityHelpers");
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback;
      if (FallbackComponent) {
        return <FallbackComponent error={this.state.error!} resetError={this.resetError} />;
      }
      
      return (
        <div role="alert" className="p-4 border border-destructive rounded-md bg-destructive/10">
          <h2 className="text-lg font-semibold text-destructive mb-2">
            Something went wrong
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            {this.state.error?.message || "An unexpected error occurred"}
          </p>
          <button
            onClick={this.resetError}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Focus Trap for modals and overlays
interface FocusTrapProps {
  children: React.ReactNode;
  className?: string;
  enabled?: boolean;
}

export function FocusTrap({ children, className, enabled = true }: FocusTrapProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!enabled || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    container.addEventListener("keydown", handleKeyDown);
    firstElement?.focus();

    return () => {
      container.removeEventListener("keydown", handleKeyDown);
    };
  }, [enabled]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

// Skip Link for keyboard navigation
interface SkipLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
}

export function SkipLink({ 
  href, 
  children = "Skip to main content", 
  className 
}: SkipLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "absolute left-4 top-4 z-50 -translate-y-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform focus:translate-y-0",
        className
      )}
    >
      {children}
    </a>
  );
}

// Visually Hidden for screen reader only content
interface VisuallyHiddenProps {
  children: React.ReactNode;
  className?: string;
}

export function VisuallyHidden({ children, className }: VisuallyHiddenProps) {
  return (
    <span
      className={cn(
        "absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0",
        className
      )}
    >
      {children}
    </span>
  );
}

// Loading Spinner with accessibility
interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  "aria-label"?: string;
}

export function LoadingSpinner({ 
  size = "md", 
  className,
  "aria-label": ariaLabel = "Loading"
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6", 
    lg: "h-8 w-8"
  };

  return (
    <div
      role="status"
      aria-label={ariaLabel}
      className={cn(
        "animate-spin rounded-full border-2 border-current border-t-transparent",
        sizeClasses[size],
        className
      )}
    >
      <VisuallyHidden>{ariaLabel}</VisuallyHidden>
    </div>
  );
}

// Character Counter for form inputs
interface CharacterCounterProps {
  current: number;
  max: number;
  className?: string;
  showWarning?: boolean;
  warningThreshold?: number;
}

export function CharacterCounter({ 
  current, 
  max, 
  className,
  showWarning = true,
  warningThreshold = 0.8
}: CharacterCounterProps) {
  const percentage = current / max;
  const isWarning = showWarning && percentage >= warningThreshold;
  const isError = percentage >= 1;

  return (
    <div
      className={cn(
        "text-xs text-right",
        isError && "text-destructive",
        isWarning && !isError && "text-orange-600",
        !isWarning && !isError && "text-muted-foreground",
        className
      )}
      aria-live="polite"
    >
      {current} / {max}
      {isError && (
        <span className="sr-only">Character limit exceeded</span>
      )}
    </div>
  );
} 