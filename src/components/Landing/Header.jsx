import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";

export function Header() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/signin");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleAboutUs = () => {
    navigate("/about");
  };
  const handleContactUs = () => {
    navigate("/contact");
  };



  return (
    <header className="w-full border-b bg-background/20 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">DoGigz</span>
        </Link>
        {/* <nav className="hidden gap-6 md:flex">
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            About Us
          </Link>
          <Link to="/terms" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Terms & Conditions
          </Link>
        </nav> */}
        <div className="flex items-center gap-2">
          <Button 
          variant="outline" 
          size="sm" 
          className="rounded-full"
          onClick={handleLogin}
          >
            Login
          </Button>
          <Button 
          size="sm" 
          className="rounded-full bg-basic text-black hover:bg-basic-Default/80"
          onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
