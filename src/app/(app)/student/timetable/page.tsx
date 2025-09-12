
'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Book, FlaskConical, PenTool } from 'lucide-react';

const timetableData = {
  times: ['1:00 - 2:30 PM', '2:30 - 4:00 PM', '4:00 - 5:30 PM'],
  schedule: [
    // Monday
    [
      null,
      { type: 'Theory', title: 'Child Development', teacher: 'Dr. Sarah Johnson', room: 'Room 110', code: 'ED202', color: 'blue' },
      null,
    ],
    // Tuesday
    [
      { type: 'Practical', title: 'Language Teaching', teacher: 'Dr. Kavita Mehta', room: 'Language Lab', code: 'ED302', color: 'orange' },
      null,
      { type: 'Practical', title: 'Educational Technology', teacher: 'Prof. Ravi Gupta', room: 'Computer Lab', code: 'ED304', color: 'orange' },
    ],
    // Wednesday
    [null, null, null],
    // Thursday
    [
      { type: 'Theory', title: 'Research Methodology', teacher: 'Dr. Suresh Kumar', room: 'Room 303', code: 'ED307', color: 'blue' },
      { type: 'Practical', title: 'Teaching Practice', teacher: 'Multiple Faculty', room: 'Practice School', code: 'ED401', color: 'orange' },
      { type: 'Theory', title: 'Special Education', teacher: 'Dr. Meera Joshi', room: 'Room 110', code: 'ED308', color: 'blue' },
    ],
    // Friday
    [
      null,
      { type: 'Theory', title: 'Guidance & Counselling', teacher: 'Dr. Anjali Thakur', room: 'Room 204', code: 'ED310', color: 'blue' },
      null,
    ],
    // Saturday
    [null, null, null],
  ],
};

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const typeColors: { [key: string]: string } = {
  Theory: 'text-blue-600 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/50',
  Practical: 'text-orange-600 bg-orange-100 dark:text-orange-300 dark:bg-orange-900/50',
  Lab: 'text-yellow-600 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900/50',
};

export default function TimetablePage() {
  return (
    <div className="p-4 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-headline text-3xl font-bold">My Timetable</h1>
          <p className="text-muted-foreground">Your weekly class schedule.</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export to PDF
        </Button>
      </div>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-[auto_repeat(6,1fr)] min-w-[1000px] border rounded-lg bg-card text-card-foreground">
          <div className="p-3 font-semibold text-muted-foreground border-r"></div>
          {days.map(day => (
            <div key={day} className="p-3 font-semibold text-center border-b border-r last:border-r-0">{day}</div>
          ))}

          {timetableData.times.map((time, timeIndex) => (
            <div key={time} className="grid grid-cols-subgrid col-span-7">
              <div className="p-3 font-medium text-sm text-muted-foreground border-r border-b">{time}</div>
              {timetableData.schedule.map((daySchedule, dayIndex) => {
                const session = daySchedule[timeIndex];
                return (
                  <div key={`${time}-${days[dayIndex]}`} className="p-2 border-b border-r last:border-r-0">
                    {session ? (
                      <Card className="p-3 h-full rounded-lg shadow-sm bg-background">
                        <div className="flex justify-between items-start">
                          <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${typeColors[session.type]}`}>{session.type}</span>
                          <span className="text-xs text-muted-foreground">{session.code}</span>
                        </div>
                        <p className="font-semibold mt-1 text-sm">{session.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{session.teacher}</p>
                        <p className="text-xs text-muted-foreground">{session.room}</p>
                      </Card>
                    ) : (
                      <div className="flex items-center justify-center h-full text-sm text-muted-foreground">Free</div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Card className="md:col-span-2">
          <div className="p-6">
            <h3 className="font-semibold flex items-center mb-4"><PenTool className="mr-2 h-5 w-5" /> Course Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <p>Total Courses</p>
                <span className="font-bold bg-muted px-2 py-1 rounded-md">7 Courses</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <p>Theory Classes</p>
                <span className="font-bold bg-muted px-2 py-1 rounded-md">4 Courses</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <p>Practical Classes</p>
                <span className="font-bold bg-muted px-2 py-1 rounded-md">3 Courses</span>
              </div>
              <div className="flex justify-between items-center text-sm mt-2 pt-2 border-t">
                <p className="font-semibold">Total Credit Hours</p>
                <span className="font-bold bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs">24 Credits</span>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h3 className="font-semibold flex items-center mb-4"><Book className="mr-2 h-5 w-5" /> Legend</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${typeColors.Theory} mr-3`}>Theory</span>
                <p className="text-muted-foreground">Classroom lectures</p>
              </div>
              <div className="flex items-center text-sm">
                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${typeColors.Practical} mr-3`}>Practical</span>
                <p className="text-muted-foreground">Hands-on sessions</p>
              </div>
              <div className="flex items-center text-sm">
                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${typeColors.Lab} mr-3`}>Lab</span>
                <p className="text-muted-foreground">Laboratory work</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
