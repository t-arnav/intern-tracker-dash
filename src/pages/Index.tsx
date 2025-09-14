import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ProfileCard from "@/components/ProfileCard";
import ProgressChart from "@/components/ProgressChart";
import InternshipCards from "@/components/InternshipCards";

const Index = () => {
  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Navbar />
      
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar />
        
        <main className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            {/* Profile Card */}
            <ProfileCard />
            
            {/* Progress Charts */}
            <ProgressChart />
            
            {/* Internship Cards */}
            <InternshipCards />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
