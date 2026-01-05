import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Map } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logistics() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Logistics</h1>
            <p className="mt-2 text-muted-foreground">
              Track shipments and optimize delivery routes
            </p>
          </div>
          <Link to="/logistics/track">
            <Button>
              <Map className="mr-2 h-4 w-4" />
              Track Shipments
            </Button>
          </Link>
        </div>

        <Card className="mt-8 p-12 text-center">
          <p className="text-muted-foreground">
            Logistics page coming soon with real-time GPS tracking, route
            optimization, and driver management.
          </p>
        </Card>
      </main>
    </div>
  );
}
