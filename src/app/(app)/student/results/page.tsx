
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ChevronsRight, GraduationCap, Trophy, TrendingUp, BarChart } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from '@/components/ui/badge';


const semester1Results = [
    { course: 'Introduction to Education', code: 'ED101', credits: 4, grade: 'A', result: 'Pass' },
    { course: 'Childhood & Growing Up', code: 'ED102', credits: 4, grade: 'B+', result: 'Pass' },
    { course: 'Contemporary India', code: 'ED103', credits: 4, grade: 'A-', result: 'Pass' },
    { course: 'Language Across Curriculum', code: 'ED104', credits: 2, grade: 'A', result: 'Pass' },
    { course: 'Minor - Political Science', code: 'POL101', credits: 4, grade: 'B', result: 'Pass' },
];

const semester2Results = [
    { course: 'Learning & Teaching', code: 'ED201', credits: 4, grade: 'A', result: 'Pass' },
    { course: 'Knowledge & Curriculum', code: 'ED202', credits: 4, grade: 'B+', result: 'Pass' },
    { course: 'Assessment for Learning', code: 'ED203', credits: 4, grade: 'A-', result: 'Pass' },
    { course: 'Creating an Inclusive School', code: 'ED204', credits: 4, grade: 'A', result: 'Pass' },
    { course: 'Minor - History', code: 'HIS201', credits: 4, grade: 'A-', result: 'Pass' },
];


export default function ResultsPage() {
  return (
    <div className="p-4 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-headline text-3xl font-bold">Results & Credits</h1>
          <p className="text-muted-foreground">Your academic performance and credit summary.</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download Transcript
        </Button>
      </div>

      <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50">
        <CardHeader>
            <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                    <CardTitle className="text-2xl">Academic Bank of Credits (ABC)</CardTitle>
                    <CardDescription>As per NEP 2020 Guidelines</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 rounded-lg bg-background p-4">
            <Trophy className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-sm text-muted-foreground">Total Credits Earned</p>
              <p className="text-2xl font-bold">42</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg bg-background p-4">
            <TrendingUp className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm text-muted-foreground">Current CGPA</p>
              <p className="text-2xl font-bold">8.7</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg bg-background p-4">
            <BarChart className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm text-muted-foreground">ABC Account Status</p>
              <Badge variant="default" className="bg-green-100 text-green-800">Verified</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="semester2">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Semester-wise Results</h2>
            <TabsList>
                <TabsTrigger value="semester1">Semester 1</TabsTrigger>
                <TabsTrigger value="semester2">Semester 2</TabsTrigger>
                <TabsTrigger value="semester3" disabled>Semester 3</TabsTrigger>
            </TabsList>
        </div>
        
        <TabsContent value="semester1">
            <ResultTable title="Semester 1 Results" data={semester1Results} />
        </TabsContent>
        <TabsContent value="semester2">
            <ResultTable title="Semester 2 Results" data={semester2Results} />
        </TabsContent>
      </Tabs>
    </div>
  );
}


function ResultTable({ title, data }: { title: string, data: typeof semester1Results }) {
    const totalCredits = data.reduce((sum, item) => sum + item.credits, 0);

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead>Course</TableHead>
                            <TableHead>Code</TableHead>
                            <TableHead className="text-center">Credits</TableHead>
                            <TableHead className="text-center">Grade</TableHead>
                            <TableHead className="text-right">Result</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {data.map((item) => (
                            <TableRow key={item.code}>
                                <TableCell className="font-medium">{item.course}</TableCell>
                                <TableCell>{item.code}</TableCell>
                                <TableCell className="text-center">{item.credits}</TableCell>
                                <TableCell className="text-center">
                                    <Badge variant="secondary">{item.grade}</Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Badge className={item.result === 'Pass' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                                        {item.result}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex justify-end items-center mt-4 pt-4 border-t">
                    <p className="text-sm text-muted-foreground mr-4">Semester Credits:</p>
                    <p className="text-lg font-bold">{totalCredits}</p>
                </div>
            </CardContent>
        </Card>
    )
}

