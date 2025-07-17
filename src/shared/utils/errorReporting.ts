// Error reporting utility for consistent error handling across the application
// In production, this would integrate with services like Sentry, Bugsnag, etc.

import { logError } from './logger';

export interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  sessionId?: string;
  [key: string]: unknown;
}

export interface ErrorReport {
  error: Error;
  errorInfo?: React.ErrorInfo;
  context: ErrorContext;
  timestamp: string;
  userAgent?: string;
  url?: string;
}

class ErrorReporter {
  private isDevelopment = process.env.NODE_ENV === 'development';

  private generateSessionId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  private getErrorContext(context: ErrorContext): ErrorContext {
    return {
      ...context,
      sessionId: this.getSessionId(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
    };
  }

  private getSessionId(): string {
    if (typeof window === 'undefined') return 'server';
    
    let sessionId = sessionStorage.getItem('error_session_id');
    if (!sessionId) {
      sessionId = this.generateSessionId();
      sessionStorage.setItem('error_session_id', sessionId);
    }
    return sessionId;
  }

  private formatErrorReport(
    error: Error, 
    errorInfo?: React.ErrorInfo, 
    context: ErrorContext = {}
  ): ErrorReport {
    return {
      error,
      errorInfo,
      context: this.getErrorContext(context),
      timestamp: new Date().toISOString(),
    };
  }

  reportError(
    error: Error, 
    errorInfo?: React.ErrorInfo, 
    context: ErrorContext = {}
  ): void {
    const errorReport = this.formatErrorReport(error, errorInfo, context);
    
    // Log the error
    logError(error.message, {
      error: errorReport.error,
      stack: errorReport.error.stack,
      context: errorReport.context,
    });

    // In development, show in console
    if (this.isDevelopment) {
      console.group('🚨 Error Report');
      console.error('Error:', error);
      console.error('Context:', context);
      if (errorInfo) {
        console.error('Error Info:', errorInfo);
      }
      console.groupEnd();
    }

    // Send to error reporting service
    this.sendToErrorService(errorReport);
  }

  reportBoundaryError(
    error: Error, 
    errorInfo: React.ErrorInfo, 
    componentName: string
  ): void {
    this.reportError(error, errorInfo, {
      component: componentName,
      action: 'error-boundary',
    });
  }

  reportAsyncError(
    error: Error, 
    action: string, 
    context: ErrorContext = {}
  ): void {
    this.reportError(error, undefined, {
      ...context,
      action,
    });
  }

  private sendToErrorService(errorReport: ErrorReport): void {
    // In production, this would send to your error reporting service
    // For now, we'll store in localStorage for debugging
    if (typeof window !== 'undefined') {
      try {
        const errors = JSON.parse(localStorage.getItem('app_errors') || '[]');
        errors.push(errorReport);
        // Keep only last 50 errors
        if (errors.length > 50) {
          errors.splice(0, errors.length - 50);
        }
        localStorage.setItem('app_errors', JSON.stringify(errors));
      } catch {
        // Silently fail if localStorage is not available
      }
    }
  }

  // Method to manually capture errors from try-catch blocks
  captureError(
    error: unknown, 
    context: ErrorContext = {}
  ): void {
    if (error instanceof Error) {
      this.reportError(error, undefined, context);
    } else {
      // Handle non-Error objects
      const errorObj = new Error(String(error));
      this.reportError(errorObj, undefined, context);
    }
  }
}

export const errorReporter = new ErrorReporter();

// Convenience functions
export const reportError = (
  error: Error, 
  errorInfo?: React.ErrorInfo, 
  context?: ErrorContext
) => errorReporter.reportError(error, errorInfo, context);

export const reportBoundaryError = (
  error: Error, 
  errorInfo: React.ErrorInfo, 
  componentName: string
) => errorReporter.reportBoundaryError(error, errorInfo, componentName);

export const reportAsyncError = (
  error: Error, 
  action: string, 
  context?: ErrorContext
) => errorReporter.reportAsyncError(error, action, context);

export const captureError = (
  error: unknown, 
  context?: ErrorContext
) => errorReporter.captureError(error, context); 