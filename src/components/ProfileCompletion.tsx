import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

interface ProfileCompletionProps {
  completionPercentage: number;
}

const ProfileCompletion = ({ completionPercentage = 75 }: ProfileCompletionProps) => {
  return (
    <Link to="/profile?edit=true">
      <Card className="shadow-custom-md hover:shadow-custom-lg transition-all cursor-pointer border-l-4 border-l-primary">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary-muted rounded-lg">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-sm">Profile Completion</h3>
                <span className="text-sm font-medium text-primary">{completionPercentage}%</span>
              </div>
              <Progress value={completionPercentage} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">
                Complete your profile to get better recommendations
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProfileCompletion;