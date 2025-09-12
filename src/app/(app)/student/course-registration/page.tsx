
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { BookCheck, FileText, Sparkles, Wand2 } from 'lucide-react';

const enrolledCourses = [
  {
    title: 'Child Development',
    code: 'ED202',
    type: 'Major',
    credits: 4,
    outcome: [
      'Understand the stages of child development.',
      'Analyze developmental theories and their applications.',
      'Assess developmental milestones in children.',
    ],
    subjectTeacher: 'Dr. Sarah Johnson',
    mentorTeacher: 'Mrs. Emily Carter',
  },
  {
    title: 'Language Teaching',
    code: 'ED302',
    type: 'Major',
    credits: 4,
  },
  {
    title: 'Educational Technology',
    code: 'ED304',
    type: 'Minor',
    credits: 3,
  },
  {
    title: 'Research Methodology',
    code: 'ED307',
    type: 'Skill-Based',
    credits: 3,
  },
];

const badgeColors: { [key: string]: string } = {
    Major: 'bg-blue-600 hover:bg-blue-700',
    Minor: 'bg-purple-600 hover:bg-purple-700',
    'Skill-Based': 'bg-green-600 hover:bg-green-700',
}

export default function CourseRegistrationPage() {
  return (
    <div className="p-4 md:p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
            <BookCheck className="h-6 w-6 text-primary" />
        </div>
        <div>
            <h1 className="font-headline text-3xl font-bold">Course Registration</h1>
            <p className="text-muted-foreground">
            Select courses for the upcoming semester and get AI-powered recommendations.
            </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                        <FileText className='h-5 w-5' />
                        Enrolled Courses - Semester 3
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">Below are the courses you are enrolled in for the current semester.</p>
                     <Accordion type="single" collapsible className="w-full">
                        {enrolledCourses.map((course, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="font-semibold text-base hover:no-underline">
                                    <div className='flex items-center gap-4'>
                                        <span>{course.title} ({course.code})</span>
                                        <Badge className={`${badgeColors[course.type]}`}>{course.type}</Badge>
                                    </div>
                                    <span>{course.credits} Credits</span>
                                </AccordionTrigger>
                                <AccordionContent className="pt-2 pl-2">
                                   {course.outcome && (
                                        <>
                                            <h4 className="font-semibold mb-2">Course Outcome:</h4>
                                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
                                                {course.outcome.map((item, i) => <li key={i}>{item}</li>)}
                                            </ul>
                                            <div className="flex justify-between text-sm">
                                                <div>
                                                    <p className="font-semibold">Subject Teacher:</p>
                                                    <p className="text-muted-foreground">{course.subjectTeacher}</p>
                                                </div>
                                                <div className='text-right'>
                                                    <p className="font-semibold">Mentor Teacher:</p>
                                                    <p className="text-muted-foreground">{course.mentorTeacher}</p>
                                                </div>
                                            </div>
                                        </>
                                   )}
                                   {!course.outcome && <p className="text-muted-foreground">No detailed information available for this course.</p>}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>
        </div>

        <div>
            <Card className='sticky top-20'>
                <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                        <Wand2 className='h-5 w-5' />
                        NEP 2020 Course Recommendation
                    </CardTitle>
                </CardHeader>
                <CardContent>
                     <p className="text-sm text-muted-foreground mb-4">Get personalized recommendations for minor, skill, or value-added courses.</p>
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-medium">Academic History</label>
                            <Textarea placeholder="Semester 1:
- CS-101 Intro to Programming (A)
- MA-101 Calculus I (B+)
- PH-101 Physics I (A-)" className="mt-1 h-24 font-mono text-xs" />
                        </div>
                         <div>
                            <label className="text-sm font-medium">Chosen Core Courses</label>
                            <Textarea placeholder="Major:
- CS-201 Data Structures
Minor:
- DS-201 Intro to Data Science" className="mt-1 h-24 font-mono text-xs" />
                        </div>
                         <div>
                            <label className="text-sm font-medium">Attendance Data</label>
                            <Textarea placeholder='[
    {
        "course": "Advanced Algorithms",
        "code": "CS-401",
        "percentage": 95
    }
]' className="mt-1 h-24 font-mono text-xs" />
                        </div>

                        <Button className="w-full">
                            <Sparkles className="mr-2 h-4 w-4" />
                            Get Recommendations
                        </Button>

                         <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg h-48">
                            <Sparkles className="h-8 w-8 text-muted-foreground mb-2" />
                            <p className="text-sm font-medium">Recommendations will appear here.</p>
                        </div>

                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
