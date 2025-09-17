import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Calendar, 
  Mail, 
  Phone, 
  GraduationCap, 
  Award,
  Edit,
  Github,
  Linkedin,
  Globe,
  FileText,
  Briefcase,
  Award as Certificate,
  Upload,
  Plus
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import SkillLogos from "./SkillLogos";

interface ProfileData {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  university: string;
  gpa: string;
  graduationYear: string;
  skills: string[];
  bio: string;
  github: string;
  linkedin: string;
  portfolio: string;
}

interface ProfileViewProps {
  profileData: ProfileData;
  onEdit: () => void;
}

const ProfileView = ({ profileData, onEdit }: ProfileViewProps) => {
  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="bg-gradient-card border-0 shadow-custom-lg">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-6">
              <Avatar className="h-24 w-24 ring-4 ring-primary/20">
                <AvatarImage src={profilePhoto} alt={profileData.name} />
                <AvatarFallback className="text-2xl font-semibold">
                  {profileData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="space-y-3">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">{profileData.name}</h1>
                  <p className="text-lg text-muted-foreground">{profileData.role}</p>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{profileData.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    <span>{profileData.email}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    <span>{profileData.phone}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-success-muted text-success">
                    Active Student
                  </Badge>
                  <Badge variant="outline" className="border-primary text-primary">
                    GPA {profileData.gpa}
                  </Badge>
                  <Badge variant="outline">
                    Class of {profileData.graduationYear}
                  </Badge>
                </div>
              </div>
            </div>
            
            <Button onClick={onEdit} className="bg-gradient-primary hover:bg-primary-dark gap-2">
              <Edit className="h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* About Section */}
        <Card className="lg:col-span-2 shadow-custom-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">{profileData.bio}</p>
            
            <div>
              <h4 className="font-semibold mb-3">Skills & Technologies</h4>
              <SkillLogos skills={profileData.skills} />
            </div>
          </CardContent>
        </Card>

        {/* Education & Links */}
        <div className="space-y-6">
          {/* Education Card */}
          <Card className="shadow-custom-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold">{profileData.university}</h4>
                <p className="text-sm text-muted-foreground">Bachelor of Science in Computer Science</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Expected {profileData.graduationYear}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Documents & Portfolio Card */}
          <Card className="shadow-custom-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Documents & Portfolio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {/* Resume */}
                <div className="p-3 bg-gradient-card rounded-lg border border-border/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="font-medium text-sm">Resume</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="gap-1">
                        <Upload className="h-3 w-3" />
                        Upload
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-gradient-primary hover:bg-primary-dark gap-1"
                        onClick={() => window.open('https://www.resume.com/builder', '_blank')}
                      >
                        <Plus className="h-3 w-3" />
                        Create
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Portfolio */}
                <div className="p-3 bg-gradient-card rounded-lg border border-border/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-secondary" />
                      <span className="font-medium text-sm">Portfolio</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="gap-1">
                        <Upload className="h-3 w-3" />
                        Upload
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-gradient-secondary hover:bg-secondary-dark gap-1"
                        onClick={() => window.open('https://www.portfoliobox.net/', '_blank')}
                      >
                        <Plus className="h-3 w-3" />
                        Create
                      </Button>
                    </div>
                  </div>
                </div>

                {/* License & Certifications */}
                <div className="p-3 bg-gradient-card rounded-lg border border-border/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Certificate className="h-4 w-4 text-success" />
                      <span className="font-medium text-sm">Licenses & Certifications</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="gap-1">
                        <Upload className="h-3 w-3" />
                        Upload
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-gradient-success hover:bg-success gap-1"
                        onClick={() => window.open('https://www.credly.com/', '_blank')}
                      >
                        <Plus className="h-3 w-3" />
                        Create
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Links Card */}
          <Card className="shadow-custom-md">
            <CardHeader>
              <CardTitle>Connect With Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <a 
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub Profile</span>
                </a>
                <a 
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn Profile</span>
                </a>
                <a 
                  href={profileData.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span>Portfolio Website</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;