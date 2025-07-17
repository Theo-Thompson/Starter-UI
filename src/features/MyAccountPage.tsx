import { ProfileCard } from '@/design-system/molecules/account/ProfileCard';
import { AccountInfoCard } from '@/design-system/molecules/account/AccountInfoCard';

export default function MyAccountPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">My Account</h1>
        <p className="text-muted-foreground mt-2">
          Manage your personal account information and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-0">
          <ProfileCard />
        </div>
        <div className="space-y-0">
          <AccountInfoCard />
        </div>
      </div>
    </div>
  );
} 