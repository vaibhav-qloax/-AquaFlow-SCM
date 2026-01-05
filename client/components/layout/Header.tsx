import { Link } from "react-router-dom";
import { Menu, X, Bell, Settings, LogOut } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              W
            </div>
            <span className="hidden font-bold text-foreground sm:inline">
              AquaFlow SCM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              to="/dashboard"
              className="text-sm font-medium text-foreground hover:text-primary"
            >
              Dashboard
            </Link>
            <Link
              to="/orders"
              className="text-sm font-medium text-foreground hover:text-primary"
            >
              Orders
            </Link>
            <Link
              to="/inventory"
              className="text-sm font-medium text-foreground hover:text-primary"
            >
              Inventory
            </Link>
            <Link
              to="/logistics"
              className="text-sm font-medium text-foreground hover:text-primary"
            >
              Logistics
            </Link>
            <Link
              to="/analytics"
              className="text-sm font-medium text-foreground hover:text-primary"
            >
              Analytics
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-accent"></span>
            </Button>

            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-2">
              <Link
                to="/dashboard"
                className="rounded px-2 py-2 text-sm font-medium hover:bg-secondary/20"
              >
                Dashboard
              </Link>
              <Link
                to="/orders"
                className="rounded px-2 py-2 text-sm font-medium hover:bg-secondary/20"
              >
                Orders
              </Link>
              <Link
                to="/inventory"
                className="rounded px-2 py-2 text-sm font-medium hover:bg-secondary/20"
              >
                Inventory
              </Link>
              <Link
                to="/logistics"
                className="rounded px-2 py-2 text-sm font-medium hover:bg-secondary/20"
              >
                Logistics
              </Link>
              <Link
                to="/analytics"
                className="rounded px-2 py-2 text-sm font-medium hover:bg-secondary/20"
              >
                Analytics
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
