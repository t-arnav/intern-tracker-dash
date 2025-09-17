import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ProfileView from "@/components/ProfileView";
import ProfileEdit from "@/components/ProfileEdit";

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

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "Alex Johnson",
    role: "Software Engineering Student",
    email: "alex.johnson@university.edu",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    university: "Stanford University",
    gpa: "3.8",
    graduationYear: "2025",
    skills: ["React", "JavaScript", "Python", "Node.js", "Git", "AWS", "MongoDB", "TypeScript"],
    bio: "Passionate software engineering student with a strong foundation in full-stack development. I love building innovative solutions and learning new technologies. Currently seeking internship opportunities to apply my skills in real-world projects and contribute to meaningful software development.",
    github: "https://github.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson",
    portfolio: "https://alexjohnson.dev"
  });

  const handleSave = (updatedData: ProfileData) => {
    setProfileData(updatedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  // Check if edit parameter is in URL
  const urlParams = new URLSearchParams(window.location.search);
  const shouldEdit = urlParams.get('edit') === 'true';
  
  if (shouldEdit && !isEditing) {
    setIsEditing(true);
    // Remove the edit parameter from URL
    window.history.replaceState({}, '', window.location.pathname);
  }

  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Navbar />
      
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar />
        
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <div className="max-w-6xl mx-auto">
              {isEditing ? (
                <ProfileEdit
                  profileData={profileData}
                  onSave={handleSave}
                  onCancel={handleCancel}
                />
              ) : (
                <ProfileView
                  profileData={profileData}
                  onEdit={handleEdit}
                />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;