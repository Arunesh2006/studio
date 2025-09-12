import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, BookOpen, Users } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Badge } from '@/components/ui/badge';
import { TeacherLoginForm } from './_components/teacher-login-form';
import { placeholderImages } from '@/lib/placeholder-images.json';
import '../../auth.css';

export default function TeacherLoginPage() {
  const loginImage = placeholderImages.find(img => img.id === 'teacher-login-image');
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-auth-gradient p-4 sm:p-6 lg:p-8">
      <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-2xl bg-background shadow-2xl lg:grid-cols-2">
        
        {/* Left Panel */}
        <div className="hidden flex-col justify-between p-8 text-foreground lg:flex">
          <div className="flex items-center gap-2">
            <Logo className="size-8 text-primary" />
            <div>
              <p className="font-headline text-lg font-bold">EduTimeWise</p>
              <p className="text-sm text-muted-foreground">Faculty Portal</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tight">
              Empowering Educators with <span className="text-primary">Smart</span><br /> Scheduling Tools
            </h1>
            <p className="max-w-md text-muted-foreground">
              Access your teaching schedule, manage course materials, and collaborate with peers in our NEP 2020 compliant faculty portal.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex-1 rounded-lg border bg-card p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Total Faculty</p>
                  <Users className="size-4 text-muted-foreground" />
                </div>
                <p className="text-2xl font-bold">128</p>
              </div>
              <div className="flex-1 rounded-lg border bg-card p-4">
                 <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Courses Managed</p>
                  <BookOpen className="size-4 text-muted-foreground" />
                </div>
                <p className="text-2xl font-bold">215</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="secondary">NEP 2020 Aligned</Badge>
            <Badge variant="secondary">AI-Powered</Badge>
            <Badge variant="secondary">Faculty-Centric</Badge>
          </div>
        </div>
        
        {/* Right Panel */}
        <div className="flex items-center justify-center p-8">
          <TeacherLoginForm />
        </div>
        
      </div>
    </div>
  );
}
