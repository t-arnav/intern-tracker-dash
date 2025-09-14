import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Users, 
  Clock,
  Star,
  Building2,
  Filter,
  ExternalLink,
  BookmarkPlus,
  TrendingUp
} from "lucide-react";

const allInternships = [
  {
    id: 1,
    company: "Google",
    logo: "🏢",
    role: "Software Engineer Intern",
    location: "Mountain View, CA",
    type: "Full-time",
    duration: "12 weeks",
    salary: "$8,000/month",
    applicants: 2500,
    posted: "2 days ago",
    deadline: "March 15, 2024",
    skills: ["React", "Python", "Machine Learning"],
    description: "Join Google's world-class engineering team and work on products used by billions of people.",
    status: "Open",
    match: 95
  },
  {
    id: 2,
    company: "Microsoft",
    logo: "🪟",
    role: "Product Manager Intern",
    location: "Seattle, WA",
    type: "Full-time",
    duration: "10 weeks",
    salary: "$7,500/month",
    applicants: 1800,
    posted: "1 week ago",
    deadline: "March 20, 2024",
    skills: ["Product Strategy", "Analytics", "UX Design"],
    description: "Drive product strategy and work with cross-functional teams to build innovative solutions.",
    status: "Open",
    match: 87
  },
  {
    id: 3,
    company: "Meta",
    logo: "📘",
    role: "Frontend Developer Intern",
    location: "Menlo Park, CA",
    type: "Full-time",
    duration: "12 weeks",
    salary: "$8,200/month",
    applicants: 3200,
    posted: "3 days ago",
    deadline: "March 10, 2024",
    skills: ["React", "JavaScript", "GraphQL"],
    description: "Build the next generation of social technology and connect people around the world.",
    status: "Urgent",
    match: 92
  },
  {
    id: 4,
    company: "Netflix",
    logo: "🎬",
    role: "Data Science Intern",
    location: "Los Gatos, CA",
    type: "Full-time",
    duration: "14 weeks",
    salary: "$7,800/month",
    applicants: 1200,
    posted: "5 days ago",
    deadline: "March 25, 2024",
    skills: ["Python", "SQL", "Machine Learning"],
    description: "Use data to drive content decisions and improve user experience for millions of subscribers.",
    status: "Open",
    match: 84
  },
  {
    id: 5,
    company: "Apple",
    logo: "🍎", 
    role: "iOS Developer Intern",
    location: "Cupertino, CA",
    type: "Full-time",
    duration: "12 weeks",
    salary: "$8,500/month",
    applicants: 2800,
    posted: "1 day ago",
    deadline: "March 12, 2024",
    skills: ["Swift", "iOS", "Xcode"],
    description: "Create amazing experiences for millions of iOS users worldwide.",
    status: "New",
    match: 89
  }
];

const appliedInternships = [
  {
    id: 1,
    company: "TechCorp",
    role: "Backend Developer Intern",
    appliedDate: "Feb 10, 2024",
    status: "Interview Scheduled",
    nextStep: "Technical Interview - Feb 20, 2024"
  },
  {
    id: 2,
    company: "StartupXYZ",
    role: "Full Stack Intern", 
    appliedDate: "Feb 5, 2024",
    status: "Under Review",
    nextStep: "Waiting for response"
  }
];

const Internships = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [activeTab, setActiveTab] = useState("browse");

  const filteredInternships = allInternships.filter(internship => {
    const matchesSearch = internship.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !locationFilter || internship.location.includes(locationFilter);
    const matchesType = !typeFilter || internship.type === typeFilter;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Navbar />
      
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar />
        
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Internship Opportunities</h1>
                <Button className="bg-gradient-primary hover:bg-primary-dark gap-2">
                  <BookmarkPlus className="h-4 w-4" />
                  Saved Applications
                </Button>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="browse">Browse Internships</TabsTrigger>
                  <TabsTrigger value="applied">My Applications</TabsTrigger>
                  <TabsTrigger value="recommended">Recommended</TabsTrigger>
                </TabsList>

                <TabsContent value="browse" className="space-y-6">
                  {/* Search and Filters */}
                  <Card className="shadow-custom-md">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            placeholder="Search internships or companies..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                          />
                        </div>
                        <Select value={locationFilter} onValueChange={setLocationFilter}>
                          <SelectTrigger className="w-full md:w-48">
                            <SelectValue placeholder="Location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">All Locations</SelectItem>
                            <SelectItem value="CA">California</SelectItem>
                            <SelectItem value="WA">Washington</SelectItem>
                            <SelectItem value="NY">New York</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select value={typeFilter} onValueChange={setTypeFilter}>
                          <SelectTrigger className="w-full md:w-48">
                            <SelectValue placeholder="Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">All Types</SelectItem>
                            <SelectItem value="Full-time">Full-time</SelectItem>
                            <SelectItem value="Part-time">Part-time</SelectItem>
                            <SelectItem value="Remote">Remote</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Internship Listings */}
                  <div className="grid gap-6">
                    {filteredInternships.map((internship) => (
                      <Card key={internship.id} className="shadow-custom-md hover:shadow-custom-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                              <div className="text-4xl">{internship.logo}</div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <h3 className="text-xl font-semibold">{internship.role}</h3>
                                  <Badge 
                                    variant={internship.status === 'Urgent' ? 'destructive' : 
                                            internship.status === 'New' ? 'secondary' : 'outline'}
                                    className={internship.status === 'New' ? 'bg-success-muted text-success' : ''}
                                  >
                                    {internship.status}
                                  </Badge>
                                  <Badge variant="outline" className="border-primary text-primary">
                                    {internship.match}% match
                                  </Badge>
                                </div>
                                <p className="text-lg text-muted-foreground">{internship.company}</p>
                                <p className="text-sm text-muted-foreground">{internship.description}</p>
                                
                                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    <span>{internship.location}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <DollarSign className="h-4 w-4" />
                                    <span>{internship.salary}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    <span>{internship.duration}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Users className="h-4 w-4" />
                                    <span>{internship.applicants} applicants</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>Deadline: {internship.deadline}</span>
                                  </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-3">
                                  {internship.skills.map((skill, index) => (
                                    <Badge key={index} variant="secondary" className="bg-primary-muted text-primary">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="gap-2">
                                <Star className="h-4 w-4" />
                                Save
                              </Button>
                              <Button className="bg-gradient-primary hover:bg-primary-dark gap-2">
                                Apply Now
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="applied" className="space-y-6">
                  <div className="grid gap-6">
                    {appliedInternships.map((application) => (
                      <Card key={application.id} className="shadow-custom-md">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <h3 className="text-lg font-semibold">{application.role}</h3>
                                <Badge 
                                  variant={application.status === 'Interview Scheduled' ? 'secondary' : 'outline'}
                                  className={application.status === 'Interview Scheduled' ? 'bg-success-muted text-success' : ''}
                                >
                                  {application.status}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground">{application.company}</p>
                              <p className="text-sm text-muted-foreground">Applied: {application.appliedDate}</p>
                              <p className="text-sm font-medium">Next Step: {application.nextStep}</p>
                            </div>
                            <Button variant="outline">View Details</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="recommended" className="space-y-6">
                  <Card className="shadow-custom-md">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Recommended Based on Your Profile
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        These internships match your skills, interests, and career goals. 
                        We've analyzed your profile to find the best opportunities for you.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <div className="grid gap-6">
                    {allInternships
                      .filter(internship => internship.match >= 90)
                      .map((internship) => (
                        <Card key={internship.id} className="shadow-custom-md border-primary/20">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between">
                              <div className="flex gap-4">
                                <div className="text-4xl">{internship.logo}</div>
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2">
                                    <h3 className="text-xl font-semibold">{internship.role}</h3>
                                    <Badge className="bg-gradient-primary text-primary-foreground">
                                      {internship.match}% Perfect Match
                                    </Badge>
                                  </div>
                                  <p className="text-lg text-muted-foreground">{internship.company}</p>
                                  <p className="text-sm text-muted-foreground">{internship.description}</p>
                                </div>
                              </div>
                              
                              <Button className="bg-gradient-primary hover:bg-primary-dark gap-2">
                                Apply Now
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Internships;