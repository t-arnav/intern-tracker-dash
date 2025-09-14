import { Home, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profilePhoto from "@/assets/profile-photo.jpg";

const Navbar = () => {
  return (
    <nav className="h-16 bg-card border-b border-border px-6 flex items-center justify-between shadow-custom-sm">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="gap-2">
          <Home className="h-4 w-4" />
          Home
        </Button>
      </div>
      
      <div className="flex items-center gap-4">
        <Avatar className="h-8 w-8 ring-2 ring-primary/20 hover:ring-primary/40 transition-all cursor-pointer">
          <AvatarImage src={profilePhoto} alt="Profile" />
          <AvatarFallback>
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Navbar;