
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/design-system/atoms/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/design-system/atoms/avatar';
import { Badge } from '@/design-system/atoms/badge';
import { Separator } from '@/design-system/atoms/separator';
import { EditableField } from '@/design-system/molecules/common/EditableField';
import { useAuth } from '@/shared/contexts/AuthContext';
import { User, Mail } from 'lucide-react';

export function ProfileCard() {
  const { user, updateProfile } = useAuth();

  if (!user) return null;

  const handleNameUpdate = (newName: string) => {
    updateProfile({ name: newName });
  };

  const handleBioUpdate = (newBio: string) => {
    updateProfile({ bio: newBio });
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Profile Information
        </CardTitle>
        <CardDescription>
          Manage your personal profile information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Avatar and Basic Info */}
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <Avatar className="h-20 w-20 flex-shrink-0 mx-auto sm:mx-0">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="text-lg">
              {user.name?.charAt(0)?.toUpperCase() || 'U'}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 w-full space-y-4">
            <EditableField
              label="Name"
              value={user.name}
              onSave={handleNameUpdate}
              placeholder="Enter your name"
            />
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Email</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">{user.email}</span>
                <Badge variant="secondary" className="text-xs">
                  Primary
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bio Section */}
        <EditableField
          label="Bio"
          value={user.bio || ''}
          onSave={handleBioUpdate}
          placeholder="Tell us about yourself..."
          multiline={true}
        />

        <Separator />

        {/* Account Details */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-sm font-medium">Account ID</span>
              <p className="text-sm text-muted-foreground">{user.id}</p>
            </div>
            <div className="space-y-1">
              <span className="text-sm font-medium">Account Created</span>
              <p className="text-sm text-muted-foreground">
                {new Date(user.accountCreated).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 