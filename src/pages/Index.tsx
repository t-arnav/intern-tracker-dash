import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ProfileCard from "@/components/ProfileCard";
import RecommendedInternships from "@/components/RecommendedInternships";
import InternshipCards from "@/components/InternshipCards";

const Index = () => {
  return (
    <div className="min-h-screen" style={{background: 'var(--dashboard-bg)'}}>
      <Navbar />
      
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar />
        
        <main className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            {/* Profile Card - At Top */}
            <ProfileCard />
            
            {/* Recommended Internships */}
            <RecommendedInternships />
            
            {/* Previous Internships and Live Applications - Side by Side */}
            <InternshipCards />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
