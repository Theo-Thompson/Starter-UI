import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/design-system/atoms/button';
import { ScrollArea } from '@/design-system/atoms/scroll-area';
import { Separator } from '@/design-system/atoms/separator';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/design-system/atoms/tooltip';
import { 
  Home, 
  Users, 
  Settings, 
  FileText, 
  BarChart3, 
  MessageSquare,
  Package,
  Calendar,
  Bell,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
}

const navigationItems: NavigationItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/dashboard' },
  { id: 'users', label: 'Users', icon: Users, path: '/users' },
  { id: 'projects', label: 'Projects', icon: Package, path: '/projects' },
  { id: 'reports', label: 'Reports', icon: BarChart3, path: '/reports' },
  { id: 'documents', label: 'Documents', icon: FileText, path: '/documents' },
  { id: 'calendar', label: 'Calendar', icon: Calendar, path: '/calendar' },
  { id: 'messages', label: 'Messages', icon: MessageSquare, path: '/messages' },
  { id: 'notifications', label: 'Notifications', icon: Bell, path: '/notifications' },
  { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' }
];

export function LeftNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const NavigationButton = ({ item, isActive }: { item: NavigationItem; isActive: boolean }) => {
    const Icon = item.icon;
    const button = (
      <Button
        key={item.id}
        variant={isActive ? "default" : "ghost"}
        className={`w-full h-10 ${isCollapsed ? 'justify-center px-2' : 'justify-start'}`}
        onClick={() => handleNavigation(item.path)}
      >
        <Icon className={`h-4 w-4 ${isCollapsed ? '' : 'mr-3'}`} />
        {!isCollapsed && item.label}
      </Button>
    );

    if (isCollapsed) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            {button}
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{item.label}</p>
          </TooltipContent>
        </Tooltip>
      );
    }

    return button;
  };

  return (
    <TooltipProvider>
      <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-background border-r border-border h-full flex flex-col relative transition-all duration-300`}>
        <ScrollArea className="flex-1 p-2 pb-12">
          <div className="space-y-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavigationButton
                  key={item.id}
                  item={item}
                  isActive={isActive}
                />
              );
            })}
          </div>
          
          <Separator className="my-4" />
          
          {!isCollapsed && (
            <div className="text-xs text-muted-foreground mb-2 px-2">
              Additional Features
            </div>
          )}
          <div className="space-y-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`w-full h-8 ${isCollapsed ? 'justify-center px-2' : 'justify-start'}`}
                  onClick={() => handleNavigation('/help')}
                >
                  <FileText className={`h-4 w-4 ${isCollapsed ? '' : 'mr-2'}`} />
                  {!isCollapsed && "Help & Support"}
                </Button>
              </TooltipTrigger>
              {isCollapsed && (
                <TooltipContent side="right">
                  <p>Help & Support</p>
                </TooltipContent>
              )}
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`w-full h-8 ${isCollapsed ? 'justify-center px-2' : 'justify-start'}`}
                  onClick={() => handleNavigation('/feedback')}
                >
                  <MessageSquare className={`h-4 w-4 ${isCollapsed ? '' : 'mr-2'}`} />
                  {!isCollapsed && "Feedback"}
                </Button>
              </TooltipTrigger>
              {isCollapsed && (
                <TooltipContent side="right">
                  <p>Feedback</p>
                </TooltipContent>
              )}
                         </Tooltip>
           </div>
         </ScrollArea>
         
         {/* Collapse button fixed at bottom */}
         <div className="absolute bottom-0 left-0 right-0 p-2 bg-background border-t border-border">
           <Tooltip>
             <TooltipTrigger asChild>
               <Button
                 variant="ghost"
                 size="sm"
                 className={`w-full h-8 ${isCollapsed ? 'justify-center px-2' : 'justify-start'}`}
                 onClick={toggleCollapse}
                 aria-label={isCollapsed ? 'Expand navigation' : 'Collapse navigation'}
               >
                 {isCollapsed ? (
                   <ChevronRight className="h-4 w-4" />
                 ) : (
                   <>
                     <ChevronLeft className="mr-2 h-4 w-4" />
                     Collapse
                   </>
                 )}
               </Button>
             </TooltipTrigger>
             {isCollapsed && (
               <TooltipContent side="right">
                 <p>Expand</p>
               </TooltipContent>
             )}
           </Tooltip>
         </div>
       </div>
     </TooltipProvider>
   );
 } 