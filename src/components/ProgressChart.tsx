import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const progressData = [
  { week: "Week 1", progress: 20, tasks: 5 },
  { week: "Week 2", progress: 35, tasks: 8 },
  { week: "Week 3", progress: 55, tasks: 12 },
  { week: "Week 4", progress: 70, tasks: 15 },
  { week: "Week 5", progress: 85, tasks: 18 },
  { week: "Week 6", progress: 95, tasks: 20 },
];

const skillsData = [
  { skill: "React", proficiency: 85 },
  { skill: "JavaScript", proficiency: 90 },
  { skill: "Python", proficiency: 75 },
  { skill: "Git", proficiency: 80 },
  { skill: "APIs", proficiency: 70 },
];

const ProgressChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Progress Over Time */}
      <Card className="shadow-custom-md">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Internship Progress</CardTitle>
          <p className="text-sm text-muted-foreground">Your progress over the past 6 weeks</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={progressData}>
              <defs>
                <linearGradient id="progressGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(217 91% 60%)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(217 91% 60%)" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="week" 
                axisLine={false}
                tickLine={false}
                className="text-muted-foreground"
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                className="text-muted-foreground"
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  boxShadow: 'var(--shadow-md)'
                }}
              />
              <Area
                type="monotone"
                dataKey="progress"
                stroke="hsl(217 91% 60%)"
                fillOpacity={1}
                fill="url(#progressGradient)"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Skills Progress */}
      <Card className="shadow-custom-md">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Skill Development</CardTitle>
          <p className="text-sm text-muted-foreground">Current proficiency levels</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {skillsData.map((skill) => (
            <div key={skill.skill} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{skill.skill}</span>
                <span className="text-muted-foreground">{skill.proficiency}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressChart;