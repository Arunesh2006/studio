import { Wand2, Database, Settings } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Badge } from '@/components/ui/badge';
import { AdminLoginForm } from './_components/admin-login-form';
import { placeholderImages } from '@/lib/placeholder-images.json';
import '../../auth.css';

export default function AdminLoginPage() {
  const loginImage = placeholderImages.find(img => img.id === 'admin-login-image');
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-auth-gradient p-4 sm:p-6 lg:p-8">
      <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-2xl bg-background shadow-2xl lg:grid-cols-2">
        
        {/* Left Panel */}
        <div className="hidden flex-col justify-between p-8 text-foreground lg:flex">
          <div className="flex items-center gap-2">
            <Logo className="size-8 text-primary" />
            <div>
              <p className="font-headline text-lg font-bold">EduTimeWise</p>
              <p className="text-sm text-muted-foreground">Admin Portal</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tight">
              The <span className="text-primary">Control Center</span> for<br />Intelligent Timetabling
            </h1>
            <p className="max-w-md text-muted-foreground">
              Manage all aspects of the NEP 2020 compliant scheduling system, from data imports to final timetable generation.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex-1 rounded-lg border bg-card p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">AI Generations</p>
                  <Wand2 className="size-4 text-muted-foreground" />
                </div>
                <p className="text-2xl font-bold">50+</p>
              </div>
              <div className="flex-1 rounded-lg border bg-card p-4">
                 <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Data Models</p>
                  <Database className="size-4 text-muted-foreground" />
                </div>
                <p className="text-2xl font-bold">4</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Full Control</Badge>
            <Badge variant="secondary">AI-Powered</Badge>
            <Badge variant="secondary">System-Wide Settings</Badge>
          </div>
        </div>
        
        {/* Right Panel */}
        <div className="flex items-center justify-center p-8">
          <AdminLoginForm />
        </div>
        
      </div>
    </div>
  );
}
