
import Link from 'next/link';
import Image from 'next/image';
import { Users, BookOpen } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Badge } from '@/components/ui/badge';
import { StudentLoginForm } from './_components/student-login-form';
import { placeholderImages } from '@/lib/placeholder-images.json';
import '../../auth.css';

export default function StudentLoginPage() {
  const loginImage = placeholderImages.find(img => img.id === 'student-login-image');
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-auth-gradient p-4 sm:p-6 lg:p-8">
      <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-2xl bg-background shadow-2xl lg:grid-cols-2">
        
        {/* Left Panel */}
        <div className="hidden flex-col justify-between p-8 text-foreground lg:flex">
          <div className="flex items-center gap-2">
            <Logo className="size-8 text-primary" />
            <div>
              <p className="font-headline text-lg font-bold">EduTimeWise</p>
              <p className="text-sm text-muted-foreground">Student Portal</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tight">
              Welcome to Your <span className="text-primary">Smart</span><br /> Academic Experience
            </h1>
            <p className="max-w-md text-muted-foreground">
              Access your personalized timetable, course registrations, and academic progress in our NEP 2020 compliant student portal powered by AI.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex-1 rounded-lg border bg-card p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">B.Ed. Students</p>
                  <Users className="size-4 text-muted-foreground" />
                </div>
                <p className="text-2xl font-bold">1,247</p>
              </div>
              <div className="flex-1 rounded-lg border bg-card p-4">
                 <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Active Courses</p>
                  <BookOpen className="size-4 text-muted-foreground" />
                </div>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="secondary">NEP 2020 Compliant</Badge>
            <Badge variant="secondary">AI-Powered</Badge>
            <Badge variant="secondary">Multi-Program Support</Badge>
          </div>
        </div>
        
        {/* Right Panel */}
        <div className="flex items-center justify-center p-8">
          <StudentLoginForm />
        </div>
        
      </div>
    </div>
  );
}
