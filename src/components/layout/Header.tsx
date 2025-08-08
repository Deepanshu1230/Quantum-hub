import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Simple demo auth state using localStorage to keep the UI functional without a backend.
const getAuthed = () => localStorage.getItem("qh_authed") === "1";

const Header = () => {
  const [isAuthed, setIsAuthed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsAuthed(getAuthed());
    const onStorage = (e: StorageEvent) => {
      if (e.key === "qh_authed") setIsAuthed(getAuthed());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const signOut = async () => {
    localStorage.setItem("qh_authed", "0");
    setIsAuthed(false);
    if (location.pathname.startsWith("/quantumhub")) navigate("/", { replace: true });
  };

  return (
    <header className="w-full border-b sticky top-0 z-30 bg-background/80 backdrop-blur">
      <nav className="container flex items-center justify-between h-16">
        <Link to="/" className="font-semibold text-lg gradient-text">
          QuantumHub
        </Link>
        <div className="flex items-center gap-3">
          <Link to="/quantumhub" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Our Solution
          </Link>
          {isAuthed ? (
            <Button variant="outline" size="sm" onClick={signOut} className="hover-lift">
              Sign out
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost" size="sm">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button variant="hero" size="sm">Sign up</Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
