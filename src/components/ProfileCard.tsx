import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Calendar, ArrowRight, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

const ProfileCard = () => {
  const navigate = useNavigate();
  const completionPercentage = 75;

  const handleViewProfile = () => {
    navigate("/profile");
  };

  const handleEditProfile = () => {
    navigate("/profile?edit=true");
  };

  return (
    <Card className="bg-gradient-card border-0 shadow-custom-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 ring-4 ring-primary/20">
              <AvatarImage src={profilePhoto} alt="Alex Johnson" />
              <AvatarFallback className="text-lg font-semibold">AJ</AvatarFallback>
            </Avatar>
            
            <div className="space-y-2">
              <div>
                <h3 className="text-xl font-bold text-foreground">Alex Johnson</h3>
                <p className="text-muted-foreground">Software Engineering Student</p>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Available Now</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-success-muted text-success">
                  Active Intern
                </Badge>
                <Badge variant="outline" className="border-primary text-primary">
                  3.8 GPA
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <Button 
              onClick={handleViewProfile}
              className="bg-gradient-primary hover:bg-primary-dark transition-all gap-2"
            >
              View Profile
              <ArrowRight className="h-4 w-4" />
            </Button>
            
            {/* Profile Completion Status */}
            <div 
              onClick={handleEditProfile}
              className="cursor-pointer p-3 bg-gradient-card rounded-lg border border-primary/20 hover:shadow-custom-md transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-primary-muted rounded-md">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Profile Complete</span>
                    <span className="text-sm font-semibold text-primary">{completionPercentage}%</span>
                  </div>
                  <Progress value={completionPercentage} className="h-1.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;