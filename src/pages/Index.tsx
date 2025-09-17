import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ProfileCard from "@/components/ProfileCard";
import ProfileCompletion from "@/components/ProfileCompletion";
import RecommendedInternships from "@/components/RecommendedInternships";
import InternshipCards from "@/components/InternshipCards";

const Index = () => {
  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Navbar />
      
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar />
        
        <main className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Profile Card */}
              <div className="lg:col-span-3">
                <ProfileCard />
              </div>
              
              {/* Profile Completion Status */}
              <div className="lg:col-span-1">
                <ProfileCompletion completionPercentage={75} />
              </div>
            </div>
            
            {/* Recommended Internships - Top Priority */}
            <RecommendedInternships />
            
            {/* Other Internship Cards */}
            <InternshipCards />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
