import * as React from "react";

import { cn } from "@/shared/utils/utils";

interface TextareaProps extends React.ComponentProps<"textarea"> {
  error?: boolean;
  errorMessage?: string;
  helpText?: string;
  required?: boolean;
  maxLength?: number;
  showCharacterCount?: boolean;
}

function Textarea({ 
  className, 
  error = false,
  errorMessage,
  helpText,
  required = false,
  maxLength,
  showCharacterCount = false,
  "aria-describedby": ariaDescribedby,
  ...props 
}: TextareaProps) {
  const generatedId = React.useId();
  const textareaId = props.id || generatedId;
  const errorId = errorMessage ? `${textareaId}-error` : undefined;
  const helpId = helpText ? `${textareaId}-help` : undefined;
  const countId = showCharacterCount ? `${textareaId}-count` : undefined;
  
  const describedBy = [
    ariaDescribedby,
    errorId,
    helpId,
    countId
  ].filter(Boolean).join(" ");

  const currentLength = props.value?.toString().length || 0;

  return (
    <div className="space-y-1">
      <textarea
        data-slot="textarea"
        className={cn(
          "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          error && "border-destructive focus-visible:ring-destructive/20",
          className
        )}
        {...(error && { "aria-invalid": "true" })}
        {...(describedBy && { "aria-describedby": describedBy })}
        {...(required && { "aria-required": "true" })}
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
      {showCharacterCount && maxLength && (
        <div 
          id={countId}
          className="text-xs text-muted-foreground text-right"
        >
          {currentLength} / {maxLength}
        </div>
      )}
    </div>
  );
}

export { Textarea };
export type { TextareaProps };
