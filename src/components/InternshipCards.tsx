import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  MapPin, 
  Star, 
  TrendingUp, 
  CheckCircle2,
  ExternalLink,
  Calendar
} from "lucide-react";

const previousInternships = [
  {
    company: "TechCorp",
    role: "Frontend Developer Intern",
    duration: "3 months",
    rating: 4.5,
    status: "Completed"
  },
  {
    company: "StartupXYZ", 
    role: "Full Stack Intern",
    duration: "4 months", 
    rating: 4.8,
    status: "Completed"
  }
];

const recommendedInternships = [
  {
    company: "Google",
    role: "Software Engineer Intern",
    location: "Mountain View, CA",
    match: "95%",
    salary: "$8,000/month"
  },
  {
    company: "Microsoft",
    role: "Product Manager Intern", 
    location: "Seattle, WA",
    match: "87%",
    salary: "$7,500/month"
  }
];

const liveInternships = [
  {
    company: "Meta",
    role: "React Developer Intern",
    applicants: 1250,
    timeLeft: "5 days",
    urgent: true
  },
  {
    company: "Netflix",
    role: "Data Science Intern",
    applicants: 890,
    timeLeft: "12 days", 
    urgent: false
  }
];

const InternshipCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Previous Internships */}
      <Card className="shadow-custom-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <CheckCircle2 className="h-5 w-5 text-success" />
            Previous Internships
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {previousInternships.map((internship, index) => (
            <div key={index} className="p-4 bg-gradient-card rounded-lg border border-border/50">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-sm">{internship.company}</h4>
                  <Badge variant="secondary" className="bg-success-muted text-success">
                    {internship.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{internship.role}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {internship.duration}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{internship.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Live Internships */}
      <Card className="shadow-custom-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar className="h-5 w-5 text-warning" />
            Live Applications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {liveInternships.map((internship, index) => (
            <div key={index} className="p-4 bg-gradient-card rounded-lg border border-border/50">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-sm">{internship.company}</h4>
                  {internship.urgent && (
                    <Badge variant="destructive">Urgent</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{internship.role}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{internship.applicants} applicants</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {internship.timeLeft} left
                  </span>
                </div>
                <Button 
                  size="sm" 
                  className="w-full mt-2 bg-gradient-primary hover:bg-primary-dark"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default InternshipCards;