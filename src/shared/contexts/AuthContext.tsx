import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  bio?: string;
  accountCreated: string;
  lastLogin: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password?: string) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<Pick<User, 'name' | 'bio'>>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    try {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      // Update lastLogin to current time for existing sessions
      const updatedUser = { ...parsedUser, lastLogin: new Date().toISOString() };
      setUser(updatedUser);
        try {
      localStorage.setItem('user', JSON.stringify(updatedUser));
        } catch {
          // Handle storage errors silently
        }
      }
    } catch {
      // Handle storage errors silently
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string) => {
    setIsLoading(true);
    
    // Mock authentication - in real app, this would call your API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const now = new Date().toISOString();
    let existingUser: string | null = null;
    
    try {
      existingUser = localStorage.getItem('user');
    } catch {
      // Handle storage errors silently
    }
    
    let mockUser: User;
    
    if (existingUser) {
      try {
      // Preserve existing profile data but update login time
      const parsedUser = JSON.parse(existingUser);
      mockUser = {
        ...parsedUser,
        email,
        lastLogin: now
      };
      } catch {
        // If JSON parsing fails, create new user
        mockUser = {
          id: '1',
          email,
          name: email.split('@')[0],
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
          bio: '',
          accountCreated: now,
          lastLogin: now
        };
      }
    } else {
      // Create new user
      mockUser = {
        id: '1',
        email,
        name: email.split('@')[0],
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        bio: '',
        accountCreated: now,
        lastLogin: now
      };
    }
    
    setUser(mockUser);
    try {
    localStorage.setItem('user', JSON.stringify(mockUser));
    } catch {
      // Handle storage errors silently
    }
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    try {
    localStorage.removeItem('user');
    } catch {
      // Handle storage errors silently
    }
  };

  const updateProfile = (updates: Partial<Pick<User, 'name' | 'bio'>>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      try {
      localStorage.setItem('user', JSON.stringify(updatedUser));
      } catch {
        // Handle storage errors silently
      }
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 