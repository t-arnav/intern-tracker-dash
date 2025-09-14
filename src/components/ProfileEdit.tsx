import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Save, X, Upload } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useToast } from "@/hooks/use-toast";

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

interface ProfileEditProps {
  profileData: ProfileData;
  onSave: (data: ProfileData) => void;
  onCancel: () => void;
}

const ProfileEdit = ({ profileData, onSave, onCancel }: ProfileEditProps) => {
  const [editData, setEditData] = useState<ProfileData>(profileData);
  const [skillsText, setSkillsText] = useState(profileData.skills.join(', '));
  const { toast } = useToast();

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    const skills = skillsText.split(',').map(skill => skill.trim()).filter(skill => skill);
    const updatedData = { ...editData, skills };
    onSave(updatedData);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-card border-0 shadow-custom-lg">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Edit Profile</span>
            <div className="flex gap-2">
              <Button onClick={handleSave} className="bg-gradient-primary hover:bg-primary-dark gap-2">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
              <Button variant="outline" onClick={onCancel} className="gap-2">
                <X className="h-4 w-4" />
                Cancel
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Photo & Basic Info */}
        <Card className="shadow-custom-md">
          <CardHeader>
            <CardTitle>Profile Photo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-32 w-32 ring-4 ring-primary/20">
                <AvatarImage src={profilePhoto} alt="Profile" />
                <AvatarFallback className="text-2xl">
                  {editData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm" className="gap-2">
                <Upload className="h-4 w-4" />
                Change Photo
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="lg:col-span-2 shadow-custom-md">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={editData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role/Title</Label>
                <Input
                  id="role"
                  value={editData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={editData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={editData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={editData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="university">University</Label>
                <Input
                  id="university"
                  value={editData.university}
                  onChange={(e) => handleInputChange('university', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gpa">GPA</Label>
                <Input
                  id="gpa"
                  value={editData.gpa}
                  onChange={(e) => handleInputChange('gpa', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="graduationYear">Graduation Year</Label>
                <Input
                  id="graduationYear"
                  value={editData.graduationYear}
                  onChange={(e) => handleInputChange('graduationYear', e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* About & Skills */}
        <Card className="shadow-custom-md">
          <CardHeader>
            <CardTitle>About & Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                rows={4}
                value={editData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                placeholder="Tell us about yourself..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="skills">Skills (comma-separated)</Label>
              <Textarea
                id="skills"
                rows={3}
                value={skillsText}
                onChange={(e) => setSkillsText(e.target.value)}
                placeholder="React, JavaScript, Python, Git..."
              />
            </div>
          </CardContent>
        </Card>

        {/* Links & Social */}
        <Card className="shadow-custom-md">
          <CardHeader>
            <CardTitle>Links & Social Media</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="github">GitHub URL</Label>
              <Input
                id="github"
                value={editData.github}
                onChange={(e) => handleInputChange('github', e.target.value)}
                placeholder="https://github.com/username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn URL</Label>
              <Input
                id="linkedin"
                value={editData.linkedin}
                onChange={(e) => handleInputChange('linkedin', e.target.value)}
                placeholder="https://linkedin.com/in/username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="portfolio">Portfolio Website</Label>
              <Input
                id="portfolio"
                value={editData.portfolio}
                onChange={(e) => handleInputChange('portfolio', e.target.value)}
                placeholder="https://yourportfolio.com"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileEdit;