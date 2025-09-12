
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  CheckSquare,
  BarChart2,
  User,
  Settings,
  LogOut,
  Bell,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Logo } from '@/components/logo';
import { UserNav } from '@/components/user-nav';

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <SidebarProvider>
      <Sidebar className="student-sidebar border-r">
        <SidebarHeader className="p-4">
          <div className="flex items-center gap-2">
            <Logo className="size-8 text-primary" />
            <div>
              <p className="font-headline text-lg font-bold">TimetableAI</p>
              <p className="text-sm text-muted-foreground">Student Portal</p>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                href="/student/dashboard"
                asChild
                isActive={isActive('/student/dashboard')}
                className={isActive('/student/dashboard') ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground' : ''}
              >
                <Link href="/student/dashboard">
                  <LayoutDashboard />
                  Dashboard
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                href="/student/timetable"
                asChild
                 isActive={isActive('/student/timetable')}
                 className={isActive('/student/timetable') ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground' : ''}
              >
                <Link href="/student/timetable">
                  <Calendar />
                  My Timetable
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton
                href="/student/course-registration"
                asChild
                isActive={isActive('/student/course-registration')}
                className={
                  isActive('/student/course-registration')
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground'
                    : ''
                }
              >
                <Link href="/student/course-registration">
                  <BookOpen />
                  Course Registration
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                href="/student/attendance"
                asChild
                isActive={isActive('/student/attendance')}
                className={
                  isActive('/student/attendance')
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground'
                    : ''
                }
              >
                <Link href="/student/attendance">
                  <CheckSquare />
                  Attendance
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/student/results" asChild
                isActive={isActive('/student/results')}
                className={isActive('/student/results') ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground' : ''}
              >
                <Link href="/student/results">
                  <BarChart2 />
                  Results
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#" asChild>
                <Link href="#">
                  <User />
                  Profile
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <div className="mt-auto flex flex-col gap-2 p-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                href="#"
                asChild
                variant="ghost"
                className="w-full h-auto p-2 justify-start rounded-md"
              >
                <Link href="#" className="flex items-center gap-2">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">Rahul Sharma</p>
                    <p className="text-xs text-muted-foreground">
                      B.Ed. Semester 3
                    </p>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#" asChild variant="ghost">
                <Link href="#">
                  <Settings />
                  Settings
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/" asChild variant="ghost">
                <Link href="/">
                  <LogOut />
                  Logout
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </Sidebar>
      <SidebarInset>
        <main className="flex flex-col items-center flex-1 overflow-auto bg-muted/40 p-4 sm:px-6 py-4">
          <div className="flex flex-col gap-4 py-4 md:gap-8">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
