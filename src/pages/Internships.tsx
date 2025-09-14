import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Internships = () => {
  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Navbar />
      
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar />
        
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold mb-6">Internships</h1>
              <p className="text-muted-foreground">Internships page content coming soon...</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Internships;