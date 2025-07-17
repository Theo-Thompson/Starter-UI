import * as React from "react";

import { cn } from "@/shared/utils/utils";

interface InputProps extends React.ComponentProps<"input"> {
  error?: boolean;
  errorMessage?: string;
  helpText?: string;
  required?: boolean;
}

function Input({ 
  className, 
  type, 
  error = false,
  errorMessage,
  helpText,
  required = false,
  "aria-describedby": ariaDescribedby,
  ...props 
}: InputProps) {
  const generatedId = React.useId();
  const inputId = props.id || generatedId;
  const errorId = errorMessage ? `${inputId}-error` : undefined;
  const helpId = helpText ? `${inputId}-help` : undefined;
  
  const describedBy = [
    ariaDescribedby,
    errorId,
    helpId
  ].filter(Boolean).join(" ");

  return (
    <div className="space-y-1">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          error && "border-destructive focus-visible:ring-destructive/20",
          className
        )}
        {...(error && { "aria-invalid": "true" })}
        {...(describedBy && { "aria-describedby": describedBy })}
        {...(required && { "aria-required": "true" })}
        required={required}
        {...props}
      />
      {errorMessage && (
        <div 
          id={errorId}
          role="alert"
          className="text-sm text-destructive"
        >
          {errorMessage}
        </div>
      )}
      {helpText && (
        <div 
          id={helpId}
          className="text-sm text-muted-foreground"
        >
          {helpText}
        </div>
      )}
    </div>
  );
}

export { Input };
export type { InputProps };
