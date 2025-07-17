import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/shared/contexts/AuthContext";
import { AppShell } from "@/design-system/molecules/layout/AppShell";
import { Toaster } from "@/design-system/atoms/sonner";
import LoginPage from "@/features/LoginPage";
import DashboardPage from "@/features/DashboardPage";
import UsersPage from "@/features/UsersPage";
import ProjectsPage from "@/features/ProjectsPage";
import ReportsPage from "@/features/ReportsPage";
import DocumentsPage from "@/features/DocumentsPage";
import CalendarPage from "@/features/CalendarPage";
import MessagesPage from "@/features/MessagesPage";
import NotificationsPage from "@/features/NotificationsPage";
import SettingsPage from "@/features/SettingsPage";
import MyAccountPage from "@/features/MyAccountPage";
import HelpPage from "@/features/HelpPage";
import FeedbackPage from "@/features/FeedbackPage";

// Protected Route component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg font-medium">Loading...</div>
      </div>
    );
  }
  
  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
}

// Public Route component (redirects to dashboard if already logged in)
function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg font-medium">Loading...</div>
      </div>
    );
  }
  
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <>{children}</>;
}

function AppContent() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      } />
      
      {/* Protected routes */}
      <Route path="/" element={
        <ProtectedRoute>
          <AppShell />
        </ProtectedRoute>
      }>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="documents" element={<DocumentsPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="my-account" element={<MyAccountPage />} />
        <Route path="help" element={<HelpPage />} />
        <Route path="feedback" element={<FeedbackPage />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
        <Toaster />
      </Router>
    </AuthProvider>
  );
}

export default App;
