import React, { useState } from 'react';
import { Button } from '@/design-system/atoms/button';
import { Input } from '@/design-system/atoms/input';
import { Textarea } from '@/design-system/atoms/textarea';
import { Label } from '@/design-system/atoms/label';
import { Check, X, Edit2 } from 'lucide-react';
import { toast } from 'sonner';

interface EditableFieldProps {
  label: string;
  value: string;
  onSave: (newValue: string) => void;
  placeholder?: string;
  multiline?: boolean;
  disabled?: boolean;
}

export function EditableField({ 
  label, 
  value, 
  onSave, 
  placeholder, 
  multiline = false, 
  disabled = false 
}: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleSave = () => {
    onSave(editValue);
    setIsEditing(false);
    toast.success(`${label} updated successfully`);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setEditValue(value);
    setIsEditing(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      handleSave();
    }
    if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      
      {isEditing ? (
        <div className="space-y-2">
          {multiline ? (
            <Textarea
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              className="min-h-[80px] resize-none"
              autoFocus
            />
          ) : (
            <Input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              autoFocus
            />
          )}
          
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={handleSave}
              className="h-8"
            >
              <Check className="h-3 w-3 mr-1" />
              Save
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleCancel}
              className="h-8"
            >
              <X className="h-3 w-3 mr-1" />
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div className="group relative">
          <div className="min-h-[40px] flex items-center">
            {value ? (
              <span className={`text-sm ${multiline ? 'whitespace-pre-wrap' : ''}`}>
                {value}
              </span>
            ) : (
              <span className="text-sm text-muted-foreground italic">
                {placeholder || `Click to add ${label.toLowerCase()}`}
              </span>
            )}
          </div>
          
          {!disabled && (
            <Button
              size="sm"
              variant="ghost"
              className="absolute right-0 top-0 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleEdit}
              aria-label={`Edit ${label.toLowerCase()}`}
            >
              <Edit2 className="h-3 w-3" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
} 