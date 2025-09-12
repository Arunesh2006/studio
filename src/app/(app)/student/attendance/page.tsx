
'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckSquare } from 'lucide-react';

const attendanceData = {
  semester1: [
    { subject: 'Intro to Education', percentage: 95 },
    { subject: 'Childhood & Growing Up', percentage: 88 },
    { subject: 'Contemporary India', percentage: 76 },
    { subject: 'Language Across Curriculum', percentage: 92 },
    { subject: 'Political Science', percentage: 65 },
  ],
  semester2: [
    { subject: 'Learning & Teaching', percentage: 91 },
    { subject: 'Knowledge & Curriculum', percentage: 85 },
    { subject: 'Assessment for Learning', percentage: 45 },
    { subject: 'Inclusive School', percentage: 98 },
    { subject: 'History', percentage: 78 },
  ],
};

const getBarColor = (percentage: number) => {
  if (percentage < 50) return '#ef4444'; // red-500
  if (percentage < 75) return '#f59e0b'; // amber-500
  return '#22c55e'; // green-500
};

export default function AttendancePage() {
  return (
    <div className="w-full max-w-6xl mx-auto">
       <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
            <CheckSquare className="h-6 w-6 text-primary" />
        </div>
        <div>
            <h1 className="font-headline text-3xl font-bold">Attendance Report</h1>
            <p className="text-muted-foreground">
            Your subject-wise attendance for each semester.
            </p>
        </div>
      </div>

      <Tabs defaultValue="semester2">
        <div className="flex justify-end mb-4">
            <TabsList>
                <TabsTrigger value="semester1">Semester 1</TabsTrigger>
                <TabsTrigger value="semester2">Semester 2</TabsTrigger>
                <TabsTrigger value="semester3" disabled>Semester 3</TabsTrigger>
            </TabsList>
        </div>
        
        <TabsContent value="semester1">
            <AttendanceChart title="Semester 1 Attendance" data={attendanceData.semester1} />
        </TabsContent>
        <TabsContent value="semester2">
            <AttendanceChart title="Semester 2 Attendance" data={attendanceData.semester2} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function AttendanceChart({ title, data }: { title: string, data: typeof attendanceData.semester1 }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>Minimum 75% attendance is required in each subject.</CardDescription>
            </CardHeader>
            <CardContent className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="subject" tick={{ fontSize: 12 }} angle={-10} textAnchor="end" height={60} />
                        <YAxis unit="%" domain={[0, 100]} />
                        <Tooltip
                            contentStyle={{
                                background: "hsl(var(--background))",
                                border: "1px solid hsl(var(--border))",
                                borderRadius: "var(--radius)",
                            }}
                            labelStyle={{ fontWeight: 'bold' }}
                            itemStyle={{ fontWeight: 'normal' }}
                        />
                        <Legend wrapperStyle={{ paddingTop: 20 }} />
                        <Bar dataKey="percentage" name="Attendance Percentage" barSize={40}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={getBarColor(entry.percentage)} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
