
'use client';
import { useState, useEffect } from 'react';
import {
  BookOpen,
  Clock,
  TrendingUp,
  Award,
  Bell,
  Calendar,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images.json';

const schedule = [
  { time: '10:00 AM', code: 'ED202', name: 'Child Development', room: 'Room 110' },
  { time: '02:30 PM', code: 'ED302', name: 'Language Teaching', room: 'Language Lab' },
];

const announcements = [
    { title: 'Mid-term exams schedule updated.', date: '2024-07-22', type: 'Academic' },
    { title: 'Annual sports day on Aug 15th.', date: '2024-07-21', type: 'Event' },
    { title: 'Library will be closed on Saturday.', date: '2024-07-20', type: 'Notice' },
]

const badgeColors: { [key: string]: string } = {
    Academic: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
    Event: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
    Notice: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
}

export default function StudentDashboardPage() {
  const [date, setDate] = useState({ day: '', month: '', year: '', weekday: '' });
  const studentAvatar = placeholderImages.find(img => img.id === 'student-avatar');

  useEffect(() => {
    const today = new Date();
    setDate({
      day: today.toLocaleDateString('en-US', { day: 'numeric' }),
      month: today.toLocaleDateString('en-US', { month: 'long' }),
      year: today.toLocaleDateString('en-US', { year: 'numeric' }),
      weekday: today.toLocaleDateString('en-US', { weekday: 'long' }),
    });
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/20 p-6 lg:p-8">
              <div className='flex items-center justify-between'>
                <div>
                  <h1 className="font-headline text-3xl font-bold">Welcome Back, Rahul!</h1>
                  <p className="text-muted-foreground">Here's your academic snapshot for today.</p>
                </div>
                <Avatar className="h-16 w-16 hidden sm:block">
                  {studentAvatar && <AvatarImage src={studentAvatar.imageUrl} alt="Student avatar" />}
                  <AvatarFallback className="text-2xl">RS</AvatarFallback>
                </Avatar>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <StatCard icon={<BookOpen />} label="Enrolled Courses" value="7" />
                  <StatCard icon={<Clock />} label="Total Credits" value="24" />
                  <StatCard icon={<Award />} label="Current CGPA" value="8.7" />
                  <StatCard icon={<TrendingUp />} label="Attendance" value="92%" />
              </div>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Calendar className='h-5 w-5' />
                Today's Schedule
              </CardTitle>
              <CardDescription>
                Your classes for {date.weekday}, {date.month} {date.day}, {date.year}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Course Code</TableHead>
                    <TableHead>Course Name</TableHead>
                    <TableHead className="text-right">Room</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {schedule.length > 0 ? (
                    schedule.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.time}</TableCell>
                        <TableCell>{item.code}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell className="text-right">{item.room}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center h-24">
                        No classes scheduled for today. Enjoy your day!
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Announcements
                </CardTitle>
                <CardDescription>Latest updates and notices from the university.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {announcements.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-1">
                        <p className="text-sm font-medium leading-tight">{item.title}</p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-muted-foreground">{item.date}</p>
                          <Badge variant="outline" className={badgeColors[item.type]}>
                            {item.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                 <Button variant="outline" className='w-full mt-4'>View All Announcements</Button>
              </CardContent>
            </Card>
        </div>
      </div>
    </>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="bg-background/70 backdrop-blur-sm rounded-lg p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">{label}</p>
                <div className="text-muted-foreground">{icon}</div>
            </div>
            <p className="text-2xl font-bold mt-2">{value}</p>
        </div>
    )
}
