import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, MapPin, ExternalLink, Star } from "lucide-react";

const recommendedInternships = [
  {
    company: "Google",
    role: "Software Engineer Intern",
    location: "Mountain View, CA",
    match: "95%",
    salary: "$8,000/month",
    skills: ["React", "JavaScript", "Python"],
    rating: 4.9
  },
  {
    company: "Microsoft",
    role: "Product Manager Intern", 
    location: "Seattle, WA",
    match: "87%",
    salary: "$7,500/month",
    skills: ["JavaScript", "Node.js", "AWS"],
    rating: 4.8
  },
  {
    company: "Amazon",
    role: "Cloud Engineering Intern",
    location: "Austin, TX", 
    match: "82%",
    salary: "$7,200/month",
    skills: ["AWS", "Python", "Git"],
    rating: 4.7
  }
];

const RecommendedInternships = () => {
  return (
    <Card className="shadow-custom-lg border-l-4 border-l-primary">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <TrendingUp className="h-6 w-6 text-primary" />
          Recommended Internships
          <Badge className="bg-primary-muted text-primary border-primary/20 ml-2">
            Based on Your Skills & Resume
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendedInternships.map((internship, index) => (
            <div key={index} className="p-4 bg-gradient-card rounded-lg border border-border/50 hover:shadow-custom-md transition-all">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-base">{internship.company}</h4>
                    <p className="text-sm text-muted-foreground">{internship.role}</p>
                  </div>
                  <Badge className="bg-gradient-primary text-white border-0">
                    {internship.match} match
                  </Badge>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{internship.location}</span>
                  <div className="flex items-center gap-1 ml-auto">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{internship.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {internship.skills.slice(0, 3).map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs bg-secondary-muted text-secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-success text-sm">{internship.salary}</span>
                  <Button size="sm" className="bg-gradient-primary hover:bg-primary-dark gap-1">
                    Apply Now
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendedInternships;