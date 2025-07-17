
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { LeftNavigation } from './LeftNavigation';

export function AppShell() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Main content area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Navigation */}
        <LeftNavigation />
        
        {/* Main content */}
        <main className="flex-1 overflow-auto bg-background">
          <Outlet />
        </main>
      </div>
    </div>
  );
} 