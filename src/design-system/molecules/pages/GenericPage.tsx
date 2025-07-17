import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/design-system/atoms/card';

interface GenericPageProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function GenericPage({ title, description, children }: GenericPageProps) {
  return (
    <div className="p-6 h-full">
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          {description && (
            <CardDescription className="text-base">{description}</CardDescription>
          )}
        </CardHeader>
        <CardContent>
          {children || (
            <div className="space-y-4">
              <p className="text-muted-foreground">
                This is a placeholder page for the <strong>{title}</strong> section of the application shell framework.
              </p>
              <p className="text-sm text-muted-foreground">
                In a real application, this would contain the actual content and functionality for the {title.toLowerCase()} page.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 