import { Link, useNavigate } from "react-router-dom";

export default function Footer() {

  const navigate = useNavigate();

  const handleTerms = () => {
    navigate("/terms");
  };

  const handlePrivacyPolicy = () => {
    navigate("/privacy");
  };
  return (
    <footer className="border-t bg-background py-6 md:py-8">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">DoGigz</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DoGigz. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About Us
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
