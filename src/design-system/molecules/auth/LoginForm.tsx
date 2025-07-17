import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/design-system/atoms/card";
import { Button } from "@/design-system/atoms/button";
import { Input } from "@/design-system/atoms/input";
import { Label } from "@/design-system/atoms/label";
import { Github } from "lucide-react";
import { useAuth } from "@/shared/contexts/AuthContext";
import { reportAsyncError } from "@/shared/utils/errorReporting";

export function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login, isLoading } = useAuth();

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      reportAsyncError(error as Error, "email-login", { email });
    }
  };

  const handleGithubSignIn = async () => {
    try {
      await login("github@example.com");
    } catch (error) {
      reportAsyncError(error as Error, "github-login");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
              <Card className="w-full max-w-md shadow-md">
        <CardHeader className="space-y-xs">
          <CardTitle className="text-2xl font-semibold text-primary-brand">
            Sign in to Application
          </CardTitle>
          <CardDescription>Enter your email below to access the application</CardDescription>
        </CardHeader>
        <form onSubmit={handleEmailSignIn}>
          <CardContent className="grid gap-md">
            <div className="grid gap-sm">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-sm">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In with Email"}
            </Button>
          </CardContent>
        </form>
        <CardFooter className="flex flex-col gap-sm">
          <div className="relative w-full flex items-center justify-center">
            <span className="bg-background px-sm text-xs text-muted-foreground z-10">
              Or continue with
            </span>
            <div className="absolute left-0 right-0 top-1/2 border-t border-muted -z-0" />
          </div>
          <Button
            variant="outline"
            className="w-full"
            onClick={handleGithubSignIn}
            disabled={isLoading}
          >
            <Github className="mr-sm h-4 w-4" />
            GitHub
          </Button>
          <div className="text-center text-xs text-muted-foreground mt-sm">
            <p>This is a demo login. Use any email to sign in.</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
