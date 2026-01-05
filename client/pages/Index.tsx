import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Package,
  Truck,
  BarChart3,
  Award,
  Zap,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Globe,
  Layers,
} from "lucide-react";

export default function Index() {
  const features = [
    {
      title: "Real-time Order Tracking",
      description: "Monitor orders from confirmation to delivery in real-time",
      icon: Package,
    },
    {
      title: "Inventory Management",
      description: "Multi-warehouse inventory with automated reordering",
      icon: Layers,
    },
    {
      title: "GPS Logistics",
      description: "Track shipments with live GPS and route optimization",
      icon: Truck,
    },
    {
      title: "Advanced Analytics",
      description: "Predictive insights and comprehensive dashboards",
      icon: BarChart3,
    },
    {
      title: "Gamification",
      description: "Engage wholesalers and teams with rewards and leaderboards",
      icon: Award,
    },
    {
      title: "Marketing Automation",
      description: "Email campaigns, SMS alerts, and customer engagement",
      icon: Zap,
    },
  ];

  const benefits = [
    {
      title: "30% Cost Reduction",
      description: "Through operational efficiency and automation",
    },
    {
      title: "97%+ On-time Delivery",
      description: "Powered by intelligent route optimization",
    },
    {
      title: "Real-time Visibility",
      description: "Full supply chain transparency 24/7",
    },
    {
      title: "Increased Engagement",
      description: "Gamification drives higher wholesaler adoption",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                W
              </div>
              <span className="font-bold text-foreground">AquaFlow SCM</span>
            </div>
            <Link to="/dashboard">
              <Button>Launch Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent">
                <CheckCircle className="mr-2 h-4 w-4" />
                Enterprise-Grade Platform
              </div>

              <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Intelligent Supply Chain Management for Water Manufacturers
              </h1>

              <p className="text-lg text-muted-foreground">
                Streamline operations, increase visibility, and drive growth
                with real-time order tracking, inventory management, logistics
                optimization, and gamification.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/dashboard">
                  <Button size="lg">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="font-bold text-foreground">2,847</p>
                  <p className="text-sm text-muted-foreground">Active Orders</p>
                </div>
                <div>
                  <p className="font-bold text-foreground">150+</p>
                  <p className="text-sm text-muted-foreground">Wholesalers</p>
                </div>
                <div>
                  <p className="font-bold text-foreground">1.2M</p>
                  <p className="text-sm text-muted-foreground">
                    Units in Stock
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"></div>
              <div className="relative rounded-2xl border border-border bg-card p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">
                      Real-time Dashboard
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-blue-100 p-4">
                      <p className="text-xs text-muted-foreground">
                        Total Orders
                      </p>
                      <p className="mt-1 text-2xl font-bold text-foreground">
                        2,847
                      </p>
                    </div>
                    <div className="rounded-lg bg-green-100 p-4">
                      <p className="text-xs text-muted-foreground">
                        On-Time Rate
                      </p>
                      <p className="mt-1 text-2xl font-bold text-foreground">
                        97.2%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Comprehensive Features
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to manage your water manufacturing supply
              chain efficiently
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-lg border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <Icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-t border-border bg-card/50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Proven Results
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join hundreds of water manufacturers improving their supply chain
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-lg border border-border bg-background p-6"
              >
                <CheckCircle className="h-6 w-6 text-success" />
                <h3 className="mt-4 font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start managing your water manufacturing operations with AquaFlow SCM
            today.
          </p>
          <Link to="/dashboard" className="mt-8 inline-block">
            <Button size="lg">
              Launch Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-sm text-muted-foreground">
          <p>© 2025 AquaFlow SCM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
