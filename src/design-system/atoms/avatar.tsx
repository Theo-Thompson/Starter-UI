"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/shared/utils/utils";

interface AvatarProps extends React.ComponentProps<typeof AvatarPrimitive.Root> {
  loading?: boolean;
}

function Avatar({
  className,
  loading = false,
  ...props
}: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      aria-busy={loading}
      {...props}
    />
  );
}

interface AvatarImageProps extends Omit<React.ComponentProps<typeof AvatarPrimitive.Image>, 'loading'> {
  alt?: string;
  isLoading?: boolean;
}

function AvatarImage({
  className,
  alt,
  isLoading = false,
  ...props
}: AvatarImageProps) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      alt={alt}
      aria-busy={isLoading}
      {...props}
    />
  );
}

interface AvatarFallbackProps extends React.ComponentProps<typeof AvatarPrimitive.Fallback> {
  loading?: boolean;
  loadingText?: string;
}

function AvatarFallback({
  className,
  loading = false,
  loadingText = "Loading profile photo",
  children,
  ...props
}: AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      aria-label={loading ? loadingText : undefined}
      {...props}
    >
      {loading ? "..." : children}
    </AvatarPrimitive.Fallback>
  );
}

export { Avatar, AvatarImage, AvatarFallback };
export type { AvatarProps, AvatarImageProps, AvatarFallbackProps };
