
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/design-system/atoms/card';
import { Badge } from '@/design-system/atoms/badge';
import { Separator } from '@/design-system/atoms/separator';
import { useAuth } from '@/shared/contexts/AuthContext';
import { Shield, Clock, Activity, Calendar } from 'lucide-react';

export function AccountInfoCard() {
  const { user } = useAuth();

  if (!user) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getSessionDuration = () => {
    const sessionStart = new Date(user.lastLogin);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - sessionStart.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''}`;
    } else {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} hour${hours !== 1 ? 's' : ''}`;
    }
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Account Information
        </CardTitle>
        <CardDescription>
          View your account details and session information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Account Status */}
        <div className="space-y-3">
          <span className="text-sm font-medium">Account Status</span>
          <div className="flex items-center gap-2">
            <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-100">
              <Activity className="h-3 w-3 mr-1" />
              Active
            </Badge>
            <Badge variant="secondary">
              Standard User
            </Badge>
          </div>
        </div>

        <Separator />

        {/* Account Timeline */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Calendar className="h-4 w-4 text-muted-foreground mt-1" />
            <div className="space-y-1">
              <span className="text-sm font-medium">Account Created</span>
              <p className="text-sm text-muted-foreground">
                {formatDate(user.accountCreated)}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-4 w-4 text-muted-foreground mt-1" />
            <div className="space-y-1">
              <span className="text-sm font-medium">Last Login</span>
              <p className="text-sm text-muted-foreground">
                {formatDateTime(user.lastLogin)}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Activity className="h-4 w-4 text-muted-foreground mt-1" />
            <div className="space-y-1">
              <span className="text-sm font-medium">Current Session</span>
              <p className="text-sm text-muted-foreground" data-testid="session-duration">
                Active for {getSessionDuration()}
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Additional Account Info */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-sm font-medium">Account Type</span>
              <p className="text-sm text-muted-foreground">Personal</p>
            </div>
            <div className="space-y-1">
              <span className="text-sm font-medium">Account Region</span>
              <p className="text-sm text-muted-foreground">US-East</p>
            </div>
          </div>

          <div className="p-3 bg-muted rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Security Status</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your account is secure. All security features are enabled.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 