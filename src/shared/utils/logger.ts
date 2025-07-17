// Logger utility for consistent logging across the application
// In production, this would integrate with services like Sentry, LogRocket, etc.

export const LogLevel = {
  DEBUG: 'debug',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error'
} as const;

export type LogLevel = typeof LogLevel[keyof typeof LogLevel];

interface LogContext {
  [key: string]: unknown;
}

interface LogEntry {
  level: LogLevel;
  message: string;
  context?: LogContext;
  timestamp: string;
  userId?: string;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';

  private formatLog(level: LogLevel, message: string, context?: LogContext): LogEntry {
    return {
      level,
      message,
      context,
      timestamp: new Date().toISOString(),
      // In a real app, you'd get this from auth context
      userId: typeof window !== 'undefined' ? localStorage.getItem('userId') || undefined : undefined
    };
  }

  private shouldLog(level: LogLevel): boolean {
    if (this.isDevelopment) return true;
    
    // In production, only log warnings and errors
    return level === LogLevel.WARN || level === LogLevel.ERROR;
  }

  debug(message: string, context?: LogContext): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      const logEntry = this.formatLog(LogLevel.DEBUG, message, context);
      if (this.isDevelopment) {
        console.debug(`[DEBUG] ${message}`, context);
      }
      // In production, send to logging service
      this.sendToLoggingService(logEntry);
    }
  }

  info(message: string, context?: LogContext): void {
    if (this.shouldLog(LogLevel.INFO)) {
      const logEntry = this.formatLog(LogLevel.INFO, message, context);
      if (this.isDevelopment) {
        console.info(`[INFO] ${message}`, context);
      }
      this.sendToLoggingService(logEntry);
    }
  }

  warn(message: string, context?: LogContext): void {
    if (this.shouldLog(LogLevel.WARN)) {
      const logEntry = this.formatLog(LogLevel.WARN, message, context);
      if (this.isDevelopment) {
        console.warn(`[WARN] ${message}`, context);
      }
      this.sendToLoggingService(logEntry);
    }
  }

  error(message: string, context?: LogContext): void {
    if (this.shouldLog(LogLevel.ERROR)) {
      const logEntry = this.formatLog(LogLevel.ERROR, message, context);
      if (this.isDevelopment) {
        console.error(`[ERROR] ${message}`, context);
      }
      this.sendToLoggingService(logEntry);
    }
  }

  private sendToLoggingService(logEntry: LogEntry): void {
    // In production, this would send to your logging service
    // For now, we'll just store in localStorage for debugging
    if (typeof window !== 'undefined') {
      try {
        const logs = JSON.parse(localStorage.getItem('app_logs') || '[]');
        logs.push(logEntry);
        // Keep only last 100 logs
        if (logs.length > 100) {
          logs.splice(0, logs.length - 100);
        }
        localStorage.setItem('app_logs', JSON.stringify(logs));
      } catch {
        // Silently fail if localStorage is not available
      }
    }
  }
}

export const logger = new Logger();

// Convenience functions
export const logDebug = (message: string, context?: LogContext) => logger.debug(message, context);
export const logInfo = (message: string, context?: LogContext) => logger.info(message, context);
export const logWarn = (message: string, context?: LogContext) => logger.warn(message, context);
export const logError = (message: string, context?: LogContext) => logger.error(message, context); 