import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

interface PasswordProtectionProps {
  projectId: string;
  projectTitle: string;
  children: React.ReactNode;
}

// Password for protected projects
const PROTECTED_PROJECTS: Record<string, string> = {
  "purchase-order-group": "6363",
  "fulfillment-operation-tooling": "6363",
  "security-tooling": "6363",
};

const PasswordProtection = ({ projectId, projectTitle, children }: PasswordProtectionProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if user is already authenticated for this project
    const authKey = `project_auth_${projectId}`;
    const storedAuth = sessionStorage.getItem(authKey);
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, [projectId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const correctPassword = PROTECTED_PROJECTS[projectId];
    const trimmedPassword = password.trim();
    
    // Debug: log the values (remove in production)
    console.log("Project ID:", projectId);
    console.log("Entered password:", trimmedPassword);
    console.log("Expected password:", correctPassword);
    console.log("Match:", trimmedPassword === correctPassword);
    
    if (!correctPassword) {
      setError(`This project is not configured for password protection. Project ID: ${projectId}`);
      return;
    }
    
    if (trimmedPassword === correctPassword) {
      // Store authentication in sessionStorage
      const authKey = `project_auth_${projectId}`;
      sessionStorage.setItem(authKey, "true");
      setIsAuthenticated(true);
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  // If authenticated, show the protected content
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Show password prompt
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-lg"
      >
        <h1 className="font-serif text-3xl font-bold mb-2">{projectTitle}</h1>
        <p className="font-sans text-sm text-muted-foreground mb-6">
          This project is password protected. Please enter the password to continue.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block font-sans text-sm font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
              placeholder="Enter password"
              autoFocus
            />
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 font-sans text-sm text-red-500"
              >
                {error}
              </motion.p>
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleBack}
              className="flex-1 px-4 py-2 font-sans text-sm border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 font-sans text-sm bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
            >
              Access Project
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default PasswordProtection;
export { PROTECTED_PROJECTS };
